import React from "react"; // Don't forget this if you're on older React versions
import Button from "../../../shared/widgets/Button.jsx";
import { useNavigate } from "react-router-dom";
import "../../../stylesheets/Landing.css"; // Ensure the CSS is actually imported!

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="disp-container">
        Polls that Matter: Discover What Everyone Thinks!
      </div>

      <div
        className="btn-container"
        onClick={() => navigate("/home")}
      >
        <Button msg="Explore or Create Your Own Poll" />
      </div>
    </div>
  );
};

export default Landing;