import React, { memo } from 'react';
import { Chip } from "@material-ui/core";
import useStyles from '../styles';

const ViewChipCell = memo(({ data }) => {
  const styles = useStyles();

  const renderChips = Array.isArray(data) ? data.map((opt, index) => 
    <Chip
      classes={{ root: styles.chip }}
      key={index}
      id={opt.id}
      label={opt.operator ? `${opt.operator} ${opt.label}` : opt.label}
      color='primary'
      size='small'
    />
  ) : data;

  return <div>{renderChips}</div>;
});

export default ViewChipCell;