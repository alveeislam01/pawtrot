import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if API key exists to prevent crashes in environments without it
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const createChatSession = (): Chat | null => {
  if (!ai) return null;
  
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are "Dr. Pawtrot", a friendly, playful, and knowledgeable cat nutrition expert for the Pawtrot brand. 
      Your tone is enthusiastic, caring, and slightly punny (cat puns).
      You are here to help customers choose the right Pawtrot cat food flavors (Chicken, Salmon, Tuna, Beef).
      
      Key Product Info:
      - Real meat is the #1 ingredient.
      - Benefits: Healthy Digestion, Shiny Coat, Strong Muscles, Immune Support.
      - "Made for Picky Kitties!"
      - No by-products.
      
      If a user asks about medical issues, give general nutritional advice but always recommend seeing a real vet for serious concerns.
      Keep responses concise (under 100 words) and helpful.`,
    },
  });
};

export const sendMessage = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Purr-don me, I couldn't quite catch that. Try asking again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! My cat-brain is having a little nap. Please try again later.";
  }
};
