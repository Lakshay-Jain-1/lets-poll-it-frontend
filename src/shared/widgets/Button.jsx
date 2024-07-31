import React from "react";

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: "rgba(0, 191, 111, 0.85)",
    color: "white",
    height: "45px",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "1px solid rgba(0, 191, 111)",
    padding: "7px",
    cursor: "pointer",
    margin: "30px 30px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
    fontFamily: "Poppins",
  };

  const hoverStyle = {
    backgroundColor: "rgba(0, 191, 111, 1)",
  };

  return (
    <button
      onClick={props.onclick}
      className={props.class}
      style={buttonStyle}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
      }
    >
      {props.msg}
    </button>
  );
};

export default Button;