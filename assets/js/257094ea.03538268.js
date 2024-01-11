"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=o(r),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),l=r(53886);const i={title:"Chips"},p=void 0,s={unversionedId:"basics/Chips",id:"basics/Chips",title:"Chips",description:"",source:"@site/docs/basics/Chips.mdx",sourceDirName:"basics",slug:"/basics/Chips",permalink:"/design-system/docs/basics/Chips",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/basics/Chips.mdx",tags:[],version:"current",frontMatter:{title:"Chips"},sidebar:"tutorialSidebar",previous:{title:"Checkbox",permalink:"/design-system/docs/basics/Checkbox"},next:{title:"Icon",permalink:"/design-system/docs/basics/Icon"}},o={},d=[{value:"Default",id:"default",level:3},{value:"Exemples",id:"exemples",level:3},{value:"Props",id:"props",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Chips component."),(0,a.kt)("h3",{id:"default"},"Default"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Chips text={"text here"}/>\n')),(0,a.kt)("p",null,"Chips is defined by UI/UX in styleguide : ",(0,a.kt)("a",{parentName:"p",href:"https://app.zeplin.io/styleguide/"},"https://app.zeplin.io/styleguide/")),(0,a.kt)("h3",{id:"exemples"},"Exemples"),(0,a.kt)("p",null,"Checked "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{ height:'50px', border : '2px solid', margin : '5px', padding : '2px',display : 'flex' }}>\n  <Chips text={\"text here\"} isClosable/>\n</div>\n<div style={{ height:'20px', border : '2px solid', margin : '5px', padding : '2px', display : 'flex' }}>\n  <Chips text={\"one\"} /><Chips text={\"two\"}/><Chips text={\"three\"} isClosable/>\n</div>\n")),(0,a.kt)("div",{style:{height:"50px",border:"2px solid",margin:"5px",padding:"2px",display:"flex"}},(0,a.kt)(l.Z,{text:"text here",isClosable:!0,mdxType:"Chips"})),(0,a.kt)("div",{style:{height:"20px",border:"2px solid",margin:"5px",padding:"2px",display:"flex"}},(0,a.kt)(l.Z,{text:"one",mdxType:"Chips"}),(0,a.kt)(l.Z,{text:"two",mdxType:"Chips"}),(0,a.kt)(l.Z,{text:"three",isClosable:!0,mdxType:"Chips"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"text"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"''"),(0,a.kt)("td",{parentName:"tr",align:null},"Size of checkbox")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isClosable"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Display close on chips")))))}u.isMDXComponent=!0}}]);