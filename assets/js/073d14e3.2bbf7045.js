"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8134],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(27378);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),p=l,b=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85372:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27378);const l=e=>{let{children:t}=e;return n.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},t)}},38637:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27378);const l=e=>{let{children:t}=e;return n.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},t)}},55293:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>O,frontMatter:()=>b,metadata:()=>f,toc:()=>E});var n=r(87462),l=r(27378),a=r(3905),i=r(44384),o=r(2750),c=r(32380),u=r(74949),s=r(85372),m=r(38637);const d=function(){const[e,t]=(0,l.useState)(20);return l.createElement(m.Z,null,l.createElement(i.ZP,{container:!0,justifyContent:"center",spacing:2},l.createElement(i.ZP,{item:!0},l.createElement(o.Z,{color:"textPrimary"},"Editable"),l.createElement(s.Z,null,l.createElement(c.Z,{typeCell:u.v.NUMBER,onChange:t,vtContext:{state:"PERMANENT_EDIT"},column:{},data:{amount:e},dataKey:"amount"}))),l.createElement(i.ZP,{item:!0},l.createElement(o.Z,{color:"textPrimary"},"Disabled"),l.createElement(s.Z,null,l.createElement(c.Z,{typeCell:u.v.NUMBER,onChange:t,vtContext:{state:"PERMANENT_EDIT"},column:{isDisabled:()=>!0},data:{amount:e},dataKey:"amount"})))))};const p=function(){return l.createElement(m.Z,null,l.createElement("div",{style:{display:"inline-block",width:200,margin:10,textAlign:"right"}},l.createElement(s.Z,null,l.createElement(c.Z,{typeCell:u.v.NUMBER,column:{},data:{amount:123456789},dataKey:"amount"}))))},b={title:"Number"},y=void 0,f={unversionedId:"virtual-table/cells/number",id:"virtual-table/cells/number",title:"Number",description:"Basic",source:"@site/docs/virtual-table/cells/number.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/number",permalink:"/design-system/docs/virtual-table/cells/number",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/number.mdx",tags:[],version:"current",frontMatter:{title:"Number"},sidebar:"tutorialSidebar",previous:{title:"Multiple (deprecated)",permalink:"/design-system/docs/virtual-table/cells/multiple"},next:{title:"Select",permalink:"/design-system/docs/virtual-table/cells/select"}},v={},E=[{value:"Basic",id:"basic",level:2},{value:"Read only",id:"read-only",level:2}],g={toc:E},h="wrapper";function O(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"basic"},"Basic"),(0,a.kt)(d,{mdxType:"CellNumberEdit"}),(0,a.kt)("h2",{id:"read-only"},"Read only"),(0,a.kt)("p",null,"Display the value in numeral format."),(0,a.kt)(p,{mdxType:"CellNumberView"}))}O.isMDXComponent=!0}}]);