import { combineReducers } from 'redux';
import _omit from 'lodash/omit';

import { formatTabId, getNewTab } from '../../helpers/tabs';

import form from './form/reducers';

// Child reducers
const reducers = combineReducers({
  form,
});

// Tabs reducer
const initial_state = {};

const tabsReducer = (state = initial_state, action, navigation_id) => {

  const tab_id = action.tab_id || getNewTab(action) || navigation_id;

  // Transmit action to correct tab state
  if (tab_id) {
    const id = formatTabId(tab_id);
    const { [id]: tab, ...others } = state;

    return {
      ...others,
      [id]: reducers(tab, action)
    };
  }

  return state;
};

export default tabsReducer;
