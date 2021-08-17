import React, {
  useContext, useEffect, useState, memo
} from 'react';
import PropTypes from 'prop-types';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import cx from 'classnames';
import styles from '../numberCell.module.scss';
import VirtualTableContext from '../../../context';

const EditNumberCell = memo(function EditNumberCell({ data, dataKey, columnIndex }) {
  const { send, config } = useContext(VirtualTableContext);
  const {
    selectableRowKey,
    columns
  } = config;

  const {
    isDisabled = () => false,
    changeValue = () => {}
  } = columns[columnIndex];

  const keyId = data[selectableRowKey];
  const [value, setValue] = useState(data[dataKey]);

  const input$ = new Subject();
  const input = input$
    .asObservable()
    .pipe(
      debounceTime(300)
    );

  useEffect(() => {
    if (data[dataKey] !== undefined) {
      setValue(data[dataKey]);
    } else {
      setValue('');
    }
  }, [data, dataKey]);

  const changeInput = (newValue) => {
    send('input', {
      key: dataKey,
      selectableRowKey,
      keyId,
      data: newValue
    });
  };

  useEffect(() => {
    input.subscribe((text) => {
      changeInput(text);
    });
    return input.unsubscribe;
  }, [input]);

  changeValue(data, changeInput);


  const handleInput = (e) => {
    const val = e.target.value;
    setValue(val);
    input$.next(val);
  };

  return (
    <div className={styles.numberCell}>
      <input
        type="number"
        disabled={isDisabled(data)}
        className={cx(styles.input, { [styles.disabled]: isDisabled(data) })}
        onChange={handleInput}
        value={value}
      />
    </div>
  );
});

EditNumberCell.propTypes = {
  columnIndex: PropTypes.number,
  data: PropTypes.object,
  dataKey: PropTypes.string
};

EditNumberCell.defaultProps = {
  columnIndex: 0,
  data: {},
  dataKey: ''
};

export default EditNumberCell;
