import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
  REFRESH_DIALOG,
  OPEN_ACCESS_DIALOG,
  CLOSE_ACCESS_DIALOG
} from './constants';

const initialState = {
  elements: [],
  accessDialog: null
};

const dialogs = (state = initialState, action) => {
  if (action && action.type) {
    switch (action.type) {
    case OPEN_DIALOG: {
      return {
        ...state,
        elements: [...state.elements, action.payload]
      };
    }
    case CLOSE_DIALOG: {
      const elements = state.elements.slice(0, state.elements.length - 1);
      return {
        ...state,
        elements
      };
    }
    case REFRESH_DIALOG: {
      const { key, newState } = action;
      return {
        ...state,
        elements: state.elements.map(
          element => (element.key === key
            ? newState
            : element)
        )
      };
    }

    case OPEN_ACCESS_DIALOG:
      const { onValidate, onCancel, society } = action;
      return {
        ...state,
        accessDialog: {
          onValidate,
          onCancel,
          society
        }
      };

    case CLOSE_ACCESS_DIALOG:
      return {
        ...state,
        accessDialog: null
      };

    default:
      return state;
    }
  }
  return state;
};

export default dialogs;
