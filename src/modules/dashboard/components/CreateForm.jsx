import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { postAQuestion } from "../../../shared/services/api-client";

//  this form is used to make a post request that is sending question to the server
export default function CreateForm({ visible, setVisible, formdata }) {
  const handleClose = () => {
    setVisible(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const { password, Option1, Option2, Option3, Option4, question } = formJson;
    await postAQuestion(
      question,
      [Option1, Option2, Option3, Option4],
      password
    );
    window.localStorage.setItem("question", question);
    handleClose();
  };

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
    textAlign: "center",
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
      >
        <DialogTitle style={dialogTitleStyle}>
          {visible && formdata ? formdata.heading : ""}
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
            label="QUESTION"
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
              label="Option 1"
              color="secondary"
              // autoFocus
              name="Option1"
            />
            <TextField
              style={dialogOptionStyle}
              autoComplete="off"
              label="Option 2"
              color="secondary"
              // autoFocus
              name="Option2"
            />
            <TextField
              style={dialogOptionStyle}
              autoComplete="off"
              label="Option 3"
              color="secondary"
              // autoFocus
              name="Option3"
            />
            <TextField
              style={dialogOptionStyle}
              autoComplete="off"
              label="Option 4"
              color="secondary"
              // autoFocus
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
