"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9102],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>v});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=l,v=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(v,i(i({ref:t},u),{},{components:a})):n.createElement(v,i({ref:t},u))}));function v(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71802:(e,t,a)=>{a.d(t,{Z:()=>D});var n=a(87462),l=a(27378),r=a(86010),i=a(72389),o=a(67392),s=a(7094),d=a(12466);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:i,values:p,groupId:m,className:v}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,o.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,s.U)(),[w,E]=(0,l.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,d.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&h.some((t=>t.value===e))&&E(e)}const N=e=>{const t=e.currentTarget,a=T.indexOf(t),n=h[a].value;n!==w&&(O(t),E(n),null!=m&&k(m,String(n)))},x=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},v)},h.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:N},i,{className:(0,r.Z)("tabs__item",c,i?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,l.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return l.createElement(p,(0,n.Z)({key:String(t)},e))}const v="tabItem_Ymn6";function b(e){let{children:t,hidden:a,className:n}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(v,n),hidden:a},t)}var h=a(32380),f=a(47326),y=a(12142),g=a(74949);const k={[g.v.AMOUNT]:{add:!0,edit:!0,view:!0},[g.v.ATTACHMENT]:{add:!1,edit:!1,view:!0},[g.v.AUTOCOMPLETE]:{add:!0,edit:!0,view:!0},[g.v.BADGE_STATUS]:{add:!1,edit:!1,view:!0},[g.v.BUTTON]:{add:!1,edit:!1,view:!0},[g.v.CHECKBOX]:{add:!1,edit:!0,view:!0},[g.v.CHIP]:{add:!0,edit:!0,view:!0},[g.v.DATE]:{add:!0,edit:!0,view:!0},[g.v.MULTIPLE_INPUTS]:{add:!0,edit:!1,view:!0},[g.v.NUMBER]:{add:!0,edit:!0,view:!0},[g.v.SELECT]:{add:!0,edit:!0,view:!0},[g.v.STATUS]:{add:!1,edit:!1,view:!0},[g.v.STRING]:{add:!0,edit:!0,view:!0},[g.v.SWITCH_BADGE_STATUS]:{add:!1,edit:!1,view:!0},[g.v.THUMBNAIL]:{add:!1,edit:!1,view:!0},[g.v.WALLET]:{add:!1,edit:!1,view:!0}};function w(e,t){return k[e]&&k[e][t]}const E={},T={},O=!0,N=()=>{},x={columns:[{editable:!0,key:"price"},{editable:!0,key:"language",optionList:[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"},{label:"Deutsche",value:"de"}],listData:[{name:"Fran\xe7ais",value:"fr"},{name:"English",value:"en"},{name:"Deutsche",value:"de"}],listStatus:[{value:"Fran\xe7ais",status:"fr",showMenu:["de","en"]},{value:"English",status:"en",showMenu:["de","fr"]},{value:"Deutsche",status:"de",showMenu:["en","fr"]}]},{editable:!0,key:"spokenLanguages",listOptions:[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"},{label:"Deutsche",value:"de"}]},{editable:!0,key:"badgeStatus",actionsByStatus:[{label:"Only ok",status:["ok"]},{label:"Ok or In Progress",status:["ok","in-progress"]},{label:"Only ko",status:["ko"]}]},{editable:!0,key:"switchBadgeStatus",switchKey:"ok",actionsByStatus:[{label:"Ok or In Progress",status:["ok","in-progress"]},{label:"In Progress or ko",status:["in-progress","ko"]},{label:"Only ko",status:["ko"]}]},{editable:!0,key:"status",listStatus:[],valueData:[]},{editable:!0,key:"files"},{editable:!0,key:"comments",showLastComment:!0,canEdit:!0},{editable:!0,key:"date"},{key:"button",label:"Click me",handleClick:()=>alert("Clicked !")},{editable:!0,key:"multiple"}]},C={id:1,price:50,language:"fr",spokenLanguages:[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"}],comments:[{avatarImgSrc:"",body:"<p>Un commentaire du superviseur</p>",date:"2021-06-30T14:52:30",history:[],id:73434,initials:"JD",name:"John Doe"}],badgeStatus:{status:"ok"},switchBadgeStatus:[{key:"ok",status:"ok"}],date:"31/10/2000",multiple:[{first:{label:"Hello"},second:{label:"Everybody"}}],files:[{thumbnail:"https://via.placeholder.com/150x75"}],wallets:{count:5,array:[{id:"AAA"},{id:"BBB"},{id:"CCC"},{id:"DDD"}]}},D=e=>{const t=x.columns.findIndex((t=>t.key===e.dataKey)),a=[{label:"View mode",value:"view"}];return w(e.type,"add")&&a.push({label:"Add mode",value:"add"}),w(e.type,"edit")&&a.push({label:"Edit mode",value:"edit"}),l.createElement(m,{defaultValue:"view",values:a,style:{marginBottom:20}},l.createElement(b,{value:"view"},l.createElement("div",{style:{background:"#ddd",padding:"20px 10px"}},l.createElement("div",{style:{background:"#fff",margin:"auto",width:"120px",position:"relative",height:32}},l.createElement(f.Z.Provider,{value:{state:E,context:T,send:N,can:O,config:x}},l.createElement(h.Z,(0,n.Z)({data:C},e,{columnIndex:t})))))),l.createElement(b,{value:"add"},l.createElement("div",{style:{background:"#ddd",padding:"20px 10px"}},l.createElement("div",{style:{background:"#fff",margin:"auto",width:"120px",position:"relative",height:32}},l.createElement(f.Z.Provider,{value:{state:E,context:T,send:N,can:O,config:{...x,modeAdd:!0}}},l.createElement(h.Z,(0,n.Z)({data:{...C,rowType:y.Os.NEW}},e,{columnIndex:t})))))),l.createElement(b,{value:"edit"},l.createElement("div",{style:{background:"#ddd",padding:"20px 10px"}},l.createElement("div",{style:{background:"#fff",margin:"auto",width:"120px",position:"relative",height:32}},l.createElement(f.Z.Provider,{value:{state:"EDIT",context:{selectedRows:[1]},send:N,can:O,config:{...x,modeEdit:!0,alwaysInEdition:!0}}},l.createElement(h.Z,(0,n.Z)({data:{...C,rowType:y.Os.EDIT}},e,{columnIndex:t})))))))}},92936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(87462),l=(a(27378),a(3905)),r=a(71802);const i={title:"Chip (deprecated)"},o=void 0,s={unversionedId:"virtual-table/cells/chip",id:"virtual-table/cells/chip",title:"Chip (deprecated)",description:"",source:"@site/docs/virtual-table/cells/chip.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/chip",permalink:"/design-system/docs/virtual-table/cells/chip",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/chip.mdx",tags:[],version:"current",frontMatter:{title:"Chip (deprecated)"},sidebar:"tutorialSidebar",previous:{title:"Checkbox",permalink:"/design-system/docs/virtual-table/cells/checkbox"},next:{title:"Custom",permalink:"/design-system/docs/virtual-table/cells/custom"}},d={},u=[],c={toc:u};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"This type will be deleted in the next major version. Use the ",(0,l.kt)("a",{parentName:"p",href:"autocomplete#multiple"},"Autocomplete"))),(0,l.kt)("p",null,"Autocomplete with multiple choices"),(0,l.kt)(r.Z,{type:"chip",dataKey:"spokenLanguages",mdxType:"CellTypePreviewer"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"listOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Array used to populate the suggestions list.")))))}p.isMDXComponent=!0}}]);