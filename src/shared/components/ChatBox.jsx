import { useRef, useState, useEffect } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import AI from "../services/chatgpt";

export function ChatBox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const inputRef = useRef(null);
  const endRef = useRef(null);

  // --- REAL viewport height (Android-safe) ---
  useEffect(() => {
    const updateHeight = () => {
      const h = window.visualViewport?.height || window.innerHeight;
      setViewportHeight(h);
    };

    updateHeight();

    window.visualViewport?.addEventListener("resize", updateHeight);
    window.addEventListener("resize", updateHeight);

    return () => {
      window.visualViewport?.removeEventListener("resize", updateHeight);
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

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

  // --- Layout derived from reality, not vh ---
  const boxHeight = Math.min(viewportHeight * 0.7, 420);

  const boxStyle = {
    display: open ? "flex" : "none",
    flexDirection: "column",
    position: "fixed",
    right: "16px",
    bottom: "16px",

    width: "90vw",
    maxWidth: "320px",
    height: boxHeight,

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
        sx={{ fontSize: 45 }}
        style={styles.fab}
        onClick={() => setOpen((p) => !p)}
      />

      <div style={boxStyle}>
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
    right: "16px",
    bottom: "16px",
    cursor: "pointer",
    color: "white",
    zIndex: 100,
  },

  header: {
    height: "45px",
    background: "#3B634F",
    color: "white",
    fontWeight: 600,
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
    padding: "10px",
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
  },

  user: {
    alignSelf: "flex-end",
    background: "#3B634F",
    color: "white",
    borderTopRightRadius: 0,
  },

  bot: {
    alignSelf: "flex-start",
    background: "white",
    border: "1px solid rgba(0,0,0,0.1)",
    borderTopLeftRadius: 0,
  },

  inputArea: {
    display: "flex",
    gap: "8px",
    padding: "8px",
    backgroundColor: "#e8e8e8",
    flexShrink: 0,
  },

  input: {
    flex: 1,
    height: "36px",
    borderRadius: "10px",
    border: "1px solid gray",
    padding: "0 10px",
    fontSize: "16px", // critical for Android
    outline: "none",
  },

  send: {
    cursor: "pointer",
    color: "#3B634F",
  },
};
