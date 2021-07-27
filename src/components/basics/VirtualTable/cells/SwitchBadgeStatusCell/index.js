import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import VirtualTableContext from '../../context';

import BadgeStatusCell from '../BadgeStatusCell';

function SwitchBadgeStatusCell({ data, dataKey, columnIndex }) {
  const valueData = _get(data, dataKey, []);
  const { config: { columns = [] } } = useContext(VirtualTableContext);

  const { switchKey } = columns[columnIndex];
  const indexValue = valueData.findIndex(el => el.key === switchKey);
  const customDataKey = indexValue !== undefined ? `${dataKey}[${indexValue}]` : dataKey;

  return (<BadgeStatusCell data={data} dataKey={customDataKey} columnIndex={columnIndex} />);
}

SwitchBadgeStatusCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default SwitchBadgeStatusCell;