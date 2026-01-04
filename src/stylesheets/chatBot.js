const styles = {
  fab: {
    position: "fixed",
    bottom: "22px",
    right: "22px",
    width: "55px",
    height: "55px",
    cursor: "pointer",
    color: "white",
    zIndex: 100,
  },


  header: {
    height: "45px",
    background: "#3B634F",
    color: "white",
    fontWeight: 600,
    fontSize: "1.15rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  close: {
    position: "absolute",
    right: "10px",
    cursor: "pointer",
  },
  messages: {
    flex: 1,
    overflowY: "auto",
    padding: "10px 12px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  bubble: {
    maxWidth: "80%",
    padding: "7px 11px",
    borderRadius: "12px",
    fontSize: "0.92rem",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    lineHeight: "1.3",
  },
  user: {
    alignSelf: "flex-end",
    background: "#3B634F",
    color: "white",
    borderTopRightRadius: "0px",
  },
  bot: {
    alignSelf: "flex-start",
    background: "white",
    color: "#262626",
    borderTopLeftRadius: "0px",
    border: "1px solid rgba(0,0,0,0.1)",
  },
  inputArea: {
    display: "flex",
    alignItems: "center",
    padding: "8px 10px",
    gap: "8px",
    width:"100%",
    backgroundColor: "#e8e8e8",
  },
  input: {
    flex: 1,
    height: "32px",
    borderRadius: "10px",
    border: "1px solid gray",
    padding: "0 8px",
    width:"90%"
  },
  send: {
    cursor: "pointer",
    color: "#3B634F",
    width:"10%"
  },
};

export { styles };
