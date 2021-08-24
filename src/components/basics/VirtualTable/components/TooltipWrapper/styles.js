import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tooltip: {
    padding: '4px 10px',
    border: 'none',
    borderRadius: 2,
    boxShadow: theme.shadows[2],
    backgroundColor: 'white',
    fontWeight: 500,
    '& p:last-child': {
      marginBottom: 0
    }
  }
}));

export default useStyles;
