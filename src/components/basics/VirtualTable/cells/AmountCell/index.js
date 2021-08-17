import React, { memo } from 'react';
import PropTypes from 'prop-types';
import AutoSelectorMode from "../AutoSelectorMode";
import AmountViewCell from "./Mode/view";
import AmountEditCell from "./Mode/edit";
import AmountAddCell from "./Mode/add";

const AmountCell = memo(function AmountCell({ data, dataKey, columnIndex }) {
  return (
    <AutoSelectorMode
      data={data}
      dataKey={dataKey}
      columnIndex={columnIndex}
      viewComponent={<AmountViewCell />}
      editComponent={<AmountEditCell />}
      addComponent={<AmountAddCell />}
    />
  );
});

AmountCell.propTypes = {
  data: PropTypes.object.isRequired,
  dataKey: PropTypes.string.isRequired,
  columnIndex: PropTypes.number.isRequired
};

export default AmountCell;
