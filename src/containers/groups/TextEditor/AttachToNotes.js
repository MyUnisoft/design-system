import { connect } from 'react-redux';
import { getCurrentTabState } from '../../../helpers/tabs';
import AttachToNotes from '../../../components/groups/TextEditor/parts/AttachTo/AttachToNotes';

const mapStateToProps = (state) => {
  const { dadp } = getCurrentTabState(state);
  const defaultDossierId = dadp?.reviews?.selectedId;
  const defaultCycleId = dadp?.cycles?.selectedId;

  return {
    defaultDossierId,
    defaultCycleId
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps, mapDispatchToProps
)(AttachToNotes);
