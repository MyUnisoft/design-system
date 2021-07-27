import { openDialog as openConfirmationDialog, closeDialog } from '../../../redux/dialogs';
import { connect } from 'react-redux';
import TextEditor from '../../../components/groups/TextEditor';

const mapDispatchToProps = (dispatch) => ({
  openConfirmationDialog,
  closeDialog,
  postCycleComment: () => dispatch(),
});

export default connect(
  null,
  mapDispatchToProps
)(TextEditor);
