"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8521],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var i=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return r?i.createElement(h,l(l({ref:t},p),{},{components:r})):i.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<a;d++)l[d]=r[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85824:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var i=r(87462),n=r(27378),a=r(3905),l=r(41138);const o=function(e){let{length:t,vtProps:r,...a}=e;const o=(0,n.useMemo)((()=>function(e){return void 0===e&&(e=50),Array.from({length:e},((e,t)=>({id:t,colA:`col${t}`})))}(t)),[t]);return n.createElement(l.Z,(0,i.Z)({data:o,config:{modeAdd:!0,hasFooter:!0,columns:[{key:"id",header:"Id",size:1,footerValue:"Total"},{key:"colA",header:"Col A",size:1}]},tableKeyName:"VirtualTableBasic"},r))},s={sidebar_position:1,title:"Dimension"},d=void 0,p={unversionedId:"virtual-table/dimension",id:"virtual-table/dimension",title:"Dimension",description:"",source:"@site/docs/virtual-table/dimension.mdx",sourceDirName:"virtual-table",slug:"/virtual-table/dimension",permalink:"/design-system/docs/virtual-table/dimension",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/dimension.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Dimension"},sidebar:"tutorialSidebar",previous:{title:"Config",permalink:"/design-system/docs/virtual-table/config"},next:{title:"Overview",permalink:"/design-system/docs/virtual-table/cells/"}},c={},u=[{value:"maxHeight 200px",id:"maxheight-200px",level:2},{value:"maxHeight 400px",id:"maxheight-400px",level:2},{value:"Dynamic height",id:"dynamic-height",level:2},{value:"Width",id:"width",level:2},{value:"Width",id:"width-1",level:2}],m={toc:u};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Green Border is the VT height"),(0,a.kt)("li",{parentName:"ul"},"Red Border is the Wrapper height")),(0,a.kt)("h2",{id:"maxheight-200px"},"maxHeight 200px"),(0,a.kt)("div",{style:{zIndex:20,position:"relative",border:"1px solid red",height:"202px"}},(0,a.kt)("div",{style:{border:"1px solid green"}},(0,a.kt)(o,{length:0,vtProps:{maxHeight:"200px"},mdxType:"VirtualTableBasic"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<VirtualTable maxHeight="200px" />\n')),(0,a.kt)("h2",{id:"maxheight-400px"},"maxHeight 400px"),(0,a.kt)("div",{style:{zIndex:20,position:"relative",border:"1px solid red",height:"402px"}},(0,a.kt)("div",{style:{border:"1px solid green"}},(0,a.kt)(o,{length:50,vtProps:{maxHeight:"400px"},mdxType:"VirtualTableBasic"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<VirtualTable maxHeight="400px" />\n')),(0,a.kt)("h2",{id:"dynamic-height"},"Dynamic height"),(0,a.kt)("div",{style:{zIndex:20,display:"flex",flexDirection:"column",border:"1px solid red",maxHeight:"400px"}},(0,a.kt)("div",{style:{height:"100px",flexShrink:0}},"Other box"),(0,a.kt)("div",{style:{flexGrow:1,border:"1px solid green",maxHeight:"300px"}},(0,a.kt)(o,{length:10,vtProps:{maxHeight:"inherit"},mdxType:"VirtualTableBasic"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{ maxHeight: '400px' }}>\n  <VirtualTable maxHeight=\"inherit\" />\n</div>\n")),(0,a.kt)("h2",{id:"width"},"Width"),(0,a.kt)("div",{style:{zIndex:20,position:"relative",border:"1px solid red",height:"402px"}},(0,a.kt)("div",{style:{width:"630.25px",boxShadow:"0 0 0 1px green"}},(0,a.kt)(o,{length:50,vtProps:{maxHeight:"400px"},mdxType:"VirtualTableBasic"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{ width: '630.25px' }}>\n<VirtualTable maxHeight=\"400px\" />\n</div>\n")),(0,a.kt)("h2",{id:"width-1"},"Width"),(0,a.kt)("div",{style:{zIndex:20,position:"relative",border:"1px solid red",height:"402px"}},(0,a.kt)("div",{style:{width:"250px",boxShadow:"0 0 0 1px green"}},(0,a.kt)(o,{length:0,vtProps:{maxHeight:"400px"},mdxType:"VirtualTableBasic"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{ width: '250px' }}>\n<VirtualTable maxHeight=\"400px\" />\n</div>\n")))}h.isMDXComponent=!0}}]);