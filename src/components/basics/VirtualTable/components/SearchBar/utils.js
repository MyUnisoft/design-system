import { TYPE_CELL } from '../../../../../constants/typeCell';

/**
 * Cell types available in the filter list
 */
const allowedTypes = [
  TYPE_CELL.AMOUNT,
  TYPE_CELL.NUMBER,
  TYPE_CELL.STATUS,
  TYPE_CELL.SELECT
];

const mapStatusListToDataList = (listStatus) => listStatus.map((ls) => ({ value: ls.status, name: ls.value }));

/**
 * Map and filter config to match our needs
 * 
 * @param {array} columns - Columns array from VT config
 */
function parseConfig(columns) {
  return columns.reduce((prev, curr) => {
    if (curr.typeCell && !allowedTypes.includes(curr.typeCell)) return prev;
    return {
      ...prev,
      [curr.key]: {
        label: curr.header,
        value: curr.key,
        type: curr.typeCell === TYPE_CELL.STATUS ? TYPE_CELL.SELECT : curr.typeCell,
        listData: curr.typeCell === TYPE_CELL.STATUS ? mapStatusListToDataList(curr.listStatus) : curr.listData // Used for select type
      }
    };
  }, {});
}

export {
  allowedTypes,
  parseConfig
};