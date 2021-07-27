import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 11,
    marginRight: 8,
    paddingRight: 0
  },
  input: {
    '& input, & div': {
      border: 'none',
      background: 'none',
      fontSize: 11,
      outline: 'none'
    }
  },
  select: {
    fontSize: 11,
    '& .MuiSelect-root': {
      padding: '4px 24px 4px 6px'
    }
  },
  closeIcon: {
    color: theme.palette.primary.main,
    fontSize: '0.875rem'
  }
}));

export default useStyles;