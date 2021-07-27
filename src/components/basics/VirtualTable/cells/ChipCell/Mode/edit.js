import React, {
  memo,
  useContext,
  useEffect,
  useCallback
} from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, Chip } from "@material-ui/core";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import VirtualTableContext from '../../../context';

const EditChipCell = memo(({ data, dataKey, columnIndex }) => {
  const {
    send,
    config
  } = useContext(VirtualTableContext);

  const {
    selectableRowKey,
    columns
  } = config;

  const {
    listOptions = []
  } = columns[columnIndex];

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
      data: newValue
    });
  };

  useEffect(() => {
    input.subscribe((text) => changeInput(text));
    return input.unsubscribe;
  }, [input]);

  const handleInput = useCallback(value => input$.next(value), []);

  if (Array.isArray(data[dataKey])) {
    return (
      <Autocomplete
        multiple
        id="chip-cell-virtual-table"
        options={listOptions}
        getOptionLabel={({ operator, label }) => operator
          ? `${operator} ${label}`
          : label
        }
        defaultValue={data[dataKey]}
        renderInput={params => <TextField {...params} />}
        filterSelectedOptions={true}
        ChipProps={{ size: 'small' }}
        onChange={(_, currentSelection) => handleInput(currentSelection)}
        renderOption={({ operator, label }) => (
          <Chip 
            label={operator ? `${operator} ${label}` : label} 
            size='small'
          />
        )}
      />
    );  
  }
  return <div>{data[dataKey]}</div>;
});

EditChipCell.propTypes = {
  columnIndex: PropTypes.number,
  data: PropTypes.object,
  dataKey: PropTypes.string
};

EditChipCell.defaultProps = {
  columnIndex: 0,
  data: {},
  dataKey: ''
};

export default EditChipCell;
