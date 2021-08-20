import { createMachine, reduce, state, transition, guard } from 'robot3';
import { INSERT_POSITION, ROW_TYPE } from '../utils';

const initialContext = {
  dataRows: [],
  selectedRows: new Set(),
  groupCollapsed: new Set(),
  addRows: [],
  dataRowsBeforeEdit: []
};

const guardHasSelectedRow = (ctx) => ctx.selectedRows.size > 0;

const selectAllColumn = (ctx, ev) => {
  const tab = ctx.dataRows.map((row) => {
    if (ev.changeOtherColumnOnClick) {
      const { keyColumn, newValue } = ev.changeOtherColumnOnClick;
      return {
        ...row,
        [ev.keyColumn]: ev.value,
        rowType: ROW_TYPE.EDIT,
        [keyColumn]: newValue
      };
    }
    return { ...row, [ev.keyColumn]: ev.value, rowType: ROW_TYPE.EDIT };
  });
  return { ...ctx, dataRows: tab };
};

const addRow = (ctx, ev) => {
  const { addOneByOne } = ev;
  const { addRows } = ctx;
  const newAddedRows = [...addRows, { id: Date.now(), rowType: ROW_TYPE.NEW }];
  return {
    ...ctx,
    addRows: addRows?.length && addOneByOne ? addRows : newAddedRows
  };
};

const edit = (ctx, { data, key, keyId, selectableRowKey }) => {
  const { dataRows } = ctx;
  const tab = [...dataRows];
  const index = tab.findIndex((e) => e[selectableRowKey] === keyId);
  tab[index] = { ...tab[index], [key]: data, rowType: ROW_TYPE.EDIT };
  return { ...ctx, dataRows: tab };
};

export default createMachine(
  {
    IDLE: state(
      transition(
        'selectItem',
        'IDLE',
        reduce((ctx, { itemKey, onlyOneRow }) => ({
          ...ctx,
          selectedRows: new Set(
            onlyOneRow ? [itemKey] : [...ctx.selectedRows, itemKey]
          )
        }))
      ),
      transition(
        'unselectItem',
        'IDLE',
        reduce((ctx, ev) => {
          const tab = new Set(ctx.selectedRows);
          tab.delete(ev.itemKey);
          return { ...ctx, selectedRows: tab };
        })
      ),
      transition(
        'toggleAllRow',
        'IDLE',
        reduce((ctx, ev) => ({
          ...ctx,
          selectedRows: new Set([...ev.selectedRows])
        }))
      ),
      transition(
        'selectRows',
        'IDLE',
        reduce((ctx, { selectedRows }) => ({
          ...ctx,
          selectedRows: selectedRows
        }))
      ),
      transition('add', 'ADD', reduce(addRow)),
      transition(
        'updateCtx',
        'IDLE',
        reduce((ctx, ev) => ({ ...ctx, dataRows: ev.data }))
      ),
      transition(
        'edit',
        'EDIT',
        reduce((ctx) => ({ ...ctx, dataRowsBeforeEdit: ctx.dataRows })),
        guard(guardHasSelectedRow)
      ),
      transition('deleteRow', 'IDLE', guard(guardHasSelectedRow)),
      transition(
        'collapseGroup',
        'IDLE',
        reduce((ctx, { groupId }) => ({
          ...ctx,
          groupCollapsed: new Set([...ctx.groupCollapsed, groupId])
        }))
      ),
      transition(
        'expandGroup',
        'IDLE',
        reduce((ctx, ev) => {
          const tab = new Set(ctx.groupCollapsed);
          tab.delete(ev.groupId);
          return { ...ctx, groupCollapsed: tab };
        })
      ),
      transition('input', 'IDLE', reduce(edit)),
      transition(
        'alwaysEditMode',
        'PERMANENT_EDIT',
        reduce((ctx, { keys }) => ({
          ...ctx,
          selectedRows: new Set([...keys]),
          dataRowsBeforeEdit: ctx.dataRows
        }))
      ),
      transition(
        'search',
        'IDLE',
        reduce((ctx, { dataRows }) => ({
          ...ctx,
          searchState: true,
          ...(dataRows ? { dataRows } : {})
        }))
      )
    ),
    ADD: state(
      transition(
        'cancel',
        'IDLE',
        reduce((ctx) => ({
          ...ctx,
          addRows: []
        }))
      ),
      transition(
        'delete',
        'ADD',
        reduce((ctx, ev) => {
          const { addRows } = ctx;
          const tab = [...addRows];
          const index = tab.findIndex((e) => e.id === ev.id);
          tab.splice(index, 1);
          return { ...ctx, addRows: tab };
        })
      ),
      transition(
        'input',
        'ADD',
        reduce((ctx, ev) => {
          const { addRows } = ctx;
          const tab = [...addRows];
          const index = tab.findIndex((e) => e.id === ev.id);
          tab[index] = { ...tab[index], [ev.key]: ev.data };
          return { ...ctx, addRows: tab };
        })
      ),
      transition('add', 'ADD', reduce(addRow)),
      transition(
        'validate',
        'IDLE',
        reduce((ctx, ev) => ({
          ...ctx,
          addRows: []
        }))
      )
    ),
    EDIT: state(
      transition(
        'cancel',
        'IDLE',
        reduce((ctx) => ({
          ...ctx,
          selectedRows: new Set(),
          dataRows: ctx.dataRowsBeforeEdit
        }))
      ),
      transition(
        'validate',
        'IDLE',
        reduce((ctx) => ({
          ...ctx,
          selectedRows: new Set(),
          dataRowsBeforeEdit: []
        }))
      ),
      transition('input', 'EDIT', reduce(edit)),
      transition(
        'updateCtx',
        'EDIT',
        reduce((ctx, ev) => ({ ...ctx, dataRows: ev.data }))
      ),
      transition('selectAllColumn', 'PERMANENT_EDIT', reduce(selectAllColumn))
    ),
    PERMANENT_EDIT: state(
      transition(
        'cancel',
        'PERMANENT_EDIT',
        reduce((ctx) => ({ ...ctx, dataRows: ctx.dataRowsBeforeEdit }))
      ),
      transition('validate', 'PERMANENT_EDIT'),
      transition('input', 'PERMANENT_EDIT', reduce(edit)),
      transition(
        'updateCtx',
        'PERMANENT_EDIT',
        reduce((ctx, ev) => ({
          ...ctx,
          dataRows: ev.data,
          dataRowsBeforeEdit: ev.data
        }))
      ),
      transition('selectAllColumn', 'PERMANENT_EDIT', reduce(selectAllColumn))
    )
  },
  () => initialContext
);
