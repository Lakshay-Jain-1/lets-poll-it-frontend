import React from "react";
import "../../stylesheets/Button.css";

const Button = (props) => {
  return (
    <button onClick={props.onclick} className={props.class}>
      {props.msg}
    </button>
  );
};

export default Button;
