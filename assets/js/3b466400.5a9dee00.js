(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5169],{86877:function(t,e,n){"use strict";var a=n(83721),r=n(29603),i=n(27378),s=(n(23615),n(38944)),l=n(89e3),o=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var d=i.forwardRef((function(t,e){var n=t.alignContent,l=void 0===n?"stretch":n,o=t.alignItems,u=void 0===o?"stretch":o,c=t.classes,d=t.className,m=t.component,p=void 0===m?"div":m,g=t.container,k=void 0!==g&&g,y=t.direction,h=void 0===y?"row":y,v=t.item,f=void 0!==v&&v,x=t.justify,N=t.justifyContent,b=void 0===N?"flex-start":N,w=t.lg,S=void 0!==w&&w,E=t.md,C=void 0!==E&&E,T=t.sm,B=void 0!==T&&T,Z=t.spacing,M=void 0===Z?0:Z,_=t.wrap,I=void 0===_?"wrap":_,R=t.xl,j=void 0!==R&&R,D=t.xs,A=void 0!==D&&D,W=t.zeroMinWidth,K=void 0!==W&&W,O=(0,a.Z)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),L=(0,s.Z)(c.root,d,k&&[c.container,0!==M&&c["spacing-xs-".concat(String(M))]],f&&c.item,K&&c.zeroMinWidth,"row"!==h&&c["direction-xs-".concat(String(h))],"wrap"!==I&&c["wrap-xs-".concat(String(I))],"stretch"!==u&&c["align-items-xs-".concat(String(u))],"stretch"!==l&&c["align-content-xs-".concat(String(l))],"flex-start"!==(x||b)&&c["justify-content-xs-".concat(String(x||b))],!1!==A&&c["grid-xs-".concat(String(A))],!1!==B&&c["grid-sm-".concat(String(B))],!1!==C&&c["grid-md-".concat(String(C))],!1!==S&&c["grid-lg-".concat(String(S))],!1!==j&&c["grid-xl-".concat(String(j))]);return i.createElement(p,(0,r.Z)({className:L,ref:e},O))})),m=(0,l.Z)((function(t){return(0,r.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return o.forEach((function(a){var r=t.spacing(a);0!==r&&(n["spacing-".concat(e,"-").concat(a)]={margin:"-".concat(c(r,2)),width:"calc(100% + ".concat(c(r),")"),"& > $item":{padding:c(r,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var a={};u.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var r="".concat(Math.round(t/12*1e8)/1e6,"%");a[e]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,r.Z)(t,a):t[e.breakpoints.up(n)]=a}(e,t,n),e}),{}))}),{name:"MuiGrid"})(d);e.Z=m},85372:function(t,e,n){"use strict";var a=n(27378);e.Z=function(t){var e=t.children;return a.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},e)}},38637:function(t,e,n){"use strict";var a=n(27378);e.Z=function(t){var e=t.children;return a.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},e)}},72660:function(t,e,n){"use strict";var a=n(9334),r=n(37430),i=n(27378);e.Z=function(t){var e=t.content,n=(0,i.useState)(!1),s=n[0],l=n[1];return i.createElement("div",null,i.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},i.createElement(a.Z,{onClick:function(){return l((function(t){return!t}))}},"Toggle source")),i.createElement("div",{style:{display:s?"block":"none",maxHeight:500,overflow:"auto"}},i.createElement(r.Z1,{language:"jsx",text:e,showLineNumbers:!0,theme:r.BV,wrapLines:!0,codeBlock:!0})))}},79721:function(t,e,n){"use strict";n.r(e),n.d(e,{contentTitle:function(){return w},default:function(){return T},frontMatter:function(){return b},metadata:function(){return S},toc:function(){return E}});var a=n(22122),r=n(19756),i=n(27378),s=n(3905),l=n(72660),o=n(86877),u=n(40949),c=n(55161);var d=function(){return i.createElement(o.Z,{container:!0,justifyContent:"center",spacing:2,style:{border:"1px solid #DDD"}},i.createElement(o.Z,{item:!0},i.createElement(u.Z,{status:c.u.OK.value})),i.createElement(o.Z,{item:!0},i.createElement(u.Z,{status:c.u.OK_MANUEL.value})),i.createElement(o.Z,{item:!0},i.createElement(u.Z,{status:c.u.TIME_OUT.value})),i.createElement(o.Z,{item:!0},i.createElement(u.Z,{status:c.u.IN_PROGRESS.value})),i.createElement(o.Z,{item:!0},i.createElement(u.Z,{status:c.u.IN_PROGRESS.value,value:42})),i.createElement(o.Z,{item:!0},i.createElement(u.Z,{status:c.u.IN_PROGRESS.value,value:1024})),i.createElement(o.Z,{item:!0},i.createElement(u.Z,{status:c.u.ERROR.value})),i.createElement(o.Z,{item:!0},i.createElement(u.Z,{status:c.u.ERROR_MANUEL.value})))},m=n(41940),p=n(85372),g=n(38637);var k=function(t){var e=t.columnProps,n=(0,i.useState)(c.u.OK.value),a=n[0],r=n[1];return i.createElement(g.Z,null,i.createElement(p.Z,null,i.createElement(m.Z,{vtContext:{state:"PERMANENT_EDIT"},column:Object.assign({actionsByStatus:[{label:"Set as ko",status:[c.u.OK.value],action:function(){return r(c.u.ERROR_MANUEL.value)}},{label:"Set as ok",status:[c.u.ERROR_MANUEL.value],action:function(){return r(c.u.OK.value)}},{label:"Say hello",status:[c.u.ERROR_MANUEL.value,c.u.OK.value],action:function(){return alert("Hello")}}]},e),data:{language:{status:a}},dataKey:"language",onChange:r})))},y=n(82920),h=n(13456),v=n(47802),f=n(74949);var x=function(){var t=(0,i.useState)("history"),e=t[0],n=t[1],a={winter:[{status:["ok"],label:'Say "Happy new year"'},{status:["error"],label:"sport"===e?"No thanksgiving for you":"Send mail to parent"}],spring:[{status:["ok","error"],label:"Enjoy your spring break"}]},r={columns:[{header:"Name",key:"name",size:1},{header:"Winter",key:"grades.winter",typeCell:f.v.SWITCH_BADGE_STATUS,switchKey:e,actionsByStatus:a.winter},{header:"Spring",key:"grades.spring",typeCell:f.v.SWITCH_BADGE_STATUS,switchKey:e,actionsByStatus:a.spring},{header:"Summer",key:"grades.summer",typeCell:f.v.SWITCH_BADGE_STATUS,switchKey:e,actionsByStatus:[]}]};return i.createElement("div",null,i.createElement(y.Z,{value:e,onChange:function(t){n(t.target.value)}},i.createElement(h.Z,{value:"history"},"History"),i.createElement(h.Z,{value:"math"},"Math"),i.createElement(h.Z,{value:"sport"},"Sport")),i.createElement(v.Z,{data:[{id:1,name:"Tom",grades:{winter:[{key:"history",status:"ok"},{key:"math",status:"error"},{key:"sport",status:"error"}],spring:[{key:"history",status:"ok"},{key:"math",status:"ok"},{key:"sport",status:"ok"}],summer:[{key:"history",status:"ok"},{key:"math",status:"error"},{key:"sport",status:"in-progress"}]}},{id:2,name:"Jerry",grades:{winter:[{key:"history",status:"error"},{key:"math",status:"error"},{key:"sport",status:"ok"}],spring:[{key:"history",status:"error"},{key:"math",status:"ok"},{key:"sport",status:"ok"}],summer:[{key:"history",status:"error"},{key:"math",status:"ok"},{key:"sport",status:"ok"}]}}],config:r}))},N=["components"],b={title:"Badge"},w=void 0,S={unversionedId:"virtual-table/cells/badge",id:"virtual-table/cells/badge",isDocsHomePage:!1,title:"Badge",description:"The Badge cell displays one of the following badge.",source:"@site/docs/virtual-table/cells/badge.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/badge",permalink:"/design-system/docs/virtual-table/cells/badge",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/badge.mdx",version:"current",frontMatter:{title:"Badge"},sidebar:"tutorialSidebar",previous:{title:"Autocomplete",permalink:"/design-system/docs/virtual-table/cells/autocomplete"},next:{title:"Button",permalink:"/design-system/docs/virtual-table/cells/button"}},E=[{value:"Badge Status",id:"badge-status",children:[]},{value:"Menu",id:"menu",children:[]},{value:"SwitchBagde",id:"switchbagde",children:[{value:"Example",id:"example",children:[]}]},{value:"Props",id:"props",children:[{value:"actionByStatus",id:"actionbystatus",children:[]}]}],C={toc:E};function T(t){var e=t.components,n=(0,r.Z)(t,N);return(0,s.kt)("wrapper",(0,a.Z)({},C,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Badge cell displays one of the following badge."),(0,s.kt)(d,{mdxType:"BadgeList"}),(0,s.kt)("h2",{id:"badge-status"},"Badge Status"),(0,s.kt)(k,{mdxType:"CellBadgeEdit"}),(0,s.kt)("h2",{id:"menu"},"Menu"),(0,s.kt)("p",null,"One of the main purpose of this typeCell is to display a menu based on the current value."),(0,s.kt)("h2",{id:"switchbagde"},"SwitchBagde"),(0,s.kt)("p",null,"The SwitchBadge cell allows to handle advanced needs, like 3 dimensionnals datas."),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("p",null,"In this example, we will display the grades of students during the year and for multiple subject."),(0,s.kt)(x,{mdxType:"SwitchBadgeGradeExample"}),(0,s.kt)(l.Z,{content:"import { MenuItem, Select } from \"@material-ui/core\";\r\nimport React, { useState } from \"react\";\r\nimport VirtualTable from \"../../../../../../src/components/VirtualTable\";\r\nimport { TYPE_CELL } from \"../../../../../../src/components/VirtualTable/constants/typeCell\";\r\n\r\nfunction SwitchBadgeGradeExample() {\r\n\r\n  const [switchKey, setSwitchKey] = useState('history');\r\n  const data = [{\r\n    id: 1,\r\n    name: 'Tom',\r\n    grades: {\r\n      winter: [{\r\n          key: 'history',\r\n          status: 'ok'\r\n        }, {\r\n          key: 'math',\r\n          status: 'error'\r\n        }, {\r\n          key: 'sport',\r\n          status: 'error'\r\n        }],\r\n      spring:  [{\r\n        key: 'history',\r\n        status: 'ok'\r\n      }, {\r\n        key: 'math',\r\n        status: 'ok'\r\n      }, {\r\n        key: 'sport',\r\n        status: 'ok'\r\n      }],\r\n      summer:  [{\r\n        key: 'history',\r\n        status: 'ok'\r\n      }, {\r\n        key: 'math',\r\n        status: 'error'\r\n      }, {\r\n        key: 'sport',\r\n        status: 'in-progress'\r\n      }],\r\n    }\r\n  }, {\r\n    id: 2,\r\n    name: 'Jerry',\r\n    grades: {\r\n      winter: [{\r\n          key: 'history',\r\n          status: 'error'\r\n        }, {\r\n          key: 'math',\r\n          status: 'error'\r\n        }, {\r\n          key: 'sport',\r\n          status: 'ok'\r\n        }],\r\n      spring:  [{\r\n        key: 'history',\r\n        status: 'error'\r\n      }, {\r\n        key: 'math',\r\n        status: 'ok'\r\n      }, {\r\n        key: 'sport',\r\n        status: 'ok'\r\n      }],\r\n      summer:  [{\r\n        key: 'history',\r\n        status: 'error'\r\n      }, {\r\n        key: 'math',\r\n        status: 'ok'\r\n      }, {\r\n        key: 'sport',\r\n        status: 'ok'\r\n      }],\r\n    }\r\n  }];\r\n\r\n  const actionsStatus = {\r\n    winter: [{\r\n      status: ['ok'],\r\n      label: 'Say \"Happy new year\"'\r\n    }, {\r\n      status: ['error'],\r\n      label: switchKey === 'sport' ? 'No thanksgiving for you' : 'Send mail to parent'\r\n    }],\r\n    spring: [{\r\n      status: ['ok', 'error'],\r\n      label: 'Enjoy your spring break'\r\n    }]\r\n  }\r\n\r\n  const config = {\r\n    columns: [\r\n      {\r\n        header: 'Name',\r\n        key: 'name',\r\n        size: 1\r\n      },\r\n      {\r\n        header: 'Winter',\r\n        key: 'grades.winter',\r\n        typeCell: TYPE_CELL.SWITCH_BADGE_STATUS,\r\n        switchKey,\r\n        actionsByStatus: actionsStatus.winter\r\n\r\n      },\r\n      {\r\n        header: 'Spring',\r\n        key: 'grades.spring',\r\n        typeCell: TYPE_CELL.SWITCH_BADGE_STATUS,\r\n        switchKey,\r\n        actionsByStatus: actionsStatus.spring\r\n      },\r\n      {\r\n        header: 'Summer',\r\n        key: 'grades.summer',\r\n        typeCell: TYPE_CELL.SWITCH_BADGE_STATUS,\r\n        switchKey,\r\n        actionsByStatus: []\r\n      }\r\n    ]\r\n  }\r\n\r\n  const handleChange = (event) => {\r\n    setSwitchKey(event.target.value);\r\n  };\r\n  \r\n  return (\r\n    <div>\r\n      <Select\r\n        value={switchKey}\r\n        onChange={handleChange}\r\n      >\r\n        <MenuItem value=\"history\">History</MenuItem>\r\n        <MenuItem value=\"math\">Math</MenuItem>\r\n        <MenuItem value=\"sport\">Sport</MenuItem>\r\n      </Select>\r\n      <VirtualTable\r\n        data={data}\r\n        config={config}\r\n      />\r\n    </div>\r\n  )\r\n}\r\n\r\nexport default SwitchBadgeGradeExample;",mdxType:"CodePreview"}),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This could be achieve without using ",(0,s.kt)("inlineCode",{parentName:"p"},"SwithBadge")," by using a dynamic data object. But the advantage of ",(0,s.kt)("inlineCode",{parentName:"p"},"SwitchBadge")," is to only update the config props. This can be very useful with a large amount of data."))),(0,s.kt)("h2",{id:"props"},"Props"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"actionsByStatus")),(0,s.kt)("td",{parentName:"tr",align:null},"array"),(0,s.kt)("td",{parentName:"tr",align:null},"No"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"[]")),(0,s.kt)("td",{parentName:"tr",align:null},"Array of actionByStatus passed to ",(0,s.kt)("inlineCode",{parentName:"td"},"ContextMenu")," component")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"switchKey")),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Warning:")," Only working with ",(0,s.kt)("inlineCode",{parentName:"td"},"switch_badge_status")," typeCell.")))),(0,s.kt)("h3",{id:"actionbystatus"},"actionByStatus"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"action")),(0,s.kt)("td",{parentName:"tr",align:null},"func"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Callback fired when the choice is selected")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"label")),(0,s.kt)("td",{parentName:"tr",align:null},"any"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Element passed as a children to ",(0,s.kt)("inlineCode",{parentName:"td"},"MenuItem"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"status")),(0,s.kt)("td",{parentName:"tr",align:null},"array"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Array of status that allows this choice")))))}T.isMDXComponent=!0}}]);