import React, { memo, useContext, useEffect, useCallback, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, Typography } from '@material-ui/core';
import VirtualTableContext from '../../../context';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import useStyles from '../styles';

const AutocompleteAdd = memo(function AutocompleteAdd({ data, dataKey, columnIndex }) {
  const [currentValue, setValue] = useState(data[dataKey]);
  const styles = useStyles();
  const { send, config } = useContext(VirtualTableContext);
  const { columns = [] } = config;
  const {
    optionList = [],
    disableClearable = true
  } = columns[columnIndex];

  const _options = typeof optionList === 'function'
    ? optionList()
    : optionList;

  const input$ = new Subject();
  const input = input$
    .asObservable()
    .pipe(
      debounceTime(300)
    );

  const changeInput = (newValue) => {
    send('input', {
      key: dataKey,
      id: data.id,
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
      id="autocomplete-cell-add-vt"
      size="small"
      options={_options}
      getOptionLabel={({ label }) => label}
      renderInput={params => <TextField {...params}/>}
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

export default AutocompleteAdd;