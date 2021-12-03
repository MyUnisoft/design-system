(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2138],{85372:function(e,t,n){"use strict";var a=n(27378);t.Z=function(e){var t=e.children;return a.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},t)}},38637:function(e,t,n){"use strict";var a=n(27378);t.Z=function(e){var t=e.children;return a.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},t)}},72660:function(e,t,n){"use strict";var a=n(9334),l=n(37430),r=n(27378);t.Z=function(e){var t=e.content,n=(0,r.useState)(!1),i=n[0],o=n[1];return r.createElement("div",null,r.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.createElement(a.Z,{onClick:function(){return o((function(e){return!e}))}},"Toggle source")),r.createElement("div",{style:{display:i?"block":"none",maxHeight:500,overflow:"auto"}},r.createElement(l.Z1,{language:"jsx",text:t,showLineNumbers:!0,theme:l.BV,wrapLines:!0,codeBlock:!0})))}},25697:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return v},default:function(){return T},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return y}});var a=n(22122),l=n(19756),r=n(27378),i=n(3905),o=n(72660),u=n(92137),p=n(87757),d=n.n(p),s=n(48931),c=n(74949),m=n(85372),k=n(38637);var N=function(e){var t=e.columnProps,n=(0,r.useState)("fr"),a=n[0],l=n[1],i=(0,r.useState)([{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"},{label:"Deutsche",value:"de"}]),o=i[0],p=i[1],N=function(){var e=(0,u.Z)(d().mark((function e(t){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,prompt('Set value for "'+t+'"');case 2:(n=e.sent)&&(p((function(e){return[].concat(e,[{label:t,value:n}])})),l(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.createElement(k.Z,null,r.createElement(m.Z,null,r.createElement(s.Z,{typeCell:c.v.AUTOCOMPLETE,vtContext:{state:"PERMANENT_EDIT"},column:Object.assign({options:o,onCreate:N},t),data:{language:a},dataKey:"language",onChange:l})))};var g=function(e){var t=e.columnProps,n=(0,r.useState)(null!=t&&t.multiple?["fr"]:"fr"),a=n[0],l=n[1];return r.createElement(k.Z,null,r.createElement(m.Z,null,r.createElement(s.Z,{typeCell:c.v.AUTOCOMPLETE,vtContext:{state:"PERMANENT_EDIT"},column:Object.assign({options:[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"},{label:"Deutsche",value:"de"}]},t),data:{language:a},dataKey:"language",onChange:l})))};var C=function(e){var t=e.columnProps,n=(void 0===t?{}:t).multiple;return r.createElement(k.Z,null,r.createElement(m.Z,null,r.createElement(s.Z,{typeCell:c.v.AUTOCOMPLETE,column:{multiple:n,options:[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"},{label:"Deutsche",value:"de"}]},data:{language:n?["fr","en"]:"fr"},dataKey:"language"})))},b=["components"],h={title:"Autocomplete"},v=void 0,f={unversionedId:"virtual-table/cells/autocomplete",id:"virtual-table/cells/autocomplete",isDocsHomePage:!1,title:"Autocomplete",description:"Basic",source:"@site/docs/virtual-table/cells/autocomplete.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/autocomplete",permalink:"/design-system/docs/virtual-table/cells/autocomplete",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/autocomplete.mdx",version:"current",frontMatter:{title:"Autocomplete"},sidebar:"tutorialSidebar",previous:{title:"Attachment (beta)",permalink:"/design-system/docs/virtual-table/cells/attachment"},next:{title:"Badge",permalink:"/design-system/docs/virtual-table/cells/badge"}},y=[{value:"Basic",id:"basic",children:[]},{value:"Creatable",id:"creatable",children:[]},{value:"Clearable",id:"clearable",children:[]},{value:"Multiple",id:"multiple",children:[]},{value:"Read only",id:"read-only",children:[]},{value:"Props",id:"props",children:[]}],E={toc:y};function T(e){var t=e.components,n=(0,l.Z)(e,b);return(0,i.kt)("wrapper",(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"basic"},"Basic"),(0,i.kt)(g,{mdxType:"CellAutocompleteEdit"}),(0,i.kt)("h2",{id:"creatable"},"Creatable"),(0,i.kt)("p",null,"It is possible to create a new options when there is no matching with the entered value."),(0,i.kt)("p",null,"To activate this feature, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"canCreate")," props to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". The created value will then be passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"onCreate")," callback."),(0,i.kt)(N,{columnProps:{canCreate:!0},mdxType:"CellAutocompleteCreate"}),(0,i.kt)(o.Z,{content:"import React, { useState } from 'react';\nimport CellRender from '../../../../../../src/components/VirtualTable/cells';\nimport { TYPE_CELL } from '../../../../../../src/components/VirtualTable/constants/typeCell';\nimport Cell from '../Cell';\nimport Wrapper from '../Wrapper';\n\nfunction CellAutocompleteCreate({\n  columnProps\n}) {\n  const [state, setState] = useState('fr');\n  const [options, setOptions] = useState( [{\n    label: 'Fran\xe7ais',\n    value: 'fr'\n  },{\n    label: 'English',\n    value: 'en'\n  }, {\n    label: 'Deutsche',\n    value: 'de'\n  }]);\n\n  const handleCreate = async (label) => {\n    const value = await prompt(`Set value for \"${label}\"`);\n    if (value) {\n      setOptions((previous) => [\n        ...previous,\n        {\n          label,\n          value\n        }\n      ]);\n      setState(value);\n    }\n  }\n\n  return (\n    <Wrapper>\n        <Cell>\n          <CellRender\n            typeCell={TYPE_CELL.AUTOCOMPLETE}\n            vtContext={{\n              state: 'PERMANENT_EDIT'\n            }}\n            column={{\n              options,\n              onCreate: handleCreate,\n              ...columnProps\n            }}\n            data={{ language: state }}\n            dataKey=\"language\"\n            onChange={setState}\n          />\n        </Cell>\n    </Wrapper>\n  )\n}\n\nexport default CellAutocompleteCreate;",mdxType:"CodePreview"}),(0,i.kt)("h2",{id:"clearable"},"Clearable"),(0,i.kt)("p",null,"Give the possibility to empty the value by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"disableClearable")," props at ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)(g,{columnProps:{disableClearable:!1},mdxType:"CellAutocompleteEdit"}),(0,i.kt)("h2",{id:"multiple"},"Multiple"),(0,i.kt)("p",null,"Allow the user to select more than one value by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"multiple")," props at ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)(g,{columnProps:{multiple:!0},mdxType:"CellAutocompleteEdit"}),(0,i.kt)("h2",{id:"read-only"},"Read only"),(0,i.kt)(C,{mdxType:"CellAutocompleteView"}),(0,i.kt)(C,{columnProps:{multiple:!0},mdxType:"CellAutocompleteView"}),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"canCreate")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", a ",(0,i.kt)("strong",{parentName:"td"},'Create "..."')," option appears when no option matches the current value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"disableClearable")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the input can't be cleared.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"isDisabled")),(0,i.kt)("td",{parentName:"tr",align:null},"func"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"() => false")),(0,i.kt)("td",{parentName:"tr",align:null},"If the function returns ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the input is disabled. The function receives the row data as uniq argument")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"multiple")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the user can select multiple values.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"onCreate")),(0,i.kt)("td",{parentName:"tr",align:null},"func"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Callback fired when a new option is created with ",(0,i.kt)("inlineCode",{parentName:"td"},"canCreate")," set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),". It receives three arguments: the new value, the current row data and a callback to update the whole row data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"optionList")),(0,i.kt)("td",{parentName:"tr",align:null},"func ","|"," array"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Deprecated"),". Use the ",(0,i.kt)("inlineCode",{parentName:"td"},"options")," prop.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:null},"func ","|"," array"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"Function called or array used to populate the suggestions list.")))))}T.isMDXComponent=!0}}]);