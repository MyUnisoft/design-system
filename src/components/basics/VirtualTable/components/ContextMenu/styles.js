import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  contextMenuCell: {
    cursor: 'context-menu',
    display: 'contents',
    height: '100%',
    width: '100%',
    '&::before': {
      content: "'\\200b"
    }
  }
}
));

export default useStyles;
