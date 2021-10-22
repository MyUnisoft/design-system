(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3220],{85372:function(e,t,n){"use strict";var a=n(27378);t.Z=function(e){var t=e.children;return a.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},t)}},38637:function(e,t,n){"use strict";var a=n(27378);t.Z=function(e){var t=e.children;return a.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},t)}},72660:function(e,t,n){"use strict";var a=n(9334),l=n(37430),r=n(27378);t.Z=function(e){var t=e.content,n=(0,r.useState)(!1),i=n[0],o=n[1];return r.createElement("div",null,r.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.createElement(a.Z,{onClick:function(){return o((function(e){return!e}))}},"Toggle source")),r.createElement("div",{style:{display:i?"block":"none",maxHeight:500,overflow:"auto"}},r.createElement(l.Z1,{language:"jsx",text:t,showLineNumbers:!0,theme:l.BV,wrapLines:!0,codeBlock:!0})))}},20077:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return v},default:function(){return E},frontMatter:function(){return b},metadata:function(){return N},toc:function(){return y}});var a=n(22122),l=n(19756),r=n(27378),i=n(3905),o=n(72660),c=n(97824),d=n(85372),u=n(38637);var m=function(e){var t=e.columnProps,n=(0,r.useState)(!0),a=n[0],l=n[1];return r.createElement(u.Z,null,r.createElement(d.Z,null,r.createElement(c.Z,{vtContext:{state:"PERMANENT_EDIT"},column:Object.assign({},t),onChange:l,data:{validated:a},dataKey:"validated"})))};var p=function(e){var t=e.columnProps;return r.createElement(u.Z,null,r.createElement(d.Z,null,r.createElement(c.Z,{column:Object.assign({changeOtherColumnOnClick:{keyColumn:"validate",newValue:!1}},t),data:{validated:!0},dataKey:"validated"})))},s=n(47802),k=n(74949);var h,g=function(){var e={alwaysInEdition:!0,columns:[{size:1,key:"accepted",header:"Accepted",changeOtherColumnOnClick:{keyColumn:"refused",newValue:!1},typeCell:k.v.CHECKBOX},{size:1,key:"refused",header:"Refused",variant:"error",changeOtherColumnOnClick:{keyColumn:"accepted",newValue:!1},typeCell:k.v.CHECKBOX}]};return r.createElement("div",null,r.createElement(s.Z,{data:[{id:1,accepted:!0,refused:!1}],config:e}))},C=["components"],b={title:"Checkbox"},v=void 0,N={unversionedId:"virtual-table/cells/checkbox",id:"virtual-table/cells/checkbox",isDocsHomePage:!1,title:"Checkbox",description:"Basic",source:"@site/docs/virtual-table/cells/checkbox.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/checkbox",permalink:"/design-system/docs/virtual-table/cells/checkbox",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/checkbox.mdx",version:"current",frontMatter:{title:"Checkbox"},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/design-system/docs/virtual-table/cells/button"},next:{title:"Chip (deprecated)",permalink:"/design-system/docs/virtual-table/cells/chip"}},y=[{value:"Basic",id:"basic",children:[]},{value:"Variant",id:"variant",children:[{value:"Change other column data",id:"change-other-column-data",children:[]}]},{value:"Read only",id:"read-only",children:[{value:"columnChange",id:"columnchange",children:[]}]}],f=(h="CellTypePreviewer",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),x={toc:y};function E(e){var t=e.components,n=(0,l.Z)(e,C);return(0,i.kt)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"basic"},"Basic"),(0,i.kt)(m,{mdxType:"CellCheckboxEdit"}),(0,i.kt)("h2",{id:"variant"},"Variant"),(0,i.kt)(m,{columnProps:{variant:"error"},mdxType:"CellCheckboxEdit"}),(0,i.kt)("h3",{id:"change-other-column-data"},"Change other column data"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"changeOtherColumnOnClick")," property is used to alter another column. The most common use case is to create a two checkboxes interaction."),(0,i.kt)(g,{mdxType:"CheckboxGroupExample"}),(0,i.kt)(o.Z,{content:"import React from 'react';\nimport VirtualTable from \"../../../../../../src/components/VirtualTable\";\nimport { TYPE_CELL } from \"../../../../../../src/components/VirtualTable/constants/typeCell\";\n\nfunction CheckboxGroupExample() {\n  const data = [{\n    id: 1,\n    accepted: true,\n    refused: false,\n  }];\n\n  const config = {\n    alwaysInEdition: true,\n    columns: [{\n      size: 1,\n      key: 'accepted',\n      header: 'Accepted',\n      changeOtherColumnOnClick: {\n        keyColumn: 'refused',\n        newValue: false\n      },\n      typeCell: TYPE_CELL.CHECKBOX\n    }, {\n      size: 1,\n      key: 'refused',\n      header: 'Refused',\n      variant: 'error',\n      changeOtherColumnOnClick: {\n        keyColumn: 'accepted',\n        newValue: false\n      },\n      typeCell: TYPE_CELL.CHECKBOX\n    }]\n  }\n  return (\n    <div>\n      <VirtualTable\n        data={data}\n        config={config}\n      />\n    </div>\n  )\n};\n\nexport default CheckboxGroupExample;",mdxType:"CodePreview"}),(0,i.kt)("h2",{id:"read-only"},"Read only"),(0,i.kt)(p,{mdxType:"CellCheckboxView"}),(0,i.kt)(p,{columnProps:{variant:"error"},mdxType:"CellCheckboxView"}),(0,i.kt)(f,{type:"check_box",dataKey:"price",mdxType:"CellTypePreviewer"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"isDisabled")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the button will be disabled.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"changeOtherColumnOnClick")),(0,i.kt)("td",{parentName:"tr",align:null},"columnChange"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"If defined, another column value is changed when the value changes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"variant")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'primary'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'error'")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'primary'")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"columnchange"},"columnChange"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keyColumn")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The column to change")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The new value")))))}E.isMDXComponent=!0}}]);