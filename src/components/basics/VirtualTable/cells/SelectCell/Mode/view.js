import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';
import VirtualTableContext from '../../../context';

const ViewSelectCell = memo(({ data, columnIndex }) => {
  const { config } = useContext(VirtualTableContext);
  const { columns = [] } = config;
  const { listData } = columns[columnIndex];

  const currentCellValue = listData.find(({ value }) => value === data);

  return <div>{currentCellValue?.name}</div>;
});

ViewSelectCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired
};

export default ViewSelectCell;
