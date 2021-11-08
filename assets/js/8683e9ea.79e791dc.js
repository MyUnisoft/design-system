(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3901],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,b=p["".concat(u,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85372:function(e,t,n){"use strict";var r=n(27378);t.Z=function(e){var t=e.children;return r.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},t)}},38637:function(e,t,n){"use strict";var r=n(27378);t.Z=function(e){var t=e.children;return r.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},t)}},23807:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return y},default:function(){return v},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return g}});var r=n(22122),l=n(19756),a=n(27378),i=n(3905),o=n(92137),u=n(87757),c=n.n(u),d=n(48931),s=n(74949),p=n(85372),m=n(38637);var b=function(e){var t=e.columnProps,n=e.isAsync,r=function(){var e=(0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=3;break}return e.next=3,new Promise((function(e){setTimeout((function(){return e()}),1e3)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.createElement(m.Z,null,a.createElement(p.Z,null,a.createElement(d.Z,{type:s.v.BUTTON,column:Object.assign({label:"Click me",handleClick:r},t),data:{amount:123456789},dataKey:"button"})))},k=["components"],f={title:"Button"},y=void 0,h={unversionedId:"virtual-table/cells/button",id:"virtual-table/cells/button",isDocsHomePage:!1,title:"Button",description:"Basic",source:"@site/docs/virtual-table/cells/button.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/button",permalink:"/design-system/docs/virtual-table/cells/button",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/button.mdx",version:"current",frontMatter:{title:"Button"},sidebar:"tutorialSidebar",previous:{title:"Badge",permalink:"/design-system/docs/virtual-table/cells/badge"},next:{title:"Checkbox",permalink:"/design-system/docs/virtual-table/cells/checkbox"}},g=[{value:"Basic",id:"basic",children:[]},{value:"Disabled",id:"disabled",children:[]},{value:"Async",id:"async",children:[]},{value:"Hidden",id:"hidden",children:[]}],N={toc:g};function v(e){var t=e.components,n=(0,l.Z)(e,k);return(0,i.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"basic"},"Basic"),(0,i.kt)(b,{columnProps:{handleClick:function(){return alert("Hello")}},mdxType:"CellButton"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n  typeCell: 'button',\n  label: 'Click me',\n  handleClick: () => alert('Hello')\n}\n")),(0,i.kt)("h2",{id:"disabled"},"Disabled"),(0,i.kt)(b,{columnProps:{isDisabled:!0,label:"Cannot be clicked"},mdxType:"CellButton"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n  typeCell: 'button',\n  label: 'Cannot be clicked',\n  isDisabled: true\n}\n")),(0,i.kt)("h2",{id:"async"},"Async"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"handleClick")," props can be an async function. If it's the case, the component will display the loading state until the promise is completed."),(0,i.kt)(b,{isAsync:!0,columnProps:{label:"Click to wait 1 sec"},mdxType:"CellButton"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n  typeCell: 'button',\n  label: 'Click to wait 1 sec',\n  handleClick: myAsyncFunction\n}\n")),(0,i.kt)("h2",{id:"hidden"},"Hidden"),(0,i.kt)(b,{columnProps:{showCellButton:!1,label:"Do you see me ?"},mdxType:"CellButton"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n  typeCell: 'button',\n  label: 'Do you see me ?',\n  showCellButton: false\n}\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"isDisabled")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the button will be disabled.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"handleClick")),(0,i.kt)("td",{parentName:"tr",align:null},"func"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"() => {}")),(0,i.kt)("td",{parentName:"tr",align:null},"Callback fired when the button is clicked. It receives the row and the dataKey as arguments.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"label")),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"''")),(0,i.kt)("td",{parentName:"tr",align:null},"Element passed as a children to ",(0,i.kt)("inlineCode",{parentName:"td"},"Button"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"showCellButton")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),", the button is not rendered")))))}v.isMDXComponent=!0}}]);