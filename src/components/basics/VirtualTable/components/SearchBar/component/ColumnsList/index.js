import React from 'react';
import { MenuList, MenuItem, Popper, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './styles';

/**
 * Dropdown of possible filters
 */
const ColumnsList = ({
  columns = {},
  filters = new Map(),
  menuRef,
  onClick,
  ...other
}) => {
  const classes = useStyles();

  return (
    <Popper
      placement="bottom-start"
      {...other}
    >
      <Paper
        elevation={2}
      >
        <MenuList
          ref={menuRef}
        >
          {Object.values(columns).map((v) => (
            <MenuItem
              className={classes.menuItem}
              disabled={filters.has(v.value)}
              key={v.value}
              onClick={() => onClick(v.value)}
            >{v.label}</MenuItem>)
          )}
        </MenuList>
      </Paper>
    </Popper>
  );
};

ColumnsList.propTypes = {
  columns: PropTypes.object,
  filters: PropTypes.object,
  menuRef: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ColumnsList;