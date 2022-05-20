import React from 'react';
import {
  Toolbar,
  Button,
  IconButton,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useUser } from '../hooks/user';
import { sections } from '../utils/NavLinks';

function Header() {
  const { user, signOutUser, profile } = useUser();
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button size="small">Home</Button>
        </Link>
        <Typography
          component="h2"
          // variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Welcome {profile.firstName}!
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {!user.email ? (
          <Button variant="outlined" size="small">
            <Link to="/auth/signIn" style={{ textDecoration: 'none' }}>
              Sign in
            </Link>
          </Button>
        ) : (
          <Button onClick={signOutUser}>Sign out</Button>
        )}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link key={section.title} to={`/${section.title}`}>
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

export default Header;
