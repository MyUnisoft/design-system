import React, { memo, useContext, useEffect, useCallback, useState } from 'react';
import { TextField, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import VirtualTableContext from '../../../context';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import useStyles from '../styles';

const AutocompleteEdit = memo(({ data, dataKey, columnIndex }) => {
  const [currentValue, setValue] = useState(data[dataKey]);
  const styles = useStyles();
  const { send, config } = useContext(VirtualTableContext);
  const {
    selectableRowKey = 'id',
    columns = []
  } = config;
  const {
    optionList = [],
    disableClearable = true
  } = columns[columnIndex];

  const _options = typeof optionList === 'function'
    ? optionList()
    : optionList;

  const keyId = data[selectableRowKey];

  const input$ = new Subject();
  const input = input$
    .asObservable()
    .pipe(
      debounceTime(300)
    );

  const changeInput = (newValue) => {
    send('input', {
      key: dataKey,
      selectableRowKey,
      keyId,
      data: newValue?.value
    });
  };

  useEffect(() => {
    input.subscribe((text) => changeInput(text));
    return input.unsubscribe;
  }, [input]);

  const handleInput = useCallback(value => {
    setValue(value?.value);
    input$.next(value);
  }, []);

  return (
    <Autocomplete
      id="autocomplete-cell-edit-vt"
      size="small"
      options={_options}
      getOptionLabel={({ label }) => label}
      defaultValue={_options.find(({ value }) => value === data[dataKey])}
      renderInput={params => <TextField {...params} InputProps={{ ...params.InputProps, disableUnderline: true }} />}
      renderOption={({ label, value }) => (
        <Typography 
          color={currentValue === value ? 'primary' : 'default'}
        >
          {label}
        </Typography>
      )}
      onChange={(_, val) => handleInput(val)}
      classes={{ inputRoot: styles.input }}
      freeSolo
      disableClearable={disableClearable}
    />  
  );
});

export default AutocompleteEdit;