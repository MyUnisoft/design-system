import { useContext, cloneElement, memo } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import { ROW_TYPE } from '../utils';
import VirtualTableContext from '../context';

const AutoSelectorMode = memo(function AutoSelectorMode({ data, dataKey, columnIndex, viewComponent, editComponent, addComponent }) {
  const {
    state, context, config
  } = useContext(VirtualTableContext);
  const { selectedRows } = context;
  const {
    selectableRowKey = 'id',
    columns = []
  } = config;
  const { rowType = ROW_TYPE.VIEW } = data;
  const { editable = true } = columns[columnIndex];

  switch (rowType) {
  case ROW_TYPE.NEW:
    return cloneElement(addComponent, { data , dataKey, columnIndex });
  case ROW_TYPE.VIEW:
  case ROW_TYPE.EDIT:
    if ((state === 'EDIT' || state === 'PERMANENT_EDIT') && selectedRows.has(data[selectableRowKey]) && editable) {
      return cloneElement(editComponent, { data , dataKey, columnIndex });
    }
    // eslint-disable-next-line no-fallthrough
  default:
    return cloneElement(viewComponent, {
      data: _get(data, dataKey),
      arrayData: Array.isArray(data[dataKey]) && data[dataKey],
      dataKey,
      columnIndex
    });
  }
});

AutoSelectorMode.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dataKey: PropTypes.string.isRequired,
  viewComponent: PropTypes.node.isRequired,
  editComponent: PropTypes.node.isRequired,
  addComponent: PropTypes.node.isRequired
};

export default AutoSelectorMode;
