"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4974],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(27378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16326:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(27378),a(3905));const l={sidebar_position:99,title:"API"},i=void 0,o={unversionedId:"virtual-table/api",id:"virtual-table/api",title:"API",description:"The API is used to access VirtualTable methods and contents outside of it.",source:"@site/docs/virtual-table/api.mdx",sourceDirName:"virtual-table",slug:"/virtual-table/api",permalink:"/design-system/docs/virtual-table/api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/api.mdx",tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99,title:"API"},sidebar:"tutorialSidebar",previous:{title:"DOM",permalink:"/design-system/docs/virtual-table/dom"},next:{title:"Roadmap",permalink:"/design-system/docs/virtual-table/roadmap"}},d={},p=[{value:"Example with exportData method",id:"example-with-exportdata-method",level:3},{value:"Available data and methods",id:"available-data-and-methods",level:3}],u={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The API is used to access VirtualTable methods and contents outside of it."),(0,r.kt)("h3",{id:"example-with-exportdata-method"},"Example with exportData method"),(0,r.kt)("p",null,"This code will create a button ",(0,r.kt)("strong",{parentName:"p"},"Export")," that export the VirtualTable content to the csv format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const myRef = useRef();\n\nfunction handleExport() {\n  myRef?.current?.exportData('csv');\n}\n\nreturn (\n  <div>\n    <button onClick={handleExport}>Export</button>\n    <VirtualTable ref={myRef} />\n  </div>\n)\n")),(0,r.kt)("h3",{id:"available-data-and-methods"},"Available data and methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cancel"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Same action than clicking on the cancel button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Same action than clicking on the delete button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deleteNewRows"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove newly added rows.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edit"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Same action than clicking on the edit button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exportData"),(0,r.kt)("td",{parentName:"tr",align:null},"('csv' ","|"," 'xls') => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger the export method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getColumns"),(0,r.kt)("td",{parentName:"tr",align:null},"() => object[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the columns with the ",(0,r.kt)("inlineCode",{parentName:"td"},"display")," property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getData"),(0,r.kt)("td",{parentName:"tr",align:null},"({ filtered: boolean }) => row[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the table data. If ",(0,r.kt)("inlineCode",{parentName:"td"},"filtered")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", it returns only the filtered result.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getFilters"),(0,r.kt)("td",{parentName:"tr",align:null},"() => { filters: Map, q: string }"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the filters state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getSelectedRows"),(0,r.kt)("td",{parentName:"tr",align:null},"() => number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the selection state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"save"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Same action than clicking on the save button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectRows"),(0,r.kt)("td",{parentName:"tr",align:null},"(ids: number[]) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Change the selection state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setCellValue"),(0,r.kt)("td",{parentName:"tr",align:null},"({ key: string, keyId: number ","|"," string, value: any }) => void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setRowValue"),(0,r.kt)("td",{parentName:"tr",align:null},"({ keyId: number ","|"," string, value: object }) => void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setCurrentCell"),(0,r.kt)("td",{parentName:"tr",align:null},"(rowIndex: number, columnIndex: number) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Change the focused cell.")))))}m.isMDXComponent=!0}}]);