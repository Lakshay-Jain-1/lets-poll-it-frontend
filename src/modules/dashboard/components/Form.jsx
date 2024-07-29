import { React } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getAQuestion} from '../../../shared/services/api-client';


//  this form is used for two things getting a specific question and and for share purposes   
export default function Form({ formdata, visible, setVisible, question }) {

    const getQuestion = async (question, password) => {
        const data = await getAQuestion(question, password)
        console.log(data)
    }

    const handleClose = () => {
        setVisible(false);
    };

    const handleSubmit = async (event) => {
        
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const password = formJson.password;
        await getQuestion(question, password)
        handleClose();

    }

    return (
        <>

            <Dialog open={visible || false} onClose={handleClose} PaperProps={{ component: 'form', onSubmit: handleSubmit, }} >

                <DialogTitle>{visible && formdata ? formdata.heading : ""}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>

                    {visible && formdata.input ? <TextField autoFocus autoComplete="on" required margin="dense" id="password" name="password" label="Password" type="password" fullWidth variant="standard" /> : ""}

                  


                </DialogContent>
                <DialogActions>
                    <Button aria-modal="true" onClick={handleClose}>Cancel</Button>
                    <Button aria-modal="true" type="submit"  >{visible && formdata.button ? formdata.button : ""}</Button>
                </DialogActions>
            </Dialog >
        </>
    );
}
