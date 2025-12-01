// Poll.jsx
import { useState, useEffect } from "react";
import { pollAQuestion } from "../../../shared/services/api-client";
import "../../../stylesheets/Options.css";
import Texttospeech from "../../../shared/services/texttospeech";
import handleDownloadPoll from "../../../shared/services/downloadPoll";
import ResultsModal from "./ResultsModal";
import {navBtn,navbar} from "../../../stylesheets/poll.js";
export default function Poll() {
  const [question, setQuestion] = useState();
  const [options, setOptions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setQuestion(localStorage.getItem("question"));
    setOptions([
      localStorage.getItem("option1"),
      localStorage.getItem("option2"),
      localStorage.getItem("option3"),
      localStorage.getItem("option4"),
    ]);
  }, []);

  function removePoll() {
    localStorage.removeItem("poll");
    window.history.back();
  }

  async function pollit(question, option) {
    await pollAQuestion(question, option);
  }

  function handlePoll() {
    document.querySelectorAll(".pollbutton").forEach((ele) => {
      if (ele.getAttribute("clicked")) {
        ele.removeAttribute("clicked");
        pollit(question, ele.innerText.trim());
      }
    });
    localStorage.setItem("poll", true);
    Texttospeech("Submitted");
  }


  return (
    <>
      <div style={navbar}>
        <span
          style={navBtn}
          onClick={removePoll}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#4ccd9f")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "")}
        >
          Go Back
        </span>

        <span
          style={navBtn}
          onClick={() => setModalOpen(true)}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#4ccd9f")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "")}
        >
          View Results
        </span>

        <span
          style={navBtn}
          onClick={() =>
            handleDownloadPoll(question, options[0], options[1], options[2], options[3])
          }
          onMouseOver={(e) => (e.target.style.backgroundColor = "#4ccd9f")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "")}
        >
          Download Poll
        </span>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ width: "500px", margin: "0 auto", fontFamily: "Poppins" }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "28px",
          }}
        >
          {question}
        </h1>

        <div className="options-grid">
          {options.map((opt, index) => (
            <button
              key={index}
              className="pollbutton"
              style={{
                backgroundColor: "rgba(0, 191, 111, 0.85)",
                borderRadius: "8px",
                padding: "10px 14px",
                border: "1px solid rgba(0, 191, 111)",
                cursor: "pointer",
                fontWeight: 500,
              }}
              onMouseDown={(e) => e.target.setAttribute("clicked", "true")}
              onMouseOver={(e) => (e.target.style.backgroundColor = "rgba(0,191,111,1)")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "rgba(0,191,111,0.85)")}
            >
              {opt}
            </button>
          ))}
        </div>

        <button
          onClick={handlePoll}
          style={{
            marginTop: "32px",
            backgroundColor: "rgba(0, 191, 111, 0.85)",
            border: "1px solid rgba(0, 191, 111)",
            borderRadius: "9px",
            width: "140px",
            height: "42px",
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            color: "white",
            fontWeight: 600,
          }}
        >
          Submit
        </button>
      </form>

      {/* RESULTS MODAL */}
      <ResultsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        question={question}
        options={options}
      />
    </>
  );
}
