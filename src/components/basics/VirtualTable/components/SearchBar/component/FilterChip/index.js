import React from 'react';
import { Chip, IconButton, Select, MenuItem } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import AutosizeInput from 'react-input-autosize';

import { TYPE_CELL } from '../../../../../../../constants/typeCell';
import useStyles from './styles';

/**
 * Active filter component 
 */
const FilterChip = ({
  data = {},
  inputProps = {},
  name,
  onClose,
  value
}) => {
  const classes = useStyles();

  return (
    <Chip
      key={name}
      color="primary"
      className={classes.root}
      size="small"
      label={
        <>
          <label>{data.label}:</label>
          {data.type === TYPE_CELL.SELECT ? (
            <Select
              disableUnderline
              {...inputProps}
              name={name}
              className={classes.select}
              value={value}
            >
              {
                data.listData.map((element) => (
                  <MenuItem key={element.value} value={element.value}>{element.name}</MenuItem>
                ))
              }
            </Select>
          ) : (
            <AutosizeInput
              {...inputProps}
              name={name}
              className={classes.input}
              value={value}
            />
          )}
          <IconButton
            size="small" 
            onClick={() => onClose(name)}
          >
            <CloseIcon className={classes.closeIcon} />
          </IconButton>
        </>
      }
    />
  );
};

FilterChip.propTypes = {
  data: PropTypes.object,
  inputProps: PropTypes.object,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  value: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired
};

export default FilterChip;