import React, { useContext } from "react";
import "../../App.css";
import { Routing } from "../../context/Routing";

const Header = () => {
  const { displayLanding, setDisplayLanding } = useContext(Routing);
  const headerStyle = {
    display: displayLanding ? "flex" : "none",
    height: "7vh",
    color: "white",
    fontSize: "2rem",
    fontWeight: 900,
    margin: "10px",
  };

  const headingStyle = {
    cursor: "pointer",
    fontFamily: "Poppins",
  };

  return (
    <div style={headerStyle}>
      <div style={headingStyle}>Let'sPoll.in</div>
    </div>
  );
};

export default Header;
