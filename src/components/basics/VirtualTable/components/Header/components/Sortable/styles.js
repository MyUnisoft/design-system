import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    alignItems: 'center',
    color: ({ key, order }) => (key === order) ? theme.palette.primary.main : 'inherit',
    display: 'inline-flex',
    font: 'inherit',
    padding: 0
  }
}));

export default useStyles;