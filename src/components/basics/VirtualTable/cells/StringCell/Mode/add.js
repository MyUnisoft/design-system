import React, {
  useContext, useEffect, useCallback, useState
} from 'react';
import PropTypes from 'prop-types';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import styles from '../stringCell.module.scss';
import VirtualTableContext from '../../../context';

const AddStringCell = React.memo(({ data, dataKey }) => {
  const { send } = useContext(VirtualTableContext);
  const { id = -1 } = data;
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

  useEffect(() => {
    input.subscribe((text) => {
      send('input', { key: dataKey, id, data: text });
    });
    return input.unsubscribe;
  }, [input]);


  const handleInput = useCallback((e) => {
    const val = e.target.value;
    setValue(val);
    input$.next(val);
  }, []);

  return (
    <div>
      <input
        type="text"
        className={styles.input}
        onChange={handleInput}
        value={value}
      />
    </div>
  );
});

AddStringCell.propTypes = {
  data: PropTypes.object,
  dataKey: PropTypes.object
};

AddStringCell.defaultProps = {
  data: '',
  dataKey: ''
};

export default AddStringCell;
