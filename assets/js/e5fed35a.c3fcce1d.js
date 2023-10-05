"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:99,title:"Roadmap"},i=void 0,l={unversionedId:"virtual-table/roadmap",id:"virtual-table/roadmap",title:"Roadmap",description:"4th quarter 2021",source:"@site/docs/virtual-table/roadmap.mdx",sourceDirName:"virtual-table",slug:"/virtual-table/roadmap",permalink:"/design-system/docs/virtual-table/roadmap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/roadmap.mdx",tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99,title:"Roadmap"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/design-system/docs/virtual-table/api"},next:{title:"Modal",permalink:"/design-system/docs/Modal/"}},s={},p=[{value:"4th quarter 2021",id:"4th-quarter-2021",level:2},{value:"Keyboard navigation",id:"keyboard-navigation",level:3},{value:"Components testing",id:"components-testing",level:3},{value:"Lines group",id:"lines-group",level:3},{value:"3rd quarter 2021",id:"3rd-quarter-2021",level:2},{value:"Take the VirtualTable out of the main project",id:"take-the-virtualtable-out-of-the-main-project",level:3},{value:"Improve the <code>Comment</code> Component",id:"improve-the-comment-component",level:3},{value:"Improve the <code>Autocomplete</code> Component",id:"improve-the-autocomplete-component",level:3},{value:"Implementation of the export functionnality",id:"implementation-of-the-export-functionnality",level:3},{value:"Update/Add mode",id:"updateadd-mode",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"4th-quarter-2021"},"4th quarter 2021"),(0,r.kt)("h3",{id:"keyboard-navigation"},"Keyboard navigation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-12857"},"https://myunisoft.atlassian.net/browse/MYUN-12857")),(0,r.kt)("h3",{id:"components-testing"},"Components testing"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-11446"},"https://myunisoft.atlassian.net/browse/MYUN-11446")),(0,r.kt)("h3",{id:"lines-group"},"Lines group"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-13680"},"https://myunisoft.atlassian.net/browse/MYUN-13680")),(0,r.kt)("h2",{id:"3rd-quarter-2021"},"3rd quarter 2021"),(0,r.kt)("h3",{id:"take-the-virtualtable-out-of-the-main-project"},"Take the VirtualTable out of the main project"),(0,r.kt)("p",null,"Our main goal is to create a separate package for the VirtualTable.\nThat will allow us to maintain it in a easier and more efficiency way.  "),(0,r.kt)("h3",{id:"improve-the-comment-component"},"Improve the ",(0,r.kt)("inlineCode",{parentName:"h3"},"Comment")," Component"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-11473"},"https://myunisoft.atlassian.net/browse/MYUN-11473")),(0,r.kt)("h3",{id:"improve-the-autocomplete-component"},"Improve the ",(0,r.kt)("inlineCode",{parentName:"h3"},"Autocomplete")," Component"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-14663"},"https://myunisoft.atlassian.net/browse/MYUN-14663")),(0,r.kt)("h3",{id:"implementation-of-the-export-functionnality"},"Implementation of the export functionnality"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-11462"},"https://myunisoft.atlassian.net/browse/MYUN-11462")),(0,r.kt)("h3",{id:"updateadd-mode"},"Update/Add mode"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-14941"},"https://myunisoft.atlassian.net/browse/MYUN-14941")))}m.isMDXComponent=!0}}]);