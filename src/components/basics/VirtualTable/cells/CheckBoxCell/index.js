import React from 'react';
import PropTypes from 'prop-types';
import EditCheckBoxCell from './Mode/edit';

// TODO refacto with autoSelectorMode
const CheckBoxCell = React.memo(function CheckBoxCell({ data, dataKey, columnIndex }) {

  return <EditCheckBoxCell data={data} dataKey={dataKey} columnIndex={columnIndex} />;
});

CheckBoxCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default CheckBoxCell;
