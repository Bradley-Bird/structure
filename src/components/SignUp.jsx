import { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Container,
  Typography,
  Box,
  Link as MuiLink,
  Grid,
  TextField,
  CssBaseline,
  Button,
  Avatar,
} from '@mui/material';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../hooks/user';

function SignUp({ url }) {
  const { signUpUser, firstName, setFirstName, lastName, setLastName } =
    useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();
  const history = useHistory();
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {'Copyright © '}
        <MuiLink
          color="inherit"
          href="https://www.linkedin.com/in/bradley-bird/"
        >
          Artsy
        </MuiLink>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await signUpUser(email, password);

      const url = location.state?.from
        ? location.state.from.pathname
        : '/requests';
      history.replace(url);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container>
            <Grid item xs>
              <TextField
                margin="normal"
                required
                fullWidth
                id="first name"
                label="First Name"
                autoComplete="first name"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs>
              <TextField
                margin="normal"
                required
                fullWidth
                id="last name"
                label="Last Name"
                autoComplete="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></TextField>
            </Grid>
          </Grid>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Typography color={'error'} variant="subtitle2">
                {errorMessage}
              </Typography>
            </Grid>
            <Grid item>
              <Link to={`${url}/signIn`} variant="body2">
                {'Already have an account? Sign In'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default SignUp;
