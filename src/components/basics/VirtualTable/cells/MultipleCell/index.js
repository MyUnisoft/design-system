import React from 'react';
import PropTypes from 'prop-types';
import AddStringCell from './Mode/add';
import AutoSelectorMode from '../AutoSelectorMode';
import EditStringCell from '../StringCell/Mode/edit';
import ViewMultipleCell from './Mode/view';

// TODO add view and refactor components after back end will be done. Need to be finish before use
const MultipleCell = React.memo(({ data, dataKey, columnIndex }) => {
  return <AutoSelectorMode
    data={data}
    dataKey={dataKey}
    columnIndex={columnIndex}
    viewComponent={<ViewMultipleCell />}
    editComponent={<EditStringCell />}
    addComponent={<AddStringCell />}
  />;
});

MultipleCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default MultipleCell;
