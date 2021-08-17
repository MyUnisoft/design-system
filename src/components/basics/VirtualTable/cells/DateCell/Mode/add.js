import React, {
  useContext, useEffect, useCallback, useState
} from 'react';
import PropTypes from 'prop-types';
import VirtualTableContext from '../../../context';
import { TextField } from "@material-ui/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

const AddDateCell = ({ data, dataKey, columnIndex }) => {
  const { send, config } = useContext(VirtualTableContext);
  const { id = -1 } = data;
  const {
    columns
  } = config;

  const {
    changeValue = () => {}
  } = columns[columnIndex];

  const [value, setValue] = useState(data[dataKey]);

  const input$ = new Subject();
  const input = input$
    .asObservable()
    .pipe(
      debounceTime(1000)
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
      changeInput(text);
    });
    return input.unsubscribe;
  }, [input]);

  const changeInput = (newValue) => {
    send('input', { key: dataKey, id, data: newValue });
  };

  changeValue(data, changeInput);

  const handleChangeInput = useCallback((val) => {
    setValue(val);
    input$.next(val);
  }, []);

  return (
    <div>
      <TextField
        id="date"
        type="date"
        value={value}
        onChange={(e) => {
          handleChangeInput(e.target.value);
        }}
        InputProps={{ disableUnderline: true }}
      />
    </div>
  );
};

AddDateCell.propTypes = {
  data: PropTypes.object,
  columnIndex: PropTypes.number,
  dataKey: PropTypes.string
};

export default AddDateCell;
