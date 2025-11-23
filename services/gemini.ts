import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO, SERVICES } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the Virtual Patient Assistant for ${BUSINESS_INFO.name}, located at ${BUSINESS_INFO.address}.
Your goal is to be helpful, friendly, and informative to potential patients.

Key Business Details:
- Phone: ${BUSINESS_INFO.phone}
- Rating: ${BUSINESS_INFO.rating} stars (${BUSINESS_INFO.reviewCount} reviews)
- Services: ${SERVICES.map(s => s.title).join(', ')}.

Guidelines:
1. Answer questions about dental procedures generally (e.g., "Does a root canal hurt?", "What is Invisalign?").
2. Do NOT provide specific medical diagnosis. Always recommend booking an appointment for a personal assessment.
3. If a user asks to book, direct them to the "Book Appointment" button or ask them to call ${BUSINESS_INFO.phone}.
4. Be concise and professional.
5. If asked about insurance, say we accept most major PPO plans and offer financing options.
`;

export const chatWithGemini = async (message: string, history: {role: string, parts: {text: string}[]}[] = []) => {
  if (!apiKey) {
    return "I'm currently offline (API Key missing). Please call our office directly.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I'm having trouble connecting right now. Please call our office for immediate assistance.";
  }
};