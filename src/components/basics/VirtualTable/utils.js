import I18n from '../../../assets/I18n';
import { TYPE_CELL } from '../../../constants/typeCell';
import { isMatching, matchFilterList } from '../../../helpers/filter';
import { TRIGGER_KEY } from './components/SearchBar/constants';

const SORTABLE_DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc'
};

const INSERT_POSITION = {
  BOTTOM: 'bottom',
  TOP: 'top'
};

const SORTABLE_TYPES = [TYPE_CELL.AMOUNT, TYPE_CELL.NUMBER, TYPE_CELL.STRING];

const ROW_TYPE = {
  ADD_BUTTON: 'add_button',
  GROUP_BUTTON: 'group_button',
  NEW: 'new',
  EDIT: 'edit',
  VIEW: 'view'
};

const TABLE_STATE = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  PERMANENT_EDIT: 'PERMANENT_EDIT'
};

const addGroupIdToObj = (groupId, obj) => ({ ...obj, groupId });

const processGroupItemData = (group) =>
  group.data.map((groupItem) => addGroupIdToObj(group.id, groupItem));

const createTitleRow = (group) => ({
  name: group.name,
  rowType: ROW_TYPE.GROUP_BUTTON,
  groupId: group.id
});

const createAddRow = (onAdd) => ({
  name: I18n.t('common.addRow'),
  rowType: ROW_TYPE.ADD_BUTTON,
  onAdd
});

const createAddRowGroup = (group) => ({
  ...createAddRow(),
  groupId: group.id
});

/**
 * Checks if the given column type is handled by the sorting function.
 * This can be override by the `sortable` flag but with unpredictable result.
 *
 * @param {object} column
 * @param {string} column.typeCell - The column type param
 * @param {boolean} column.sortable - The column sortable flag
 */
const isSortable = ({ typeCell, sortable }) =>
  sortable !== false &&
  (sortable || SORTABLE_TYPES.includes(typeCell) || !typeCell);

/**
 * Checks if the given `row` matches both the specific `filters`
 * and the global search `term`
 *
 * @param {array} columns - The columns used for the global search
 * @param {object} row - The data to check
 * @param {array} filters - List of specific column filters
 * @param {string} term - The global search term
 */
const matchFilter = (columns, row, filters = [], term = '') => {
  const specificFilters = matchFilterList(row, filters);
  if (!specificFilters) return false;

  if (term && term !== TRIGGER_KEY) {
    return columns.some((col) => {
      return isMatching(term, row[col.key]);
    });
  }
  return true;
};

export {
  ROW_TYPE,
  INSERT_POSITION,
  TABLE_STATE,
  SORTABLE_DIRECTIONS,
  addGroupIdToObj,
  processGroupItemData,
  createTitleRow,
  createAddRowGroup,
  createAddRow,
  isSortable,
  matchFilter
};
