"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,f=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85372:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(27378);const a=e=>{let{children:t}=e;return r.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},t)}},38637:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(27378);const a=e=>{let{children:t}=e;return r.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},t)}},89639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>g,frontMatter:()=>u,metadata:()=>c,toc:()=>k});var r=n(87462),a=n(27378),l=n(3905),i=n(32380),o=n(74949),p=n(85372),d=n(38637);const s=function(e){let{columnProps:t}=e;const[n,r]=(0,a.useState)(Array.from({length:3},(()=>({baseUrl:"https://mycloud.myunisoft.fr",download:"https://mycloud.myunisoft.fr/index.php/s/cK6GdDtDLRxoQF9/download",id:3820520,link:"https://mycloud.myunisoft.fr/index.php/s/cK6GdDtDLRxoQF9",name:"file20210607102036000000SK5he.jpg",thumbnail:"https://mycloud.myunisoft.fr/index.php/apps/files_sharing/publicpreview/cK6GdDtDLRxoQF9?x=90&y=120&a=true",token:"cK6GdDtDLRxoQF9"}))));return a.createElement(d.Z,null,a.createElement(p.Z,null,a.createElement(i.Z,{typeCell:o.v.ATTACHMENT,vtContext:{state:"PERMANENT_EDIT",send:()=>{}},column:{onSubmit:(e,t,n)=>new Promise((e=>setTimeout((()=>{e({added:t,deleted:n})}),1e3))),fileDropperProps:{onChange:r},...t},data:{files:n},dataKey:"files"})))},u={title:"Attachment"},m=void 0,c={unversionedId:"virtual-table/cells/attachment",id:"virtual-table/cells/attachment",title:"Attachment",description:"",source:"@site/docs/virtual-table/cells/attachment.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/attachment",permalink:"/design-system/docs/virtual-table/cells/attachment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/attachment.mdx",tags:[],version:"current",frontMatter:{title:"Attachment"},sidebar:"tutorialSidebar",previous:{title:"Amount",permalink:"/design-system/docs/virtual-table/cells/amount"},next:{title:"Autocomplete",permalink:"/design-system/docs/virtual-table/cells/autocomplete"}},f={},k=[{value:"Hide uploader",id:"hide-uploader",level:2},{value:"Hide previewer",id:"hide-previewer",level:2},{value:"Props",id:"props",level:2},{value:"filesDropperProps override",id:"filesdropperprops-override",level:3}],h={toc:k};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s,{mdxType:"CellAttachmentEdit"}),(0,l.kt)("h2",{id:"hide-uploader"},"Hide uploader"),(0,l.kt)(s,{columnProps:{hasUploader:!1},mdxType:"CellAttachmentEdit"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  typeCell: 'attachment',\n  hasUploader: false,\n  ...\n}\n")),(0,l.kt)("h2",{id:"hide-previewer"},"Hide previewer"),(0,l.kt)(s,{columnProps:{hasPreviewer:!1},mdxType:"CellAttachmentEdit"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  typeCell: 'attachment',\n  hasPreviewer: false,\n  ...\n}\n")),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isDisplayCloseBtn")),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", the ",(0,l.kt)("strong",{parentName:"td"},"Cancel")," button is not displayed. And the change are automatically passed to the VirtualTable state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"filesDropperProps")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Extends the ",(0,l.kt)("a",{parentName:"td",href:"../../inputs/FileDropper#props"},"FileDropper")," components. Avoid using the ",(0,l.kt)("inlineCode",{parentName:"td"},"onChange")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"files")," props.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hasPreviewer")),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", the previewer badge is hidden.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hasUploader")),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", the paperclip button used to open the uploader is hidden.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSubmit")),(0,l.kt)("td",{parentName:"tr",align:null},"func"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when the ",(0,l.kt)("em",{parentName:"td"},"submit")," button is clicked. It receives the cell infos, added files list and deleted files list. If the ",(0,l.kt)("inlineCode",{parentName:"td"},"onSubmit")," function returns an array, it'll be passed to the ",(0,l.kt)("inlineCode",{parentName:"td"},"onChange")," callback.")))),(0,l.kt)("h3",{id:"filesdropperprops-override"},"filesDropperProps override"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"filesDropperProps")," property overrides the ",(0,l.kt)("inlineCode",{parentName:"p"},"onAddFiles")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"onRemoveFile")," to pass the Cell object as the first argument."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"interface onAddFiles {\n  (cell: Cell, files: Files[]): void;\n}\n\ninterface onRemoveFile {\n  (cell: Cell, file: File): void;\n}\n")))}g.isMDXComponent=!0}}]);