(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1048],{86877:function(e,t,n){"use strict";var r=n(83721),a=n(29603),i=n(27378),o=(n(23615),n(38944)),l=n(89e3),c=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=i.forwardRef((function(e,t){var n=e.alignContent,l=void 0===n?"stretch":n,c=e.alignItems,s=void 0===c?"stretch":c,u=e.classes,d=e.className,p=e.component,m=void 0===p?"div":p,f=e.container,g=void 0!==f&&f,v=e.direction,x=void 0===v?"row":v,y=e.item,b=void 0!==y&&y,h=e.justify,w=e.justifyContent,k=void 0===w?"flex-start":w,E=e.lg,j=void 0!==E&&E,C=e.md,N=void 0!==C&&C,O=e.sm,S=void 0!==O&&O,Z=e.spacing,D=void 0===Z?0:Z,P=e.wrap,T=void 0===P?"wrap":P,M=e.xl,W=void 0!==M&&M,I=e.xs,B=void 0!==I&&I,R=e.zeroMinWidth,z=void 0!==R&&R,F=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=(0,o.Z)(u.root,d,g&&[u.container,0!==D&&u["spacing-xs-".concat(String(D))]],b&&u.item,z&&u.zeroMinWidth,"row"!==x&&u["direction-xs-".concat(String(x))],"wrap"!==T&&u["wrap-xs-".concat(String(T))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==l&&u["align-content-xs-".concat(String(l))],"flex-start"!==(h||k)&&u["justify-content-xs-".concat(String(h||k))],!1!==B&&u["grid-xs-".concat(String(B))],!1!==S&&u["grid-sm-".concat(String(S))],!1!==N&&u["grid-md-".concat(String(N))],!1!==j&&u["grid-lg-".concat(String(j))],!1!==W&&u["grid-xl-".concat(String(W))]);return i.createElement(m,(0,a.Z)({className:G,ref:t},F))})),p=(0,l.Z)((function(e){return(0,a.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(r){var a=e.spacing(r);0!==a&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(u(a,2)),width:"calc(100% + ".concat(u(a),")"),"& > $item":{padding:u(a,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,a.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.Z=p},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85372:function(e,t,n){"use strict";var r=n(27378);t.Z=function(e){var t=e.children;return r.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},t)}},38637:function(e,t,n){"use strict";var r=n(27378);t.Z=function(e){var t=e.children;return r.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},t)}},54777:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return v},default:function(){return h},frontMatter:function(){return g},metadata:function(){return x},toc:function(){return y}});var r=n(22122),a=n(19756),i=n(27378),o=n(3905),l=n(86877),c=n(54344),s=n(97268),u=n(85372),d=n(38637);var p=function(){var e=(0,i.useState)("Back to the future"),t=e[0],n=e[1];return i.createElement(d.Z,null,i.createElement(l.Z,{container:!0,justifyContent:"center",spacing:2},i.createElement(l.Z,{item:!0},i.createElement(c.Z,{color:"textPrimary"},"Editable"),i.createElement(u.Z,null,i.createElement(s.Z,{onChange:n,vtContext:{state:"PERMANENT_EDIT"},column:{},data:{title:t},dataKey:"title"}))),i.createElement(l.Z,{item:!0},i.createElement(c.Z,{color:"textPrimary"},"Disabled"),i.createElement(u.Z,null,i.createElement(s.Z,{onChange:n,vtContext:{state:"PERMANENT_EDIT"},column:{isDisabled:function(){return!0}},data:{title:t},dataKey:"title"})))))};var m=function(){return i.createElement(d.Z,null,i.createElement(u.Z,null,i.createElement(s.Z,{column:{},data:{title:"Lord of the ring"},dataKey:"title"})))},f=["components"],g={title:"String"},v=void 0,x={unversionedId:"virtual-table/cells/string",id:"virtual-table/cells/string",isDocsHomePage:!1,title:"String",description:"Basic",source:"@site/docs/virtual-table/cells/string.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/string",permalink:"/design-system/docs/virtual-table/cells/string",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/string.mdx",version:"current",frontMatter:{title:"String"},sidebar:"tutorialSidebar",previous:{title:"Status",permalink:"/design-system/docs/virtual-table/cells/status"},next:{title:"Thumbnail (beta)",permalink:"/design-system/docs/virtual-table/cells/thumbnail"}},y=[{value:"Basic",id:"basic",children:[]},{value:"Read only",id:"read-only",children:[]},{value:"Props",id:"props",children:[]}],b={toc:y};function h(e){var t=e.components,n=(0,a.Z)(e,f);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"basic"},"Basic"),(0,o.kt)(p,{mdxType:"CellStringEdit"}),(0,o.kt)("h2",{id:"read-only"},"Read only"),(0,o.kt)("p",null,"Display the value in numeral format."),(0,o.kt)(m,{mdxType:"CellStringView"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"isDisabled")),(0,o.kt)("td",{parentName:"tr",align:null},"func"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"() => false")),(0,o.kt)("td",{parentName:"tr",align:null},"If the function returns ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the input is disabled. The function receives the row data as uniq argument")))))}h.isMDXComponent=!0}}]);