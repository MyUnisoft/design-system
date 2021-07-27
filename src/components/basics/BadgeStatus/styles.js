import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    height: "inherit",
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
  },
  badgeOk: {
    fontSize: 11,
    textAlign: 'center',
    lineHeight: '21px',
    borderRadius: '21px',
    height: '21px',
    width: '21px',
    color: '#0bd1d1',
    border: '1px solid #0bd1d1'
  },
  inProgressBackground: {
    backgroundColor: "#ffd400"
  },
  errorBackground: {
    backgroundColor: "#fe3a5e"
  },
  validBackground: {
    backgroundColor: "#0bd1d1"
  },
  badgeAlert: {
    color: "#fe3a5e"
  },
  emptyDiv: {
    height: 32,
    '&::before': {
      content: "'\\200b'"
    }
  }
}));

export default useStyles;