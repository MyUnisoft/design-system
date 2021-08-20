import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 32,
    zIndex: 10,
    backgroundColor: theme.palette.info.main,
    fontSize: 12,
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    alignItems: 'center',
    color: '#000000',
    lineHeight: '32px',
    textAlign: 'left',
    paddingLeft: 10
  }
}));

export default useStyles;
