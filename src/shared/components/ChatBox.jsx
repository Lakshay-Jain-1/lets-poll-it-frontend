import { useRef, useState, useEffect } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import AI from "../services/chatgpt";

export function ChatBox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);
  const endRef = useRef(null);

  async function pushMessage() {
    const userMsg = inputRef.current.value.trim();
    if (!userMsg) return;

    inputRef.current.value = "";

    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);

    const botReply = await AI(`${userMsg} make it very short max to max 4 words`);

    setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
  }

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const box = {
    display: open ? "flex" : "none",
    flexDirection: "column",
    position: "fixed",

    right: "16px",
    bottom: "16px",

    width: "90vw",
    maxWidth: "320px",

    height: "70vh",
    maxHeight: "420px",

    borderRadius: "14px",
    backgroundColor: "whitesmoke",
    boxShadow: "0px 0px 12px rgba(0,0,0,0.3)",
    overflow: "hidden",
    fontFamily: "Poppins",
    zIndex: 100,
  };

  return (
    <>
      <ChatIcon
        style={styles.fab}
        sx={{ fontSize: 45 }}
        onClick={() => setOpen((p) => !p)}
      />

      <div style={box}>
        <div style={styles.header}>
          Ask PollBot
          <CloseIcon style={styles.close} onClick={() => setOpen(false)} />
        </div>

        <div style={styles.messages}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                ...styles.bubble,
                ...(m.sender === "user" ? styles.user : styles.bot),
              }}
            >
              {m.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <div style={styles.inputArea}>
          <input
            ref={inputRef}
            type="text"
            style={styles.input}
            onKeyDown={(e) => e.key === "Enter" && pushMessage()}
          />
          <SendIcon style={styles.send} onClick={pushMessage} />
        </div>
      </div>
    </>
  );
}

const styles = {
  fab: {
    position: "fixed",
    bottom: "16px",
    right: "16px",
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
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flexShrink: 0,
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
    fontSize: "0.9rem",
    wordBreak: "break-word",
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
    padding: "8px",
    gap: "8px",
    backgroundColor: "#e8e8e8",
    flexShrink: 0,
  },

  input: {
    flex: 1,
    height: "36px",
    borderRadius: "10px",
    border: "1px solid gray",
    padding: "0 10px",
    fontSize: "16px", // critical for mobile (prevents zoom)
    outline: "none",
  },

  send: {
    cursor: "pointer",
    color: "#3B634F",
  },
};
