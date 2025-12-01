  const navbar = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "14px 0",
    color: "white",
    fontFamily: "Poppins",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    marginBottom: "25px",
    fontWeight: 600,
  };

  const navBtn = {
    padding: "7px 18px",
    border: "1px solid white",
    borderRadius: "7px",
    cursor: "pointer",
    transition: "0.25s",
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
    },
    modal: {
      backgroundColor: "#cae8db",
      borderRadius: "14px",
      width: "85%",
      maxWidth: "720px",
      maxHeight: "85vh",
      overflow: "auto",
      padding: "32px 28px 20px 28px",
      fontFamily: "Poppins",
      position: "relative",
      boxShadow: "0 0 25px rgba(0,0,0,0.3)",
    },
    titleRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      marginBottom: "10px",
    },
    heading: {
        display: "inline",
      fontSize: "2.6rem",
      fontWeight: 600,
      textAlign: "center",
      color: "#275944",
      margin: 0,
    },
    refreshIcon: {
      cursor: "pointer",
      color: "black",
      borderRadius: "50%",
      padding: "4px",
      width: "30px",
      height: "30px",
    },
    closeIcon: {
      position: "absolute",
      top: "10px",
      right: "14px",
      cursor: "pointer",
      color: "#275944",
      width: "30px",
      height: "30px",
      background: "white",
      borderRadius: "50%",
      padding: "4px",
    },
  };
export {
  navbar,
  navBtn,
  styles

};
