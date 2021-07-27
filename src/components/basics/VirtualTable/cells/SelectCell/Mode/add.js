import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import styles from '../selectCell.module.scss';
import VirtualTableContext from '../../../context';
import I18n from '../../../../../../assets/I18n';
import { NO_SELECT } from '../../../../../../constants/data';

const AddSelectCell = memo(({ data, dataKey, columnIndex }) => {
  const {
    config, send
  } = useContext(VirtualTableContext);
  const {
    selectableRowKey = 'id',
    columns = []
  } = config;
  const {
    changeValue = () => {},
    isDisabled = () => false,
    listData
  } = columns[columnIndex];

  const changeInput = (newValue) => {
    send('input', {
      key: dataKey,
      id: data.id,
      data: newValue
    });
  };

  changeValue(data, changeInput);

  const valueCell = (data[dataKey] !== null) ? data[dataKey] : NO_SELECT;
  return (
    <div className={styles.selectCell}>
      <Select
        disableUnderline
        id={`${data[selectableRowKey]}_selectCell_${columnIndex}`}
        value={valueCell}
        classes={{
          select: (valueCell === NO_SELECT ? styles.input : null),
          disabled: styles.disabled,
          icon: styles.icon
        }}
        disabled={isDisabled(data)}
        onChange={(e) => {
          changeInput(e.target.value);
        }}
      >
        <MenuItem value={NO_SELECT} disabled>{I18n.t('common.select')}</MenuItem>
        {
          listData.map((element, i) => (
            <MenuItem key={i} value={element.value}>{element.name}</MenuItem>
          ))
        }
      </Select>
    </div>
  );
});

AddSelectCell.propTypes = {
  data: PropTypes.object.isRequired,
  dataKey: PropTypes.string.isRequired,
  columnIndex: PropTypes.number.isRequired
};

export default AddSelectCell;
