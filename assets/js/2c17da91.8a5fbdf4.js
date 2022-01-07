"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5755],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85372:function(e,t,n){var r=n(27378);t.Z=function(e){var t=e.children;return r.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},t)}},38637:function(e,t,n){var r=n(27378);t.Z=function(e){var t=e.children;return r.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},t)}},40693:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return k}});var r=n(87462),a=n(63366),l=n(27378),i=n(3905),o=n(65893),p=n(74949),u=n(85372),d=n(38637);var c=function(e){var t=e.columnProps,n=(0,l.useState)([{baseUrl:"https://mycloud.myunisoft.fr",download:"https://mycloud.myunisoft.fr/index.php/s/cK6GdDtDLRxoQF9/download",id:3820520,link:"https://mycloud.myunisoft.fr/index.php/s/cK6GdDtDLRxoQF9",name:"file20210607102036000000SK5he.jpg",thumbnail:"https://mycloud.myunisoft.fr/index.php/apps/files_sharing/publicpreview/cK6GdDtDLRxoQF9?x=90&y=120&a=true",token:"cK6GdDtDLRxoQF9"}]),r=n[0],a=n[1];return l.createElement(d.Z,null,l.createElement(u.Z,null,l.createElement(o.Z,{typeCell:p.v.ATTACHMENT,vtContext:{state:"PERMANENT_EDIT",send:function(){}},column:Object.assign({onSubmit:function(e){return new Promise((function(t){return setTimeout((function(){t(e)}),1e3)}))},fileDropperProps:{onChange:a}},t),data:{files:r},dataKey:"files"})))},s=["components"],m={title:"Attachment"},f=void 0,h={unversionedId:"virtual-table/cells/attachment",id:"virtual-table/cells/attachment",isDocsHomePage:!1,title:"Attachment",description:"`mdx-code-block",source:"@site/docs/virtual-table/cells/attachment.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/attachment",permalink:"/design-system/docs/virtual-table/cells/attachment",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/attachment.mdx",version:"current",frontMatter:{title:"Attachment"},sidebar:"tutorialSidebar",previous:{title:"Amount",permalink:"/design-system/docs/virtual-table/cells/amount"},next:{title:"Autocomplete",permalink:"/design-system/docs/virtual-table/cells/autocomplete"}},k=[{value:"Hide uploader",id:"hide-uploader",children:[]},{value:"Hide previewer",id:"hide-previewer",children:[]},{value:"Props",id:"props",children:[]}],g={toc:k};function y(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"CellAttachmentEdit"}),(0,i.kt)("h2",{id:"hide-uploader"},"Hide uploader"),(0,i.kt)(c,{columnProps:{hasUploader:!1},mdxType:"CellAttachmentEdit"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  typeCell: 'attachment',\n  hasUploader: false,\n  ...\n}\n")),(0,i.kt)("h2",{id:"hide-previewer"},"Hide previewer"),(0,i.kt)(c,{columnProps:{hasPreviewer:!1},mdxType:"CellAttachmentEdit"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  typeCell: 'attachment',\n  hasPreviewer: false,\n  ...\n}\n")),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"isDisplayCloseBtn")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),", the ",(0,i.kt)("strong",{parentName:"td"},"Cancel")," button is not displayed. And the change are automatically passed to the VirtualTable state.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"filesDroppperProps")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"../../inputs/FileDropper#props"},"FileDropper")," components. Avoid using the ",(0,i.kt)("inlineCode",{parentName:"td"},"onChange")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"files")," props.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hasPreviewer")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),", the previewer badge is hidden.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hasUploader")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),", the paperclip button used to open the uploader is hidden.")))))}y.isMDXComponent=!0}}]);