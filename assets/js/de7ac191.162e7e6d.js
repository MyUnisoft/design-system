"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2112],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,f=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30440:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return N},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var r=n(87462),a=n(63366),l=n(27378),i=n(3905),o=n(54344),p=n(56121),u=(0,n(75861).Z)({root:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}})((function(e){var t=e.children,n=e.classes;return l.createElement("div",{className:n.root},t)}));var d=function(e){var t=(0,l.useState)(0),n=t[0],a=t[1];return l.createElement(l.Fragment,null,l.createElement(u,null,l.createElement("div",{style:{background:"#fff",padding:10}},l.createElement(p.Z,(0,r.Z)({},e,{onAddFiles:function(t){a((function(e){return e+1})),e.onAddFiles&&e.onAddFiles(t)}})))),l.createElement(o.Z,{variant:"body1"},"onAddFiles has been called ",n," times"))},s=["components"],m={title:"FileDropper"},c=void 0,f={unversionedId:"inputs/FileDropper",id:"inputs/FileDropper",isDocsHomePage:!1,title:"FileDropper",description:"This component is used for files management.",source:"@site/docs/inputs/FileDropper.mdx",sourceDirName:"inputs",slug:"/inputs/FileDropper",permalink:"/design-system/docs/inputs/FileDropper",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/inputs/FileDropper.mdx",version:"current",frontMatter:{title:"FileDropper"},sidebar:"tutorialSidebar",previous:{title:"Design System of MyUnisoft",permalink:"/design-system/docs/intro"},next:{title:"Playground",permalink:"/design-system/docs/virtual-table/playground"}},k=[{value:"Default",id:"default",children:[]},{value:"Prevent delete",id:"prevent-delete",children:[]},{value:"No list",id:"no-list",children:[]},{value:"Limit",id:"limit",children:[]},{value:"Props",id:"props",children:[]}],g={toc:k};function N(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This component is used for files management."),(0,i.kt)("h3",{id:"default"},"Default"),(0,i.kt)("p",null,"By default, the component accepts an unlimited number of files and gives the ability to remove them."),(0,i.kt)(d,{mdxType:"FileDropperBasicExample"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<FileDropper />\n")),(0,i.kt)("h3",{id:"prevent-delete"},"Prevent delete"),(0,i.kt)("p",null,"It can sometimes be necessary to prevent the user from removing uploaded files. This is possible by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"canRemove")," property to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)(d,{canRemove:!1,mdxType:"FileDropperBasicExample"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<FileDropper canRemove={false} />\n")),(0,i.kt)("h3",{id:"no-list"},"No list"),(0,i.kt)("p",null,"You can hide the default list of files with the ",(0,i.kt)("inlineCode",{parentName:"p"},"displayList")," property to make your own outside of the component."),(0,i.kt)(d,{displayList:!1,mdxType:"FileDropperBasicExample"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<FileDropper displayList={false} />\n")),(0,i.kt)("h3",{id:"limit"},"Limit"),(0,i.kt)(d,{maxFiles:5,mdxType:"FileDropperBasicExample"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<FileDropper maxFiles={5} />\n")),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"canRemove"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", a button is displayed to remove each files. When clicked, the ",(0,i.kt)("inlineCode",{parentName:"td"},"onRemoveFile")," function is called with the file as uniq argument.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"displayList"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the list of files is displayed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"files"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The list of files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maxFiles"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Is used to limit the number of files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onAddFiles"),(0,i.kt)("td",{parentName:"tr",align:null},"func"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Function called when the component receives files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onChange"),(0,i.kt)("td",{parentName:"tr",align:null},"func"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Function called when the files list changes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onRemoveFile"),(0,i.kt)("td",{parentName:"tr",align:null},"func"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Function called when a file is removed.")))))}N.isMDXComponent=!0}}]);