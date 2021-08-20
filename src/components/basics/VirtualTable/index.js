import React, {
  useRef,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import cx from 'classnames';
import _isEmpty from 'lodash/isEmpty';
import _isEqual from 'lodash/isEqual';
import _orderBy from 'lodash/orderBy';
import PropTypes from 'prop-types';
import {
  MultiGrid,
  Grid,
  ScrollSync,
  AutoSizer,
  CellMeasurerCache,
  CellMeasurer
} from 'react-virtualized';

import I18n from '../../../assets/I18n';

import { ALIGN_CELL } from '../../../constants/alignCell';
import { TYPE_CELL, TYPE_FOOTER_CELL } from '../../../constants/typeCell';
import { OPERAND } from '../../../constants/typeOperand';
import { formatNumber, generateId } from '../../../helpers/number';
import { useMachine } from '../../../hooks/useMachine';
import { InlineButton } from '../Buttons';
import ErrorTooltip from '../ErrorTooltip';
import FontIcon from '../Icon/Font';
import CellRender from './cells';
import AddLine from './components/AddLine';
import Checkbox from './components/Checkbox';
import ContextMenu from './components/ContextMenu';
import HeaderSortable from './components/Header/components/Sortable';
import SearchBar from './components/SearchBar';
import { allowedTypes } from './components/SearchBar/utils';
import VirtualTableContext from './context';
import { useSortable } from './hooks';
import machine from './machine';
import styles from './styles/virtualTable.module.scss';
import {
  createTitleRow,
  INSERT_POSITION,
  isSortable,
  matchFilter,
  processGroupItemData,
  ROW_TYPE,
  TABLE_STATE
} from './utils';

const VirtualTable = React.memo(
  ({
    data: rowData,
    maxHeight,
    widthTable,
    config,
    selectRows,
    handleRowsToDelete,
    handleValidateEdit,
    handleValidateAdd,
    customHeader = false,
    isEdit,
    tableKeyName: _tableKeyName,
    defaultSelectedRows
  }) => {
    const {
      insertPosition = INSERT_POSITION.TOP,
      columns: columnsRaw,
      hasSecureSociety = false,
      openSocieties = [],
      hasFooter = false,
      hasHeader = true,
      selectableRow = false,
      selectableRowKey = 'id',
      selectableOnlyOneRow = false,
      customSelectionHeader,
      minCellWidth = 100,
      selectableBarInfo = false,
      modeAdd = false,
      modeEdit = false,
      modeDelete = false,
      modeGroup = false,
      alwaysInEdition = false,
      customButtons = [],
      dynamicHeight = true,
      wrapHeaderText = false,
      rowHeight = 32,
      headerHeight,
      withBorders = false,
      fixedColumns = 0,
      onCustomAdd,
      addOneByOne = false,
      hasSearchbar = false,
      spaceBetween = 2,
      actionsButton = [],
      hasCheckBoxHidden = false
    } = config;

    const cache = new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: rowHeight,
      fixedHeight: true
    });
    const refBodyGrid = useRef(null);
    const refFooterGrid = useRef(null);
    const refHeaderGrid = useRef(null);
    const customHeaderRef = useRef(null);
    const [state, context, send, can] = useMachine(machine);
    const [searchFilters, setSearchFilters] = useState({});
    const { order, orderDirection, onOrderChange } = useSortable();

    const CHECKBOX_COLUMN = 'checkboxColumn';

    const tableKeyName = useMemo(
      () => _tableKeyName || generateId(),
      [_tableKeyName]
    );
    const data = useMemo(
      () => (order ? _orderBy(rowData, order, orderDirection) : rowData),
      [rowData, order, orderDirection]
    );

    const hasCheckBox =
      selectableRow || selectableOnlyOneRow || modeAdd || modeEdit || modeGroup;

    const columns = useMemo(() => {
      if (hasCheckBox) {
        return [
          {
            key: CHECKBOX_COLUMN,
            width: 50
          },
          ...columnsRaw
        ];
      }
      return columnsRaw;
    }, [columnsRaw, hasCheckBox]);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const { selectedRows, dataRows, addRows, groupCollapsed } = context;

    useEffect(() => {
      if (defaultSelectedRows)
        send('selectRows', { selectedRows: defaultSelectedRows });
    }, [defaultSelectedRows?.size]);

    useEffect(() => {
      if (refHeaderGrid?.current) {
        refHeaderGrid.current.recomputeGridSize();
      }
    }, [columns]);

    useEffect(() => {
      if (addRows.length === 0) {
        send('cancel');
      }
    }, [addRows]);

    const allRows = useMemo(() => {
      if (insertPosition === INSERT_POSITION.BOTTOM) {
        return [...dataRows, ...addRows];
      }
      return [...addRows, ...dataRows];
    }, [addRows, dataRows]);

    useEffect(() => {
      isEdit(allRows.filter((e) => e.isEdit === true).length !== 0);
    }, [dataRows]);

    const allSelectableKey = useMemo(
      () =>
        new Set(
          allRows
            .filter((row) => {
              const checkIfSocietyIsOpen = !openSocieties
                .map((society) => society?.id)
                .includes(row?.company_id);
              const isSecuredRow =
                hasSecureSociety && row?.secured && checkIfSocietyIsOpen;

              return (
                row.rowType !== ROW_TYPE.GROUP_BUTTON &&
                row.rowType !== ROW_TYPE.ADD_BUTTON &&
                !isSecuredRow
              );
            })
            .map((row) => row[selectableRowKey])
        ),
      [dataRows, selectableRowKey, openSocieties]
    );

    useEffect(() => {
      selectRows(selectedRows);
    }, [selectedRows]);

    const searchableColumns = useMemo(
      () =>
        columns.filter((c) => !c.typeCell || allowedTypes.includes(c.typeCell)),
      [columns]
    );

    const processGroupItem = (group) => {
      const titleRow = createTitleRow(group);
      const newTab = [titleRow];
      // TODO addRow for each group
      // if (modeAdd) {
      //   newTab.push(createAddRowGroup(group));
      // }
      return newTab.concat(processGroupItemData(group));
    };

    const processGroups = () => [].concat(...data.map(processGroupItem));

    const processRowsData = useCallback(() => {
      if (modeGroup) {
        return processGroups();
      }
      return data;
    }, [data]);

    useEffect(() => {
      const processedDataRows = processRowsData();
      // eslint-disable-next-line no-use-before-define
      send('updateCtx', { data: processedDataRows });
      if (alwaysInEdition && processedDataRows?.length > 0) {
        const keys = processedDataRows.map((row) => row[selectableRowKey]);
        send('alwaysEditMode', { keys });
      }
    }, [data]);

    const displayableRows = useMemo(
      () =>
        allRows.filter(
          (row) =>
            (row.rowType === ROW_TYPE.GROUP_BUTTON ||
              !groupCollapsed.has(row.groupId)) &&
            matchFilter(
              searchableColumns,
              row,
              searchFilters.filters,
              searchFilters.q
            )
        ),
      [allRows, groupCollapsed, dataRows, searchFilters]
    );

    const handleResize = useCallback(() => {
      refBodyGrid.current.recomputeGridSize();
      if (hasFooter) refFooterGrid.current.recomputeGridSize();
      if (hasHeader) refHeaderGrid.current.recomputeGridSize();
    }, []);

    const hasSelectionManager = modeEdit || modeDelete || selectableBarInfo;

    const calculateHeightFullTable = (_height) => {
      let heightCalculate = _height + rowHeight;
      if (hasSelectionManager) {
        heightCalculate += 50;
      }
      if (hasFooter) {
        heightCalculate += 32;
      }

      return heightCalculate;
    };

    const size = useMemo(
      () => ({
        height: calculateHeightFullTable(displayableRows.length * rowHeight),
        maxHeight: maxHeight,
        width: widthTable
      }),
      [maxHeight, widthTable, displayableRows]
    );

    const isAllCheckedColumn = (key, rows) => {
      for (const row of rows) {
        if (!row[key]) {
          return false;
        }
      }
      return true;
    };

    const _renderHeaderCellDispatch = (params) => {
      const { columnIndex } = params;
      const { key: keyColumn } = columns[columnIndex];

      if (keyColumn === CHECKBOX_COLUMN) {
        return _renderHeaderCheckBoxCell(params);
      }
      return _renderHeaderCell(params);
    };

    const _renderHeaderCell = useCallback(
      ({
        // eslint-disable-next-line react/prop-types
        columnIndex,
        key,
        style
      }) => {
        const {
          header,
          key: keyColumn,
          tooltipHeader,
          typeCell,
          headerOnClick = () => {},
          selectAll = false,
          variant = 'primary',
          changeOtherColumnOnClick,
          alignCenter = false,
          alignText,
          sortable
        } = columns[columnIndex];
        const render = () => (
          <div
            className={cx(styles.cell, {
              [styles.cell_alignRight]:
                [TYPE_CELL.AMOUNT].includes(typeCell) ||
                alignText === ALIGN_CELL.RIGHT,
              [styles.cell_alignLeft]: alignText === ALIGN_CELL.LEFT,
              [styles.center]:
                [TYPE_CELL.CHECKBOX].includes(typeCell) || alignCenter,
              [styles.hasSelectAll]: selectAll,
              [styles.cell_withGrid]: withBorders
            })}
            key={key}
            style={style}
            onClick={headerOnClick}
          >
            {selectAll && (
              <div className={styles.cbCell}>
                <Checkbox
                  name={`${header}_${columnIndex}`}
                  id={`${header}_${columnIndex}`}
                  checked={isAllCheckedColumn(keyColumn, displayableRows)}
                  onChange={(e) => {
                    send('selectAllColumn', {
                      value: e.target.checked,
                      keyColumn,
                      changeOtherColumnOnClick
                    });
                  }}
                  variant={variant}
                />
              </div>
            )}
            <div
              className={cx(
                styles.headerCell,
                wrapHeaderText && styles.headerCell_wrap,
                withBorders && styles.headerCell_border
              )}
            >
              {isSortable({ typeCell, sortable }) ? (
                <HeaderSortable
                  column={columns[columnIndex]}
                  order={order}
                  orderDirection={orderDirection}
                  onOrderChange={onOrderChange}
                >
                  {header}
                </HeaderSortable>
              ) : (
                header
              )}
            </div>
          </div>
        );
        if (tooltipHeader) {
          return (
            <Tooltip title={tooltipHeader} placement="top">
              {render()}
            </Tooltip>
          );
        }
        return render();
      },
      [columns, displayableRows, order, orderDirection]
    );

    const renderCell = ({
      displayableRow,
      typeCell,
      keyColumn,
      columnIndex,
      optionList,
      renderComponent
    }) => {
      const currentTypeCell = (rowData) => {
        if (typeof typeCell === OPERAND.FUNCTION) {
          return typeCell(rowData);
        }
        return typeCell;
      };

      const _optionList =
        typeof optionList === OPERAND.FUNCTION
          ? optionList(displayableRow)
          : optionList;

      if (displayableRow?.rowType === ROW_TYPE.GROUP_BUTTON) {
        return (
          <div className={styles.groupRow}>
            {columnIndex === 0 ? displayableRow.name : null}
          </div>
        );
      }
      return (
        <CellRender
          data={displayableRow}
          dataKey={keyColumn}
          columnIndex={columnIndex}
          withBorders={withBorders}
          type={currentTypeCell(displayableRow)}
          optionList={_optionList}
          renderComponent={renderComponent}
          spaceBetween={spaceBetween}
        />
      );
    };

    const _renderBodyCell = useCallback(
      ({
        // eslint-disable-next-line react/prop-types
        columnIndex,
        key,
        parent,
        rowIndex,
        style
      }) => {
        const { [selectableRowKey]: selector, rowType } =
          displayableRows[rowIndex];
        const isSelected = selectedRows.has(selector);
        const {
          checkValue = () => true,
          dbClick,
          simpleClick,
          key: keyColumn,
          typeCell,
          withLockIcon = false,
          showLockInfo = false,
          alignText,
          alignVertical,
          hasContextMenu,
          listActionContextMenu,
          contextMenuOnlySelectedRows = false,
          tooltipError: hasErrorTooltip = () => false,
          tooltipDetail: hasTooltipDetail = () => false,
          optionList = () => [],
          renderComponent
        } = columns[columnIndex];
        if (keyColumn === CHECKBOX_COLUMN) {
          return _renderCheckBoxCell({ key, parent, rowIndex, style });
        }

        const hasError = !checkValue(displayableRows[rowIndex][keyColumn]);
        const isGroupButton = rowType === ROW_TYPE.GROUP_BUTTON;
        const isAddButton = rowType === ROW_TYPE.ADD_BUTTON;
        const checkIfSocietyIsOpen = !openSocieties
          .map((society) => society?.id)
          .includes(displayableRows[rowIndex]?.company_id);
        const isSecuredRow =
          hasSecureSociety &&
          displayableRows[rowIndex]?.secured &&
          checkIfSocietyIsOpen;
        const canHaveContextMenu = !contextMenuOnlySelectedRows || isSelected;
        const tooltipMessage = hasErrorTooltip(displayableRows[rowIndex]);
        const tooltipDetail = hasTooltipDetail(displayableRows[rowIndex]);

        function securedRender(children) {
          return (
            <>
              {withLockIcon && isSecuredRow && <FontIcon name="icon-lock1" />}
              {(!isSecuredRow || showLockInfo) && children}
            </>
          );
        }

        const cell = (
          <div
            className={cx(
              styles.cell,
              rowIndex % 2 ? styles.odd : styles.even,
              {
                [styles.selectedRow]: isSelected && !alwaysInEdition,
                [styles.groupRow]: isGroupButton,
                [styles.onError]:
                  (hasError ||
                    (tooltipMessage &&
                      [TABLE_STATE.EDIT, TABLE_STATE.PERMANENT_EDIT].includes(
                        state
                      ))) &&
                  !isGroupButton &&
                  !isAddButton,
                [styles.cell_withGrid]: withBorders,
                [styles.cell_alignLeft]: alignText === ALIGN_CELL.LEFT,
                [styles.cell_alignCenter]: alignText === ALIGN_CELL.CENTER,
                [styles.cell_alignRight]: alignText === ALIGN_CELL.RIGHT,
                [styles.cell_align]: [
                  ALIGN_CELL.CENTER,
                  ALIGN_CELL.BOTTOM,
                  ALIGN_CELL.TOP
                ].includes(alignVertical),
                [styles.cell_alignVerticalCenter]:
                  alignVertical === ALIGN_CELL.CENTER,
                [styles.cell_alignVerticalBottom]:
                  alignVertical === ALIGN_CELL.BOTTOM,
                [styles.cell_alignVerticalTop]:
                  alignVertical === ALIGN_CELL.TOP,
                [styles.lockRow]: isSecuredRow,
                [styles.pointer]: !!simpleClick,
                [styles.cell_thumbnail]: [TYPE_CELL.THUMBNAIL].includes(
                  typeCell
                )
              }
            )}
            key={key}
            style={style}
            onDoubleClick={dbClick}
            onClick={simpleClick?.bind(null, displayableRows[rowIndex])}
          >
            {hasContextMenu ? (
              <ContextMenu
                listAction={listActionContextMenu}
                canClick={canHaveContextMenu}
                data={displayableRows[rowIndex]}
              >
                {securedRender(
                  renderCell({
                    displayableRow: displayableRows[rowIndex],
                    typeCell,
                    keyColumn,
                    columnIndex,
                    optionList,
                    renderComponent
                  })
                )}
              </ContextMenu>
            ) : (
              securedRender(
                renderCell({
                  displayableRow: displayableRows[rowIndex],
                  typeCell,
                  keyColumn,
                  columnIndex,
                  optionList,
                  renderComponent
                })
              )
            )}
          </div>
        );

        function renderIfTooltip() {
          if (
            tooltipMessage &&
            [TABLE_STATE.EDIT, TABLE_STATE.PERMANENT_EDIT].includes(state)
          ) {
            return <ErrorTooltip title={tooltipMessage}>{cell}</ErrorTooltip>;
          }

          if (tooltipDetail) {
            return (
              <Tooltip title={tooltipDetail} placement="top">
                {cell}
              </Tooltip>
            );
          }

          return cell;
        }

        return (
          <CellMeasurer
            key={key}
            cache={cache}
            parent={parent}
            columnIndex={columnIndex}
            rowIndex={rowIndex}
          >
            {renderIfTooltip()}
          </CellMeasurer>
        );
      },
      [displayableRows, columns, selectedRows, selectableRowKey, groupCollapsed]
    );

    const isAllChecked = useMemo(
      () => _isEqual(allSelectableKey, selectedRows),
      [allSelectableKey, selectedRows]
    );

    const _renderHeaderCheckBoxCell = useCallback(
      ({
        // eslint-disable-next-line react/prop-types
        key,
        rowIndex,
        style
      }) => {
        if (hasCheckBoxHidden) {
          return <div />;
        }

        return (
          <div
            className={cx(styles.cell, styles.cbCell)}
            key={key}
            style={style}
          >
            {!selectableOnlyOneRow && (
              <div className={styles.checkbox}>
                <label
                  htmlFor={`${rowIndex}_selectable_header_${tableKeyName}`}
                  className={styles.container}
                >
                  <input
                    type="checkbox"
                    id={`${rowIndex}_selectable_header_${tableKeyName}`}
                    name={`${rowIndex}_selectable_header__${tableKeyName}`}
                    checked={isAllChecked}
                    disabled={!can('toggleAllRow')}
                    onChange={(e) => {
                      send('toggleAllRow', {
                        selectedRows: e.target.checked ? allSelectableKey : []
                      });
                    }}
                  />
                  <span className={styles.checkmark} />
                </label>
              </div>
            )}
          </div>
        );
      },
      [selectRows, displayableRows, selectableRowKey, isAllChecked, can]
    );

    const _renderFooterCell = useCallback(
      ({
        // eslint-disable-next-line react/prop-types
        columnIndex,
        key,
        style
      }) => {
        const {
          typeFooter,
          tooltipFooter,
          typeCell,
          footerValue,
          key: keyValue,
          alignText
        } = columns[columnIndex];

        const _getValue = () => {
          switch (typeFooter) {
            case TYPE_FOOTER_CELL.SUM:
              return displayableRows.reduce(
                (accumulator, currentValue) =>
                  accumulator +
                  (currentValue[keyValue] ? currentValue[keyValue] : 0),
                0
              );
            case TYPE_FOOTER_CELL.AMOUNT:
              return formatNumber(
                Number(
                  displayableRows.reduce(
                    (accumulator, currentValue) =>
                      accumulator +
                      (currentValue[keyValue] ? currentValue[keyValue] : 0),
                    0
                  )
                ).toFixed(2)
              );
          }
        };

        const _render = () => (
          <div
            className={cx(
              styles.cell,
              styles.footer,
              { [styles.cell_alignRight]: typeCell === TYPE_CELL.SELECT },
              { [styles.cell_alignRight]: alignText === ALIGN_CELL.RIGHT },
              { [styles.cell_alignCenter]: alignText === ALIGN_CELL.CENTER },
              { [styles.cell_alignLeft]: alignText === ALIGN_CELL.LEFT }
            )}
            key={key}
            style={style}
          >
            <div className={cx(styles.footerCell)}>
              {footerValue ? footerValue : _getValue()}
            </div>
          </div>
        );
        if (tooltipFooter) {
          return (
            <Tooltip title={tooltipFooter} placement="top">
              {_render()}
            </Tooltip>
          );
        }
        return _render();
      },
      [columns, displayableRows]
    );

    const _renderCheckBoxCell = useCallback(
      ({
        // eslint-disable-next-line react/prop-types
        key,
        parent,
        rowIndex,
        style
      }) => {
        const { groupId, rowType = ROW_TYPE.VIEW } = displayableRows[rowIndex];
        const isSelected = selectedRows.has(
          displayableRows[rowIndex][selectableRowKey]
        );
        const isGroupCollapsed = groupCollapsed.has(groupId);
        const isGroupButton = rowType === ROW_TYPE.GROUP_BUTTON;
        const checkIfSocietyIsOpen = !openSocieties
          .map((society) => society?.id)
          .includes(displayableRows[rowIndex]?.company_id);
        const isSecuredRow =
          hasSecureSociety &&
          displayableRows[rowIndex]?.secured &&
          checkIfSocietyIsOpen;

        function renderCheckboxCell() {
          if (hasCheckBoxHidden) {
            return <div />;
          }

          return (
            <div className={styles.checkbox}>
              <label
                htmlFor={`${rowIndex}_selectable_${tableKeyName}`}
                className={styles.container}
              >
                <input
                  type="checkbox"
                  id={`${rowIndex}_selectable_${tableKeyName}`}
                  name={`${rowIndex}_selectable_${tableKeyName}`}
                  checked={isSelected}
                  disabled={
                    !can('selectItem') || !can('unselectItem') || isSecuredRow
                  }
                  onChange={(e) => {
                    send(e.target.checked ? 'selectItem' : 'unselectItem', {
                      itemKey: displayableRows[rowIndex][selectableRowKey],
                      onlyOneRow: selectableOnlyOneRow
                    });
                  }}
                />
                <span className={styles.checkmark} />
              </label>
            </div>
          );
        }

        if (rowType === ROW_TYPE.ADD_BUTTON) {
          return <div className={styles.addRow} />;
        }
        return (
          <CellMeasurer
            key={key}
            cache={cache}
            parent={parent}
            columnIndex={0}
            rowIndex={rowIndex}
          >
            <div
              className={cx(
                styles.cell,
                styles.cbCell,
                rowIndex % 2 ? styles.odd : styles.even,
                {
                  [styles.selectedRow]: isSelected,
                  [styles.lockRow]: isSecuredRow,
                  [styles.groupRow]: isGroupButton
                }
              )}
              key={key}
              style={style}
            >
              {/* eslint-disable-next-line no-nested-ternary */}
              {isGroupButton ? (
                <FontIcon
                  name={isGroupCollapsed ? 'icon-plus1' : 'icon-minus'}
                  size="16px"
                  onClick={() =>
                    send(isGroupCollapsed ? 'expandGroup' : 'collapseGroup', {
                      groupId
                    })
                  }
                />
              ) : rowType !== ROW_TYPE.NEW ? (
                renderCheckboxCell()
              ) : (
                <FontIcon
                  name="icon-trash"
                  color="red"
                  size="18px"
                  onClick={() =>
                    send('delete', { id: displayableRows[rowIndex]?.id })
                  }
                />
              )}
            </div>
          </CellMeasurer>
        );
      },
      [selectRows, displayableRows, selectableRowKey, selectedRows, can]
    );

    const buttons = [
      ...customButtons?.map((customButton) => {
        const { isDisabled = () => false, onClick = () => {} } = customButton;
        return {
          _type: 'icon',
          iconSize: 28,
          disabled: isDisabled({ dataRows, state }),
          ...customButton,
          onClick: () => onClick(allRows)
        };
      })
    ];

    if (actionsButton.length > 0) {
      buttons.push({
        _type: 'icon',
        iconName: 'icon-options',
        iconColor: 'white',
        color: 'primary',
        iconSize: 28,
        onClick: handleClick
      });
    }

    if (['IDLE'].includes(state)) {
      if (modeEdit) {
        buttons.push({
          _type: 'icon',
          iconName: 'icon-pencil',
          iconColor: 'white',
          color: 'primary',
          iconSize: 28,
          titleInfoBulle: I18n.t('tooltips.edit'),
          disabled: !can('edit'),
          onClick: () => {
            send('edit');
          }
        });
      }
      if (modeDelete) {
        buttons.push({
          _type: 'icon',
          iconName: 'icon-trash',
          iconColor: 'white',
          color: 'error',
          iconSize: 28,
          titleInfoBulle: I18n.t('tooltips.delete'),
          disabled: !can('deleteRow'),
          onClick: () => {
            handleRowsToDelete(selectedRows);
          }
        });
      }
    }
    if (
      [TABLE_STATE.ADD, TABLE_STATE.EDIT, TABLE_STATE.PERMANENT_EDIT].includes(
        state
      )
    ) {
      buttons.push(
        {
          _type: 'icon',
          iconName: 'icon-save',
          iconColor: 'white',
          color: 'primary',
          iconSize: 28,
          titleInfoBulle: I18n.t('tooltips.save'),
          disabled:
            !can('validate') ||
            allRows.filter((e) =>
              [ROW_TYPE.NEW, ROW_TYPE.EDIT].includes(e.rowType)
            ).length === 0,
          onClick: () => {
            switch (state) {
              case TABLE_STATE.ADD:
                handleValidateAdd(
                  allRows.filter((e) => e.rowType === ROW_TYPE.NEW),
                  insertPosition === INSERT_POSITION.BOTTOM
                    ? displayableRows.length
                    : 0
                );
                break;
              case TABLE_STATE.EDIT:
              case TABLE_STATE.PERMANENT_EDIT:
                handleValidateEdit(
                  allRows.filter((e) => e.rowType === ROW_TYPE.EDIT)
                );
                break;
            }
            send('validate');
          }
        },
        {
          _type: 'icon',
          iconName: 'icon-close1',
          iconColor: 'white',
          color: 'error',
          iconSize: 28,
          titleInfoBulle: I18n.t('tooltips.cancel'),
          disabled: !can('cancel'),
          onClick: () => {
            send('cancel');
          }
        }
      );
    }

    const totalColumnsWidth = useMemo(
      () =>
        columns.reduce(
          (sum, item) =>
            sum + (Number.isNaN(Number(item?.width)) ? 0 : item.width),
          0
        ),
      [columns]
    );

    const totalColumnsSize = useMemo(
      () =>
        columns.reduce(
          (sum, item) =>
            sum + (Number.isNaN(Number(item?.size)) ? 0 : item.size),
          0
        ),
      [columns]
    );

    const calculateHeightGridBody = (_height) => {
      let heightCalculate = _height - rowHeight;
      if (customSelectionHeader || hasSelectionManager) {
        heightCalculate -= 50;
      }
      if (hasFooter) {
        heightCalculate -= 32;
      }

      return heightCalculate;
    };

    const handleAddClick = () => {
      if (onCustomAdd) {
        onCustomAdd();
      } else {
        send('add', { addOneByOne, position: insertPosition });
      }
    };

    return (
      <div>
        {customSelectionHeader ||
          (hasSelectionManager && (
            <div className={styles.selectionManager}>
              {hasSearchbar && !_isEmpty(searchableColumns) && (
                <SearchBar
                  columns={searchableColumns}
                  onChange={(filters, q) => setSearchFilters({ filters, q })}
                />
              )}
              <div>
                {(selectableRow || selectableOnlyOneRow) &&
                  I18n.t('common.selectedCount', { count: selectedRows.size })}
              </div>
              <div>
                <InlineButton buttons={buttons} />
                <Menu
                  id="actions-button"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                >
                  {actionsButton.map(({ label, onClick }, idx) => (
                    <MenuItem
                      key={`${label}_${idx}`}
                      onClick={() => {
                        onClick(displayableRows);
                        handleClose();
                      }}
                    >
                      {label}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
          ))}
        <VirtualTableContext.Provider
          value={{
            state,
            context,
            send,
            can,
            config: {
              ...config,
              columns
            }
          }}
        >
          <ScrollSync>
            {({ onScroll, scrollLeft }) => (
              <AutoSizer onResize={handleResize} style={size}>
                {({ height, width }) => {
                  if (
                    dynamicHeight &&
                    displayableRows.length * rowHeight <=
                      calculateHeightGridBody(height)
                  ) {
                    height = displayableRows.length * rowHeight;
                  } else {
                    height = calculateHeightGridBody(height);
                  }

                  const _getColumnWidth = ({ index }) => {
                    const { width: widthColumn = -1, size = -1 } =
                      columns[index];
                    if (size !== -1 && width > totalColumnsWidth) {
                      const averageColumn =
                        (width -
                          totalColumnsWidth -
                          20 -
                          (selectableRow || selectableOnlyOneRow ? 30 : 0)) /
                        totalColumnsSize;
                      const widthBySize = averageColumn * size;
                      return widthBySize > minCellWidth
                        ? widthBySize
                        : minCellWidth;
                    }
                    return (
                      (widthColumn !== -1 ? widthColumn : minCellWidth) +
                      spaceBetween
                    );
                  };

                  return (
                    <div className={styles.GridRow}>
                      <div className={styles.GridColumn}>
                        {customHeader &&
                          React.cloneElement(customHeader, {
                            ref: customHeaderRef
                          })}
                        {hasHeader && (
                          <div className={styles.gridContainer}>
                            <MultiGrid
                              ref={refHeaderGrid}
                              classNameBottomRightGrid={cx(
                                styles.HeaderGrid,
                                styles.defaultStyle,
                                {
                                  [styles.HeaderGrid_withBorders]: withBorders
                                }
                              )}
                              columnWidth={_getColumnWidth}
                              columnCount={columns.length}
                              height={wrapHeaderText ? headerHeight : 32}
                              overscanColumnCount={12}
                              enableFixedColumnScroll
                              cellRenderer={_renderHeaderCellDispatch}
                              rowHeight={wrapHeaderText ? headerHeight : 32}
                              rowCount={1}
                              scrollLeft={scrollLeft}
                              fixedColumnCount={fixedColumns + +hasCheckBox}
                              hideBottomLeftGridScrollbar
                              width={
                                width -
                                (selectableRow || selectableOnlyOneRow ? 30 : 0)
                              }
                            />
                          </div>
                        )}
                        {modeAdd && insertPosition === INSERT_POSITION.TOP && (
                          <AddLine onAdd={handleAddClick} />
                        )}
                        <div className={styles.gridContainer}>
                          <MultiGrid
                            ref={refBodyGrid}
                            classNameBottomRightGrid={cx(
                              styles.BodyGrid,
                              styles.defaultStyle,
                              {
                                [styles.BodyGrid_withBorders]: withBorders
                              }
                            )}
                            columnWidth={_getColumnWidth}
                            columnCount={columns.length}
                            height={height}
                            onScroll={onScroll}
                            overscanColumnCount={5}
                            enableFixedColumnScroll
                            overscanRowCount={12}
                            cellRenderer={_renderBodyCell}
                            rowHeight={cache.rowHeight}
                            hideBottomLeftGridScrollbar
                            fixedColumnCount={fixedColumns + +hasCheckBox}
                            rowCount={displayableRows.length}
                            width={
                              width -
                              (selectableRow || selectableOnlyOneRow ? 30 : 0)
                            }
                          />
                        </div>
                        {modeAdd &&
                          insertPosition === INSERT_POSITION.BOTTOM && (
                            <AddLine onAdd={handleAddClick} />
                          )}
                      </div>
                      {hasFooter && (
                        <div className={styles.footer_wrap}>
                          {modeEdit && (
                            <div className={styles.footer_fakeCheckboxCell} />
                          )}
                          <Grid
                            ref={refFooterGrid}
                            className={cx(
                              styles.HeaderGrid,
                              styles.defaultStyle
                            )}
                            columnWidth={_getColumnWidth}
                            columnCount={columns.length}
                            height={32}
                            overscanColumnCount={0}
                            cellRenderer={_renderFooterCell}
                            rowHeight={cache.rowHeight}
                            rowCount={1}
                            scrollLeft={scrollLeft}
                            width={
                              width -
                              (selectableRow || selectableOnlyOneRow ? 30 : 0)
                            }
                          />
                        </div>
                      )}
                    </div>
                  );
                }}
              </AutoSizer>
            )}
          </ScrollSync>
        </VirtualTableContext.Provider>
      </div>
    );
  }
);

VirtualTable.propTypes = {
  data: PropTypes.array.isRequired,
  config: PropTypes.object.isRequired,
  heightTable: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  widthTable: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectRows: PropTypes.func,
  isEdit: PropTypes.func,
  handleRowsToDelete: PropTypes.func,
  handleValidateEdit: PropTypes.func,
  handleValidateAdd: PropTypes.func,
  defaultSelectedRows: PropTypes.instanceOf(Set),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tableKeyName: PropTypes.string,
  customHeader: PropTypes.node
};

VirtualTable.defaultProps = {
  heightTable: '400px',
  maxHeight: '600px',
  widthTable: '100%',
  selectRows: () => {},
  isEdit: () => {},
  handleRowsToDelete: () => {},
  handleValidateEdit: () => {},
  handleValidateAdd: () => {},
  defaultSelectedRows: new Set(),
  customHeader: false
};

export default VirtualTable;
