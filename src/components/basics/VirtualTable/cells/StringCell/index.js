import React from 'react';
import PropTypes from 'prop-types';
import ViewStringCell from './Mode/view';
import AddStringCell from './Mode/add';
import EditStringCell from './Mode/edit';
import AutoSelectorMode from "../AutoSelectorMode";

const StringCell = React.memo(function StringCell({ data, dataKey, columnIndex }) {
  return <AutoSelectorMode
    data={data}
    dataKey={dataKey}
    columnIndex={columnIndex}
    viewComponent={<ViewStringCell />}
    editComponent={<EditStringCell />}
    addComponent={<AddStringCell />}
  />;
});

StringCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default StringCell;
