import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { GoogleGenAI, Type } from "@google/genai";

interface AutomationStrategy {
    title: string;
    description: string;
    impact: string;
    tools: string[];
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    // Only allow POST requests
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method not allowed" }),
        };
    }

    // Parse request body
    let industry: string;
    try {
        const body = JSON.parse(event.body || "{}");
        industry = body.industry;
        if (!industry || typeof industry !== "string") {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing or invalid 'industry' field" }),
            };
        }
    } catch {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Invalid JSON body" }),
        };
    }

    // Check for API key
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
        console.error("GOOGLE_API_KEY environment variable is not set");
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Server configuration error" }),
        };
    }

    // Initialize Gemini AI
    const ai = new GoogleGenAI({ apiKey });
    const modelId = "gemini-2.5-flash";

    const prompt = `
    Agis comme un consultant expert en automatisation IA senior.
    Un client travaille dans l'industrie suivante : "${industry}".
    Propose 3 cas d'usage d'automatisation concrets, modernes et à fort impact (ROI élevé) pour cette industrie spécifique.
    
    Sois concis mais percutant. Utilise un ton professionnel et encourageant.
  `;

    try {
        const response = await ai.models.generateContent({
            model: modelId,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            title: { type: Type.STRING, description: "Nom court de l'automatisation (ex: Support Client IA)" },
                            description: { type: Type.STRING, description: "Explication de 2 phrases sur le fonctionnement." },
                            impact: { type: Type.STRING, description: "Estimation du gain (ex: -40% de temps de réponse, +20% de leads)" },
                            tools: {
                                type: Type.ARRAY,
                                items: { type: Type.STRING },
                                description: "Liste de 2-3 outils suggérés (ex: Zapier, Gemini, Make, Airtable)"
                            }
                        },
                        required: ["title", "description", "impact", "tools"],
                    }
                }
            }
        });

        if (response.text) {
            const strategies: AutomationStrategy[] = JSON.parse(response.text);
            return {
                statusCode: 200,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(strategies),
            };
        }

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([]),
        };
    } catch (error) {
        console.error("Error generating strategy:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to generate strategy" }),
        };
    }
};

export { handler };
