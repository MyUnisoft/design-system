import React, { memo } from 'react';
import PropTypes from 'prop-types';
import AutoSelectorMode from "../AutoSelectorMode";
import AutocompleteView from './Mode/view';
import AutocompleteEdit from './Mode/edit';
import AutocompleteAdd from './Mode/add';

const AutocompleteCell = memo(({ data, dataKey, columnIndex }) => (
  <AutoSelectorMode
    data={data}
    dataKey={dataKey}
    columnIndex={columnIndex}
    viewComponent={<AutocompleteView />}
    editComponent={<AutocompleteEdit />}
    addComponent={<AutocompleteAdd />}
  />
));

AutocompleteCell.propTypes = {
  data: PropTypes.object.isRequired,
  dataKey: PropTypes.string.isRequired,
  columnIndex: PropTypes.number.isRequired
};

export default AutocompleteCell;