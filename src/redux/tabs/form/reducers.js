import {
  SET_CURRENT_FORM,
  UPDATE_CURRENT_FORM_DATA,
  QUIT_CURRENT_FORM
} from './constants';

const initial_state = {
  name: '',
  initial: {},
  ignore: [],
  skipFieldFunction: v => v,
  saveCb: undefined
};
const formReducer = (state = initial_state, action) => {
  switch (action.type) {
  case SET_CURRENT_FORM:
    return {
      name: action.name,
      initial: action.initial,
      ignore: action.ignore,
      skipFieldFunction: action.skipFieldFunction,
      saveCb: action.saveCb,
      textOptions: action.textOptions,
      code: action.code
    };

  case UPDATE_CURRENT_FORM_DATA:
    return {
      ...state,
      initial: {
        ...state.initial,
        ...action.data
      }
    };

  case QUIT_CURRENT_FORM:
    return { ...initial_state };

  default:
    return state;
  }
};

export default formReducer;
