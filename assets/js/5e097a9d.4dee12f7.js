(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4310],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85372:function(t,e,n){"use strict";var a=n(27378);e.Z=function(t){var e=t.children;return a.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},e)}},38637:function(t,e,n){"use strict";var a=n(27378);e.Z=function(t){var e=t.children;return a.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},e)}},55715:function(t,e,n){"use strict";n.r(e),n.d(e,{contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return h}});var a=n(22122),r=n(19756),l=n(27378),i=n(3905),u=n(48931),o=n(74949),s=n(85372),p=n(38637);var d=function(t){var e=t.columnProps,n=(0,l.useState)("fr"),a=n[0],r=n[1];return l.createElement(p.Z,null,l.createElement(s.Z,null,l.createElement(u.Z,{type:o.v.STATUS,vtContext:{state:"PERMANENT_EDIT"},column:Object.assign({options:[{label:"Fran\xe7ais",showMenu:["en","de"],status:"fr"},{label:"English",showMenu:["de"],status:"en"},{label:"Deutsche",showMenu:["en","fr"],status:"de"}]},e),data:{language:a},dataKey:"language",onChange:r})))};var c=function(){return l.createElement(p.Z,null,l.createElement(s.Z,null,l.createElement(u.Z,{type:o.v.STATUS,column:{options:[{label:"Fran\xe7ais",showMenu:["en","de"],status:"fr"},{label:"English",showMenu:["de"],status:"en"},{label:"Deutsche",showMenu:["en","fr"],status:"de"}]},data:{language:"en"},dataKey:"language"})))},m=["components"],k={title:"Status"},g=void 0,f={unversionedId:"virtual-table/cells/status",id:"virtual-table/cells/status",isDocsHomePage:!1,title:"Status",description:"Advanced Select where the options are based on the current value.",source:"@site/docs/virtual-table/cells/status.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/status",permalink:"/design-system/docs/virtual-table/cells/status",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/status.mdx",version:"current",frontMatter:{title:"Status"},sidebar:"tutorialSidebar",previous:{title:"Select",permalink:"/design-system/docs/virtual-table/cells/select"},next:{title:"String",permalink:"/design-system/docs/virtual-table/cells/string"}},h=[{value:"Basic",id:"basic",children:[]},{value:"Read only",id:"read-only",children:[]},{value:"Props",id:"props",children:[{value:"statusOption",id:"statusoption",children:[]}]}],N={toc:h};function b(t){var e=t.components,n=(0,r.Z)(t,m);return(0,i.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Advanced ",(0,i.kt)("inlineCode",{parentName:"p"},"Select")," where the options are based on the current value. "),(0,i.kt)("h2",{id:"basic"},"Basic"),(0,i.kt)(d,{mdxType:"CellStatusEdit"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  options: [{\n    label: 'Fran\xe7ais',\n    showMenu: ['en', 'de'], // 'Fran\xe7ais' is available only if 'en' or 'de' is selected\n    status: 'fr'\n  },{\n    label: 'English',\n    showMenu: ['de'], // 'English' is available only if 'de' is selected\n    status: 'en'\n  }, {\n    label: 'Deutsche',\n    showMenu: ['en', 'fr'], // 'Deutsche' is available only if 'en' or 'fr' is selected\n    status: 'de'\n  }],\n")),(0,i.kt)("h2",{id:"read-only"},"Read only"),(0,i.kt)(c,{mdxType:"CellStatusView"}),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"listStatus")),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Deprecated"),". Use the ",(0,i.kt)("inlineCode",{parentName:"td"},"options")," prop.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of statusOption")))),(0,i.kt)("h3",{id:"statusoption"},"statusOption"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"label")),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Element passed as children to ",(0,i.kt)("inlineCode",{parentName:"td"},"MenuItem"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"showMenu")),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"If the current value is in the array, then the option is part of the suggestion list.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:null},"number ","|"," string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The value returned when the input changes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Deprecated"),". Use the ",(0,i.kt)("inlineCode",{parentName:"td"},"label")," prop. This prop will replace ",(0,i.kt)("inlineCode",{parentName:"td"},"status")," in a future version.")))))}b.isMDXComponent=!0}}]);