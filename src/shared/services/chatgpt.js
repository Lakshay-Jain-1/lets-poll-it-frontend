import { GoogleGenerativeAI } from "@google/generative-ai";

async function AI(data) {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);


  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `${data} make it very short max to max 4 words`;

  const result = await model.generateContent([prompt]);
  const response = result.response;
  const text = response.text();
  console.log(text);
  return text;
}

export default AI;
