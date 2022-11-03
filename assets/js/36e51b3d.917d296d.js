"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1746],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=l,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85372:function(e,t,n){var r=n(27378);t.Z=e=>{let{children:t}=e;return r.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},t)}},38637:function(e,t,n){var r=n(27378);t.Z=e=>{let{children:t}=e;return r.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},t)}},64488:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return y}});var r=n(83117),l=n(27378),a=n(3905),i=n(63984),o=n(74949),c=n(85372),u=n(38637);var s=function(){return l.createElement(u.Z,null,l.createElement(c.Z,null,l.createElement(i.Z,{typeCell:o.v.WALLET,column:{},data:{wallet:{count:5,array:[{id:"AAA"},{id:"BBB"},{id:"CCC"},{id:"DDD"}]}},dataKey:"wallet"})))};const p={title:"Wallet"},d=void 0,f={unversionedId:"virtual-table/cells/wallet",id:"virtual-table/cells/wallet",title:"Wallet",description:"",source:"@site/docs/virtual-table/cells/wallet.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/wallet",permalink:"/design-system/docs/virtual-table/cells/wallet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/wallet.mdx",tags:[],version:"current",frontMatter:{title:"Wallet"},sidebar:"tutorialSidebar",previous:{title:"Thumbnail (beta)",permalink:"/design-system/docs/virtual-table/cells/thumbnail"},next:{title:"Group",permalink:"/design-system/docs/virtual-table/group"}},m={},y=[{value:"Basic",id:"basic",level:2},{value:"Tooltip",id:"tooltip",level:2},{value:"Props",id:"props",level:2}],b={toc:y};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Wallet")," typeCell is used to display a formatted text with an optional tooltip."),(0,a.kt)("h2",{id:"basic"},"Basic"),(0,a.kt)(s,{mdxType:"CellWalletView"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"data: {\n  count: 5,\n  array: [\n    {\n      id: 'AAA'\n    },\n    {\n      id: 'BBB'\n    },\n    {\n      id: 'CCC'\n    },\n    {\n      id: 'DDD'\n    }\n  ]\n}\n")),(0,a.kt)("h2",{id:"tooltip"},"Tooltip"),(0,a.kt)("p",null,"If no ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," is present in the row data. Then the tooltip is not rendered on hover."),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("p",null,"No config is needed for this typeCell."))}v.isMDXComponent=!0}}]);