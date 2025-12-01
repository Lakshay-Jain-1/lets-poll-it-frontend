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
import { LoginUSER } from "../services/authentication";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = data.get("name");
    const password = data.get("password");

    try {
      await LoginUSER(name, password);

      if (Cookies.get("success")) {
        alert("You don't have an account");
        navigate("/signup");
      } else {
        navigate("/home");  // redirect to dashboard after login
      }
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
          Log in
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
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ color: "whitesmoke", backgroundColor: "#3B634F" }}
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>

          <Grid container justifyContent="center">
            <Grid item>
              <Link
                onClick={() => navigate("/signup")}
                style={{ color: "whitesmoke", cursor: "pointer" }}
                variant="body2"
              >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
