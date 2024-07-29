import { useRef, useState } from "react"
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

export function ChatBox() {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState([])
    const message = useRef()
    const fixed = {
        position: 'fixed',
        bottom: '19px',
        right: '19px',
        width: '50px',
        height: '50px',

        zIndex: 1,
    }
    const absolute = {
        display: open ? "block" : "none",
        position: 'absolute',
        width: '250px',
        height: '350px',
        borderRadius: '12px',
        border: '3px solid #73AD21',
        right: '50px',
        bottom: '100px'
    }

    const pushText = () => {
        let exisiting_text_message = Object.values(text)
        exisiting_text_message.push(message.current.value)
        setText(exisiting_text_message)
        console.log(text)
    }


    return (
        <div className="fixed" style={fixed}   >
            <ChatIcon sx={{ fontSize: 50, color: "#9031AA" }} onClick={() => setOpen((prev) => !prev)} />

            <div className="relative"  >
                <div className="absolute" style={absolute}>
                    <div style={{ position: "relative" }}>
                        <CloseIcon style={{ position: "absolute", right: 0 }} onClick={() => setOpen(false)} />
                        <div style={{ position: "absolute", top: "30px", left: "10px" }} >
                            {
                                text.map((ele, index) => { return <div key={index} ><h3   >{ele}</h3> </div> })
                            }
                        </div>

                        <div style={{ position: "absolute", display: "flex", flexDirection: "row", top: "314px" }}>
                            <input type="text" ref={message} />
                            <SendIcon onClick={pushText} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}