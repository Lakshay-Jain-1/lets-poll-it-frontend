import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Chart from './Chart';
import { Routing } from '../../../context/Routing';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ChartModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { displayPoll } = React.useContext(Routing);

  return (
    <>
      {/* Only hide the button, not the Modal itself */}
      {displayPoll && (
        <Button onClick={handleOpen}>See what others selected</Button>
      )}
      
      {/* Modal is always mounted so it can appear properly */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Chart />
        </Box>
      </Modal>
    </>
  );
}
