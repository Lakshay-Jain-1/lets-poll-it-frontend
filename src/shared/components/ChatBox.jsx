import { useRef, useState, useEffect } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import AI from "../services/chatgpt";

import { styles } from "../../stylesheets/chatBot.js";

export function ChatBox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const inputRef = useRef();
  const endRef = useRef(null);

  async function pushMessage() {
    const userMsg = inputRef.current.value.trim();
    if (!userMsg) return;

    const botReply = await AI(
      `${userMsg} make it very short max to max 4 words`
    );

    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    inputRef.current.value = "";
  }

  // Auto-scroll to last message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const box = {
      display: open ? "flex" : "none",
      flexDirection: "column",
      position: "fixed",
      right: "22px",
      bottom: "90px",
      width: "280px",
      height: "360px",
      borderRadius: "14px",
      backgroundColor: "whitesmoke",
      boxShadow: "0px 0px 12px rgba(0,0,0,0.3)",
      overflow: "hidden",
      fontFamily: "Poppins",
      zIndex: 100,
  };

  return (
    <>
      <ChatIcon style={styles.fab} sx={{ fontSize: 45 }} onClick={() => setOpen((p) => !p)} />

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
          <div ref={endRef}></div>
        </div>

        <div style={styles.inputArea}>
          <input style={styles.input} ref={inputRef} type="text" onKeyDown={(e) => e.key === "Enter" && pushMessage()} />
          <SendIcon style={styles.send} onClick={pushMessage} />
        </div>
      </div>
    </>
  );
}
