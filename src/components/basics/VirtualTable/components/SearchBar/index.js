import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classname from 'classnames';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import _debounce from 'lodash/debounce';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';

import ColumnsList from './component/ColumnsList';
import FilterChip from './component/FilterChip';
import MainSearch from './component/MainSearch';
import useSearchBar from './hooks';
import useStyles from './styles';
import { searchBarActions, TRIGGER_KEY } from './constants';

const SearchBar = ({
  columns: columnsProps,
  onChange
}) => {
  const classes = useStyles();

  const anchorEl = useRef();
  const menuRef = useRef();
  const mainInputRef = useRef();
  const [{ filters, focusedFilter, search, columns, unmappedFilters }, dispatch] = useSearchBar({
    columns: columnsProps
  });
  const [isFocused, setIsFocused] = useState(false);
  const isOpen = useMemo(() => search === TRIGGER_KEY, [search]);
  const unfold = useMemo(() => !_isEmpty(filters) || isFocused || search, [filters, isFocused, search]);
  
  const filterCallback = useCallback(
    _debounce((unmappedFilters, search) => {
      onChange(unmappedFilters, search);
    }, 500),
    []
  );

  useEffect(() => {
    if (onChange) {
      filterCallback(unmappedFilters, search);
    }
  }, [search, unmappedFilters]);

  function handleChange(e) {
    dispatch({
      type: searchBarActions.UPDATE_FILTER,
      key: e.target.name,
      value: e.target.value
    });
  }

  function handleClose(key) {
    dispatch({
      type: searchBarActions.DELETE_FILTER,
      key
    });
    focusMainInput();
  }

  function handleSearchChange(e) {
    dispatch({
      type: searchBarActions.CHANGE_SEARCH,
      value: e.target.value
    });
  }

  function handleClick(key) {
    dispatch({
      type: searchBarActions.ADD_FILTER,
      key
    });
  }

  function focusMainInput() {
    mainInputRef.current?.focus();
  }

  return (
    <div
      className={classname('search-bar', classes.root, { unfold })}
    >
      <Button
        className={classes.button}
        color="primary"
        onClick={focusMainInput}
        variant="contained"
      >
        <SearchIcon />
      </Button>
      <div
        className={classes.termsWrapper}
      >
        {_map(Array.from(filters.entries()), ([ key, value ]) => (
          <FilterChip
            data={columns[key]}
            inputProps={{
              autoFocus: focusedFilter === key,
              onChange: handleChange
            }}
            key={key}
            name={key}
            onClose={handleClose}
            value={value}
          />
        ))}
        <div
          className={classes.inputWrapper}
          ref={anchorEl}
        >
          <MainSearch
            className={classname(classes.input, classes.mainInput)}
            isMenuOpen={isOpen}
            mainInputRef={mainInputRef}
            menuRef={menuRef}
            onBlur={() => setIsFocused(false)}
            onChange={handleSearchChange}
            onFocus={() => setIsFocused(true)}
            value={search}
          />
          <ColumnsList
            anchorEl={anchorEl.current}
            columns={columns}
            filters={filters}
            menuRef={menuRef}
            onClick={handleClick}
            open={isOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;