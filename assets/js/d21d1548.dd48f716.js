"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(27378);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,d=function(e,t){if(null==e)return{};var n,r,d={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(d[n]=e[n]);return d}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,d=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=d,g=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:d,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73988:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(27378),d=n(87694);const a=Object.keys(d).sort(),l=()=>r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat( auto-fit, 40px )",gridGap:"10px"}},a.map((e=>{const t=d[e];return r.createElement("div",{key:e,style:{padding:10,background:"#EEE"},title:`<${e} />`},r.createElement(t,{size:"m"}))})))},8787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),d=(n(27378),n(3905)),a=n(22082),l=n(26614),o=n(68789);n(73988);const i={title:"BadgeAdd"},p=void 0,c={unversionedId:"BadgeAdd/BadgeAdd",id:"BadgeAdd/BadgeAdd",title:"BadgeAdd",description:"BadgeAdd component.",source:"@site/docs/BadgeAdd/BadgeAdd.mdx",sourceDirName:"BadgeAdd",slug:"/BadgeAdd/",permalink:"/design-system/docs/BadgeAdd/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/BadgeAdd/BadgeAdd.mdx",tags:[],version:"current",frontMatter:{title:"BadgeAdd"},sidebar:"tutorialSidebar",previous:{title:"AutocompleteMultiple",permalink:"/design-system/docs/Autocomplete/AutocompleteMultiple"},next:{title:"Playground",permalink:"/design-system/docs/virtual-table/playground"}},u={},s=[{value:"Exemples",id:"exemples",level:3},{value:"Props",id:"props",level:2}],m={toc:s},g="wrapper";function k(e){let{components:t,...n}=e;return(0,d.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"BadgeAdd component."),(0,d.kt)("p",null,"It's a basic Badge with buisness logic."),(0,d.kt)("h3",{id:"exemples"},"Exemples"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx"},"\n  <div style={{ height:'30px', width:'30px', border : '1px solid red' }}>\n    <BadgeAdd counter={10} onClick={()=>{console.log('click Badge')}}>\n      <CommentIcon  />\n    </BadgeAdd>\n  </div>\n\n  <div>\n  <BadgeAdd>\n    <div style={{ border : '1px solid violet' }} >coucou</div>\n    </BadgeAdd>\n  </div>\n\n  <div>\n    <BadgeAdd>\n      <PjIcon size={20} />\n    </BadgeAdd>\n  </div>\n    <div>\n    <BadgeAdd counter={98} color=\"red\">\n      <PjIcon size={20} />\n    </BadgeAdd>\n  </div>\n\n  <div>\n    <BadgeAdd counter={8}>\n      <PjIcon size={20} />\n    </BadgeAdd>\n  </div>\n\n  <div>\n    <BadgeAdd counter={12} color=\"blue\">\n      <PjIcon size={20} />\n    </BadgeAdd>\n  </div>\n\n   <div>\n    <BadgeAdd counter={100} color=\"#de4f23\">\n      <CommentIcon size={20} />\n    </BadgeAdd>\n  </div>\n")),(0,d.kt)("div",{style:{display:"flex",height:"60px",justifyContent:"space-between"}},(0,d.kt)("div",{style:{height:"30px",width:"30px",border:"1px solid red"}},(0,d.kt)(a.Z,{counter:10,onClick:()=>{console.log("click Badge")},mdxType:"BadgeAdd"},(0,d.kt)(l.Z,{mdxType:"CommentIcon"}))),(0,d.kt)("div",null,(0,d.kt)(a.Z,{mdxType:"BadgeAdd"},(0,d.kt)("div",{style:{border:"1px solid violet"}},"coucou"))),(0,d.kt)("div",null,(0,d.kt)(a.Z,{mdxType:"BadgeAdd"},(0,d.kt)(o.Z,{size:20,mdxType:"PjIcon"}))),(0,d.kt)("div",null,(0,d.kt)(a.Z,{counter:98,color:"red",mdxType:"BadgeAdd"},(0,d.kt)(o.Z,{size:20,mdxType:"PjIcon"}))),(0,d.kt)("div",null,(0,d.kt)(a.Z,{counter:8,mdxType:"BadgeAdd"},(0,d.kt)(o.Z,{size:20,mdxType:"PjIcon"}))),(0,d.kt)("div",null,(0,d.kt)(a.Z,{counter:12,color:"blue",mdxType:"BadgeAdd"},(0,d.kt)(o.Z,{size:20,mdxType:"PjIcon"}))),(0,d.kt)("div",null,(0,d.kt)(a.Z,{counter:100,color:"#de4f23",mdxType:"BadgeAdd"},(0,d.kt)(l.Z,{size:20,mdxType:"CommentIcon"})))),(0,d.kt)("br",null),(0,d.kt)("h2",{id:"props"},"Props"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:null},"Name"),(0,d.kt)("th",{parentName:"tr",align:null},"Type"),(0,d.kt)("th",{parentName:"tr",align:null},"Required"),(0,d.kt)("th",{parentName:"tr",align:null},"Default"),(0,d.kt)("th",{parentName:"tr",align:null},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},"counter"),(0,d.kt)("td",{parentName:"tr",align:null},"number"),(0,d.kt)("td",{parentName:"tr",align:null},"No"),(0,d.kt)("td",{parentName:"tr",align:null}),(0,d.kt)("td",{parentName:"tr",align:null},"Content of badge, IconPlus displayed if nothing or 0, +99 if more than 99")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},"onClick"),(0,d.kt)("td",{parentName:"tr",align:null},"func"),(0,d.kt)("td",{parentName:"tr",align:null},"No"),(0,d.kt)("td",{parentName:"tr",align:null},"()=>{}"),(0,d.kt)("td",{parentName:"tr",align:null},"Action onClick Badge")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},"color"),(0,d.kt)("td",{parentName:"tr",align:null},"string"),(0,d.kt)("td",{parentName:"tr",align:null},"No"),(0,d.kt)("td",{parentName:"tr",align:null},"()=>{}"),(0,d.kt)("td",{parentName:"tr",align:null},"palette.primary.main, #0BD1D1")))))}k.isMDXComponent=!0}}]);