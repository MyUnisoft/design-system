import React, {
  useContext, useEffect, useState
} from 'react';
import PropTypes from 'prop-types';
import VirtualTableContext from '../../../context';
import cx from 'classnames';
import useStyles from '../styles';

const EditCheckBoxCell = ({ data, dataKey, columnIndex }) => {
  const { send, config } = useContext(VirtualTableContext);
  const classes = useStyles();
  const {
    selectableRowKey,
    columns = []
  } = config;

  const {
    changeValue = () => {},
    isDisabled = () => false,
    variant= 'primary',
    changeOtherColumnOnClick
  } = columns[columnIndex];

  const keyId = data[selectableRowKey];
  const [value, setValue] = useState(data[dataKey]);

  const changeInput = (valueInput) => {
    if(changeOtherColumnOnClick){
      send('input', {
        key: changeOtherColumnOnClick.keyColumn,
        selectableRowKey,
        keyId,
        data: changeOtherColumnOnClick.value
      });
    }
    send('input', {
      key: dataKey,
      selectableRowKey,
      keyId,
      data: valueInput
    });
  };

  useEffect(() => {
    if (data[dataKey] !== undefined) {
      setValue(data[dataKey]);
    } else {
      setValue('');
    }
  }, [data, dataKey]);

  useEffect(() => {
    changeValue(data, changeInput);
  },[data]);

  return (
  // TODO refacto with component
    <div className={classes.cbCell}>
      <div className={classes.checkbox}>
        <label htmlFor={`${data[selectableRowKey]}_${dataKey}`} className={classes.container}>
          <input
            type="checkbox"
            id={`${data[selectableRowKey]}_${dataKey}`}
            name={`${data[selectableRowKey]}_${dataKey}`}
            checked={value}
            disabled={isDisabled(data)}
            onChange={(e) => {
              changeInput(e.target.checked);
            }}
          />
          <span className={cx(classes.checkmark, (variant === 'error' ? 'checkmarkError' : 'checkmarkPrimary'))} />
        </label>
      </div>
    </div>
  );
};

EditCheckBoxCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default EditCheckBoxCell;
