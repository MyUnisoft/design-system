import { CALL_HISTORY_METHOD, LOCATION_CHANGE } from 'connected-react-router';
import { TAB_REGEX } from '../constants/regex';

// Functions
const formatTabId = (tabId) =>
  tabId.toString() === '-2' ? 'collab' : tabId.toString();

/**
 * @param {*} state
 * @param {*} tabId
 */
const getTabState = (state, tabId) => state.tabs[formatTabId(tabId)] || {};
const getCurrentTabState = (state) => getTabState(state, state.navigation.id);

const tabFormName = (name, tabId) => `${name}_${tabId}`;

const getNewTab = (action) => {
  if (action.type === LOCATION_CHANGE || action.type === CALL_HISTORY_METHOD) {
    let pathnameToCheck;
    if (action.type === LOCATION_CHANGE) {
      const {
        location: { pathname }
      } = action.payload;
      pathnameToCheck = pathname;
    } else if (action.type === CALL_HISTORY_METHOD) {
      const {
        args: [pathname]
      } = action.payload;
      pathnameToCheck = pathname;
    }

    if (TAB_REGEX.test(pathnameToCheck)) {
      return formatTabId(RegExp.$1);
    }
  }

  return undefined;
};

const isChangingTab = (action, state) =>
  formatTabId(state.navigation.id) !== getNewTab(action);

export {
  formatTabId,
  getTabState,
  getCurrentTabState,
  tabFormName,
  getNewTab,
  isChangingTab
};
