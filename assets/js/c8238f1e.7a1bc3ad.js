"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85372:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=e=>{let{children:t}=e;return n.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},t)}},38637:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=e=>{let{children:t}=e;return n.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},t)}},86058:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>E,contentTitle:()=>Z,default:()=>M,frontMatter:()=>P,metadata:()=>D,toc:()=>S});var n=r(87462),a=r(67294),l=r(3905),o=r(30808),i=r(25773),c=r(38944),s=r(82267),u=r(25608),d=r(96716),p=r(11934),m=r(85893);const f=(0,p.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var v=r(6749);function g(e){return(0,v.Z)("MuiAvatar",e)}(0,r(44124).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const b=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],y=(0,u.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((({theme:e,ownerState:t})=>(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,i.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]})))),h=(0,u.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),k=(0,u.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const N=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiAvatar"}),{alt:n,children:l,className:u,component:p="div",imgProps:f,sizes:v,src:N,srcSet:C,variant:O="circular"}=r,w=(0,o.Z)(r,b);let x=null;const j=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:n}){const[l,o]=a.useState(!1);return a.useEffect((()=>{if(!r&&!n)return;o(!1);let a=!0;const l=new Image;return l.onload=()=>{a&&o("loaded")},l.onerror=()=>{a&&o("error")},l.crossOrigin=e,l.referrerPolicy=t,l.src=r,n&&(l.srcset=n),()=>{a=!1}}),[e,t,r,n]),l}((0,i.Z)({},f,{src:N,srcSet:C})),P=N||C,Z=P&&"error"!==j,D=(0,i.Z)({},r,{colorDefault:!Z,component:p,variant:O}),E=(e=>{const{classes:t,variant:r,colorDefault:n}=e,a={root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(a,g,t)})(D);return x=Z?(0,m.jsx)(h,(0,i.Z)({alt:n,src:N,srcSet:C,sizes:v,ownerState:D,className:E.img},f)):null!=l?l:P&&n?n[0]:(0,m.jsx)(k,{className:E.fallback}),(0,m.jsx)(y,(0,i.Z)({as:p,ownerState:D,className:(0,c.Z)(E.root,u),ref:t},w,{children:x}))}));var C=r(98737),O=r(74949),w=r(85372),x=r(38637);const j=function(){return a.createElement(x.Z,null,a.createElement(w.Z,null,a.createElement(C.Z,{typeCell:O.v.COMPONENT,column:{renderComponent:()=>a.createElement(N,null,"H")},data:{},dataKey:"custom",columnIndex:0})))},P={title:"Custom"},Z=void 0,D={unversionedId:"virtual-table/cells/custom",id:"virtual-table/cells/custom",title:"Custom",description:"",source:"@site/docs/virtual-table/cells/custom.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/custom",permalink:"/design-system/docs/virtual-table/cells/custom",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/custom.mdx",tags:[],version:"current",frontMatter:{title:"Custom"},sidebar:"tutorialSidebar",previous:{title:"Chip (deprecated)",permalink:"/design-system/docs/virtual-table/cells/chip"},next:{title:"Date",permalink:"/design-system/docs/virtual-table/cells/date"}},E={},S=[{value:"Example",id:"example",level:2},{value:"Props",id:"props",level:2}],T={toc:S};function M(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},T,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The typeCell named ",(0,l.kt)("inlineCode",{parentName:"p"},"component")," is used to handle any non-generic needs."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(j,{mdxType:"CellCustomBasic"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{\n  typeCell: 'component',\n  renderComponent: () => <Avatar>H</Avatar>\n}\n")),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"renderComponent")),(0,l.kt)("td",{parentName:"tr",align:null},"func"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Function called to render the component. It receives an object argument containing the ",(0,l.kt)("inlineCode",{parentName:"td"},"data")," of the current row and the event handlers (",(0,l.kt)("inlineCode",{parentName:"td"},"onClick"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"onChange"),", ...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"renderExport")),(0,l.kt)("td",{parentName:"tr",align:null},"func"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Function called for the export. It must return a string.")))))}M.isMDXComponent=!0}}]);