import axios from "axios";


const getALLQuestion = async () => {
  try{
  const response = await axios.get(import.meta.env.VITE_ALLQUESTION ,{withCredentials:true});
  return response.data;}
  catch(err){
    console.log(err)
  }
};

const getAQuestion = async (question,password) => {
  try{
  const response = await axios.post(`${import.meta.env.VITE_GETAQUESTION}`, {question,password},{withCredentials:true});
  return response.data;
  }
  catch(err){
    console.log(err)
  }
};

const postAQuestion = async (question,options,password)=>{
  try{
  const response = await axios.post(`${import.meta.env.VITE_MAKEAQUESTION}`, {question,options ,password},{withCredentials:true});
  return response.data;
  }
  catch(err){
    console.log(err)
  }
}

const pollAQuestion = async (question,option)=>{
  const response = await axios.post(`${import.meta.env.VITE_UPDATEAPOLL}`, {question,option},{withCredentials:true});
  return response.data;
}

const getAQuestionfromitsname =async (question) => {
  const response = await axios.post(`${import.meta.env.VITE_GETAQUESTIONFROMITSNAME}`, {question},{withCredentials:true});
  return response.data;
};


export {getALLQuestion,getAQuestion ,postAQuestion ,pollAQuestion ,getAQuestionfromitsname}
