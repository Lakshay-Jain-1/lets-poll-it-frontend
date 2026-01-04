import axios from "axios";
async function AI(data, json = false) {
  try {
    const response = await axios.post(
      import.meta.env.VITE_AI,
      { data, json },
      { withCredentials: true }
    );
    if(response.data["error"]){throw Error("")}
    return response.data;

  } catch (err) {
    if (json) {
      return {
        question: "Unable to process your request as API key has been exhausted",
        mcq: ["", "", "", ""]
      };
    }

    return "API error. Please try again later.";
  }
}
export default AI;
