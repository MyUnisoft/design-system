import React, { useCallback, useContext, useEffect, useState, memo } from 'react';
import VirtualTableContext from "../../../context";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import styles from "../amount.module.scss";
import cx from "classnames";
import { formatNumberAndRoundMaxTwoDigits } from "../../../../../../helpers/number";

const AmountEditCell = memo(({ data, dataKey, columnIndex }) => {

  const { send, config } = useContext(VirtualTableContext);
  const {
    selectableRowKey,
    columns
  } = config;

  useEffect(() => {
    changeInput(data[dataKey]);
  }, []);


  const {
    isDisabled = () => false,
    changeValue = () => {},
    formatAmount = formatNumberAndRoundMaxTwoDigits
  } = columns[columnIndex];

  const keyId = data[selectableRowKey];
  const [value, setValue] = useState(data[dataKey]);

  const input$ = new Subject();
  const input = input$
    .asObservable()
    .pipe(
      debounceTime(1500)
    );

  useEffect(() => {
    setValue(formatAmount((data[dataKey] !== undefined && data[dataKey] !== null) ? data[dataKey] : 0));
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



  const handleChangeInput = useCallback((e) => {
    const val = e.target.value;
    setValue(val);
    input$.next(val);
  }, []);

  return (
    <div className={styles.amountCell}>
      <input
        type="text"
        disabled={isDisabled(data)}
        className={cx(styles.input, { [styles.disabled]: isDisabled(data) })}
        onChange={handleChangeInput}
        value={value}
      />
    </div>
  );
});

AmountEditCell.propTypes = {
    
};

export default AmountEditCell;