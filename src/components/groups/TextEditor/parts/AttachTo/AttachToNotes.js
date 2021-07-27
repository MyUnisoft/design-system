import React, { useEffect, useState } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import I18n from '../../../../../assets/I18n';
import moment from 'moment';
import Loader from '../../../../basics/Loader';

const useStyles = makeStyles(theme => ({
  divAttachToNotes: {
    marginTop: 10
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const AttachToNotes = ({
  defaultDossierId, notesInfo, setNotesInfo,
  defaultCycleId
}) => {
  const classes = useStyles();
  const [cycles, setCycles] = useState([]);
  const [dossierRevision, setDossierRevision] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeNotesInfo = (newNotesInfo) => {
    const nextNotesInfo = {
      ...notesInfo,
      ...newNotesInfo
    };

    setNotesInfo(nextNotesInfo);
  };

  const handleChangeDossierRevision = async (value) => {
    setIsLoading(true);
    handleChangeNotesInfo({ dossier_revision_id: value, cycle_da_dp_id: '' });
    const cycles = [];
    setCycles(cycles);
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      // Get list DA
      const reviews = [];
      const reviewAttr = (review, attr) => review[attr];
      const reviewLabel = (review) => {
        const type = reviewAttr(review, 'type');
        const startDate = reviewAttr(review, 'start_date');
        const endDate = reviewAttr(review, 'end_date');
        const bounds = `${I18n.t('common.fromLowerCase')} ${moment(startDate).format('DD/MM/YYYY')} ${I18n.t('common.to')}  ${moment(endDate).format('DD/MM/YYYY')}`;
        return `${I18n.t(`dadp.review.types.${type}`)} ${bounds}`;
      };

      const dossierRevision = reviews.map(review => ({
        id: review.id_dossier_revision,
        label: reviewLabel(review),
        start_date: review.start_date,
        end_date: review.end_date
      }));

      setDossierRevision(dossierRevision);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (dossierRevision.length && defaultDossierId) {
      handleChangeDossierRevision(defaultDossierId);
    }
  }, [dossierRevision]);

  useEffect(() => {
    if (cycles.length) {
      if (defaultCycleId && cycles.find(cycle => cycle.cycle_da_dp_id === defaultCycleId)) {
        handleChangeNotesInfo({ cycle_da_dp_id: defaultCycleId });
      } else {
        handleChangeNotesInfo({ cycle_da_dp_id: cycles[0].cycle_da_dp_id });
      }
    }
  }, [cycles]);

  return (
    <div className={classes.divAttachToNotes}>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="dossier-revision">
          { I18n.t('commentBox.dossierRevision') }
          {isLoading && <Loader size={15} inline />}
        </InputLabel>
        <Select
          autoWidth
          labelId="dossier-revision"
          value={notesInfo.dossier_revision_id || ''}
          onChange={e => handleChangeDossierRevision(e.target.value)}
        >
          {dossierRevision.map(item => (
            <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel shrink id="cycles">
          { I18n.t('commentBox.cycle') }
          {isLoading && <Loader size={15} inline />}
        </InputLabel>
        <Select
          autoWidth
          labelId="cycles"
          value={notesInfo.cycle_da_dp_id || ''}
          onChange={e => handleChangeNotesInfo({ cycle_da_dp_id: e.target.value })}
        >
          {cycles.map(item => (
            <MenuItem key={item.cycle_da_dp_id} value={item.cycle_da_dp_id}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

AttachToNotes.defaultProps = ({
  defaultDossierId: 0,
  defaultCycleId: 0
});
AttachToNotes.propTypes = {
  defaultDossierId: PropTypes.number,
  notesInfo: PropTypes.object.isRequired,
  setNotesInfo: PropTypes.func.isRequired,
  defaultCycleId: PropTypes.number,
  getReviewsForZoneComments: PropTypes.func.isRequired,
  getCyclesForZoneComments: PropTypes.func.isRequired
};

export default AttachToNotes;
