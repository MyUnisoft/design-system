import React, {
  useContext, useEffect, useCallback, useState
} from 'react';
import PropTypes from 'prop-types';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import cx from 'classnames';
import _isNil from 'lodash/isNil';
import styles from '../stringCell.module.scss';
import VirtualTableContext from '../../../context';

const EditStringCell = React.memo(function EditStringCell({ data, dataKey, columnIndex }) {
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
    if (!_isNil(data[dataKey])) {
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


  const handleInput = useCallback((e) => {
    const val = e.target.value;
    setValue(val);
    input$.next(val);
  }, []);

  return (
    <div className={styles.stringCell}>
      <input
        type="text"
        disabled={isDisabled(data)}
        className={cx(styles.input, { [styles.disabled]: isDisabled(data) })}
        onChange={handleInput}
        value={value}
      />
    </div>
  );
});

EditStringCell.propTypes = {
  columnIndex: PropTypes.number,
  data: PropTypes.object,
  dataKey: PropTypes.object
};

EditStringCell.defaultProps = {
  columnIndex: 0,
  data: '',
  dataKey: ''
};

export default EditStringCell;
