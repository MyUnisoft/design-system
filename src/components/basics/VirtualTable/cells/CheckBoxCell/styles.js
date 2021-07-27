import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  checkbox: {
    position: 'absolute'
  },
  cbCell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  disabled: {
    opacity: '0.3'
  },
  container: {
    height: '14px',
    width: '14px',
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    fontSize: '22px',
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    userSelect: 'none',
    '& input': {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      height: 0,
      width: 0
    },
    '& $checkmark:after': {
      left: '5px',
      top: '1px',
      width: '3px',
      height: '7px',
      border: 'solid white',
      borderBottomRightRadius: '1px',
      borderWidth: '0 1.5px 1.5px 0',
      transform: 'rotate(40deg)'
    },
    '& input:checked ~ .checkmarkPrimary': {
      backgroundColor: '#0bd1c4'
    },
    '& input:checked ~ .checkmarkError': {
      backgroundColor: '#f54b4b'
    },
    '& input:checked ~ $checkmark': {
      height: '14px',
      width: '14px',
      border: 'none',
      '&:after': {
        display: 'block'
      }
    },
    '& input:disabled ~ $checkmark': {
      opacity: 0.3,
      cursor: 'not-allowed'
    },
    '&:hover': {
      '& input:not(:disabled) ~ .checkmarkPrimary': {
        backgroundColor: '#bcf8f8'
      },
      '& input:not(:disabled) ~ .checkmarkError': {
        backgroundColor: '#f8bcbc'
      }
    }
  },
  checkmark: {
    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'none'
    },
    position: 'absolute',
    height: '12px',
    width: '12px',
    borderRadius: '2px',
    border: 'solid 1px #9b9b9b'
  }
}
));

export default useStyles;
