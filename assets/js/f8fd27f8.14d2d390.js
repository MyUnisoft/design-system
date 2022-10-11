"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2692],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var n=o(27378);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(o),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return o?n.createElement(h,l(l({ref:t},d),{},{components:o})):n.createElement(h,l({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},52592:function(e,t,o){o.r(t),o.d(t,{assets:function(){return Q},contentTitle:function(){return X},default:function(){return Y},frontMatter:function(){return q},metadata:function(){return G},toc:function(){return J}});var n=o(83117),a=o(27378),r=o(3905),l=o(80102),i=o(12480),c=o(7818),s=o(79789),d=o(23618),u=o(25608),p=o(95645),m=o(36683),h=o(63659),b=o(96829),y=o(1620);function f(e){return(0,b.Z)("PrivateSwitchBase",e)}(0,y.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var g=o(24246);const v=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],k=(0,u.ZP)(h.Z)((({ownerState:e})=>(0,n.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),C=(0,u.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var x=a.forwardRef((function(e,t){const{autoFocus:o,checked:a,checkedIcon:r,className:c,defaultChecked:u,disabled:h,disableFocusRipple:b=!1,edge:y=!1,icon:x,id:w,inputProps:E,inputRef:O,name:P,onBlur:S,onChange:Z,onFocus:F,readOnly:T,required:B,tabIndex:D,type:R,value:j}=e,A=(0,l.Z)(e,v),[M,I]=(0,p.Z)({controlled:a,default:Boolean(u),name:"SwitchBase",state:"checked"}),z=(0,m.Z)();let $=h;z&&void 0===$&&($=z.disabled);const N="checkbox"===R||"radio"===R,L=(0,n.Z)({},e,{checked:M,disabled:$,disableFocusRipple:b,edge:y}),H=(e=>{const{classes:t,checked:o,disabled:n,edge:a}=e,r={root:["root",o&&"checked",n&&"disabled",a&&`edge${(0,d.Z)(a)}`],input:["input"]};return(0,i.Z)(r,f,t)})(L);return(0,g.jsxs)(k,(0,n.Z)({component:"span",className:(0,s.Z)(H.root,c),centerRipple:!0,focusRipple:!b,disabled:$,tabIndex:null,role:void 0,onFocus:e=>{F&&F(e),z&&z.onFocus&&z.onFocus(e)},onBlur:e=>{S&&S(e),z&&z.onBlur&&z.onBlur(e)},ownerState:L,ref:t},A,{children:[(0,g.jsx)(C,(0,n.Z)({autoFocus:o,checked:a,defaultChecked:u,className:H.input,disabled:$,id:N&&w,name:P,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;I(t),Z&&Z(e,t)},readOnly:T,ref:O,required:B,ownerState:L,tabIndex:D,type:R},"checkbox"===R&&void 0===j?{}:{value:j},E)),M?r:x]}))})),w=o(11934),E=(0,w.Z)((0,g.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),O=(0,w.Z)((0,g.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),P=(0,w.Z)((0,g.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),S=o(24655);function Z(e){return(0,b.Z)("MuiCheckbox",e)}var F=(0,y.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const T=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],B=(0,u.ZP)(x,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,"default"!==o.color&&t[`color${(0,d.Z)(o.color)}`]]}})((({theme:e,ownerState:t})=>(0,n.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${F.checked}, &.${F.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${F.disabled}`]:{color:(e.vars||e).palette.action.disabled}}))),D=(0,g.jsx)(O,{}),R=(0,g.jsx)(E,{}),j=(0,g.jsx)(P,{});var A=a.forwardRef((function(e,t){var o,r;const c=(0,S.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:s=D,color:u="primary",icon:p=R,indeterminate:m=!1,indeterminateIcon:h=j,inputProps:b,size:y="medium"}=c,f=(0,l.Z)(c,T),v=m?h:p,k=m?h:s,C=(0,n.Z)({},c,{color:u,indeterminate:m,size:y}),x=(e=>{const{classes:t,indeterminate:o,color:a}=e,r={root:["root",o&&"indeterminate",`color${(0,d.Z)(a)}`]},l=(0,i.Z)(r,Z,t);return(0,n.Z)({},t,l)})(C);return(0,g.jsx)(B,(0,n.Z)({type:"checkbox",inputProps:(0,n.Z)({"data-indeterminate":m},b),icon:a.cloneElement(v,{fontSize:null!=(o=v.props.fontSize)?o:y}),checkedIcon:a.cloneElement(k,{fontSize:null!=(r=k.props.fontSize)?r:y}),ownerState:C,ref:t},f,{classes:x}))})),M=o(6128),I=o(12685),z=o(12142),$=o(74949),N=o(72971);const L=[],H={exportFilename:"playground-export",modeEdit:!1,modeAdd:!0,insertPosition:"top",selectableBarInfo:!0,selectableRow:!0,hasSearchbar:!0,hasFooter:!0,hasHeader:!0,alwaysInEdition:!0,actionsButton:[{label:"test1",onClick:e=>{console.log("test1",e)}},{label:"test2 disabled",disabled:!0},{label:"test3",onClick:e=>{console.log("test3",e)}},{label:"test4",onClick:e=>{console.log("test4",e)}}],selectableRowKey:"id",customButtons:[{iconName:"icon-upload1",iconColor:"white",color:"error",titleInfoBulle:"Upload",onClick:()=>{console.log("Clique sur le bouton !")}},{iconName:"icon-download1",iconColor:"white",color:"secondary",titleInfoBulle:"Download",onClick:()=>{console.log("Clique sur le bouton !")}}],fixedColumns:2,columns:[{header:"PJ",key:"attachment",width:30,editable:!1,typeCell:$.v.THUMBNAIL},{header:"Collaborator",key:"username",size:4,editable:!0,sortable:!1,canHide:!1,footerValue:"Total des donn\xe9es de la table",footerProps:{colspan:2},onBlur:(e,t,o,n)=>console.log(`blur ${o} of line ${n}`)},{header:"Month",typeCell:$.v.NUMBER,key:"month",size:1,editable:!0,cellProps:{min:1,max:12}},{header:"Language",key:"language",typeCell:$.v.AUTOCOMPLETE,onCreate:(e,t,o)=>{console.log("Create",e,t);const n=prompt("hello");L.push({label:n,value:n}),o({...t,language:n,amount:50})},canCreate:!0,optionList:()=>[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"},{label:"Deutsche",value:"de"},...L],tooltipDetail:e=>`tooltip message for ${e.language}`},{width:130,key:"valid_action",header:"Valid action",typeCell:$.v.SELECT,listData:[{label:"To do",value:"to_do"},{label:"Validate",value:"validate"}],sortable:!0,tooltipDetail:e=>`tooltip message for ${e.valid_action}`,renderLabelCustom:(e,t)=>`${e}-custom`},{header:"Amount",key:"amount",typeFooter:$.p.AMOUNT,size:3,typeCell:$.v.AMOUNT,formatAmount:e=>e<0?a.createElement("span",{style:{color:"red"}},"(",(0,N.uf)(Math.abs(e)),")"):(0,N.uf)(e),renderExport:e=>{let{amount:t}=e;return(0,N.uf)(t)}},{header:"Accept",key:"validate",size:3,selectAll:!0,typeCell:$.v.CHECKBOX,changeOtherColumnOnClick:{keyColumn:"refuses",newValue:!1}},{header:"Lettrage",key:"lettering.data[0]",typeCell:"badge_status",listStatus:[{color:"#f6c344",value:"in-progress"}]},{header:"Badge",key:"badge",typeCell:"badge_status"},{header:"Refuse",key:"refuses",size:3,selectAll:!0,typeCell:$.v.CHECKBOX,variant:"error",changeOtherColumnOnClick:{keyColumn:"validate",newValue:!1}},{header:"Status",key:"status",size:4,typeCell:$.v.STATUS,canChangeStatus:!0,sortable:!0,listStatus:[{status:"accepted",value:"Accepted",styles:{color:"#0bd1c4"},showMenu:["refused"]},{status:"refused",value:"Refused",styles:{color:"#f54b4b"}}]},{header:"PJ1",key:"attachment1",width:80,editable:!1,typeCell:$.v.ATTACHMENT,filesDropperProps:{onRemoveFile:e=>console.log("remove",e),maxFiles:5}},{header:"PJ2",key:"attachment2",width:300,editable:!1,typeCell:$.v.ATTACHMENT,onSubmit:e=>new Promise((t=>{setTimeout((()=>{t(e)}),3e3)}))}]};var V=e=>{let{config:t,settings:o=[]}=e;return a.createElement("pre",null,a.createElement("code",null,"{\n",o.map((e=>`  ${e.key}: ${t[e.key]?"true":"false"},\n`)),"}"))};const U=Array(100).fill().map(((e,t)=>({id:t,username:`User Lastname #${t+1}`,language:"fr",month:t%12+1,amount:Math.round(t%5*(t%7)/(t%6+1))-2,status:t%7&&t%3?t%4?null:"refused":"accepted",rowType:z.Os.VIEW,badge:{status:"ok"},lettering:{data:[{status:"in-progress",value:2}]},attachment1:[{baseUrl:"https://mycloud.myunisoft.fr",download:"https://mycloud.myunisoft.fr/index.php/s/cK6GdDtDLRxoQF9/download",id:3820520,link:"https://mycloud.myunisoft.fr/index.php/s/cK6GdDtDLRxoQF9",name:"file20210607102036000000SK5he.jpg",thumbnail:"https://mycloud.myunisoft.fr/index.php/apps/files_sharing/publicpreview/cK6GdDtDLRxoQF9?x=90&y=120&a=true",token:"cK6GdDtDLRxoQF9"}],valid_action:t%7&&t%3?"validate":"to_do"}))),_=[{key:"hasSearchbar",label:"SearchBar",type:"checkbox"},{key:"modeEdit",label:"Edit mode",type:"checkbox"},{key:"modeAdd",label:"Add mode",type:"checkbox"},{key:"modeDelete",label:"Delete mode",type:"checkbox"},{key:"hasFooter",label:"Footer",type:"checkbox"},{key:"hasHeader",label:"Header",type:"checkbox"},{key:"alwaysInEdition",label:"Edition en ligne",type:"checkbox"},{key:"hideToolbar",label:"Cacher toolbar",type:"checkbox"},{key:"hideCheckbox",label:"Cacher checkbox",type:"checkbox"},{key:"hideStateActions",label:"Cacher actions",type:"checkbox"},{key:"withBorders",label:"Bordure",type:"checkbox"}];var K=()=>{const[e,t]=(0,a.useState)(H),[o,n]=(0,a.useState)(""),{data:r,onAdd:l,onEdit:i,onDelete:c}=(0,I.B4)(U),s=(0,a.useRef)();return a.createElement(a.Fragment,null,a.createElement("div",null,_.map((o=>a.createElement("span",{key:o.key,style:{marginRight:20}},a.createElement("label",null,a.createElement(A,{checked:e[o.key]||!1,onClick:()=>t((e=>({...e,[o.key]:!e[o.key]})))})," ",o.label," "))))),a.createElement("div",{style:{margin:"2rem 0"}},a.createElement(M.Z,{ref:s,data:r,maxHeight:"600px",config:e,handleRowsToDelete:function(e){c(e)},handleValidateAdd:function(e,t){l(e,t)},handleValidateEdit:function(e,t){console.log("edit",e),i(e,t)},onFocusChange:function(e){let{to:t}=e;n(t?`${t[0]}:${t[1]}`:"--")},tableKeyName:"playground"})),a.createElement("div",null,"Current Cell: ",o),a.createElement(V,{config:e,settings:_}))};const q={sidebar_position:0,title:"Playground"},X=void 0,G={unversionedId:"virtual-table/playground",id:"virtual-table/playground",title:"Playground",description:"",source:"@site/docs/virtual-table/playground.mdx",sourceDirName:"virtual-table",slug:"/virtual-table/playground",permalink:"/design-system/docs/virtual-table/playground",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/playground.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Playground"},sidebar:"tutorialSidebar",previous:{title:"FileDropper",permalink:"/design-system/docs/inputs/FileDropper"},next:{title:"Config",permalink:"/design-system/docs/virtual-table/config"}},Q={},J=[],W={toc:J};function Y(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},W,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(K,{mdxType:"VirtualTablePlayground"}))}Y.isMDXComponent=!0}}]);