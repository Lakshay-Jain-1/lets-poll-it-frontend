import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Routing } from '../../context/Routing';
import {LoginUSER} from "../services/authentication";
import Cookies from "js-cookie"
export default function Login() {
    const {login,setLogin,setDisplayLanding , setSignup}  = React.useContext(Routing)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('name'),
      password: data.get('password'),
    });
    loginuser(data.get('name'),data.get('password'))
    setLogin(false)
    
  };
  const loginuser = async(name,password)=>{
     try{
     let res = await LoginUSER(name,password)
     if(Cookies.get("success")){
      alert("You don't have an account")
     
      setSignup(true)
     }else{
      setDisplayLanding(true)
     }

     }catch(err){
      console.log(err)
     }
  }

  return (
    <Container style={{display:login?"block":"none"}} component="main" maxWidth="xs">
      <CssBaseline />

      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <Avatar sx={{ m: 1, bgcolor: '#3B634F' }}><LockOutlinedIcon style={{backgroundColor:"#3B634F"}} /></Avatar>
        <Typography style={{color:"whitesmoke"}} component="h1" variant="h5">Log in</Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

        <TextField sx={{ input: { color: 'whitesmoke' } }} InputLabelProps={{style: { color: '#fff' }}} margin="normal" required fullWidth  label="Enter your name" name="name" autoComplete="off" autoFocus />
        <TextField  sx={{ input: { color: 'whitesmoke' } }} InputLabelProps={{style: { color: '#fff' }}}  margin="normal" required fullWidth name="password" label="Password" type="password"  autoComplete="current-password" />
         
          <Button type="submit" style={{color:"whitesmoke"}} fullWidth variant="contained" sx={{ mt: 3, mb: 2,color:"whitesmoke",bgcolor: '#3B634F' }}>Log In</Button>
          <Grid container>
            <Grid  item>
            <Button style={{color:"whitesmoke",backgroundColor:"#3B634F",boxShadow:"none !important"}} onClick={()=>{setSignup(true); setLogin(false)}}> <Link  style={{color:"whitesmoke",boxShadow:"none !important"}} href="#" variant="body2">{"Don't Have an account? Just Sign Up"}</Link></Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
