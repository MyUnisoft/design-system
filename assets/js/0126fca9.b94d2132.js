"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9249],{72660:(r,t,e)=>{e.d(t,{Z:()=>i});var n=e(68666),o=e(30499),a=e(27378);const i=r=>{let{content:t}=r;const[e,i]=(0,a.useState)(!1);return a.createElement("div",null,a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},a.createElement(n.Z,{onClick:()=>i((r=>!r))},"Toggle source")),a.createElement("div",{style:{display:e?"block":"none",maxHeight:500,overflow:"auto"}},a.createElement(o.Z1,{language:"jsx",text:t,showLineNumbers:!0,theme:o.BV,wrapLines:!0,codeBlock:!0})))}},57050:(r,t,e)=>{e.r(t),e.d(t,{assets:()=>f,contentTitle:()=>T,default:()=>x,frontMatter:()=>g,metadata:()=>b,toc:()=>y});var n=e(87462),o=e(27378),a=e(3905),i=e(72660),l=e(94960),s=e.n(l),u=e(41138),d=e(74949),p=e(12142);const m=()=>{const r={exportFormat:["csv","xls","pdf","print"],groupKey:"groupId",modeGroup:!0,groupSelection:!0,columns:[{header:"Exercice N",key:"title",size:1,style:()=>{console.log("title")}},{header:"Amount",width:150,key:"amount",typeCell:d.v.AMOUNT,alignText:"right",formatAmount:function(r,t){return void 0===t&&(t="0,0.00"),`${s()(+(+(r||0)).toFixed(2)).format(t)} \u20ac`.replace(","," ").replace(".",",")}}]};return o.createElement(u.Z,{data:[{id:1,amount:53e4,title:"Total brut bulletins de paies",groupId:1},{id:3,amount:0,title:"Ecart Bulletins de paies - Brut salari\xe9s",groupId:1},{id:4,amount:15e4,title:"Total brut bulletins de paies",groupId:2},{id:5,amount:145e3,title:"Total des comptes 641",groupId:2},{id:6,amount:5e3,title:"Ecart Bulletins de paies - Total des comptes 641",groupId:2},{id:7,amount:27e3,title:"Total des Cotisations patronales",groupId:3},{id:8,amount:27e3,title:"Total des comptes 645",groupId:3},{id:9,amount:0,title:"Ecart Cotisations patronales - Compta",groupId:3},{id:10,amount:8e5,title:"Total des comptes 43",groupId:4},{id:11,amount:799e3,title:"Total des comptes 641",groupId:4},{id:2,amount:53e4,title:"Total brut de tous les salari\xe9s",groupId:1},{id:12,amount:1e3,title:"Ecart Total brut DSN - Compta",groupId:4}],maxHeight:"600px",config:r,tableKeyName:"doc-group-Basic"})},c=()=>{const r=[{id:1,name:"Rapprochement Bulletins de paies issus de la paie - Brut salari\xe9s issus de la paie",rowType:p.Os.GROUP_BUTTON,data:[{id:101,amount:53e4,title:"Total brut bulletins de paies",groupId:1},{id:102,amount:53e4,title:"Total brut de tous les salari\xe9s",groupId:1},{id:103,amount:0,title:"Ecart Bulletins de paies - Brut salari\xe9s",groupId:1,style:{background:"#cef6f6"}}]},{id:2,name:"Rapprochement Bulletins de paies issus de la paie - Compta",rowType:p.Os.GROUP_BUTTON,data:[{id:4,amount:15e4,title:"Total brut bulletins de paies",groupId:2},{id:5,amount:145e3,title:"Total des comptes 641",groupId:2},{id:6,amount:5e3,title:"Ecart Bulletins de paies - Total des comptes 641",groupId:2,style:{background:"#ffd8df"}}]},{id:3,name:"Rapprochement Cotisations patronales issus de la paie - Compta",rowType:p.Os.GROUP_BUTTON,data:[{id:7,amount:27e3,title:"Total des Cotisations patronales",groupId:3},{id:8,amount:27e3,title:"Total des comptes 645",groupId:3},{id:9,amount:0,title:"Ecart Cotisations patronales - Compta",groupId:3,style:{background:"#cef6f6"}}]},{id:4,name:"Rapprochement DSN - Compta",rowType:p.Os.GROUP_BUTTON,data:[{id:10,amount:8e5,title:"Total des comptes 43",groupId:4},{id:11,amount:799e3,title:"Total des comptes 641",groupId:4},{id:12,amount:1e3,title:"Ecart Total brut DSN - Compta",groupId:4,style:{background:"#ffd8df"}}]}],t={exportFormat:["csv","xls","pdf","print"],modeEdit:!0,modeGroup:!0,groupKey:"groupId",collapsedGroup:!0,columns:[{header:"Exercice N",key:"title",size:1,sortable:!1,editable:!1,style:()=>{console.log("title")}},{header:"Amount",width:150,key:"amount",typeCell:d.v.AMOUNT,alignText:"right",sortable:!1,formatAmount:function(r,t){return void 0===t&&(t="0,0.00"),`${s()(+(+(r||0)).toFixed(2)).format(t)} \u20ac`.replace(","," ").replace(".",",")}}]};return o.createElement(u.Z,{data:r,maxHeight:"600px",config:t,tableKeyName:"doc-group-Accordion"})},g={sidebar_position:3,title:"Group"},T=void 0,b={unversionedId:"virtual-table/group",id:"virtual-table/group",title:"Group",description:"",source:"@site/docs/virtual-table/group.mdx",sourceDirName:"virtual-table",slug:"/virtual-table/group",permalink:"/design-system/docs/virtual-table/group",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/group.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Group"},sidebar:"tutorialSidebar",previous:{title:"Wallet",permalink:"/design-system/docs/virtual-table/cells/wallet"},next:{title:"Mode (to do)",permalink:"/design-system/docs/virtual-table/mode"}},f={},y=[{value:"Basic",id:"basic",level:2},{value:"Accordion",id:"accordion",level:2}],I={toc:y};function x(r){let{components:t,...e}=r;return(0,a.kt)("wrapper",(0,n.Z)({},I,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"basic"},"Basic"),(0,a.kt)(m,{mdxType:"VirtualTableGroupBasic"}),(0,a.kt)(i.Z,{content:"import numeral from 'numeral';\r\nimport React from 'react';\r\nimport VirtualTable from '../../../../../src/components/VirtualTable';\r\nimport { TYPE_CELL } from '../../../../../src/components/VirtualTable/constants/typeCell';\r\nimport { ROW_TYPE } from '../../../../../src/components/VirtualTable/utils';\r\n\r\nconst VirtualTableGroupBasic = () => {\r\n  const formatAmount = (num, format = '0,0.00') =>\r\n    `${numeral(+(+(num || 0)).toFixed(2)).format(format)} \u20ac`\r\n      .replace(',', ' ')\r\n      .replace('.', ',');\r\n\r\n  const data = [\r\n    {\r\n      id: 1,\r\n      amount: 530000,\r\n      title: 'Total brut bulletins de paies',\r\n      groupId: 1\r\n    },\r\n    {\r\n      id: 3,\r\n      amount: 0,\r\n      title: 'Ecart Bulletins de paies - Brut salari\xe9s',\r\n      groupId: 1\r\n    },\r\n    {\r\n      id: 4,\r\n      amount: 150000,\r\n      title: 'Total brut bulletins de paies',\r\n      groupId: 2\r\n    },\r\n    {\r\n      id: 5,\r\n      amount: 145000,\r\n      title: 'Total des comptes 641',\r\n      groupId: 2\r\n    },\r\n    {\r\n      id: 6,\r\n      amount: 5000,\r\n      title: 'Ecart Bulletins de paies - Total des comptes 641',\r\n      groupId: 2\r\n    },\r\n    {\r\n      id: 7,\r\n      amount: 27000,\r\n      title: 'Total des Cotisations patronales',\r\n      groupId: 3\r\n    },\r\n    {\r\n      id: 8,\r\n      amount: 27000,\r\n      title: 'Total des comptes 645',\r\n      groupId: 3\r\n    },\r\n    {\r\n      id: 9,\r\n      amount: 0,\r\n      title: 'Ecart Cotisations patronales - Compta',\r\n      groupId: 3\r\n    },\r\n    {\r\n      id: 10,\r\n      amount: 800000,\r\n      title: 'Total des comptes 43',\r\n      groupId: 4\r\n    },\r\n    {\r\n      id: 11,\r\n      amount: 799000,\r\n      title: 'Total des comptes 641',\r\n      groupId: 4\r\n    },\r\n    {\r\n      id: 2,\r\n      amount: 530000,\r\n      title: 'Total brut de tous les salari\xe9s',\r\n      groupId: 1\r\n    },\r\n    {\r\n      id: 12,\r\n      amount: 1000,\r\n      title: 'Ecart Total brut DSN - Compta',\r\n      groupId: 4\r\n    }\r\n  ];\r\n\r\n  const config = {\r\n    exportFormat: ['csv', 'xls', 'pdf', 'print'],\r\n    groupKey: 'groupId',\r\n    modeGroup: true,\r\n    groupSelection: true,\r\n    // defaultOrderDirection: 'desc',\r\n    // sortedGroup: true,\r\n    columns: [\r\n      {\r\n        header: 'Exercice N',\r\n        key: 'title',\r\n        size: 1,\r\n        style: () => {\r\n          console.log('title');\r\n        }\r\n      },\r\n      {\r\n        header: 'Amount',\r\n        width: 150,\r\n        key: 'amount',\r\n        typeCell: TYPE_CELL.AMOUNT,\r\n        alignText: 'right',\r\n        formatAmount\r\n      }\r\n    ]\r\n  };\r\n  return (\r\n    <VirtualTable\r\n      data={data}\r\n      maxHeight=\"600px\"\r\n      config={config}\r\n      tableKeyName=\"doc-group-Basic\"\r\n    />\r\n  );\r\n};\r\n\r\nexport default VirtualTableGroupBasic;\r\n",mdxType:"CodePreview"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<VirtualTable \n  config={{\n    modeGroup: true,\n    groupKey: 'groupId',\n    groupSelection: true,\n    ...\n  }}\n")),(0,a.kt)("h2",{id:"accordion"},"Accordion"),(0,a.kt)("p",null,"The most common use of the group option is in read mode. "),(0,a.kt)(c,{mdxType:"VirtualTableGroupAccordion"}),(0,a.kt)(i.Z,{content:"import numeral from 'numeral';\r\nimport React from 'react';\r\nimport VirtualTable from '../../../../../src/components/VirtualTable';\r\nimport { TYPE_CELL } from '../../../../../src/components/VirtualTable/constants/typeCell';\r\nimport { ROW_TYPE } from '../../../../../src/components/VirtualTable/utils';\r\n\r\nconst VirtualTableGroupBasic = () => {\r\n  const formatAmount = (num, format = '0,0.00') =>\r\n    `${numeral(+(+(num || 0)).toFixed(2)).format(format)} \u20ac`\r\n      .replace(',', ' ')\r\n      .replace('.', ',');\r\n\r\n  const data = [\r\n    {\r\n      id: 1,\r\n      name: 'Rapprochement Bulletins de paies issus de la paie - Brut salari\xe9s issus de la paie',\r\n      rowType: ROW_TYPE.GROUP_BUTTON,\r\n      data: [\r\n        {\r\n          id: 101,\r\n          amount: 530000,\r\n          title: 'Total brut bulletins de paies',\r\n          groupId: 1\r\n        },\r\n        {\r\n          id: 102,\r\n          amount: 530000,\r\n          title: 'Total brut de tous les salari\xe9s',\r\n          groupId: 1\r\n        },\r\n        {\r\n          id: 103,\r\n          amount: 0,\r\n          title: 'Ecart Bulletins de paies - Brut salari\xe9s',\r\n          groupId: 1,\r\n          style: {\r\n            background: '#cef6f6'\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      id: 2,\r\n      name: 'Rapprochement Bulletins de paies issus de la paie - Compta',\r\n      rowType: ROW_TYPE.GROUP_BUTTON,\r\n      data: [\r\n        {\r\n          id: 4,\r\n          amount: 150000,\r\n          title: 'Total brut bulletins de paies',\r\n          groupId: 2\r\n        },\r\n        {\r\n          id: 5,\r\n          amount: 145000,\r\n          title: 'Total des comptes 641',\r\n          groupId: 2\r\n        },\r\n        {\r\n          id: 6,\r\n          amount: 5000,\r\n          title: 'Ecart Bulletins de paies - Total des comptes 641',\r\n          groupId: 2,\r\n          style: {\r\n            background: '#ffd8df'\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      id: 3,\r\n      name: 'Rapprochement Cotisations patronales issus de la paie - Compta',\r\n      rowType: ROW_TYPE.GROUP_BUTTON,\r\n      data: [\r\n        {\r\n          id: 7,\r\n          amount: 27000,\r\n          title: 'Total des Cotisations patronales',\r\n          groupId: 3\r\n        },\r\n        {\r\n          id: 8,\r\n          amount: 27000,\r\n          title: 'Total des comptes 645',\r\n          groupId: 3\r\n        },\r\n        {\r\n          id: 9,\r\n          amount: 0,\r\n          title: 'Ecart Cotisations patronales - Compta',\r\n          groupId: 3,\r\n          style: {\r\n            background: '#cef6f6'\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      id: 4,\r\n      name: 'Rapprochement DSN - Compta',\r\n      rowType: ROW_TYPE.GROUP_BUTTON,\r\n      data: [\r\n        {\r\n          id: 10,\r\n          amount: 800000,\r\n          title: 'Total des comptes 43',\r\n          groupId: 4\r\n        },\r\n        {\r\n          id: 11,\r\n          amount: 799000,\r\n          title: 'Total des comptes 641',\r\n          groupId: 4\r\n        },\r\n        {\r\n          id: 12,\r\n          amount: 1000,\r\n          title: 'Ecart Total brut DSN - Compta',\r\n          groupId: 4,\r\n          style: {\r\n            background: '#ffd8df'\r\n          }\r\n        }\r\n      ]\r\n    }\r\n  ];\r\n\r\n  const config = {\r\n    exportFormat: ['csv', 'xls', 'pdf', 'print'],\r\n    modeEdit: true,\r\n    modeGroup: true,\r\n    groupKey: 'groupId',\r\n    collapsedGroup: true,\r\n    columns: [\r\n      {\r\n        header: 'Exercice N',\r\n        key: 'title',\r\n        size: 1,\r\n        sortable: false,\r\n        editable: false,\r\n        style: () => {\r\n          console.log('title');\r\n        }\r\n      },\r\n      {\r\n        header: 'Amount',\r\n        width: 150,\r\n        key: 'amount',\r\n        typeCell: TYPE_CELL.AMOUNT,\r\n        alignText: 'right',\r\n        sortable: false,\r\n        formatAmount\r\n      }\r\n    ]\r\n  };\r\n  return (\r\n    <VirtualTable\r\n      data={data}\r\n      maxHeight=\"600px\"\r\n      config={config}\r\n      tableKeyName=\"doc-group-Accordion\"\r\n    />\r\n  );\r\n};\r\n\r\nexport default VirtualTableGroupBasic;\r\n",mdxType:"CodePreview"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<VirtualTable \n  config={{\n    modeGroup: true,\n    collapsedGroup: true,\n    groupKey: 'groupId',\n    ...\n  }}\n")))}x.isMDXComponent=!0}}]);