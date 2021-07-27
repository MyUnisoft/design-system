import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
  REFRESH_DIALOG,
  OPEN_ACCESS_DIALOG,
  CLOSE_ACCESS_DIALOG
} from './constants';

export const openDialogActionCreator = payload => ({
  type: OPEN_DIALOG,
  payload
});

export const closeDialogActionCreator = () => ({
  type: CLOSE_DIALOG
});

export const refreshDialogActionCreator = (key, newState) => ({
  type: REFRESH_DIALOG,
  key,
  newState
});

export const openAccessDialog = (society, onValidate, onCancel) => ({
  type: OPEN_ACCESS_DIALOG,
  society,
  onValidate,
  onCancel
});

export const closeAccessDialog = () => ({
  type: CLOSE_ACCESS_DIALOG
});
