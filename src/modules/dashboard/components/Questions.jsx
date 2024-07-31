import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import { getALLQuestion } from "../../../shared/services/api-client";
import "../../../stylesheets/Question.css"

function Questions() {
  let [questions, setQuestions] = useState([]);
  let [loading,setLoading] =useState(true)
  const display_all_questions = async () => {
    const data = await getALLQuestion();
    setLoading(false)
    setQuestions(data);
    return data;
  };
  useEffect(() => {
    display_all_questions();
  }, []);


  return (
    <div className="second-page">
      <h1 style={{display:loading?"block":"none"}}>Loading</h1>
      {
      questions.map((ele, index) => {
        const { question } = ele;
        return <QuestionCard key={index} question={question} />;
      })
      }

    </div>
  );
}

export default Questions;
