import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Badge, IconButton } from "@material-ui/core";
import { useWindowState } from '../../../../../hooks/useWindowState';
import Window from '../../../Window';
import useStyles from './styles';

const AttachmentCell = memo(({ data, dataKey }) => {
  const { button } = useStyles();
  const overview = useWindowState();
  const [pjNumber, setPJNumber] = useState(0);

  const documents = Array.isArray(data[dataKey]) ? data[dataKey] : [data[dataKey]];

  useEffect(() => {
    setPJNumber(documents.length);
  }, []);

  const openOverview = () => overview.open({ documents }, true);

  return (
    <>
      {pjNumber > 0 && (
        <IconButton
          onClick={openOverview}
          classes={{ root: button }}
        >
          <Badge 
            badgeContent={pjNumber} 
            color="primary" 
          />
        </IconButton>
      )}
      {overview.props.open && (
        <Window
          path="/overview"
          window_id="overview"
          features={`width=${window.innerWidth / 2}, left=${window.screenX + (window.innerWidth / 2)}`}
          {...overview.props}
        />
      )}
    </>
  );
});

AttachmentCell.propTypes = {
  data: PropTypes.object.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default AttachmentCell;
