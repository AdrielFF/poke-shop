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
    lightgrey: '#fafafb'
  },
  typography:{
    fontFamily: [
      'Flexo-Caps',
    ]
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
