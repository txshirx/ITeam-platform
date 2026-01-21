import { GoogleGenAI } from "@google/genai";

export class service {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateQuestion(topic: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate a challenging IT interview question about ${topic}. Provide only the question text and a short hint.`,
      });
      return response.text || "Failed to generate question. Please try again.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Something went wrong with the AI service.";
    }
  }
}
