import { useRef, useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import AI from "../services/chatgpt";

export  function ChatBox() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState([]);
  const message = useRef();
  const fixed = {
    position: "fixed",
    bottom: "19px",
    right: "19px",
    width: "50px",
    height: "50px",

    zIndex: 1,
  };
  const absolute = {
    display: open ? "block" : "none",
    position: "absolute",
    width: "250px",
    height: "350px",
    borderRadius: "12px",
    // border: "1px solid #173529",
    right: "50px",
    bottom: "100px",
    backgroundColor: "whitesmoke",
  };

  const textStyle = {
   
    padding: "5px",
    textTransform: "capitalize",
    color: "#262626",
    fontWeight: 500,
  };

  const inputStyle = {
    width: "230px",
    marginLeft: "10px",
    borderRadius: "10px",
    padding: "0px 2px",
    height: "30px",
  };

  const pushText = async () => {
    let exisiting_text_message = Object.values(text);
    exisiting_text_message.push(message.current.value);
    let data = await AI(message.current.value);
    exisiting_text_message.push(data);
    setText(exisiting_text_message);
    console.log(text);
  };

  return (
    <div className="fixed" style={fixed}>
      <ChatIcon
        sx={{ fontSize: 35, color: "#ffffff" }}
        style={{ cursor: "pointer" }}
        onClick={() => setOpen((prev) => !prev)}
      />

      <div className="relative">
        <div className="absolute" style={absolute}>
          <div style={{ position: "relative" }}>
            <CloseIcon
              style={{
                position: "absolute",
                right: 0,
                cursor: "pointer",
                color: "black",
              }}
              onClick={() => setOpen(false)}
            />
            <div style={{ position: "absolute", top: "30px", left: "10px" }}>
              {text.map((ele, index) => {
                return (
                  <div key={index}>
                    <h3 style={textStyle}>{ele}</h3>{" "}
                  </div>
                );
              })}
            </div>

            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                top: "314px",
              }}
            >
              <input style={inputStyle} type="text" ref={message} />
              <SendIcon
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "3px",
                  top: "0.7px",
                }}
                onClick={pushText}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}