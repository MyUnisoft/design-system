"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1048],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(27378);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),p=l,y=d["".concat(c,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85372:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27378);const l=e=>{let{children:t}=e;return n.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},t)}},38637:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27378);const l=e=>{let{children:t}=e;return n.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},t)}},91905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>b,toc:()=>g});var n=r(87462),l=r(27378),a=r(3905),i=r(44384),o=r(2750),c=r(32380),s=r(74949),u=r(85372),d=r(38637);const m=function(){const[e,t]=(0,l.useState)("Back to the future");return l.createElement(d.Z,null,l.createElement(i.ZP,{container:!0,justifyContent:"center",spacing:2},l.createElement(i.ZP,{item:!0},l.createElement(o.Z,{color:"textPrimary"},"Editable"),l.createElement(u.Z,null,l.createElement(c.Z,{typeCell:s.v.STRING,onChange:t,vtContext:{state:"PERMANENT_EDIT"},column:{},data:{title:e},dataKey:"title"}))),l.createElement(i.ZP,{item:!0},l.createElement(o.Z,{color:"textPrimary"},"Disabled"),l.createElement(u.Z,null,l.createElement(c.Z,{typeCell:s.v.STRING,onChange:t,vtContext:{state:"PERMANENT_EDIT"},column:{isDisabled:()=>!0},data:{title:e},dataKey:"title"})))))};const p=function(){return l.createElement(d.Z,null,l.createElement(u.Z,null,l.createElement(c.Z,{typeCell:s.v.STRING,column:{},data:{title:"Lord of the ring"},dataKey:"title"})))},y={title:"String"},f=void 0,b={unversionedId:"virtual-table/cells/string",id:"virtual-table/cells/string",title:"String",description:"Basic",source:"@site/docs/virtual-table/cells/string.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/string",permalink:"/design-system/docs/virtual-table/cells/string",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/string.mdx",tags:[],version:"current",frontMatter:{title:"String"},sidebar:"tutorialSidebar",previous:{title:"Status",permalink:"/design-system/docs/virtual-table/cells/status"},next:{title:"Thumbnail (beta)",permalink:"/design-system/docs/virtual-table/cells/thumbnail"}},v={},g=[{value:"Basic",id:"basic",level:2},{value:"Read only",id:"read-only",level:2}],E={toc:g},h="wrapper";function O(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},E,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"basic"},"Basic"),(0,a.kt)(m,{mdxType:"CellStringEdit"}),(0,a.kt)("h2",{id:"read-only"},"Read only"),(0,a.kt)("p",null,"Display the value in numeral format."),(0,a.kt)(p,{mdxType:"CellStringView"}))}O.isMDXComponent=!0}}]);