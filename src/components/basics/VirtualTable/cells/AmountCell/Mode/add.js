import React, { useCallback, useContext, useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import VirtualTableContext from "../../../context";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import styles from "../amount.module.scss";
import { formatNumberAndRoundMaxTwoDigits } from "../../../../../../helpers/number";

const AmountAddCell = memo(function AmountAddCell({ data, dataKey, columnIndex }) {
  const { send, config: { columns } } = useContext(VirtualTableContext);
  const { id = -1 } = data;
  const [value, setValue] = useState(data[dataKey]);

  const input$ = new Subject();
  const input = input$
    .asObservable()
    .pipe(
      debounceTime(1500)
    );

  const { formatAmount = formatNumberAndRoundMaxTwoDigits } = columns[columnIndex];


  useEffect(() => {
    setValue((data[dataKey] !== undefined && data[dataKey] !== null) ? formatAmount(data[dataKey]) : '');
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
    <div className={styles.amountCell}>
      <input
        type="text"
        className={styles.input}
        onChange={handleInput}
        value={value}
      />
    </div>
  );
});

AmountAddCell.propTypes = {
  data: PropTypes.object,
  dataKey: PropTypes.string,
  columnIndex: PropTypes.number
};

AmountAddCell.defaultProps = {
  data: {},
  dataKey: '',
  columnIndex: -1
};

export default AmountAddCell;