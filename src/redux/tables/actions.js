import {
  START_EDIT,
  END_EDIT,
  SET_DATA,
  UPDATE_DATA,
  CREATE_ROW,
  ADD_ROW,
  EDIT_ROW,
  DELETE_ROWS,
  CANCEL,
  SAVE,
  SELECT_ROW,
  SELECT_ALL_ROWS,
  UNSELECT_ROW,
  SELECT_ONLY_ONE_ROW,
  UNSELECT_ALL_ROWS,
  SET_ERRORS,
  SET_PAGINATION,
  SET_ALL_ERRORS,
  SET_ALL_LINES_ERRORS,
  SET_TRANSFORMED_TABLE_DATA,
  GET_DATA_ATTEMPT,
  SET_TABLE_DISABILITY,
  REMOVE_TABLE,
  SET_VISIBLE,
  SORT_TABLE,
  CREATE_ITEM
} from './constants';

const setPagination = (tableName, pagination) => ({
  type: SET_PAGINATION,
  tableName,
  pagination
});

const setErrors = (tableName, id, errors) => ({
  type: SET_ERRORS,
  tableName,
  id,
  errors
});

const setAllErrors = (tableName, id, errors) => ({
  type: SET_ALL_ERRORS,
  tableName,
  id,
  errors
});
const setAllLinesErrors = (tableName, errors) => ({
  type: SET_ALL_LINES_ERRORS,
  tableName,
  errors
});

const startEdit = tableName => ({
  type: START_EDIT,
  tableName
});

const endEdit = tableName => ({
  type: END_EDIT,
  tableName
});

const setData = (tableName, data) => ({
  type: SET_DATA,
  tableName,
  data
});

const updateData = (tableName, data) => ({
  type: UPDATE_DATA,
  tableName,
  data
});

const createRow = (tableName, options = { defaultValue: {} }, notBeSelected) => ({
  type: CREATE_ROW,
  tableName,
  options,
  notBeSelected
});

const addRow = (tableName, item) => ({
  type: ADD_ROW,
  tableName,
  item
});

const editRow = (tableName, item) => ({
  type: EDIT_ROW,
  tableName,
  item
});

const deleteRows = (tableName, options = { createdOnly: false }) => ({
  type: DELETE_ROWS,
  tableName,
  options
});

const cancel = tableName => ({
  type: CANCEL,
  tableName
});

const save = tableName => ({
  type: SAVE,
  tableName
});

const selectRow = (tableName, id) => ({
  type: SELECT_ROW,
  tableName,
  id
});

const selectAllRows = (tableName, ids) => ({
  type: SELECT_ALL_ROWS,
  tableName,
  ids
});


const unselectRow = (tableName, id) => ({
  type: UNSELECT_ROW,
  tableName,
  id
});

const selectOnlyOneRow = (tableName, id) => ({
  type: SELECT_ONLY_ONE_ROW,
  tableName,
  id
});

const unselectAllRows = tableName => ({
  type: UNSELECT_ALL_ROWS,
  tableName
});

const setTransformedTableData = (tableName, id, tableData) => ({
  type: SET_TRANSFORMED_TABLE_DATA,
  tableName,
  id,
  tableData
});

const getDataAttempt = tableName => ({
  type: GET_DATA_ATTEMPT,
  tableName
});

const setTableDisable = (tableName, payload) => ({
  type: SET_TABLE_DISABILITY,
  tableName,
  payload
});

const removeTable = tableName => ({
  type: REMOVE_TABLE,
  tableName
});

const setVisible = (tableName, payload) => ({
  type: SET_VISIBLE,
  tableName,
  payload
});

const onSort = (tableName, payload) => ({
  type: SORT_TABLE,
  tableName,
  payload
});

const onCreateNewIds = (tableName, oldId, newId) => ({
  type: CREATE_ITEM,
  tableName,
  oldId,
  newId
});

export default {
  setAllErrors,
  setErrors,
  setData,
  updateData,
  startEdit,
  endEdit,
  createRow,
  addRow,
  editRow,
  deleteRows,
  cancel,
  save,
  selectRow,
  selectAllRows,
  unselectRow,
  selectOnlyOneRow,
  unselectAllRows,
  setAllLinesErrors,
  setPagination,
  setTransformedTableData,
  getDataAttempt,
  setTableDisable,
  removeTable,
  onSort,
  setVisible,
  onCreateNewIds
};
