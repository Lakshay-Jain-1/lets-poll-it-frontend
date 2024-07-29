import { React, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {postAQuestion } from '../../../shared/services/api-client';


//  this form is used to make a post request that is sending question to the server
export default function CreateForm({ visible, setVisible,formdata }) {


    const handleClose = () => {
        setVisible(false);
    };

    const handleSubmit = async (event) => {

        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const {password,Option1 ,Option2 ,Option3 , Option4,question  } = formJson;
        await postAQuestion(question,[Option1 ,Option2 ,Option3 , Option4],password)
        window.localStorage.setItem("question",question)
        handleClose();

    }

    return (
        <>

            <Dialog open={visible || false} onClose={handleClose} PaperProps={{ component: 'form', onSubmit: handleSubmit, }} >

                <DialogTitle>{visible && formdata ? formdata.heading : ""}</DialogTitle>
                <DialogContent>
                   

                    <TextField autoFocus autoComplete="off" required margin="dense" id="question" name="question" label="QUESTION" type="text" fullWidth variant="standard" />
                    <div style={{ display: "grid", columnGap: "10px", gridTemplateColumns: "auto auto", marginTop: "10px", rowGap: "10px" }}>
                        <TextField autoComplete='off' label="Option 1" color="secondary" focused name="Option1" />
                        <TextField autoComplete='off' label="Option 2" color="secondary" focused name="Option2"  />
                        <TextField autoComplete='off' label="Option 3" color="secondary" focused name="Option3"  />
                        <TextField autoComplete='off' label="Option 4" color="secondary" focused name="Option4"  />

                    </div>

                    <TextField style={{ marginTop: "20px" ,textAlign:"center" }} autoComplete='off' label="password" type='password' color="info" name='password'  focused />


                </DialogContent>
                <DialogActions>
                    <Button aria-modal="true" onClick={handleClose}>Cancel</Button>
                    <Button aria-modal="true" type="submit"  >{visible && formdata.button ? formdata.button : ""}</Button>
                </DialogActions>
            </Dialog >
        </>
    );
}
