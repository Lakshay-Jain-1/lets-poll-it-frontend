// Create.jsx
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import CreateForm from "./CreateForm";

export const Create = () => {
  const [visible, setVisible] = useState(false);

  const shareData = {
    heading: "Create A Question",
    button: "Create",
    option: true,
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          right: "30px",
          top: "10px",
          zIndex: 1000,
        }}
      >
        <Fab
          aria-label="edit"
          sx={{
            backgroundColor: "white",
            color: "rgb(44,100,77)",
            "&:hover": {
              backgroundColor: "#eaf8f0",
            },
          }}
          onClick={() => setVisible(true)}
        >
          <EditIcon />
        </Fab>
      </Box>

      <CreateForm visible={visible} setVisible={setVisible} formdata={shareData} />
    </>
  );
};
