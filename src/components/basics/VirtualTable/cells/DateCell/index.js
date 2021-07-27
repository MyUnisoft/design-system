import React, { memo } from 'react';
import PropTypes from 'prop-types';
import EditDateCell from "./Mode/edit";
import ViewDateCell from "./Mode/view";
import AutoSelectorMode from "../AutoSelectorMode";
import AddDateCell from "./Mode/add";

const DateCell = memo(({ data, dataKey, columnIndex }) => {
  return (
    <AutoSelectorMode
      data={data}
      columnIndex={columnIndex}
      dataKey={dataKey}
      viewComponent={<ViewDateCell />}
      editComponent={<EditDateCell />}
      addComponent={<AddDateCell />}
    />
  );
});

DateCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default DateCell;
