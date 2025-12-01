import "../../App.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Hide header on login and signup page
  const hideRoutes = ["/login", "/signup"];
  const isHidden = hideRoutes.includes(location.pathname);

  const headerStyle = {
    display: isHidden ? "none" : "flex",
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
