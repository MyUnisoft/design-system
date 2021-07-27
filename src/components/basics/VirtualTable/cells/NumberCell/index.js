import React, { memo } from 'react';
import PropTypes from 'prop-types';

import AutoSelectorMode from '../AutoSelectorMode';
import ViewNumberCell from './Mode/view';
import AddNumberCell from './Mode/add';
import EditNumberCell from './Mode/edit';

const NumberCell = memo(({ data, dataKey, columnIndex }) => {

  return <AutoSelectorMode
    data={data}
    dataKey={dataKey}
    columnIndex={columnIndex}
    viewComponent={<ViewNumberCell />}
    editComponent={<EditNumberCell />}
    addComponent={<AddNumberCell />}
  />;
});

NumberCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default NumberCell;
