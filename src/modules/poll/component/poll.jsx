import { useState } from "react";
import { useEffect } from "react";
import { pollAQuestion } from "../../../shared/services/api-client";

import "../../../stylesheets/Options.css";
import Texttospeech from "../../../shared/services/texttospeech";

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
      console.log(ele);

      if (
        ele.getAttribute("clicked") &&
        ele.innerText != "Submit" &&
        ele.innerText != "Explore or Create Your Own Pol"
      ) {
        pollit(question, ele.innerText);
      }
    });
    localStorage.setItem("poll", true);
    Texttospeech("Submitted");
  }

  async function pollit(question, option) {
    await pollAQuestion(question, option);
  }

  const formStyle = {
    display: "block",
    width: "500px",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    top: "50%",
    left: "50%",
  };

  const headingStyle = {
    textAlign: "center",
    color: "white",
    textTransform: "capitalize",
    fontWeight: 500,
    fontSize: "2.5rem",
  };

  const buttonStyle = {
    height: "35px",
    alignSelf: "center",
    color: "white",
    borderRadius: "10px",
    backgroundColor: "rgba(0, 191, 111, 0.85)",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
    fontSize: "1rem",
    cursor: "pointer",
    border: "1px solid rgba(0, 191, 111)",
  };

  const submitButtonStyle = {
    height: "35px",
    alignSelf: "center",
    color: "white",
    borderRadius: "10px",
    backgroundColor: "rgba(0, 191, 111, 0.85)",
    fontSize: "1rem",
    cursor: "pointer",
    border: "1px solid rgba(0, 191, 111)",
    marginTop: "40px",
    textAlign: "center",
    width: "80px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
  };

  const hoverStyle = {
    backgroundColor: "rgba(0, 191, 111, 1)",
  };

  const divStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const refreshButtonStyle = {
    height: "45px",
    alignSelf: "center",
    color: "white",
    borderRadius: "10px",
    backgroundColor: "rgba(0, 191, 111, 0.85)",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
    fontSize: "1rem",
    cursor: "pointer",
    border: "1px solid rgba(0, 191, 111)",
    width: "150px",
    position: "absolute",
    top: "15%",
    right: "30%",
  };

  function removePoll() {
    localStorage.removeItem("poll");
    window.location.reload();
  }

  const backButtonStyle = {
    height: "45px",
    alignSelf: "center",
    color: "white",
    borderRadius: "10px",
    backgroundColor: "rgba(0, 191, 111, 0.85)",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
    fontSize: "1rem",
    cursor: "pointer",
    border: "1px solid rgba(0, 191, 111)",
    width: "100px",
    position: "absolute",
    top: "15%",
    left: "30%",
  };

  return (
    <div style={{ fontFamily: "Poppins" }}>
      <button
        onClick={(e) => window.location.reload()}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor =
            refreshButtonStyle.backgroundColor)
        }
        style={refreshButtonStyle}
      >
        Refresh The Poll
      </button>
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
    </div>
  );
}
