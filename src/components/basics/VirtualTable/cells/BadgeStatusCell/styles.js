import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    paddingLeft: 16
  },
  badge: {
    fontSize: 11,
    textAlign: 'center',
    lineHeight: '22px',
    borderRadius: '22px',
    height: '22px',
    width: '22px',
    color: 'white'
  }
}));

export default useStyles;