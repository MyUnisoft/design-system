import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  menuItem: {
    fontSize: 11,
    minHeight: '32px !important' // "!important" due to "MuiMenuItem: { root: { 'min-height': '48px !important' } }" in /assets/theme.js
  }
}));

export default useStyles;