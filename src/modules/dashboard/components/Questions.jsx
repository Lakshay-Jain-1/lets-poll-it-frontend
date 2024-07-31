import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import { getALLQuestion } from "../../../shared/services/api-client";
import "../../../stylesheets/Question.css"

function Questions() {
  let [questions, setQuestions] = useState([]);

  const display_all_questions = async () => {
    const data = await getALLQuestion();
    setQuestions(data);
    return data;
  };
  useEffect(() => {
    display_all_questions();
  }, []);

  // const style = {
  //   display: "grid",
  //   gridTemplateColumns: "auto auto auto",
  //   rowGap: "40px",
  //   marginLeft: "8vw",
  //   marginTop: "8vh",
  // };
  return (
    <div className="second-page">
      {questions.map((ele, index) => {
        const { question } = ele;
        return <QuestionCard key={index} question={question} />;
      })}
    </div>
  );
}

export default Questions;
