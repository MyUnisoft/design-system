"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3719],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var n=r(27378);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(r),s=a,f=m["".concat(u,".").concat(s)]||m[s]||d[s]||l;return r?n.createElement(f,o(o({ref:e},c),{},{components:r})):n.createElement(f,o({ref:e},c))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[m]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},85372:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(27378);const a=t=>{let{children:e}=t;return n.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},e)}},38637:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(27378);const a=t=>{let{children:e}=t;return n.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},e)}},4285:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>k,contentTitle:()=>y,default:()=>h,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var n=r(87462),a=r(27378),l=r(3905),o=r(61320),i=r.n(o),u=r(32380),p=r(74949),c=r(85372),m=r(38637);const d=function(t){let{columnProps:e={}}=t;const[r,n]=(0,a.useState)("02/05/20220");return a.createElement(m.Z,null,a.createElement(c.Z,null,a.createElement(u.Z,{onChange:t=>{console.log("change",t),n(t)},vtContext:{state:"PERMANENT_EDIT"},typeCell:p.v.DATE,column:e,data:{date:r},dataKey:"date"})))};const s=function(t){let{columnProps:e={}}=t;return a.createElement(m.Z,null,a.createElement(c.Z,null,a.createElement(u.Z,{typeCell:p.v.DATE,column:e,data:{date:i()().format("DD/MM/YYYY")},dataKey:"date"})))},f={title:"Date"},y=void 0,b={unversionedId:"virtual-table/cells/date",id:"virtual-table/cells/date",title:"Date",description:"Basic",source:"@site/docs/virtual-table/cells/date.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/date",permalink:"/design-system/docs/virtual-table/cells/date",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/date.mdx",tags:[],version:"current",frontMatter:{title:"Date"},sidebar:"tutorialSidebar",previous:{title:"Custom",permalink:"/design-system/docs/virtual-table/cells/custom"},next:{title:"Multiple (deprecated)",permalink:"/design-system/docs/virtual-table/cells/multiple"}},k={},g=[{value:"Basic",id:"basic",level:2},{value:"Read only",id:"read-only",level:2},{value:"Ouput format",id:"ouput-format",level:3}],v={toc:g},D="wrapper";function h(t){let{components:e,...r}=t;return(0,l.kt)(D,(0,n.Z)({},v,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"basic"},"Basic"),(0,l.kt)(d,{columnProps:{outputFormat:"DD/MM/YYYY"},mdxType:"CellDateEdit"}),(0,l.kt)("h2",{id:"read-only"},"Read only"),(0,l.kt)(s,{mdxType:"CellDateView"}),(0,l.kt)("h3",{id:"ouput-format"},"Ouput format"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"outputFormat")," property accepts any format handled by ",(0,l.kt)("inlineCode",{parentName:"p"},"moment().format()"),"."),(0,l.kt)(s,{columnProps:{outputFormat:"MM/YYYY"},mdxType:"CellDateView"}),(0,l.kt)(s,{columnProps:{outputFormat:"DD-MM-YYYY"},mdxType:"CellDateView"}),(0,l.kt)(s,{columnProps:{outputFormat:"YYYY-MM-DD"},mdxType:"CellDateView"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"outputFormat: 'MM/YYYY'\noutputFormat: 'DD-MM-YYYY'\noutputFormat: 'YYYY-MM-DD'\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"formatDate")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DD/MM/YYYY")),(0,l.kt)("td",{parentName:"tr",align:null},"The input date format.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"outputFormat")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"L")),(0,l.kt)("td",{parentName:"tr",align:null},"The output date format passed to Moment")))))}h.isMDXComponent=!0}}]);