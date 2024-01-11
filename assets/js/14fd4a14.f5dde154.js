"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[903],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var n=r(87462),o=r(67294),a=r(3905),i=r(86843);const l=Object.keys(i).sort(),c=()=>o.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat( auto-fit, 40px )",gridGap:"10px"}},l.map((e=>{const t=i[e];return o.createElement("div",{key:e,style:{padding:8,background:"#EEE",height:40},title:`<${e} />`},o.createElement(t,{fontSize:"medium"}))}))),s={title:"Icon Material"},p=void 0,d={unversionedId:"basics/IconMaterial",id:"basics/IconMaterial",title:"Icon Material",description:"",source:"@site/docs/basics/IconMaterial.mdx",sourceDirName:"basics",slug:"/basics/IconMaterial",permalink:"/design-system/docs/basics/IconMaterial",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/basics/IconMaterial.mdx",tags:[],version:"current",frontMatter:{title:"Icon Material"},sidebar:"tutorialSidebar",previous:{title:"Icon",permalink:"/design-system/docs/basics/Icon"},next:{title:"Loader",permalink:"/design-system/docs/basics/Loader"}},u={},m=[{value:"Default",id:"default",level:3},{value:"Exemples",id:"exemples",level:3},{value:"Available Icons",id:"available-icons",level:3},{value:"Props",id:"props",level:2}],f={toc:m};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Icon components extract from Material icons."),(0,a.kt)("h3",{id:"default"},"Default"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<IconName />\n")),(0,a.kt)("h3",{id:"exemples"},"Exemples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},' <AddBoxMuiIcon fontSize="small" color="disabled"/>\n <AddBoxMuiIcon fontSize="medium" color="error"/>\n <AddBoxMuiIcon fontSize="large" color="primary"/>\n')),(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)(i.AddBoxMuiIcon,{fontSize:"small",color:"disabled",mdxType:"AddBoxMuiIcon"}),(0,a.kt)(i.AddBoxMuiIcon,{fontSize:"medium",color:"error",mdxType:"AddBoxMuiIcon"}),(0,a.kt)(i.AddBoxMuiIcon,{fontSize:"large",color:"primary",mdxType:"AddBoxMuiIcon"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"available-icons"},"Available Icons"),(0,a.kt)(c,{mdxType:"MaterialIconsList"}),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/icon/"},"https://mui.com/material-ui/api/icon/")))}b.isMDXComponent=!0}}]);