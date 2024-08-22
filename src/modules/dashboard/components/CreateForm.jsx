import { React, useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { postAQuestion } from "../../../shared/services/api-client";
import AI from "../../../shared/services/chatgpt";
import Texttospeech from "../../../shared/services/texttospeech";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Routing } from "../../../context/Routing";


//  this form is used to make a post request that is sending question to the server
export default function CreateForm({ visible, setVisible, formdata }) {
  const [Aiquestion, setAiquestion] = useState("")
  const [aioption1, setaiOption1] = useState("")
  const [aioption2, setaiOption2] = useState("")
  const [aioption3, setaiOption3] = useState("")
  const [aioption4, setaiOption4] = useState("")
  const [xcoords ,setXcoords] =useState()
  const [ycoords ,setYcoords] =useState()

  const { setDisplayDashboard, setDisplayPoll, login, setLogin, setDisplayLanding } = useContext(Routing)

  function getLocation() {
      navigator.geolocation.getCurrentPosition((position)=>{
        setXcoords(position.coords.latitude)
        setYcoords(position.coords.longitude)
      });
  
  }




  const handleClose = () => {
    setVisible(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const { password, Option1, Option2, Option3, Option4, question } = formJson;
    let data  = await postAQuestion(
      question,
      [Option1, Option2, Option3, Option4],
      password
    );
    if (data.authorization == false) {
      setLogin(true)
      setDisplayDashboard(false)
      handleClose();
      return
    }
    window.localStorage.setItem("question", question);
    handleClose();
  };
  const AIgeneratedPoll = async () => {
    let prompt = ` Generate a unique interesting poll question based on his/her location if not specified ${xcoords}and ${ycoords}   and its corresponding multiple-choice  options  || You have to give option and question always in the following  Schema
    {
      "question": String length should be 20,
      "mcq": Array length should be 4
    }`;

    Texttospeech("YOUR AI GENERATED POLL")
    const data = await AI(prompt, true)
    const { question, mcq } = data

    const [option1, option2, option3, option4] = mcq
    setAiquestion(question)
    setaiOption1(option1)
    setaiOption2(option2)
    setaiOption3(option3)
    setaiOption4(option4)

  }
  const dialogStyle = {
    backgroundColor: "#cae8db",
    fontFamily: "Poppins",
  };

  const buttonStyle = {
    backgroundColor: "#cae8db",
    fontFamily: "Poppins",
    color: "#275944",
    fontWeight: "bold",
  };

  const buttonHoverStyle = {
    backgroundColor: "#83c8ac",
  };

  const dialogTitleStyle = {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-between",
    backgroundColor: "#cae8db",
    fontFamily: "Poppins",
  };

  const dialogOptionStyle = {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    backgroundColor: "#cae8db",
    fontFamily: "Poppins",
  };
  return (
    <>
      <Dialog
        open={visible || false}
        onClose={handleClose}
        PaperProps={{ component: "form", onSubmit: handleSubmit }}
        style={{  backdropFilter: "saturate(3)"}}
      >
        <DialogTitle style={dialogTitleStyle}>
          {visible && formdata ? formdata.heading : ""}
          <div onClick={getLocation}><LocationOnIcon style={{ position: "relative", left: "7vw" }} /></div>
          <img onClick={AIgeneratedPoll} style={{ width: "40px", height: "40px" }} src="./ai.png" />
        </DialogTitle>

        <DialogContent style={dialogStyle}>
          <TextField
            style={dialogStyle}
            autoFocus
            autoComplete="off"
            required
            margin="dense"
            id="question"
            name="question"
            defaultValue={Aiquestion || ""}

            type="text"
            fullWidth
            variant="standard"
          />
          <div
            style={{
              display: "grid",
              columnGap: "10px",
              gridTemplateColumns: "auto auto",
              marginTop: "10px",
              rowGap: "10px",
            }}
          >
            <TextField
              style={dialogOptionStyle}
              autoComplete="off"

              color="secondary"
              defaultValue={aioption1 || ""}
              // autoFocus
              name="Option1"
            />
            <TextField
              style={dialogOptionStyle}
              autoComplete="off"

              color="secondary"
              defaultValue={aioption2 || ""}
              // autoFocus
              name="Option2"
            />
            <TextField
              style={dialogOptionStyle}
              autoComplete="off"

              color="secondary"
              defaultValue={aioption3 || ""}
              // autoFocus
              name="Option3"
            />
            <TextField
              style={dialogOptionStyle}
              autoComplete="off"

              color="secondary"
              // autoFocus
              defaultValue={aioption4 || ""}
              name="Option4"
            />
          </div>

          <TextField
            style={{
              marginTop: "20px",
              textAlign: "center",
              backgroundColor: "#cae8db",
              fontFamily: "Poppins",
              marginLeft: "25%",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            autoComplete="off"
            label="Password"
            type="password"
            color="info"
            name="password"
          // autoFocus
          />
        </DialogContent>
        <DialogActions style={dialogStyle}>
          <Button
            onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              buttonStyle.backgroundColor)
            }
            style={buttonStyle}
            aria-modal="true"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              buttonStyle.backgroundColor)
            }
            style={buttonStyle}
            aria-modal="true"
            type="submit"
          >
            {visible && formdata.button ? formdata.button : ""}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
