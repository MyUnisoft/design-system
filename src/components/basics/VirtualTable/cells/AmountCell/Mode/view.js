import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';

import { formatNumber } from "../../../../../../helpers/number";
import styles from '../amount.module.scss';
import VirtualTableContext from "../../../context";

function AmountViewCell({ data, columnIndex }){
  const { config: { columns } } = useContext(VirtualTableContext);

  const {
    formatAmount = formatNumber
  } = columns[columnIndex];

  return (
    <div className={styles.amountCell}>{formatAmount(data)}</div>
  );
}

AmountViewCell.propTypes = {
  data: PropTypes.object,
  columnIndex: PropTypes.number
};

AmountViewCell.defaultProps = {
  data: {},
  columnIndex: -1
};

export default memo(AmountViewCell);
