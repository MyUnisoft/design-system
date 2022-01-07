"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4974],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73017:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(27378),r(3905)),i=["components"],l={sidebar_position:9,title:"API"},u=void 0,c={unversionedId:"virtual-table/api",id:"virtual-table/api",isDocsHomePage:!1,title:"API",description:"The API is used to access VirtualTable methods and contents outside of it.",source:"@site/docs/virtual-table/api.mdx",sourceDirName:"virtual-table",slug:"/virtual-table/api",permalink:"/design-system/docs/virtual-table/api",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/api.mdx",version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"API"},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/design-system/docs/virtual-table/export"},next:{title:"Roadmap",permalink:"/design-system/docs/virtual-table/roadmap"}},p=[{value:"Example with exportData method",id:"example-with-exportdata-method",children:[]},{value:"Available data and methods",id:"available-data-and-methods",children:[]}],s={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The API is used to access VirtualTable methods and contents outside of it."),(0,o.kt)("h3",{id:"example-with-exportdata-method"},"Example with exportData method"),(0,o.kt)("p",null,"This code will create a button ",(0,o.kt)("strong",{parentName:"p"},"Export")," that export the VirtualTable content to the csv format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const myRef = useRef();\n\nfunction handleExport() {\n  myRef?.current?.exportData('csv');\n}\n\nreturn (\n  <div>\n    <button onClick={handleExport}>Export</button>\n    <VirtualTable ref={myRef} />\n  </div>\n)\n")),(0,o.kt)("h3",{id:"available-data-and-methods"},"Available data and methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"exportData"),(0,o.kt)("td",{parentName:"tr",align:null},"('csv' ","|"," 'xls') => void"),(0,o.kt)("td",{parentName:"tr",align:null},"Trigger the export method.")))))}d.isMDXComponent=!0}}]);