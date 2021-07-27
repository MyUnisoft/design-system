import makeStyles from "@material-ui/core/styles/makeStyles";

export const useMultipleCellStyles = makeStyles(() => ({
  disabled: {
    opacity: '0.5'
  },
  input: {
    outline: 'none',
    padding: 0,
    border: 'none',
    width: '100%',
    background: 'transparent'
  },
  borderBottom: {
    borderBottom: '1px solid black'
  },
  borderRight: {
    borderRight: '1px solid black'
  },
  multipleCell: {
    border: 'none'
  }
}));
