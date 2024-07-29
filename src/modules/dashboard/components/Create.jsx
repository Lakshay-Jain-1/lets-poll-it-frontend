import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Form from './Form';
import { useState } from 'react';
import CreateForm from './CreateForm';


export const Create = () => {
   
    const [visible ,setVisible ]=useState(false)
    const shareData ={
        heading:"Create A Question",
        button: "Create",
        option:true
    }

    return (
        <>
            <Box  sx={{ '& > :not(style)': { m: 1 } }} >

                <Fab  color="secondary" aria-label="edit" style={{ position: "absolute", right: "0" , top:"-50px" }} 
                onClick={() => { setVisible(true) }} >
                    <EditIcon />
                </Fab>

            </Box>
            <CreateForm  visible={visible} setVisible={setVisible}  formdata={shareData} />
        </>
    )
}