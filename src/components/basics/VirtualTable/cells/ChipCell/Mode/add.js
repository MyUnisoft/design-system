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

const AddChipCell = memo(({ data, dataKey, columnIndex }) => {
  const {
    send,
    config
  } = useContext(VirtualTableContext);

  const { columns } = config;

  const { listOptions = [] } = columns[columnIndex];

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
      data: newValue
    });
  };

  useEffect(() => {
    input.subscribe((text) => changeInput(text));
    return input.unsubscribe;
  }, [input]);

  const handleInput = useCallback(value => input$.next(value), []);

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
});

AddChipCell.propTypes = {
  columnIndex: PropTypes.number,
  data: PropTypes.object,
  dataKey: PropTypes.string
};

AddChipCell.defaultProps = {
  columnIndex: 0,
  data: {},
  dataKey: ''
};

export default AddChipCell;
