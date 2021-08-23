import React from 'react';
import CellRender from '../../../../../src/components/basics/VirtualTable/cells';
import VirtualTableContext from "../../../../../src/components/basics/VirtualTable/context";

const state = {};
const context = {};
const can = true;
const send = () => {};
const config = {
  columns: [{
      key: 'price',
      editable: false
  }, {
    key: 'language',
    optionList: [{
      label: 'Français',
      value: 'fr'
    },{
      label: 'English',
      value: 'en'
    }, {
      label: 'Deutsche',
      value: 'de'
    }],
    listData: [{
      name: 'Français',
      value: 'fr'
    },{
      name: 'English',
      value: 'en'
    }, {
      name: 'Deutsche',
      value: 'de'
    }],
    listStatus: [{
      value: 'Français',
      status: 'fr',
      showMenu: ['de', 'en']
    },{
      value: 'English',
      status: 'en',
      showMenu: ['de','fr']
    }, {
      value: 'Deutsche',
      status: 'de',
      showMenu: ['en', 'fr']
    }]
  }, {
    key: 'spokenLanguages',
    optionList: [{
      label: 'Français',
      value: 'fr'
    },{
      label: 'English',
      value: 'en'
    }, {
      label: 'Deutsche',
      value: 'de'
    }],
  },
  {
    key: 'badgeStatus',
    actionsByStatus: [{
      label: 'Only ok',
      status: ['ok'],
    }, {
      label: 'Ok or In Progress',
      status: ['ok', 'in-progress']
    }, {
      label: 'Only ko',
      status: ['ko']
    }],
  },
  {
    key: 'switchBadgeStatus',
    switchKey: 'ok',
    actionsByStatus: [{
      label: 'Ok or In Progress',
      status: ['ok', 'in-progress']
    }, {
      label: 'In Progress or ko',
      status: ['in-progress', 'ko']
    }, {
      label: 'Only ko',
      status: ['ko']
    }],
  },
  {
    key: 'status',
    listStatus: [],
    valueData: []
  }, {
    key: 'files'
  }, {
    key: 'comments'
  }, {
    key: 'date'
  }, {
    key: 'button',
    label: 'Click me',
    handleClick: () => alert('Clicked !')
  }, {
    key: 'multiple'
  }]
};
const data = {
  price: 50,
  language: 'fr',
  spokenLanguages: [{
    label: 'Français',
    value: 'fr'
  },{
    label: 'English',
    value: 'en'
  }],
  comments: [{
    avatarImgSrc: "",
    body: "<p>Un commentaire du superviseur</p>",
    date: "2021-06-30T14:52:30",
    history: [],
    id: 73434,
    initials: "JD",
    name: "John Doe"
  }],
  badgeStatus: {
    status: 'ok'
  },
  switchBadgeStatus: [{
    key: 'ok',
    status: 'ok'
  }],
  date: '31/10/2000',
  multiple: [{
    first: {
      label: 'Hello'
    }, 
    second: {
      label: 'Everybody'
    }
  }],
  files: [{
    thumbnail: 'https://via.placeholder.com/150x75'
  }],
  wallets: {
    count: 5,
    array: [{
      id: 'AAA'
    }, {
      id: 'BBB'
    }, {
      id: 'CCC'
    }, {
      id: 'DDD'
    }]
  }
};

const CellTypePreviewer = (props) => {
  const columnIndex = config.columns.findIndex((col) => col.key === props.dataKey);
  return (
    <div style={{ background: '#ddd', padding: '20px 10px', marginBottom: 20 }}>
      <div style={{ background: '#fff', margin: 'auto', width: '120px', position: 'relative', height: 32}}>

    <VirtualTableContext.Provider
      value={{
        state,
        context,
        send,
        can,
        config,
      }}
      >
      <CellRender data={data} {...props} columnIndex={columnIndex} />
    </VirtualTableContext.Provider>
      </div>
    </div>
  )
}

export default CellTypePreviewer;