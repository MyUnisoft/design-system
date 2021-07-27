import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ViewChipCell from './Mode/view';
import AddChipCell from './Mode/add';
import EditChipCell from './Mode/edit';
import AutoSelectorMode from "../AutoSelectorMode";

const ChipCell = memo(({ data, dataKey, columnIndex }) => {
  return <AutoSelectorMode
    data={data}
    dataKey={dataKey}
    columnIndex={columnIndex}
    viewComponent={<ViewChipCell />}
    editComponent={<EditChipCell />}
    addComponent={<AddChipCell />}
  />;
});

ChipCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default ChipCell;
