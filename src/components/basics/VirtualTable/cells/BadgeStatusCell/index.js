import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import useStyles from "./styles";
import BadgeStatus from '../../../BadgeStatus';
import VirtualTableContext from '../../context';
import ContextMenu from '../../components/ContextMenu';
import { NO_BADGE } from '../../../../../constants/badgeStatus';

function BadgeStatusCell({ data, dataKey, columnIndex }) {

  const classes = useStyles();
  const valueData = _get(data, dataKey, {});
  const { config: { columns = [] } } = useContext(VirtualTableContext);
  
  const listActionAllow = useMemo(() => {
    const {
      actionsByStatus
    } = columns[columnIndex];

    if(!valueData) {
      return actionsByStatus?.filter(element => element.status.includes(NO_BADGE));
    }

    return actionsByStatus?.filter(element => element.status.includes(valueData.status));
  }, [columns, columnIndex, valueData]);

  return (
    <div className={classes.container}>
      <ContextMenu listAction={listActionAllow} canClick={listActionAllow?.length > 0} data={data}>
        <BadgeStatus status={valueData?.status} value={valueData?.value}/>
      </ContextMenu>
    </div>
  );
}

BadgeStatusCell.propTypes = {
  columnIndex: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default BadgeStatusCell;