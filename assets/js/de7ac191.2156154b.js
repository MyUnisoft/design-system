"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),s=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||r;return n?l.createElement(k,i(i({ref:t},d),{},{components:n})):l.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>k});var l=n(87462),a=n(67294),r=n(3905),i=n(2750),p=n(68435);const o=(0,n(15550).Z)({root:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}})((e=>{let{children:t,classes:n}=e;return a.createElement("div",{className:n.root},t)}));const s=function(e){const[t,n]=(0,a.useState)(0),{withFiles:r,...s}=e;return a.createElement(a.Fragment,null,a.createElement(o,null,a.createElement("div",{style:{background:"#fff",padding:10,width:420}},a.createElement(p.Z,(0,l.Z)({},s,{onAddFiles:function(t){n((e=>e+1)),e.onAddFiles&&e.onAddFiles(t)}})))),a.createElement(i.Z,{variant:"body1"},"onAddFiles has been called ",t," times"))},d={title:"FileDropper"},m=void 0,u={unversionedId:"inputs/FileDropper",id:"inputs/FileDropper",title:"FileDropper",description:"",source:"@site/docs/inputs/FileDropper.mdx",sourceDirName:"inputs",slug:"/inputs/FileDropper",permalink:"/design-system/docs/inputs/FileDropper",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/inputs/FileDropper.mdx",tags:[],version:"current",frontMatter:{title:"FileDropper"},sidebar:"tutorialSidebar",previous:{title:"Title",permalink:"/design-system/docs/basics/Title"},next:{title:"AutocompleteMultiple",permalink:"/design-system/docs/Autocomplete/AutocompleteMultiple"}},c={},k=[{value:"Default",id:"default",level:3},{value:"Prevent delete",id:"prevent-delete",level:3},{value:"No list",id:"no-list",level:3},{value:"Limit",id:"limit",level:3},{value:"With files",id:"with-files",level:3},{value:"Props",id:"props",level:2}],g={toc:k};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This component is used for files management."),(0,r.kt)("h3",{id:"default"},"Default"),(0,r.kt)("p",null,"By default, the component accepts an unlimited number of files and gives the ability to remove them."),(0,r.kt)(s,{mdxType:"FileDropperBasicExample"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<FileDropper />\n")),(0,r.kt)("h3",{id:"prevent-delete"},"Prevent delete"),(0,r.kt)("p",null,"It can sometimes be necessary to prevent the user from removing uploaded files. This is possible by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"canRemove")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)(s,{canRemove:!1,mdxType:"FileDropperBasicExample"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<FileDropper canRemove={false} />\n")),(0,r.kt)("h3",{id:"no-list"},"No list"),(0,r.kt)("p",null,"You can hide the default list of files with the ",(0,r.kt)("inlineCode",{parentName:"p"},"displayList")," property to make your own outside of the component."),(0,r.kt)(s,{displayList:!1,mdxType:"FileDropperBasicExample"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<FileDropper displayList={false} />\n")),(0,r.kt)("h3",{id:"limit"},"Limit"),(0,r.kt)(s,{maxFiles:5,fileTypeAccepted:{"image/jpeg":[],"image/png":[],"application/pdf":[]},mdxType:"FileDropperBasicExample"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<FileDropper\n  maxFiles={5}\n  fileTypeAccepted={{\n    'image/jpeg': [],\n    'image/png': [],\n    'application/pdf': []\n  }}\n/>\n")),(0,r.kt)("h3",{id:"with-files"},"With files"),(0,r.kt)(s,{withFiles:10,mdxType:"FileDropperBasicExample"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<FileDropper initialFiles={files} />\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"canRemove"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", a button is displayed to remove each files. When clicked, the ",(0,r.kt)("inlineCode",{parentName:"td"},"onRemoveFile")," function is called with the file as uniq argument.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayList"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the list of files is displayed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"initialFiles"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The list of files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filesListTitle"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Text to display as the title of the file list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxFiles"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Is used to limit the number of files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileTypeAccepted"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"is Used to limit type of files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onAddFiles"),(0,r.kt)("td",{parentName:"tr",align:null},"func"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Function called when the component receives files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onChange"),(0,r.kt)("td",{parentName:"tr",align:null},"func"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Function called when the files list changes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onRemoveFile"),(0,r.kt)("td",{parentName:"tr",align:null},"func"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Function called when a file is removed.")))))}f.isMDXComponent=!0}}]);