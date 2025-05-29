import { GoogleGenerativeAI } from "@google/generative-ai";

async function AI(data, json = false) {
  try {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
    let jsonkey = json ? { generationConfig: { responseMimeType: "application/json" } } : "";
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", ...jsonkey });
    const prompt = `${data}`;
    const result = await model.generateContent([prompt]);
    const response = result.response;
    const text = response.text();
    return text;
  } catch (err) {
    if(json){
      return JSON.stringify({"question":"Unable to process your request as api key have been exhaused","mcq":["","","",""]})
    }
    return "Api key have been exhausted. Sorry for the inconvienance!!"
  }

}

export default AI;
