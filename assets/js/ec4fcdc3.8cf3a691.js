"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1048],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=l,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85372:function(e,t,n){var r=n(27378);t.Z=e=>{let{children:t}=e;return r.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},t)}},38637:function(e,t,n){var r=n(27378);t.Z=e=>{let{children:t}=e;return r.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},t)}},91905:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return y},default:function(){return h},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return g}});var r=n(83117),l=n(27378),a=n(3905),i=n(44384),o=n(2750),c=n(63984),u=n(74949),s=n(85372),m=n(38637);var d=function(){const[e,t]=(0,l.useState)("Back to the future");return l.createElement(m.Z,null,l.createElement(i.ZP,{container:!0,justifyContent:"center",spacing:2},l.createElement(i.ZP,{item:!0},l.createElement(o.Z,{color:"textPrimary"},"Editable"),l.createElement(s.Z,null,l.createElement(c.Z,{typeCell:u.v.STRING,onChange:t,vtContext:{state:"PERMANENT_EDIT"},column:{},data:{title:e},dataKey:"title"}))),l.createElement(i.ZP,{item:!0},l.createElement(o.Z,{color:"textPrimary"},"Disabled"),l.createElement(s.Z,null,l.createElement(c.Z,{typeCell:u.v.STRING,onChange:t,vtContext:{state:"PERMANENT_EDIT"},column:{isDisabled:()=>!0},data:{title:e},dataKey:"title"})))))};var p=function(){return l.createElement(m.Z,null,l.createElement(s.Z,null,l.createElement(c.Z,{typeCell:u.v.STRING,column:{},data:{title:"Lord of the ring"},dataKey:"title"})))};const f={title:"String"},y=void 0,b={unversionedId:"virtual-table/cells/string",id:"virtual-table/cells/string",title:"String",description:"",source:"@site/docs/virtual-table/cells/string.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/string",permalink:"/design-system/docs/virtual-table/cells/string",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/string.mdx",tags:[],version:"current",frontMatter:{title:"String"},sidebar:"tutorialSidebar",previous:{title:"Status",permalink:"/design-system/docs/virtual-table/cells/status"},next:{title:"Thumbnail (beta)",permalink:"/design-system/docs/virtual-table/cells/thumbnail"}},v={},g=[{value:"Basic",id:"basic",level:2},{value:"Read only",id:"read-only",level:2}],E={toc:g};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"basic"},"Basic"),(0,a.kt)(d,{mdxType:"CellStringEdit"}),(0,a.kt)("h2",{id:"read-only"},"Read only"),(0,a.kt)("p",null,"Display the value in numeral format."),(0,a.kt)(p,{mdxType:"CellStringView"}))}h.isMDXComponent=!0}}]);