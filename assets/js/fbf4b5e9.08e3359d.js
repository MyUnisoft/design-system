"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7446],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},l="exportData",s={unversionedId:"helpers/exportData",id:"helpers/exportData",title:"exportData",description:"Use the exportData helper to generate csv and xls files without VirtualTable",source:"@site/docs/helpers/exportData.mdx",sourceDirName:"helpers",slug:"/helpers/exportData",permalink:"/design-system/docs/helpers/exportData",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/helpers/exportData.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modal",permalink:"/design-system/docs/Modal/"},next:{title:"validation",permalink:"/design-system/docs/helpers/validation"}},i={},p=[{value:"Arguments",id:"arguments",level:2},{value:"rows",id:"rows",level:3},{value:"columns",id:"columns",level:3},{value:"format",id:"format",level:3},{value:"tableRefs",id:"tablerefs",level:3},{value:"options",id:"options",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exportdata"},"exportData"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"exportData")," helper to generate csv and xls files ",(0,a.kt)("strong",{parentName:"p"},"without")," VirtualTable"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'; \n\nimport { exportData } from '@myunisoft/design-system'\n\nconst ExportButtonCSV = ({ data, columns }) => {\n  return (\n    <button\n      onClick={() => exportData(data, columns, 'csv', 'my_filename')}\n    >Export to CSV</button>\n  )\n}\n\nexport default ExportButtonCSV;\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,"Here are the arguments to pass to the helper."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"exportData(rows, columns, format, filename, tableRefs, options)\n")),(0,a.kt)("h3",{id:"rows"},"rows"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rows")," argument is an array of Row object. It's corresponding to the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," property of the VirtualTable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Row {\n  [key: string]: string|number|boolean|null;\n}\n")),(0,a.kt)("h3",{id:"columns"},"columns"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"columns")," argument is an array of Column object. It's a light version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.columns")," property of the VirtualTable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Column {\n  header: string;\n  key: string;\n  renderExport?: string|number|(() => string|number);\n  typeCell?: string\n}\n")),(0,a.kt)("h3",{id:"format"},"format"),(0,a.kt)("p",null,"The values ",(0,a.kt)("inlineCode",{parentName:"p"},"pdf")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"print")," are used for the VirtualTable. Avoid using it for the moment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type ExportFormat = 'csv' | 'xls' | 'pdf' | 'print'\n")),(0,a.kt)("h3",{id:"tablerefs"},"tableRefs"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tableRefs")," is used for the VirtualTable. Avoid using it for the moment."),(0,a.kt)("h3",{id:"options"},"options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ExportOptions {\n  delimiter?: ','|';';\n  rowsFilter?: (Row) => boolean;\n}\n")))}c.isMDXComponent=!0}}]);