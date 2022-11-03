"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9102],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=l,v=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(v,i(i({ref:t},d),{},{components:a})):n.createElement(v,i({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},71802:function(e,t,a){a.d(t,{Z:function(){return D}});var n=a(83117),l=a(27378),r=a(34334),i=a(72389),o=a(67392),s=a(7094),u=a(12466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:a,block:i,defaultValue:p,values:m,groupId:v,className:b}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,o.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[E,T]=(0,l.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=v){const e=k[v];null!=e&&e!==E&&h.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,a=O.indexOf(t),n=h[a].value;n!==E&&(N(t),T(n),null!=v&&w(v,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},b)},h.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>O.push(e),onKeyDown:C,onFocus:x,onClick:x},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":E===t})}),a??t)}))),a?(0,l.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,i.Z)();return l.createElement(p,(0,n.Z)({key:String(t)},e))}var v="tabItem_Ymn6";function b(e){let{children:t,hidden:a,className:n}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(v,n),hidden:a},t)}var f=a(63984),h=a(47326),y=a(12142),g=a(74949);const k={[g.v.AMOUNT]:{add:!0,edit:!0,view:!0},[g.v.ATTACHMENT]:{add:!1,edit:!1,view:!0},[g.v.AUTOCOMPLETE]:{add:!0,edit:!0,view:!0},[g.v.BADGE_STATUS]:{add:!1,edit:!1,view:!0},[g.v.BUTTON]:{add:!1,edit:!1,view:!0},[g.v.CHECKBOX]:{add:!1,edit:!0,view:!0},[g.v.CHIP]:{add:!0,edit:!0,view:!0},[g.v.DATE]:{add:!0,edit:!0,view:!0},[g.v.MULTIPLE_INPUTS]:{add:!0,edit:!1,view:!0},[g.v.NUMBER]:{add:!0,edit:!0,view:!0},[g.v.SELECT]:{add:!0,edit:!0,view:!0},[g.v.STATUS]:{add:!1,edit:!1,view:!0},[g.v.STRING]:{add:!0,edit:!0,view:!0},[g.v.SWITCH_BADGE_STATUS]:{add:!1,edit:!1,view:!0},[g.v.THUMBNAIL]:{add:!1,edit:!1,view:!0},[g.v.WALLET]:{add:!1,edit:!1,view:!0}};function w(e,t){return k[e]&&k[e][t]}const E={},T={},O=!0,N=()=>{},x={columns:[{editable:!0,key:"price"},{editable:!0,key:"language",optionList:[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"},{label:"Deutsche",value:"de"}],listData:[{name:"Fran\xe7ais",value:"fr"},{name:"English",value:"en"},{name:"Deutsche",value:"de"}],listStatus:[{value:"Fran\xe7ais",status:"fr",showMenu:["de","en"]},{value:"English",status:"en",showMenu:["de","fr"]},{value:"Deutsche",status:"de",showMenu:["en","fr"]}]},{editable:!0,key:"spokenLanguages",listOptions:[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"},{label:"Deutsche",value:"de"}]},{editable:!0,key:"badgeStatus",actionsByStatus:[{label:"Only ok",status:["ok"]},{label:"Ok or In Progress",status:["ok","in-progress"]},{label:"Only ko",status:["ko"]}]},{editable:!0,key:"switchBadgeStatus",switchKey:"ok",actionsByStatus:[{label:"Ok or In Progress",status:["ok","in-progress"]},{label:"In Progress or ko",status:["in-progress","ko"]},{label:"Only ko",status:["ko"]}]},{editable:!0,key:"status",listStatus:[],valueData:[]},{editable:!0,key:"files"},{editable:!0,key:"comments",showLastComment:!0,canEdit:!0},{editable:!0,key:"date"},{key:"button",label:"Click me",handleClick:()=>alert("Clicked !")},{editable:!0,key:"multiple"}]},C={id:1,price:50,language:"fr",spokenLanguages:[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"}],comments:[{avatarImgSrc:"",body:"<p>Un commentaire du superviseur</p>",date:"2021-06-30T14:52:30",history:[],id:73434,initials:"JD",name:"John Doe"}],badgeStatus:{status:"ok"},switchBadgeStatus:[{key:"ok",status:"ok"}],date:"31/10/2000",multiple:[{first:{label:"Hello"},second:{label:"Everybody"}}],files:[{thumbnail:"https://via.placeholder.com/150x75"}],wallets:{count:5,array:[{id:"AAA"},{id:"BBB"},{id:"CCC"},{id:"DDD"}]}};var D=e=>{const t=x.columns.findIndex((t=>t.key===e.dataKey)),a=[{label:"View mode",value:"view"}];return w(e.type,"add")&&a.push({label:"Add mode",value:"add"}),w(e.type,"edit")&&a.push({label:"Edit mode",value:"edit"}),l.createElement(m,{defaultValue:"view",values:a,style:{marginBottom:20}},l.createElement(b,{value:"view"},l.createElement("div",{style:{background:"#ddd",padding:"20px 10px"}},l.createElement("div",{style:{background:"#fff",margin:"auto",width:"120px",position:"relative",height:32}},l.createElement(h.Z.Provider,{value:{state:E,context:T,send:N,can:O,config:x}},l.createElement(f.Z,(0,n.Z)({data:C},e,{columnIndex:t})))))),l.createElement(b,{value:"add"},l.createElement("div",{style:{background:"#ddd",padding:"20px 10px"}},l.createElement("div",{style:{background:"#fff",margin:"auto",width:"120px",position:"relative",height:32}},l.createElement(h.Z.Provider,{value:{state:E,context:T,send:N,can:O,config:{...x,modeAdd:!0}}},l.createElement(f.Z,(0,n.Z)({data:{...C,rowType:y.Os.NEW}},e,{columnIndex:t})))))),l.createElement(b,{value:"edit"},l.createElement("div",{style:{background:"#ddd",padding:"20px 10px"}},l.createElement("div",{style:{background:"#fff",margin:"auto",width:"120px",position:"relative",height:32}},l.createElement(h.Z.Provider,{value:{state:"EDIT",context:{selectedRows:[1]},send:N,can:O,config:{...x,modeEdit:!0,alwaysInEdition:!0}}},l.createElement(f.Z,(0,n.Z)({data:{...C,rowType:y.Os.EDIT}},e,{columnIndex:t})))))))}},92936:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var n=a(83117),l=(a(27378),a(3905)),r=a(71802);const i={title:"Chip (deprecated)"},o=void 0,s={unversionedId:"virtual-table/cells/chip",id:"virtual-table/cells/chip",title:"Chip (deprecated)",description:"",source:"@site/docs/virtual-table/cells/chip.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/chip",permalink:"/design-system/docs/virtual-table/cells/chip",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/chip.mdx",tags:[],version:"current",frontMatter:{title:"Chip (deprecated)"},sidebar:"tutorialSidebar",previous:{title:"Checkbox",permalink:"/design-system/docs/virtual-table/cells/checkbox"},next:{title:"Custom",permalink:"/design-system/docs/virtual-table/cells/custom"}},u={},d=[],c={toc:d};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"This type will be deleted in the next major version. Use the ",(0,l.kt)("a",{parentName:"p",href:"autocomplete#multiple"},"Autocomplete"))),(0,l.kt)("p",null,"Autocomplete with multiple choices"),(0,l.kt)(r.Z,{type:"chip",dataKey:"spokenLanguages",mdxType:"CellTypePreviewer"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"listOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Array used to populate the suggestions list.")))))}p.isMDXComponent=!0}}]);