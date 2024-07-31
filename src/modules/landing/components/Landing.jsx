import React from "react";
import Button from "../../../shared/widgets/Button.jsx";

const Landing = () => {
  const landingContainerStyle = {
    height: "93vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const dispContainerStyle = {
    marginTop: "80px",
    width: "50%",
    color: "white",
    textAlign: "center",
    fontSize: "3.7rem",
    fontWeight: 500,
  };

  return (
    <div style={landingContainerStyle}>
      <div style={dispContainerStyle}>
        Polls that Matter: Discover What Everyone Thinks!
      </div>
      <div className="btn-container">
        <Button msg="Explore or Create Your Own Poll" />
      </div>
    </div>
  );
};

export default Landing;
