import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import { ThemeProvider, createTheme } from '@mui/material/';
import { RequestProvider } from './context/RequestContext';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00263a',
      light: '#E7ECF2',
    },
    secondary: {
      main: '#7fbc03',
    },
    background: { default: '#E7ECF2' },
  },
});
render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <RequestProvider>
          <Router>
            <App />
          </Router>
        </RequestProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
