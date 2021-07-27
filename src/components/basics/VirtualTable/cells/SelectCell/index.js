import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ViewSelectCell from './Mode/view';
import AddSelectCell from './Mode/add';
import EditSelectCell from './Mode/edit';
import AutoSelectorMode from "../AutoSelectorMode";

const SelectVTCell = memo(({ data, dataKey, columnIndex }) => {
  return <AutoSelectorMode
    data={data}
    dataKey={dataKey}
    columnIndex={columnIndex}
    viewComponent={<ViewSelectCell />}
    editComponent={<EditSelectCell />}
    addComponent={<AddSelectCell />}
  />;
});

SelectVTCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default SelectVTCell;
