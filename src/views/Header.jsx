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

// function Header() {
//   const { user } = useUser();
//   const headerDisplay = () => {
//     return <Toolbar>{user.email}</Toolbar>;
//   };

//   return (
//     <header>
//       <AppBar>{headerDisplay()}</AppBar>
//     </header>
//   );
// }
function Header() {
  const { user } = useUser();
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button size="small">Home</Button>
        </Link>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Welcome {user.email}!
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {!user && (
          <Button variant="outlined" size="small">
            Sign in
          </Button>
        )}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link key={section.title} to={`/${section.title}`}>
            <MuiLink
              color="inherit"
              noWrap
              variant="body2"
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </MuiLink>
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

export default Header;
