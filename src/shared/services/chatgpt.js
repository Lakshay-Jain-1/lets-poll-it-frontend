import { GoogleGenerativeAI } from "@google/generative-ai";

async function AI(data, json=false) {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

  let jsonkey =json?{generationConfig: { responseMimeType: "application/json" }}:""; 
  
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",...jsonkey });

  const prompt = `${data}`;

  const result = await model.generateContent([prompt]);
  const response = result.response;
  const text = response.text();
  console.log(text);
  return text;
}

export default AI;
