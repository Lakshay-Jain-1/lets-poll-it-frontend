import { React, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { getAQuestion } from "../../../shared/services/api-client";
import { Routing } from "../../../context/Routing";

//  this form is used for two things getting a specific question and and for share purposes
export default function Form({ formdata, visible, setVisible, question }) {
  
  const { setDisplayDashboard, setDisplayPoll } = useContext(Routing)

  const getQuestion = async (question, password) => {
    const data = await getAQuestion(question, password);
    console.log(data);
    if (data.length != 0) {
      localStorage.setItem("option1", data[0].options[0]);
      localStorage.setItem("option2", data[0].options[1]);
      localStorage.setItem("option3", data[0].options[2]);
      localStorage.setItem("option4", data[0].options[3]);
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const password = formJson.password;
    await getQuestion(question, password);

    localStorage.setItem("question", question);

    handlingRouting()

    handleClose();
  };

  function handlingRouting() {
    setDisplayDashboard(false)
    setDisplayPoll(true)
  }

  const dialogStyle = {
    backgroundColor: "#cae8db",
    fontFamily: "Poppins",
    textAlign: "center",
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

  return (
    <>
      <Dialog
        open={visible || false}
        onClose={handleClose}
        PaperProps={{ component: "form", onSubmit: handleSubmit }}
      >
        <DialogTitle style={dialogStyle}>
          {visible && formdata ? formdata.heading : ""}
        </DialogTitle>
        <DialogContent style={dialogStyle}>
          <DialogContentText>
            {/* To Access the Poll, please enter the password to unlock this poll */}
          </DialogContentText>

          {visible && formdata.input ? (
            <TextField
              style={{
                marginTop: "20px",
                textAlign: "center",
                backgroundColor: "#cae8db",
                fontFamily: "Poppins",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
              autoFocus
              label="Password"
              type="password"
              color="info"
              name="password"
              fullWidth
            // autoFocus
            />
          ) : (
            ""
          )}
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
