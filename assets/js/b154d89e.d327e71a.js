"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3139],{72660:function(e,n,t){var l=t(9334),r=t(82310),a=t(27378);n.Z=function(e){var n=e.content,t=(0,a.useState)(!1),i=t[0],o=t[1];return a.createElement("div",null,a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},a.createElement(l.Z,{onClick:function(){return o((function(e){return!e}))}},"Toggle source")),a.createElement("div",{style:{display:i?"block":"none",maxHeight:500,overflow:"auto"}},a.createElement(r.Z1,{language:"jsx",text:n,showLineNumbers:!0,theme:r.BV,wrapLines:!0,codeBlock:!0})))}},27974:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return k}});var l=t(87462),r=t(63366),a=t(27378),i=t(3905),o=t(72660),u=t(59302),s=[{id:1,first_name:"Johann",last_name:"Jobey",full_name:"Johann Jobey"},{id:2,first_name:"Rabi",last_name:"Ferrini",full_name:"Rabi Ferrini"},{id:3,first_name:"Leonelle",last_name:"Chaldecott",full_name:"Leonelle Chaldecott"},{id:4,first_name:"Lem",last_name:"Juza",full_name:"Lem Juza"},{id:5,first_name:"Guillaume",last_name:"Stitfall",full_name:"Guillaume Stitfall"},{id:6,first_name:"Sarine",last_name:"Alner",full_name:"Sarine Alner"},{id:7,first_name:"Sidonnie",last_name:"Alvar",full_name:"Sidonnie Alvar"},{id:8,first_name:"Domini",last_name:"Cominetti",full_name:"Domini Cominetti"},{id:9,first_name:"Meara",last_name:"Godrich",full_name:"Meara Godrich"},{id:10,first_name:"Vin",last_name:"Merryweather",full_name:"Vin Merryweather"}],c=[{key:"id",header:"#"},{key:"first_name",header:"Firstname",size:1},{key:"last_name",header:"Lastname",size:1},{key:"full_name",header:"Fullname",size:1}],d=function(){var e=(0,a.useState)(),n=e[0],t=e[1],l=(0,a.useState)(),r=l[0],i=l[1];return a.createElement(a.Fragment,null,a.createElement(u.Z,{config:{alwaysInEdition:!0,columns:c},data:s,onFocusChange:function(e){var n=e.to;t(n?"Line: "+n[0]+", Column: "+n[1]+" ("+c[n[1]].key+")":"--")},onKeyDown:function(e,n,t){i(Object.assign({},e,{rowIndex:n,columnIndex:t}))},tableKeyName:"doc-event"}),a.createElement("div",null,"Current Cell: ",n),a.createElement("div",null,"Last keydown:",r&&a.createElement(a.Fragment,null,a.createElement("b",null,r.rowIndex," : ",r.columnIndex)," -",a.createElement("span",null,"Key: ",r.key," - Alt: ",r.altKey?"true":"false"," - Ctrl: ",r.ctrlKey?"true":"false"," - Shift: ",r.shiftKey?"true":"false"))))},m=["components"],v={sidebar_position:7,title:"Event"},h=void 0,f={unversionedId:"virtual-table/event",id:"virtual-table/event",isDocsHomePage:!1,title:"Event",description:"Overview",source:"@site/docs/virtual-table/event.mdx",sourceDirName:"virtual-table",slug:"/virtual-table/event",permalink:"/design-system/docs/virtual-table/event",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/event.mdx",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Event"},sidebar:"tutorialSidebar",previous:{title:"Navigation",permalink:"/design-system/docs/virtual-table/navigation"},next:{title:"Export",permalink:"/design-system/docs/virtual-table/export"}},k=[{value:"Overview",id:"overview",children:[]},{value:"Handling global events",id:"handling-global-events",children:[{value:"onFocusChange",id:"onfocuschange",children:[]},{value:"onClick",id:"onclick",children:[]},{value:"onDoubleClick",id:"ondoubleclick",children:[]},{value:"onKeyDown",id:"onkeydown",children:[]}]},{value:"Handling cell events",id:"handling-cell-events",children:[{value:"onClick",id:"onclick-1",children:[]},{value:"onDoubleClick",id:"ondoubleclick-1",children:[]},{value:"onKeyDown",id:"onkeydown-1",children:[]},{value:"onChange",id:"onchange",children:[]},{value:"onFocus",id:"onfocus",children:[]},{value:"onBlur",id:"onblur",children:[]}]}],y={toc:k};function b(e){var n=e.components,t=(0,r.Z)(e,m);return(0,i.kt)("wrapper",(0,l.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)(d,{mdxType:"VirtualEventOverview"}),(0,i.kt)(o.Z,{content:"import React, { useState } from 'react';\r\nimport VirtualTable from \"../../../../../src/components/VirtualTable\"\r\nimport { data } from \"./mock\";\r\n\r\nconst columns = [{\r\n  key: 'id',\r\n  header: '#'\r\n}, {\r\n  key: 'first_name',\r\n  header: 'Firstname',\r\n  size: 1\r\n},  {\r\n  key: 'last_name',\r\n  header: 'Lastname',\r\n  size: 1\r\n}, {\r\n  key: 'full_name',\r\n  header: 'Fullname',\r\n  size: 1\r\n} ];\r\n\r\nconst EventOverview = () => {\r\n  const [currentCell, setCurrentCell] = useState();\r\n  const [keyDown, setKeyDown] = useState();\r\n\r\n  function handleFocusChange({ to }) {\r\n    if (!to) {\r\n      setCurrentCell('--');\r\n    } else {\r\n      setCurrentCell(`Line: ${to[0]}, Column: ${to[1]} (${columns[to[1]].key})`);\r\n    }\r\n  }\r\n\r\n  function handleKeyDown(e, rowIndex, columnIndex) {\r\n    setKeyDown({\r\n      ...e,\r\n      rowIndex,\r\n      columnIndex\r\n    });\r\n  }\r\n\r\n  return (\r\n    <>\r\n      <VirtualTable\r\n        config={{\r\n          alwaysInEdition: true,\r\n          columns\r\n        }}\r\n        data={data}\r\n        onFocusChange={handleFocusChange}\r\n        onKeyDown={handleKeyDown}\r\n        tableKeyName=\"doc-event\"\r\n      />\r\n      <div>Current Cell: {currentCell}</div>\r\n      <div>Last keydown: \r\n        { keyDown && (<>\r\n          <b>{keyDown.rowIndex} : {keyDown.columnIndex}</b> - \r\n          <span>Key: {keyDown.key} - Alt: {keyDown.altKey ? 'true' : 'false'} - Ctrl: {keyDown.ctrlKey ? 'true' : 'false'} - Shift: {keyDown.shiftKey ? 'true' : 'false'}</span>\r\n        </>)}\r\n      </div>\r\n    </>\r\n  );\r\n};\r\n\r\nexport default EventOverview;",mdxType:"CodePreview"}),(0,i.kt)("h2",{id:"handling-global-events"},"Handling global events"),(0,i.kt)("h3",{id:"onfocuschange"},"onFocusChange"),(0,i.kt)("h3",{id:"onclick"},"onClick"),(0,i.kt)("h3",{id:"ondoubleclick"},"onDoubleClick"),(0,i.kt)("h3",{id:"onkeydown"},"onKeyDown"),(0,i.kt)("h2",{id:"handling-cell-events"},"Handling cell events"),(0,i.kt)("p",null,"All cells type are listening to those events. Keep in mind that those listeners are located on the cell level and not the cell subcomponent level.\nMeaning that if the user click just next to the comment Icon but still into the cell, the ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick")," event will be triggered."),(0,i.kt)("h3",{id:"onclick-1"},"onClick"),(0,i.kt)("h3",{id:"ondoubleclick-1"},"onDoubleClick"),(0,i.kt)("h3",{id:"onkeydown-1"},"onKeyDown"),(0,i.kt)("h3",{id:"onchange"},"onChange"),(0,i.kt)("h3",{id:"onfocus"},"onFocus"),(0,i.kt)("h3",{id:"onblur"},"onBlur"))}b.isMDXComponent=!0}}]);