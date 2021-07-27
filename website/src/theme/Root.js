import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import theme from '../assets/theme';
import '../css/index.scss';

// Default implementation, that you can customize
function Root({children}) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default Root;