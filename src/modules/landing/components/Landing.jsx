import React from "react";
import Button from "../../../shared/widgets/Button.jsx";
import { Routing } from "../../../context/Routing";
import { useContext } from "react";

const Landing = () => {
  const { setDisplayLanding, setDisplayDashboard } = useContext(Routing);
  const landingContainerStyle = {
    height: "90vh",
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
    fontFamily: "Poppins",
  };

  return (
    <div style={landingContainerStyle}>
      <div style={dispContainerStyle}>
        Polls that Matter: Discover What Everyone Thinks!
      </div>
      <div
        className="btn-container"
        onClick={() => {
          setDisplayLanding(false);
          setDisplayDashboard(true);
        }}
      >
        <Button msg="Explore or Create Your Own Poll" />
      </div>
    </div>
  );
};

export default Landing;