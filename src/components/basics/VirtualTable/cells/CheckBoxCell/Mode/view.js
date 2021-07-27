import React, { memo } from 'react';
import PropTypes from 'prop-types';
import useStyles from '../styles';

const ViewCheckBoxCell = memo(({ data }) => {
  const classes = useStyles();
  return (
  // TODO refacto with component
    <div className={classes.cbCell}>
      <div className={classes.checkbox}>
        <label className={classes.container}>
          <input
            type="checkbox"
            checked={data}
          />
          <span className={classes.checkmark} />
        </label>
      </div>
    </div>
  );
});

ViewCheckBoxCell.propTypes = {
  data: PropTypes.object.isRequired
};

export default ViewCheckBoxCell;
