import Button from "../../../shared/widgets/Button.jsx";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

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
        onClick={() => navigate("/home")} // take user to dashboard
      >
        <Button msg="Explore or Create Your Own Poll" />
      </div>
    </div>
  );
};

export default Landing;
