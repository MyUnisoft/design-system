import { useEffect, useReducer } from 'react';

import { searchBarActions } from './constants';
import { parseConfig } from './utils';

const searchReducer = (state, action) => {
  switch (action.type) {
  case searchBarActions.SET_CONFIG:
    return {
      ...state,
      columns: action.data,
      filters: new Map()
    };
  case searchBarActions.ADD_FILTER: 
  {
    const newFilters = new Map([ ...state.filters]);
    newFilters.set(action.key, '');
    return {
      ...state,
      focusedFilter: action.key,
      search: '',
      filters: newFilters,
      unmappedFilters: [...newFilters]
    };
  }
  case searchBarActions.UPDATE_FILTER:
  {
    const newFilters = new Map([ ...state.filters]);
    newFilters.set(action.key, action.value);
    return {
      ...state,
      filters: newFilters,
      unmappedFilters: [...newFilters]
    };
  }
  case searchBarActions.DELETE_FILTER: {
    const newFilters = new Map([ ...state.filters]);
    newFilters.delete(action.key);
    return {
      ...state,
      filters: newFilters,
      unmappedFilters: [...newFilters]
    };
  }
  case searchBarActions.CHANGE_SEARCH:
    return {
      ...state,
      search: action.value
    };
  default:
    return state;
  }
};

const initialState = {
  columns: {},
  filters: new Map(),
  focusedFilter: null,
  unmappedFilters: [],
  search: ''
};

/**
 * Hook to manage the search state
 */
function useSearchBar({ columns }) {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  useEffect(() => {
    dispatch({
      type: searchBarActions.SET_CONFIG,
      data: parseConfig(columns)
    });
  }, []);

  return [state, dispatch];
}

export default useSearchBar;