import { createTheme  } from '@material-ui/core/styles';

const primaryColor = '#0bd1d1';
const grey200 = '#EDEDED';

const theme = createTheme({
  palette: {
    menu_color: {
      background: "#000",
      selected: '#0BD1D1'
    },
    unfolded_menu:{
      background: "#000",
      text: "#fff"
    },
    common: {
      grey: '#e3e3e3',
      greyBackground: '#f5f5f5'
    },
    unavailable: {
      main: '#ff7f00'
    },
    primary: {
      light: '#CEF6F6',
      main: '#0BD1D1',
      dark: '#09A7A7',
      contrastText: '#fff'
    },
    secondary: {
      light: '#FFF6CC',
      main: '#FFD400',
      dark: '#EBC91F',
      contrastText: '#fff'
    },
    warning: {
      light: '#FFD8DF',
      main: '#FE3A5E',
      dark: '#CB2E4B',
      contrastText: '#fff'
    },
    success: {
      light: '#DDFAFA',
      main: '#0BD1D1',
      dark: '#07B4B4',
      contrastText: '#fff'
    },
    error: {
      light: '#FFE7EC',
      main: '#FE3A5E',
      dark: '#303f9f',
      contrastText: '#fff'
    },
    info: {
      main: '#DDFAFA',
      dark: '#07B4B4',
      contrastText: '#0BD1D1'
    },
    grey: {
      100: '#d8d8d8',
      200: '#D7D7D7',
      300: '#C3C3C3',
      400: '#AFAFAF',
      500: '#9B9B9B',
      600: '#7C7C7C',
      700: '#5D5D5D',
      800: '#3E3E3E',
      900: '#1F1F1F'
    },
    text: {
      primary: '#000000',
      secondary: '#9B9B9B',
      disabled: '#464545',
      hint: '#D0D0D0',
      tertiary: '#a177ff',
      tertiaryLight: '#ece4ff',
      white: '#FFFFFF',
      button: '#9c9c9c'
    },
    box: {
      white: '#fff',
      boxShadow: {
        darkGray: 'rgba(195, 195, 195, 0.11)'
      }
    }
  },
  shape: {
    borderRadius: 2
  },
  // The current version of MUI uses elevations of [0.25[, we need to define
  // these 25 elevations to avoid the error "Material-UI: this elevation `8` is not implemented."
  shadows: [
    'none',
    '2px 2px 4px 0 rgba(195, 195, 195, 0.11)',
    '1px 5px 6px 0 rgba(0, 0, 0, 0.08)',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none'
  ],
  overrides: {
    MuiStepper: {
      root: {
        padding: '0px 20px'
      }
    },
    MuiStepLabel: {
      root: {
        marginRight: 30
      },
      label: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },

    MuiModal: {
      root: {
        // Has to be above everything else
        zIndex: 3000
      }
    },
    MuiButton: {
      root: {
        'text-transform': 'none',
        fontFamily: 'basier_circlemedium',
        'border-radius': '2px',
        'box-shadow': 'none !important'
      },
      sizeSmall: {
        minWidth: 32
      }
    },
    MuiInput: {
      root: {
        fontSize: 14
      },
      underline: {
        '&:before': {
          // "border-bottom": "1px solid #9b9b9b",
        }
      },
      input: {
        '&[type=number]::-webkit-inner-spin-button, &[type=number]::-webkit-outer-spin-button': {
          margin: 0,
          WebkitAppearance: 'none'
        }
      }
    },
    MuiSnackbar: {
      root: {
        zIndex: 1600
      }
    },
    MuiInputBase: {
      root: {
        '&$disabled': {
          '&:before': {
            borderBottomStyle: 'solid !important'
          }
        }
      },
      input: {
        height: 'auto'
      }
    },
    MuiTableCell: {
      root: {
        padding: '2px 4px',
        whiteSpace: 'nowrap'
      },
      body: {
        fontFamily: 'basier_circleregular',
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#000000'
      },
      head: {
        fontFamily: 'basier_circlemedium',
        fontSize: '12px',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#000000'
      }
    },
    MuiCheckbox: {
      root: {
        paddingRight: '8px',
        padding: '0px',
        color: 'rgba(0, 0, 0, 0.54)'
      }
    },
    MuiToggleButtonGroup: {
      root: {
        '&$selected': {
          boxShadow: 'none'
        }
      }
    },
    MuiTableRow: {
      root: {
        transition: 'backgroundColor .2s'
      },
      head: {
        height: '56px'
      },
      hover: {
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#e3e3e3'
        }
      }
    },
    MuiToggleButton: {
      root: {
        height: 'auto',
        padding: '8px 28px',
        color: '#9b9b9b',
        textTransform: 'none',
        border: '1px solid #9b9b9b',
        borderLeft: 'none',
        '&:hover': {
          backgroundColor: '#fff'
        },
        '&:first-child': {
          borderLeft: '1px solid #9b9b9b'
        },
        '&:last-child': {
          borderLeft: 'none'
        },
        '&$selected': {
          backgroundColor: primaryColor,
          color: '#fff',
          border: '1px solid #0bd1d1 !important',
          '&:hover': {
            backgroundColor: primaryColor
          }
        }
      },
      selected: {}
    },
    MuiInputLabel: {
      root: {
        whiteSpace: 'nowrap',
        fontSize: 14
      }
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: 0
      }
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '14px',
        backgroundColor: 'white',
        color: 'black',
        padding: '5px 10px',
        fontWeight: 'bold',
        borderRadius: 5,
        border: 'none'
      }
    },
    MuiCard: {
      root: {
        'box-shadow': 'none'
      }
    },
    MuiTab: {
      root: {
        'text-transform': 'initial'
      }
    },
    MuiMenuItem: {
      root: {
        'min-height': '48px !important'
      }
    },
    MuiSwitch: {
      switchBase: {
        color: grey200
      }
    },
    MuiListItem: {
      dense: {
        paddingTop: 0,
        paddingBottom: 0
      }
    },
    MuiChip: {
      colorPrimary: {
        backgroundColor: '#ddfafa',
        color: '#0bd1d1'
      }
    },
    MuiExpansionPanel: {
      root: {
        margin: '8px 0',
        boxShadow: 'none',
        '&:before': {
          display: 'none'
        },
        '&$expanded': {
          margin: '8px 0'
        }
      }
    }
  },
  typography: {
    useNextVariants: true,
    colorTextSecondary: '#9B9B9B',
    body1: {
      fontSize: '14px',
      fontFamily: 'basier_circleregular'
    },
    body2: {
      fontSize: '12px',
      fontFamily: 'basier_circleregular'
    },
    h1: {
      fontSize: '22px',
      fontWeight: 500,
      fontFamily: 'basier_circlemedium'
    },
    h2: {
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'basier_circlemedium'
    },
    h4: {
      fontSize: '14px',
      fontFamily: 'basier_circlemedium',
      fontWeight: 500
    },
    h5: {
      fontSize: '12px',
      fontFamily: 'basier_circlemedium',
      fontWeight: 500
    },
    h6: {
      fontSize: '16px',
      fontFamily: 'basier_circleregular',
      fontWeight: 600
    },
    subtitle1: {
      fontSize: '16px',
      fontFamily: 'basier_circleregular'
    },
    subtitle2: {
      fontSize: '12px',
      fontFamily: 'basier_circleregular'
    },
    title3: {
      fontSize: 17,
      fontFamily: 'basier_circleregular',
      fontWeight: 500
    },
    button: {
      fontSize: '14px'
    },
    fontFamily: [
      'basier_circleregular',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

export default theme;
