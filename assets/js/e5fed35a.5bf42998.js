(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2030],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(27378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23155:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(27378),n(3905)),i=["components"],l={sidebar_position:99,title:"Roadmap"},p=void 0,s={unversionedId:"virtual-table/roadmap",id:"virtual-table/roadmap",isDocsHomePage:!1,title:"Roadmap",description:"4th quarter 2021",source:"@site/docs/virtual-table/roadmap.mdx",sourceDirName:"virtual-table",slug:"/virtual-table/roadmap",permalink:"/design-system/docs/virtual-table/roadmap",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/roadmap.mdx",version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99,title:"Roadmap"},sidebar:"tutorialSidebar",previous:{title:"Event",permalink:"/design-system/docs/virtual-table/event"}},u=[{value:"4th quarter 2021",id:"4th-quarter-2021",children:[{value:"Keyboard navigation",id:"keyboard-navigation",children:[]},{value:"Components testing",id:"components-testing",children:[]},{value:"Lines group",id:"lines-group",children:[]}]},{value:"3rd quarter 2021",id:"3rd-quarter-2021",children:[{value:"Take the VirtualTable out of the main project",id:"take-the-virtualtable-out-of-the-main-project",children:[]},{value:"Improve the <code>Comment</code> Component",id:"improve-the-comment-component",children:[]},{value:"Improve the <code>Autocomplete</code> Component",id:"improve-the-autocomplete-component",children:[]},{value:"Implementation of the export functionnality",id:"implementation-of-the-export-functionnality",children:[]},{value:"Update/Add mode",id:"updateadd-mode",children:[]}]}],c={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"4th-quarter-2021"},"4th quarter 2021"),(0,o.kt)("h3",{id:"keyboard-navigation"},"Keyboard navigation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-12857"},"https://myunisoft.atlassian.net/browse/MYUN-12857")),(0,o.kt)("h3",{id:"components-testing"},"Components testing"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-11446"},"https://myunisoft.atlassian.net/browse/MYUN-11446")),(0,o.kt)("h3",{id:"lines-group"},"Lines group"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-13680"},"https://myunisoft.atlassian.net/browse/MYUN-13680")),(0,o.kt)("h2",{id:"3rd-quarter-2021"},"3rd quarter 2021"),(0,o.kt)("h3",{id:"take-the-virtualtable-out-of-the-main-project"},"Take the VirtualTable out of the main project"),(0,o.kt)("p",null,"Our main goal is to create a separate package for the VirtualTable.\nThat will allow us to maintain it in a easier and more efficiency way.  "),(0,o.kt)("h3",{id:"improve-the-comment-component"},"Improve the ",(0,o.kt)("inlineCode",{parentName:"h3"},"Comment")," Component"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-11473"},"https://myunisoft.atlassian.net/browse/MYUN-11473")),(0,o.kt)("h3",{id:"improve-the-autocomplete-component"},"Improve the ",(0,o.kt)("inlineCode",{parentName:"h3"},"Autocomplete")," Component"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-14663"},"https://myunisoft.atlassian.net/browse/MYUN-14663")),(0,o.kt)("h3",{id:"implementation-of-the-export-functionnality"},"Implementation of the export functionnality"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-11462"},"https://myunisoft.atlassian.net/browse/MYUN-11462")),(0,o.kt)("h3",{id:"updateadd-mode"},"Update/Add mode"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://myunisoft.atlassian.net/browse/MYUN-14941"},"https://myunisoft.atlassian.net/browse/MYUN-14941")))}m.isMDXComponent=!0}}]);