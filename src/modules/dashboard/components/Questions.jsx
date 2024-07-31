import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import { getALLQuestion } from "../../../shared/services/api-client";
import "../../../stylesheets/Question.css";

function Questions() {
  let [questions, setQuestions] = useState([]);
  let [loading, setLoading] = useState(true);
  const display_all_questions = async () => {
    const data = await getALLQuestion();
    setTimeout(()=>{
      setLoading(false);
    },2000)
  
    setQuestions(data);
    return data;
  };
  useEffect(() => {
    display_all_questions();
  }, []);

  return (
    <div className="second-page">
     
      {loading ? <h2 style={{ display: loading ? "block" : "none", fontFamily: "Poppins", color: "white", textAlign: "center",position:"absolute",top:"35vh",left:"40vw",fontSize:"96px" }}>Loading..........</h2> : questions.map((ele, index) => <QuestionCard key={index} question={ele.question} />)}

    </div>
  );
}

export default Questions;