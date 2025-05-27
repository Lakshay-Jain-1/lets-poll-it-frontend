import { useState } from "react";
import { useEffect } from "react";
import { pollAQuestion } from "../../../shared/services/api-client";
import "../../../stylesheets/Options.css";
import Texttospeech from "../../../shared/services/texttospeech";
import handleDownloadPoll from "../../../shared/services/downloadPoll";
import {downloadButtonStyle,downloadDivStyle,backButtonStyle,buttonStyle,formStyle,submitButtonStyle,hoverStyle,headingStyle,divStyle} from "../../../stylesheets/poll.js"
export default function Poll() {
  const [question, setQuestion] = useState();
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();
  const [option3, setOption3] = useState();
  const [option4, setOption4] = useState();

  useEffect(() => {
    setQuestion(localStorage.getItem("question"));
    setOption4(localStorage.getItem("option4"));
    setOption1(localStorage.getItem("option1"));
    setOption2(localStorage.getItem("option2"));
    setOption3(localStorage.getItem("option3"));

    //Don't change this as this is used to find which button is clicked
    document.querySelectorAll("button").forEach((ele) => {
      ele.addEventListener("click", (event) => {
        event.target.setAttribute("clicked", "true");
      });
    });
  });

  function handlePoll() {
    document.querySelectorAll(".pollbutton").forEach((ele) => {
      if (
        ele.getAttribute("clicked") &&
        ele.innerText != "Submit" &&
        ele.innerText != "Explore or Create Your Own Pol"
      ) {
        ele.removeAttribute("clicked")
        pollit(question, ele.innerText);
      }
    });
    localStorage.setItem("poll", true);
    Texttospeech("Submitted");
  }

  async function pollit(question, option) {
    await pollAQuestion(question, option);
  }


  function removePoll() {
    localStorage.removeItem("poll");
    window.location.reload();
  }

  return (
    <div id="content-to-pdf" style={{ fontFamily: "Poppins" }}>
      <button onClick={removePoll} style={backButtonStyle}>
        Go Back
      </button>
      <form onSubmit={(event) => event.preventDefault()} style={formStyle}>
        <h1 style={headingStyle}>{question}</h1>
        <div className="options-grid">
          <button
            className="pollbutton"
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                hoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyle.backgroundColor)
            }
            style={buttonStyle}
          >
            {" "}
            {option1}{" "}
          </button>
          <button
            className="pollbutton"
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                hoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyle.backgroundColor)
            }
            style={buttonStyle}
          >
            {" "}
            {option2}{" "}
          </button>
          <button
            className="pollbutton"
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                hoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyle.backgroundColor)
            }
            style={buttonStyle}
          >
            {" "}
            {option3}{" "}
          </button>
          <button
            className="pollbutton"
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                hoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyle.backgroundColor)
            }
            style={buttonStyle}
          >
            {" "}
            {option4}{" "}
          </button>
        </div>
        <div style={divStyle}>
          <button
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                hoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                submitButtonStyle.backgroundColor)
            }
            style={submitButtonStyle}
            onClick={handlePoll}
          >
            Submit
          </button>
        </div>
      </form>
      <div style={downloadDivStyle}>
        <button
          onClick={() =>
            handleDownloadPoll(question, option1, option2, option3, option4)
          }
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              downloadButtonStyle.backgroundColor)
          }
          style={downloadButtonStyle}
        >
          Download Poll
        </button>
      </div>
    </div>
  );
}
