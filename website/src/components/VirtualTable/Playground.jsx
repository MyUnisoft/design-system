import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import I18n from '../../../../src/assets/I18n';
import VirtualTable from '../../../../src/components/basics/VirtualTable';
import { ROW_TYPE } from '../../../../src/components/basics/VirtualTable/utils';
import { TYPE_CELL, TYPE_FOOTER_CELL } from '../../../../src/constants/typeCell';
import ConfigPreview from './ConfigPreview';

const defaultData = Array(50).fill().map((r, i) => ({
  id: i,
  username: `User Lastname #${i + 1}`,
  month: (i % 12) + 1,
  amount: Math.round((i%5) * (i%7) / ((i%6) + 1)),
  status: !(i%7) || !(i%3) ? 'accepted' : !(i%4) ? 'refused' : null,
  rowType: ROW_TYPE.VIEW
}));

const settings = [
  {
    key: 'hasSearchbar',
    label: 'SearchBar',
    type: 'checkbox'
  },
  {
    key: 'modeEdit',
    label: 'Edit mode',
    type: 'checkbox'
  },
  {
    key: 'modeAdd',
    label: 'Add mode',
    type: 'checkbox'
  },
  {
    key: 'modeDelete',
    label: 'Delete mode',
    type: 'checkbox'
  },
  {
    key: 'hasFooter',
    label: 'Footer',
    type: 'checkbox'
  },
  {
    key: 'hasHeader',
    label: 'Header',
    type: 'checkbox'
  },
  {
    key: 'alwaysInEdition',
    label: 'Edition en ligne',
    type: 'checkbox'
  },
];

const actionsButton = [
  {
    label: 'test1',
    onClick: (data) => { console.log('test1', data); }
  },
  {
    label: 'test2',
    onClick: (data) => { console.log('test2', data); }
  },
  {
    label: 'test3',
    onClick: (data) => { console.log('test3', data); }
  },      
  {
    label: 'test4',
    onClick: (data) => { console.log('test4', data); }
  }
];

const customButtons = [
  {
    iconName: 'icon-upload1',
    iconColor: 'white',
    color: 'error',
    titleInfoBulle: 'Upload',
    onClick: () => {
      console.log('Clique sur le bouton !');
    }
  },
  {
    iconName: 'icon-download1',
    iconColor: 'white',
    color: 'secondary',
    titleInfoBulle: 'Download',
    onClick: () => {
      console.log('Clique sur le bouton !');
    }
  }
];

const defaultConfig = {
  modeEdit: true,
  modeAdd: true,
  selectableBarInfo: true,
  hasSearchbar: true,
  hasFooter: true,
  actionsButton,
  selectableRowKey: 'id',
  fixedColumns: 2,
  customButtons,
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
    editable: false,
    footerValue:  `${I18n.t('common.total')}`
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
    typeFooter: TYPE_FOOTER_CELL.SUM,
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
    header: I18n.t('common.status.text'),
    key: 'status',
    size: 4,
    typeCell: TYPE_CELL.STATUS,
    canChangeStatus: true,
    sortable: true,
    listStatus: [
      {
        status: 'accepted',
        value: I18n.t('common.status.accepted'),
        styles: { color: '#0bd1c4' },
        showMenu: [3]
      },
      {
        status: 'refused',
        value: I18n.t('common.status.refused'),
        styles: { color: '#f54b4b' }
      }
    ]
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
  const [data, setData] = useState(defaultData);
  return (
    <>
      <div>
        { settings.map((setting) => (
          <><label>{setting.label} <Checkbox defaultChecked={config[setting.key]} onClick={() => setConfig(config => ({ ...config, [setting.key]: !config[setting.key] }))} /></label> - </>
        ))}
      </div>
      <div style={{ margin: '2rem 0' }}>
        <VirtualTable
          data={data}
          maxHeight="600px"
          config={config}
          handleValidateAdd={(rows) => setData(d => ([ ...rows, ...data ])) }
        />
      </div>
      <ConfigPreview config={config} settings={settings} />
    </>
  );
}

export default VirtualTablePlayground;