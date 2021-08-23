import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  commentIcon: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  wrapperContainer: {
    border: 'solid 1px #d0d0d0',
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 0 0 0'
  },
  toolbarContainer: {
    padding: '5px 6px',
    '&:global .rdw-option-wrapper': {
      minWidth: 'unset'
    }
  },
  editorContainer: {
    padding: '11px',
    height: 'unset'
  },
  editor: {
    paddingBottom: '16px',
    zIndex: 2
  },
  root: {
    overflowY: 'visible'
  },
  paper: {
    overflowY: 'visible'
  },
  badge: {
    backgroundColor: '#ffd400',
    position: 'absolute',
    lineHeight: '8px',
    borderRadius: '10px',
    padding: '4px',
    height: '8px',
    width: '8px',
    transform: 'translate(8px, -8px)',
    color: 'white',
    boxSizing: 'content-box'
  },
  containerComment: {
    overflow: 'auto',
    maxHeight: '200px'
  },
  separatorComment: {
    padding: '4px 0',
    borderBottom: '#e7e7e7 1px solid'
  }
}));

export default useStyles;
