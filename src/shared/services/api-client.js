import axios from "axios";


const getALLQuestion = async () => {
  const response = await axios.get(import.meta.env.VITE_ALLQUESTION);
  return response.data;
};

const getAQuestion = async (question,password) => {
  const response = await axios.post(`${import.meta.env.VITE_GETAQUESTION}`, {question,password});
  return response.data;
};

const postAQuestion = async (question,options,password)=>{
  const response = await axios.post(`${import.meta.env.VITE_MAKEAQUESTION}`, {question,options ,password});
  return response.data;
}


export {getALLQuestion,getAQuestion ,postAQuestion}
