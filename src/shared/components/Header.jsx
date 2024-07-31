

import React from "react";
import "../../App.css";


const Header = () => {
  const headerStyle = {
    display: "flex",
    height: "7vh",
    color: "white",
    fontSize: "2rem",
    fontWeight: 900,
    margin : "10px",
  };

  const headingStyle = {
    cursor: "pointer",
  };



  return (
    <div style={headerStyle}>
      <div style={headingStyle}>Let'sPoll.in</div>
    </div>
  );
};

export default Header;
