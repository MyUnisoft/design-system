import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  thumbnailCell: {
    position: 'absolute',
    top: 2,
    left: 2
  },
  thumbnail: {
    height: 28,
    width: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  opacity: {
    '&:hover': {
      opacity: 0.77,
      backgroundColor: theme.palette.text.primary
    }  
  },
  viewIcon: {
    color: theme.palette.text.white,
    position: 'absolute',
    top: 6,
    left: 2
  }    
}));

export default useStyles;
