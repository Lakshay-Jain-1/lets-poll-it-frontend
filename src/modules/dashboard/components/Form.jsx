import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import QRCode from "react-qr-code";
import { getAQuestion } from "../../../shared/services/api-client";
import Texttospeech from "../../../shared/services/texttospeech";
import {
  buttonStyle,
  buttonHoverStyle,
  dialogStyle,
} from "../../../stylesheets/Form.js";

export default function Form({ formdata, visible, setVisible, question }) {
  const navigate = useNavigate();

  const getQuestion = async (question, password) => {
    const data = await getAQuestion(question, password);

    if (data.authorization === false) {
      handleClose();
      navigate("/login");
      return;
    }

    if (data.length !== 0) {
      localStorage.setItem("question", question);
      localStorage.setItem("option1", data[0].options[0]);
      localStorage.setItem("option2", data[0].options[1]);
      localStorage.setItem("option3", data[0].options[2]);
      localStorage.setItem("option4", data[0].options[3]);

      handleClose();
      navigate("/poll");
      return;
    }

    if (data.length === 0) {
      Texttospeech("WRONG PASSWORD");
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    await getQuestion(question, password);
  };

  return (
    <Dialog
      open={visible || false}
      onClose={handleClose}
      PaperProps={{ component: "form", onSubmit: handleSubmit }}
      style={{ backdropFilter: "saturate(3)" }}
    >
      <DialogTitle style={dialogStyle}>
        {visible && formdata ? formdata.heading : ""}
      </DialogTitle>

      <DialogContent style={dialogStyle}>
        <DialogContentText>
          {visible && formdata.button === "Share" ? (
            <QRCode
              style={{ width: "120px", height: "120px" }}
              value="https://polling-frontend-97zb.onrender.com/"
            />
          ) : (
            ""
          )}
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
            autoComplete="on"
            label="Password"
            type="password"
            color="info"
            name="password"
            fullWidth
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
  );
}
