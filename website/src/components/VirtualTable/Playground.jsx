import React, { useState } from 'react';
import I18n from '../../../../src/assets/I18n';
import VirtualTable from '../../../../src/components/basics/VirtualTable';
import { ROW_TYPE } from '../../../../src/components/basics/VirtualTable/utils';
import { TYPE_CELL } from '../../../../src/constants/typeCell';

const data = Array(100).fill().map((r, i) => ({
  id: i,
  username: `User Lastname #${i + 1}`,
  month: (i % 12) + 1,
  amount: (i%5) * (i%7) / ((i%6) + 1),
  rowType: ROW_TYPE.VIEW
}));
import React from 'react';

const defaultConfig = {
  modeEdit: true,
  modeAdd: true,
  selectableBarInfo: true,
  hasSearchbar: false,
  columns: [
  {
    header: 'PJ',
    key: 'attachment',
    width: 30,
    editable: false,
    typeCell: TYPE_CELL.THUMBNAIL
  },
  {
    header: I18n.t('common.collab'),
    key: 'username',
    size: 4,
    editable: false
  },
  {
    header: I18n.t('common.month'),
    key: 'month',
    size: 2,
    editable: false
  },
  {
    header: I18n.t('common.amount'),
    key: 'amount',
    size: 3,
    editable: false,
    typeCell: TYPE_CELL.AMOUNT
  },
  {
    header: I18n.t('common.accept'),
    key: 'validate',
    size: 3,
    selectAll: true,
    typeCell: TYPE_CELL.CHECKBOX,
    changeOtherColumnOnClick: {
      keyColumn: 'refuses',
      newValue: false
    }
  },
  {
    header: I18n.t('common.refuse'),
    key: 'refuses',
    size: 3,
    selectAll: true,
    typeCell: TYPE_CELL.CHECKBOX,
    variant: 'error',
    changeOtherColumnOnClick: {
      keyColumn: 'validate',
      newValue: false
    }
  },
  {
    header: I18n.t('common.comments'),
    key: 'comment',
    width: 100,
    typeCell: TYPE_CELL.COMMENT,
    commentKey: 'expense_id',
    location: 'EXPENSE_NOTE',
  }
]
}

const VirtualTablePlayground = () => {
  const [config, setConfig] = useState(defaultConfig);
  return (
    <>
    <h1>La VT</h1>
      <VirtualTable
        data={data}
        maxHeight="600px"
        config={config}
      />
    </>
  );
}

export default VirtualTablePlayground;