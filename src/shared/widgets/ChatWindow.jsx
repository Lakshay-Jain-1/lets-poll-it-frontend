import React, { useRef, useEffect } from "react";

function ChatWindow({ messages }) {
  const endRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const styles = {
    container: {
      height: "75vh",
      width: "100%",
      border: "1px solid rgba(255,255,255,0.15)",
      borderRadius: "12px",
      padding: "14px",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      background: "rgba(0, 0, 0, 0.25)",
      backdropFilter: "blur(4px)",
    },
    bubble: {
      maxWidth: "75%",
      padding: "10px 14px",
      borderRadius: "14px",
      fontSize: "1rem",
      wordWrap: "break-word",
      whiteSpace: "pre-wrap",
      lineHeight: "1.35",
    },
    user: {
      alignSelf: "flex-end",
      backgroundColor: "#3B634F",
      color: "white",
      borderTopRightRadius: "0px",
    },
    bot: {
      alignSelf: "flex-start",
      backgroundColor: "rgba(255,255,255,0.85)",
      color: "#1b1b1b",
      borderTopLeftRadius: "0px",
    },
  };

  return (
    <div style={styles.container} className="chat-window">
      {messages.map((message, index) => (
        <div
          key={index}
          style={{
            ...styles.bubble,
            ...(message.sender === "user" ? styles.user : styles.bot),
          }}
        >
          {message.text}
        </div>
      ))}
      <div ref={endRef} />
    </div>
  );
}

export default ChatWindow;
