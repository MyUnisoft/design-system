import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 2,
    display: 'inline-flex'
  },
  termsWrapper: {
    alignItems: 'center',
    background: 'white',
    display: 'flex',
    maxWidth: 0,
    overflow: 'hidden',
    padding: 0,
    transition: 'all ease 0.5s',
    width: 300,
    '.search-bar.unfold &': {
      maxWidth: 300,
      padding: `0 8px`
    }
  },
  button: {
    minWidth: 'auto',
    padding: 6,
    '.search-bar.unfold &': {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0
    }
  },
  input: {
    cursor: 'text',
    '& input, & div': {
      background: 'none',
      border: 'none',
      fontSize: 11,
      outline: 'none'
    },
    '& input': {
      minWidth: '100%'
    }
  },
  mainInput: {
    minWidth: '100%'
  },
  closeIcon: {
    color: theme.palette.primary.main,
    fontSize: '0.875rem'
  },
  menu: {
    pointerEvents: 'none',
    '& .MuiPaper-root': {
      pointerEvents: 'all'
    }
  },
  inputWrapper: {
    display: 'flex',
    flexGrow: 1
  }
}));

export default useStyles;