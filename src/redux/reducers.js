import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import dialogs from './dialogs/reducer';


const createRootReducer = (history) => {
  const reducers = combineReducers({
    router: connectRouter(history),
    dialogs,
  });

  return (state, action) => {
    return {
      ...reducers(state, action),
    };
  };
};

export default createRootReducer;
