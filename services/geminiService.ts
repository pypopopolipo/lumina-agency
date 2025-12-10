import { AutomationStrategy } from "../types";

export const generateStrategy = async (industry: string): Promise<AutomationStrategy[]> => {
  const response = await fetch("/.netlify/functions/generate-strategy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ industry }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `HTTP error: ${response.status}`);
  }

  const data: AutomationStrategy[] = await response.json();
  return data;
};