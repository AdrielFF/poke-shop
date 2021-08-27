import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import {
  createTheme,
  ThemeProvider
} from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    lightgrey: '#fafafb',
    primary: {
      main: '#fff',
    }
  },
  typography:{
    fontFamily: [
      'Flexo-Caps, Varela-Round',
    ]
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
