import axios from "axios";


const getALLQuestion = async () => {
  const response = await axios.get(import.meta.env.VITE_ALLQUESTION);
  console.log(response.data)
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

const pollAQuestion = async (question,option)=>{
  const response = await axios.post(`${import.meta.env.VITE_UPDATEAPOLL}`, {question,option});
  return response.data;
}

const getAQuestionfromitsname =async (question) => {
  const response = await axios.post(`${import.meta.env.VITE_GETAQUESTIONFROMITSNAME}`, {question});
  return response.data;
};


export {getALLQuestion,getAQuestion ,postAQuestion ,pollAQuestion ,getAQuestionfromitsname}
