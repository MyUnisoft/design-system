"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1730],{72660:function(e,n,t){var r=t(9334),a=t(82310),i=t(27378);n.Z=function(e){var n=e.content,t=(0,i.useState)(!1),l=t[0],o=t[1];return i.createElement("div",null,i.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},i.createElement(r.Z,{onClick:function(){return o((function(e){return!e}))}},"Toggle source")),i.createElement("div",{style:{display:l?"block":"none",maxHeight:500,overflow:"auto"}},i.createElement(a.Z1,{language:"jsx",text:n,showLineNumbers:!0,theme:a.BV,wrapLines:!0,codeBlock:!0})))}},20228:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return C},metadata:function(){return k},toc:function(){return y}});var r=t(87462),a=t(63366),i=t(27378),l=t(3905),o=t(72660),u=t(8778),s=[{id:1,first_name:"Johann",last_name:"Jobey",full_name:"Johann Jobey"},{id:2,first_name:"Rabi",last_name:"Ferrini",full_name:"Rabi Ferrini"},{id:3,first_name:"Leonelle",last_name:"Chaldecott",full_name:"Leonelle Chaldecott"},{id:4,first_name:"Lem",last_name:"Juza",full_name:"Lem Juza"},{id:5,first_name:"Guillaume",last_name:"Stitfall",full_name:"Guillaume Stitfall"},{id:6,first_name:"Sarine",last_name:"Alner",full_name:"Sarine Alner"},{id:7,first_name:"Sidonnie",last_name:"Alvar",full_name:"Sidonnie Alvar"},{id:8,first_name:"Domini",last_name:"Cominetti",full_name:"Domini Cominetti"},{id:9,first_name:"Meara",last_name:"Godrich",full_name:"Meara Godrich"},{id:10,first_name:"Vin",last_name:"Merryweather",full_name:"Vin Merryweather"}],c=[{key:"id",header:"#"},{key:"first_name",header:"Firstname",size:1},{key:"last_name",header:"Lastname",size:1},{key:"full_name",header:"Fullname",size:1}],m=function(){var e=(0,i.useState)(),n=e[0],t=e[1];return i.createElement(i.Fragment,null,i.createElement(u.Z,{config:{alwaysInEdition:!0,columns:c},data:s,onFocusChange:function(e){var n=e.to;t(n?"Line: "+n[0]+", Column: "+c[n[1]].key:"--")},tableKeyName:"doc-navigation-Basic"}),i.createElement("div",null,"Current Cell: ",n))},d=[{key:"id",header:"#"},{key:"first_name",header:"Firstname",size:1},{key:"last_name",header:"Lastname",size:1},{key:"full_name",header:"Fullname",size:1}],f=function(){var e=(0,i.useState)(),n=e[0],t=e[1],r=(0,i.useState)(),a=r[0],l=r[1];function o(e,n){a.setCurrentCell(e,n)}return i.createElement(i.Fragment,null,i.createElement(u.Z,{config:{alwaysInEdition:!0,columns:d},data:s,onFocusChange:function(e){var n=e.to;t(n?"Line: "+n[0]+", Column: "+d[n[1]].key:"--")},setVTState:l,tableKeyName:"doc-navigation-SetFocus"}),i.createElement("div",null,"Current Cell: ",n),i.createElement("button",{onClick:function(){return o(1,2)}},"Line 1, col 2"),i.createElement("button",{onClick:function(){return o(4,0)}},"Line 4, col 0"))},v=["components"],C={sidebar_position:6,title:"Navigation"},h=void 0,k={unversionedId:"virtual-table/navigation",id:"virtual-table/navigation",isDocsHomePage:!1,title:"Navigation",description:"The navigation feature allows you to track the focused cell and to focus a cell from outside the VirtualTable component.",source:"@site/docs/virtual-table/navigation.mdx",sourceDirName:"virtual-table",slug:"/virtual-table/navigation",permalink:"/design-system/docs/virtual-table/navigation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/navigation.mdx",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Navigation"},sidebar:"tutorialSidebar",previous:{title:"Secured data (to do)",permalink:"/design-system/docs/virtual-table/secure"},next:{title:"Event",permalink:"/design-system/docs/virtual-table/event"}},y=[{value:"Overview",id:"overview",children:[]},{value:"Set focus",id:"set-focus",children:[]}],g={toc:y};function b(e){var n=e.components,t=(0,a.Z)(e,v);return(0,l.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The navigation feature allows you to track the focused cell and to focus a cell from outside the VirtualTable component."),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)(m,{mdxType:"VirtualNavigationBasic"}),(0,l.kt)(o.Z,{content:"import React, { useState } from 'react';\r\nimport VirtualTable from \"../../../../../src/components/VirtualTable\"\r\nimport { data } from \"./mock\";\r\n\r\nconst columns = [{\r\n  key: 'id',\r\n  header: '#'\r\n}, {\r\n  key: 'first_name',\r\n  header: 'Firstname',\r\n  size: 1\r\n},  {\r\n  key: 'last_name',\r\n  header: 'Lastname',\r\n  size: 1\r\n}, {\r\n  key: 'full_name',\r\n  header: 'Fullname',\r\n  size: 1\r\n} ];\r\n\r\nconst NavigationBasic = () => {\r\n  const [currentCell, setCurrentCell] = useState();\r\n\r\n  function handleFocusChange({ to }) {\r\n    if (!to) {\r\n      setCurrentCell('--');\r\n    } else {\r\n      setCurrentCell(`Line: ${to[0]}, Column: ${columns[to[1]].key}`);\r\n    }\r\n  }\r\n\r\n  return (\r\n    <>\r\n      <VirtualTable\r\n        config={{\r\n          alwaysInEdition: true,\r\n          columns\r\n        }}\r\n        data={data}\r\n        onFocusChange={handleFocusChange}\r\n        tableKeyName=\"doc-navigation-Basic\"\r\n      />\r\n      <div>Current Cell: {currentCell}</div>\r\n    </>\r\n  );\r\n};\r\n\r\nexport default NavigationBasic;",mdxType:"CodePreview"}),(0,l.kt)("h2",{id:"set-focus"},"Set focus"),(0,l.kt)(f,{mdxType:"VirtualNavigationSetFocus"}),(0,l.kt)(o.Z,{content:"import React, { useState } from 'react';\r\nimport VirtualTable from \"../../../../../src/components/VirtualTable\"\r\nimport { data } from \"./mock\";\r\n\r\nconst columns = [{\r\n  key: 'id',\r\n  header: '#'\r\n}, {\r\n  key: 'first_name',\r\n  header: 'Firstname',\r\n  size: 1\r\n},  {\r\n  key: 'last_name',\r\n  header: 'Lastname',\r\n  size: 1\r\n}, {\r\n  key: 'full_name',\r\n  header: 'Fullname',\r\n  size: 1\r\n} ];\r\n\r\nconst NavigationSetFocus = () => {\r\n  const [currentCell, setCurrentCell] = useState();\r\n  const [VTState, setVTState] = useState();\r\n\r\n  function handleFocusChange({ to }) {\r\n    if (!to) {\r\n      setCurrentCell('--');\r\n    } else {\r\n      setCurrentCell(`Line: ${to[0]}, Column: ${columns[to[1]].key}`);\r\n    }\r\n  }\r\n\r\n  function handleClick(rowIndex, columnIndex) {\r\n    VTState.setCurrentCell(rowIndex, columnIndex);\r\n  }\r\n\r\n  return (\r\n    <>\r\n      <VirtualTable\r\n        config={{\r\n          alwaysInEdition: true,\r\n          columns\r\n        }}\r\n        data={data}\r\n        onFocusChange={handleFocusChange}\r\n        setVTState={setVTState}\r\n        tableKeyName=\"doc-navigation-SetFocus\"\r\n      />\r\n      <div>Current Cell: {currentCell}</div>\r\n      <button onClick={() => handleClick(1, 2)}>Line 1, col 2</button>\r\n      <button onClick={() => handleClick(4, 0)}>Line 4, col 0</button>\r\n    </>\r\n  );\r\n};\r\n\r\nexport default NavigationSetFocus;",mdxType:"CodePreview"}))}b.isMDXComponent=!0}}]);