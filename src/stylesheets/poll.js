// poll.js
const navbar = {
  display: "flex",
  justifyContent: "space-around", // If buttons are too wide, switch to "center" and use gap in the JSX
  alignItems: "center",
  padding: "14px 10px", // Reduced side padding slightly
  color: "white",
  fontFamily: "Poppins",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  marginBottom: "25px",
  fontWeight: 600,
};

const navBtn = {
  padding: "7px 12px", // Slightly tighter padding for mobile
  border: "1px solid white",
  borderRadius: "7px",
  cursor: "pointer",
  transition: "0.25s",
  fontSize: "0.9rem", // Slightly smaller font
  textAlign: "center",
  margin: "4px" // Add margin for when they wrap
};

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    backdropFilter: "blur(4px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "10px" // Prevents modal from touching screen edges
  },
  modal: {
    backgroundColor: "#cae8db",
    borderRadius: "14px",
    width: "100%", // Changed to 100% of container
    maxWidth: "600px", // Cap the width
    maxHeight: "85vh",
    overflow: "auto",
    padding: "20px", // Reduced padding from 32px
    fontFamily: "Poppins",
    position: "relative",
    boxShadow: "0 0 25px rgba(0,0,0,0.3)",
    boxSizing: "border-box"
  },
  titleRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: "10px",
    paddingRight: "20px" // Space for the close icon
  },
  heading: {
    display: "inline",
    fontSize: "1.8rem", // Reduced from 2.6rem
    fontWeight: 600,
    textAlign: "center",
    color: "#275944",
    margin: 0,
    wordBreak: "break-word"
  },
  refreshIcon: {
    cursor: "pointer",
    color: "black",
    borderRadius: "50%",
    padding: "4px",
    width: "24px", // Scaled down slightly
    height: "24px",
    marginLeft: "10px"
  },
  closeIcon: {
    position: "absolute",
    top: "0px", // Adjusted for tighter padding
    right: "0px",
    cursor: "pointer",
    color: "#275944",
    width: "24px",
    height: "24px",
    background: "white",
    borderRadius: "50%",
    padding: "4px",
  },
};

export { navbar, navBtn, styles };