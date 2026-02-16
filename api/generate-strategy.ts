import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

interface AutomationStrategy {
    title: string;
    description: string;
    impact: string;
    tools: string[];
}

// --- Rate Limiting (in-memory, per cold start) ---
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 5;

const ipRequests = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = ipRequests.get(ip);

    if (!entry || now > entry.resetAt) {
        ipRequests.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }

    entry.count++;
    return entry.count > RATE_LIMIT_MAX;
}

const MAX_INPUT_LENGTH = 200;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    // Rate limit by IP
    const clientIp = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim()
        || req.headers["x-real-ip"] as string
        || "unknown";

    if (isRateLimited(clientIp)) {
        return res.status(429).json({ error: "Trop de requêtes. Réessayez dans une minute." });
    }

    // Parse and validate
    const { industry: rawIndustry } = req.body || {};
    if (!rawIndustry || typeof rawIndustry !== "string") {
        return res.status(400).json({ error: "Missing or invalid 'industry' field" });
    }

    const industry = rawIndustry.trim();
    if (industry.length > MAX_INPUT_LENGTH) {
        return res.status(400).json({ error: `Le secteur ne doit pas dépasser ${MAX_INPUT_LENGTH} caractères.` });
    }
    if (industry.length < 2) {
        return res.status(400).json({ error: "Le secteur doit contenir au moins 2 caractères." });
    }

    // Check API key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        console.error("OPENAI_API_KEY environment variable is not set");
        return res.status(500).json({ error: "Server configuration error" });
    }

    const openai = new OpenAI({ apiKey });

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            response_format: { type: "json_object" },
            messages: [
                {
                    role: "system",
                    content: `Tu es un consultant expert en automatisation IA senior. Tu réponds UNIQUEMENT en JSON valide avec cette structure exacte :
{ "strategies": [{ "title": "string", "description": "string", "impact": "string", "tools": ["string"] }] }
Chaque strategy a: title (nom court), description (2 phrases), impact (estimation chiffrée), tools (2-3 outils).`
                },
                {
                    role: "user",
                    content: `Propose 3 cas d'usage d'automatisation concrets, modernes et à fort impact (ROI élevé) pour l'industrie : "${industry}". Sois concis mais percutant. Ton professionnel et encourageant.`
                }
            ],
            temperature: 0.7,
            max_tokens: 1000,
        });

        const content = completion.choices[0]?.message?.content;
        if (!content) {
            return res.status(200).json([]);
        }

        const parsed = JSON.parse(content);
        const strategies: AutomationStrategy[] = parsed.strategies || parsed;

        return res.status(200).json(strategies);
    } catch (error) {
        console.error("Error generating strategy:", error);
        return res.status(500).json({ error: "Failed to generate strategy" });
    }
}
