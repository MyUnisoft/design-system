import React from 'react';

import PropTypes from 'prop-types';

import I18n from '../../../../../assets/I18n';
import useStyles from './styles';

const AddLine = ({ onAdd, label }) => {
  const styles = useStyles();

  return (
    <div className={styles.root} onClick={onAdd}>
      {label}
    </div>
  );
};

AddLine.propTypes = {
  label: PropTypes.string,
  onAdd: PropTypes.func.isRequired
};

AddLine.defaultProps = {
  label: I18n.t('common.addRow')
};

export default AddLine;
