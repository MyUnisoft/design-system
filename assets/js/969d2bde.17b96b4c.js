"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5575],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),v=l,p=c["".concat(o,".").concat(v)]||c[v]||m[v]||r;return a?n.createElement(p,i(i({ref:t},d),{},{components:a})):n.createElement(p,i({ref:t},d))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=v;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:l,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},71802:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(87462),l=a(67294),r=a(86010),i=a(72389),s=a(67392),o=a(7094),u=a(12466);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:i,values:m,groupId:v,className:p}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,s.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,o.U)(),[k,E]=(0,l.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=v){const e=g[v];null!=e&&e!==k&&f.some((t=>t.value===e))&&E(e)}const x=e=>{const t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==k&&(O(t),E(n),null!=v&&w(v,String(n)))},D=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},p)},f.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>T.push(e),onKeyDown:D,onClick:x},i,{className:(0,r.Z)("tabs__item",c,i?.className,{"tabs__item--active":k===t})}),a??t)}))),t?(0,l.cloneElement)(b.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function v(e){const t=(0,i.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}const p="tabItem_Ymn6";function b(e){let{children:t,hidden:a,className:n}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(p,n),hidden:a},t)}var f=a(11676),y=a(47326),h=a(12142),g=a(74949);const w={[g.v.AMOUNT]:{add:!0,edit:!0,view:!0},[g.v.ATTACHMENT]:{add:!1,edit:!1,view:!0},[g.v.AUTOCOMPLETE]:{add:!0,edit:!0,view:!0},[g.v.BADGE_STATUS]:{add:!1,edit:!1,view:!0},[g.v.BUTTON]:{add:!1,edit:!1,view:!0},[g.v.CHECKBOX]:{add:!1,edit:!0,view:!0},[g.v.CHIP]:{add:!0,edit:!0,view:!0},[g.v.DATE]:{add:!0,edit:!0,view:!0},[g.v.MULTIPLE_INPUTS]:{add:!0,edit:!1,view:!0},[g.v.NUMBER]:{add:!0,edit:!0,view:!0},[g.v.SELECT]:{add:!0,edit:!0,view:!0},[g.v.STATUS]:{add:!1,edit:!1,view:!0},[g.v.STRING]:{add:!0,edit:!0,view:!0},[g.v.SWITCH_BADGE_STATUS]:{add:!1,edit:!1,view:!0},[g.v.THUMBNAIL]:{add:!1,edit:!1,view:!0},[g.v.WALLET]:{add:!1,edit:!1,view:!0}};function k(e,t){return w[e]&&w[e][t]}const E={},T={},O=!0,x=()=>{},D={columns:[{editable:!0,key:"price"},{editable:!0,key:"language",optionList:[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"},{label:"Deutsche",value:"de"}],listData:[{name:"Fran\xe7ais",value:"fr"},{name:"English",value:"en"},{name:"Deutsche",value:"de"}],listStatus:[{value:"Fran\xe7ais",status:"fr",showMenu:["de","en"]},{value:"English",status:"en",showMenu:["de","fr"]},{value:"Deutsche",status:"de",showMenu:["en","fr"]}]},{editable:!0,key:"spokenLanguages",listOptions:[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"},{label:"Deutsche",value:"de"}]},{editable:!0,key:"badgeStatus",actionsByStatus:[{label:"Only ok",status:["ok"]},{label:"Ok or In Progress",status:["ok","in-progress"]},{label:"Only ko",status:["ko"]}]},{editable:!0,key:"switchBadgeStatus",switchKey:"ok",actionsByStatus:[{label:"Ok or In Progress",status:["ok","in-progress"]},{label:"In Progress or ko",status:["in-progress","ko"]},{label:"Only ko",status:["ko"]}]},{editable:!0,key:"status",listStatus:[],valueData:[]},{editable:!0,key:"files"},{editable:!0,key:"comments",showLastComment:!0,canEdit:!0},{editable:!0,key:"date"},{key:"button",label:"Click me",handleClick:()=>alert("Clicked !")},{editable:!0,key:"multiple"}]},S={id:1,price:50,language:"fr",spokenLanguages:[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"}],comments:[{avatarImgSrc:"",body:"<p>Un commentaire du superviseur</p>",date:"2021-06-30T14:52:30",history:[],id:73434,initials:"JD",name:"John Doe"}],badgeStatus:{status:"ok"},switchBadgeStatus:[{key:"ok",status:"ok"}],date:"31/10/2000",multiple:[{first:{label:"Hello"},second:{label:"Everybody"}}],files:[{thumbnail:"https://via.placeholder.com/150x75"}],wallets:{count:5,array:[{id:"AAA"},{id:"BBB"},{id:"CCC"},{id:"DDD"}]}},C=e=>{const t=D.columns.findIndex((t=>t.key===e.dataKey)),a=[{label:"View mode",value:"view"}];return k(e.type,"add")&&a.push({label:"Add mode",value:"add"}),k(e.type,"edit")&&a.push({label:"Edit mode",value:"edit"}),l.createElement(v,{defaultValue:"view",values:a,style:{marginBottom:20}},l.createElement(b,{value:"view"},l.createElement("div",{style:{background:"#ddd",padding:"20px 10px"}},l.createElement("div",{style:{background:"#fff",margin:"auto",width:"120px",position:"relative",height:32}},l.createElement(y.Z.Provider,{value:{state:E,context:T,send:x,can:O,config:D}},l.createElement(f.Z,(0,n.Z)({data:S},e,{columnIndex:t})))))),l.createElement(b,{value:"add"},l.createElement("div",{style:{background:"#ddd",padding:"20px 10px"}},l.createElement("div",{style:{background:"#fff",margin:"auto",width:"120px",position:"relative",height:32}},l.createElement(y.Z.Provider,{value:{state:E,context:T,send:x,can:O,config:{...D,modeAdd:!0}}},l.createElement(f.Z,(0,n.Z)({data:{...S,rowType:h.Os.NEW}},e,{columnIndex:t})))))),l.createElement(b,{value:"edit"},l.createElement("div",{style:{background:"#ddd",padding:"20px 10px"}},l.createElement("div",{style:{background:"#fff",margin:"auto",width:"120px",position:"relative",height:32}},l.createElement(y.Z.Provider,{value:{state:"EDIT",context:{selectedRows:[1]},send:x,can:O,config:{...D,modeEdit:!0,alwaysInEdition:!0}}},l.createElement(f.Z,(0,n.Z)({data:{...S,rowType:h.Os.EDIT}},e,{columnIndex:t})))))))}},98644:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),l=(a(67294),a(3905)),r=a(71802);const i={title:"Thumbnail (beta)"},s=void 0,o={unversionedId:"virtual-table/cells/thumbnail",id:"virtual-table/cells/thumbnail",title:"Thumbnail (beta)",description:"This type must be redefined",source:"@site/docs/virtual-table/cells/thumbnail.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/thumbnail",permalink:"/design-system/docs/virtual-table/cells/thumbnail",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/thumbnail.mdx",tags:[],version:"current",frontMatter:{title:"Thumbnail (beta)"},sidebar:"tutorialSidebar",previous:{title:"String",permalink:"/design-system/docs/virtual-table/cells/string"},next:{title:"Wallet",permalink:"/design-system/docs/virtual-table/cells/wallet"}},u={},d=[],c={toc:d};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This type must be redefined ")),(0,l.kt)(r.Z,{type:"thumbnail",dataKey:"files",mdxType:"CellTypePreviewer"}))}m.isMDXComponent=!0}}]);