import React, { useState } from "react";
import "../../../stylesheets/Landing.css";
import Button from "../../../shared/widgets/Button";

const Landing = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [unlockOpen, setUnlockOpen] = useState(false);

  function toggleChat() {
    setChatOpen(!chatOpen);
  }

  function toggleUnlock() {
    setUnlockOpen(!unlockOpen);
  }

  function ChatDisplay() {
    if (chatOpen) {
      return (
        <div className="chatbox">
          <span>Chat With Us!</span>
          <Button onclick={toggleChat} class="cancel-btn" msg="X" />
        </div>
      );
    }
  }

  function UnlockDisplay() {
    if (unlockOpen) {
      const formFields = [
        { label: "Name", type: "text", name: "name" },
        // { label: "Email", type: "email", name: "email" },
        { label: "Password", type: "password", name: "password" },
      ];

      const handleFormSubmit = (data) => {
        console.log("Form Data:", data);
      };

      return (
        <div className="unlock-display">
          <Button onclick={toggleUnlock} class="cancel-btn" msg="X" />
         
        </div>
      );
    }
  }

  return (
    <div id="landingCont" className="landing-container">
      <div className="disp-container">
        Polls that Matter: Discover What Everyone Thinks!
      </div>
      <div className="btn-container">
        <Button msg="Explore or Create Your Own Poll" />
      </div>
      <Button onclick={toggleChat} msg="Chat with Us" class="chat-btn" />
      <ChatDisplay />
      <UnlockDisplay />
    </div>
  );
};

export default Landing;
