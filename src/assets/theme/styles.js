import { makeStyles } from '@material-ui/core/styles';

export const borderInputStyles = ({ palette }) => ({
  focusedInputBorder: {
    border: `1px solid ${palette.primary.main}`,
    'background-color': 'white'
  },
  underlineBorder: {
    '&:before': {
      'border-bottom': 'none'
    },
    '&&&&:hover:before': {
      'border-bottom': `2px solid ${palette.primary.main}`
    }
  }
});

export const InputLabelNoWrap = {
  inputLabelRootOverride: {
    whiteSpace: 'nowrap',
    fontSize: 14
  }
};

export const smallButtonNoPadding = () => ({
  noPadding: {
    padding: '2px',
    minHeight: '32px',
    minWidth: '36px'
  }
});

export const changeDialogStyle = makeStyles(({ palette: { primary: { main } } }) => ({
  content: {
    textAlign: 'center',
    Zindex: 1500,
    overflow: 'visible'
  },
  button: {
    background: main,
    marginLeft: '20px'
  },
  footer: {
    margin: '50px',
    justifyContent: 'space-evenly'
  },
  buttonValidate: {
    background: main,
    color: 'white'
  }
}));
