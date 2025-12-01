import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { SignUpUser } from "../services/authentication";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = data.get("name");
    const password = data.get("signuppassword");

    try {
      await SignUpUser(name, password);
      navigate("/home");   // redirect after successful signup
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar sx={{ m: 1, bgcolor: "#3B634F" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography style={{ color: "whitesmoke" }} component="h1" variant="h5">
          Sign up
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            sx={{ input: { color: "whitesmoke" } }}
            InputLabelProps={{ style: { color: "#fff" } }}
            margin="normal"
            required
            fullWidth
            label="Enter your name"
            name="name"
            autoComplete="off"
            autoFocus
          />

          <TextField
            sx={{ input: { color: "whitesmoke" } }}
            InputLabelProps={{ style: { color: "#fff" } }}
            margin="normal"
            required
            fullWidth
            label="Password"
            name="signuppassword"
            type="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "#3B634F", color: "whitesmoke" }}
          >
            Sign Up
          </Button>

          <Grid container justifyContent="center">
            <Grid item>
              <Button
                style={{ color: "whitesmoke", backgroundColor: "#3B634F" }}
                onClick={() => navigate("/login")}
              >
                Have an account? Just Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
