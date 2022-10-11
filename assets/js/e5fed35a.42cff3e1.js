"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2030],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2019:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(83117),a=(n(27378),n(3905));const o={sidebar_position:99,title:"Roadmap"},i=void 0,l={unversionedId:"virtual-table/roadmap",id:"virtual-table/roadmap",title:"Roadmap",description:"4th quarter 2021",source:"@site/docs/virtual-table/roadmap.mdx",sourceDirName:"virtual-table",slug:"/virtual-table/roadmap",permalink:"/design-system/docs/virtual-table/roadmap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/roadmap.mdx",tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99,title:"Roadmap"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/design-system/docs/virtual-table/api"},next:{title:"exportData",permalink:"/design-system/docs/helpers/exportData"}},p={},s=[{value:"4th quarter 2021",id:"4th-quarter-2021",level:2},{value:"Keyboard navigation",id:"keyboard-navigation",level:3},{value:"Components testing",id:"components-testing",level:3},{value:"Lines group",id:"lines-group",level:3},{value:"3rd quarter 2021",id:"3rd-quarter-2021",level:2},{value:"Take the VirtualTable out of the main project",id:"take-the-virtualtable-out-of-the-main-project",level:3},{value:"Improve the <code>Comment</code> Component",id:"improve-the-comment-component",level:3},{value:"Improve the <code>Autocomplete</code> Component",id:"improve-the-autocomplete-component",level:3},{value:"Implementation of the export functionnality",id:"implementation-of-the-export-functionnality",level:3},{value:"Update/Add mode",id:"updateadd-mode",level:3}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"4th-quarter-2021"},"4th quarter 2021"),(0,a.kt)("h3",{id:"keyboard-navigation"},"Keyboard navigation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-12857"},"https://myunisoft.atlassian.net/browse/MYUN-12857")),(0,a.kt)("h3",{id:"components-testing"},"Components testing"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-11446"},"https://myunisoft.atlassian.net/browse/MYUN-11446")),(0,a.kt)("h3",{id:"lines-group"},"Lines group"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-13680"},"https://myunisoft.atlassian.net/browse/MYUN-13680")),(0,a.kt)("h2",{id:"3rd-quarter-2021"},"3rd quarter 2021"),(0,a.kt)("h3",{id:"take-the-virtualtable-out-of-the-main-project"},"Take the VirtualTable out of the main project"),(0,a.kt)("p",null,"Our main goal is to create a separate package for the VirtualTable.\nThat will allow us to maintain it in a easier and more efficiency way.  "),(0,a.kt)("h3",{id:"improve-the-comment-component"},"Improve the ",(0,a.kt)("inlineCode",{parentName:"h3"},"Comment")," Component"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-11473"},"https://myunisoft.atlassian.net/browse/MYUN-11473")),(0,a.kt)("h3",{id:"improve-the-autocomplete-component"},"Improve the ",(0,a.kt)("inlineCode",{parentName:"h3"},"Autocomplete")," Component"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-14663"},"https://myunisoft.atlassian.net/browse/MYUN-14663")),(0,a.kt)("h3",{id:"implementation-of-the-export-functionnality"},"Implementation of the export functionnality"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-11462"},"https://myunisoft.atlassian.net/browse/MYUN-11462")),(0,a.kt)("h3",{id:"updateadd-mode"},"Update/Add mode"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-14941"},"https://myunisoft.atlassian.net/browse/MYUN-14941")))}m.isMDXComponent=!0}}]);