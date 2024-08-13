import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Routing } from '../../context/Routing';
import {SignUpUser} from "../services/authentication";
export default function SignUp() {
    const {signup,setSignup,setLogin,setDisplayLanding}  = React.useContext(Routing)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
         console.log("dasjsd / signup",data.get("signuppassword"))
         let name = data.get('name')
         let password = data.get('signuppassword')
         console.log("name",name)
         console.log("password",password)
        handlingSignIn(data.get('name'),data.get('signuppassword'))
        setSignup(false)
        setDisplayLanding(true)
    };

    let handlingSignIn = async(name,password) => {
        await SignUpUser(name,password)

    }

    return (
        <Container style={{display:signup?"block":"none"}} component="main" maxWidth="xs">
            <CssBaseline />

            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <Avatar sx={{ m: 1, bgcolor: '#3B634F' }}><LockOutlinedIcon style={{backgroundColor:"#3B634F"}} /></Avatar>
                <Typography  style={{color:"whitesmoke"}} component="h1" variant="h5">Sign up</Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                    <TextField sx={{ input: { color: 'whitesmoke' } }} InputLabelProps={{style: { color: '#fff' }}} margin="normal" required fullWidth  label="Enter your name" name="name" autoComplete="off" autoFocus />
                    <TextField  sx={{ input: { color: 'whitesmoke' } }} InputLabelProps={{style: { color: '#fff' }}}  margin="normal" required fullWidth  label="Password" type="password" name="signuppassword"  autoComplete="current-password" />
                 
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 ,bgcolor: '#3B634F' }}>Sign Up</Button>
                    <Grid container>
                        <Grid item>
                          <Button style={{color:"whitesmoke",backgroundColor:"#3B634F"}} onClick={()=>{setSignup(false); setLogin(true)}}> 
                           {" Have an account? Just Login"}
                            </Button> 
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );  
}
