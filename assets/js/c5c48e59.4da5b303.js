(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6306],{86877:function(e,t,n){"use strict";var r=n(83721),a=n(29603),i=n(27378),o=(n(23615),n(38944)),l=n(89e3),c=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=i.forwardRef((function(e,t){var n=e.alignContent,l=void 0===n?"stretch":n,c=e.alignItems,s=void 0===c?"stretch":c,u=e.classes,d=e.className,m=e.component,p=void 0===m?"div":m,f=e.container,g=void 0!==f&&f,v=e.direction,x=void 0===v?"row":v,y=e.item,b=void 0!==y&&y,h=e.justify,k=e.justifyContent,w=void 0===k?"flex-start":k,N=e.lg,E=void 0!==N&&N,C=e.md,j=void 0!==C&&C,O=e.sm,Z=void 0!==O&&O,D=e.spacing,P=void 0===D?0:D,S=e.wrap,T=void 0===S?"wrap":S,M=e.xl,A=void 0!==M&&M,W=e.xs,I=void 0!==W&&W,B=e.zeroMinWidth,R=void 0!==B&&B,z=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=(0,o.Z)(u.root,d,g&&[u.container,0!==P&&u["spacing-xs-".concat(String(P))]],b&&u.item,R&&u.zeroMinWidth,"row"!==x&&u["direction-xs-".concat(String(x))],"wrap"!==T&&u["wrap-xs-".concat(String(T))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==l&&u["align-content-xs-".concat(String(l))],"flex-start"!==(h||w)&&u["justify-content-xs-".concat(String(h||w))],!1!==I&&u["grid-xs-".concat(String(I))],!1!==Z&&u["grid-sm-".concat(String(Z))],!1!==j&&u["grid-md-".concat(String(j))],!1!==E&&u["grid-lg-".concat(String(E))],!1!==A&&u["grid-xl-".concat(String(A))]);return i.createElement(p,(0,a.Z)({className:F,ref:t},z))})),m=(0,l.Z)((function(e){return(0,a.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(r){var a=e.spacing(r);0!==a&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(u(a,2)),width:"calc(100% + ".concat(u(a),")"),"& > $item":{padding:u(a,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,a.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.Z=m},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85372:function(e,t,n){"use strict";var r=n(27378);t.Z=function(e){var t=e.children;return r.createElement("div",{style:{background:"#FFF",minWidth:200,height:32}},t)}},38637:function(e,t,n){"use strict";var r=n(27378);t.Z=function(e){var t=e.children;return r.createElement("div",{style:{background:"#DDD",padding:20,display:"flex",justifyContent:"center",marginBottom:"1rem"}},t)}},32765:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return x},default:function(){return k},frontMatter:function(){return v},metadata:function(){return y},toc:function(){return b}});var r=n(22122),a=n(19756),i=n(27378),o=n(3905),l=n(86877),c=n(54344),s=n(48931),u=n(74949),d=n(85372),m=n(38637);var p=function(){var e=(0,i.useState)(2e4),t=e[0],n=e[1];return i.createElement(m.Z,null,i.createElement(l.Z,{container:!0,justifyContent:"center",spacing:2},i.createElement(l.Z,{item:!0},i.createElement(c.Z,{color:"textPrimary"},"Editable"),i.createElement(d.Z,null,i.createElement(s.Z,{type:u.v.AMOUNT,isFocused:!0,onChange:n,vtContext:{state:"PERMANENT_EDIT"},column:{},data:{amount:t},dataKey:"amount"}))),i.createElement(l.Z,{item:!0},i.createElement(c.Z,{color:"textPrimary"},"Disabled"),i.createElement(d.Z,null,i.createElement(s.Z,{typeCell:u.v.AMOUNT,onChange:n,vtContext:{state:"PERMANENT_EDIT"},column:{isDisabled:function(){return!0}},data:{amount:t},dataKey:"amount"})))))};var f=function(){return i.createElement(m.Z,null,i.createElement("div",{style:{display:"inline-block",width:200,margin:10,textAlign:"right"}},i.createElement(d.Z,null,i.createElement(s.Z,{column:{},type:u.v.AMOUNT,data:{amount:123456789},dataKey:"amount"}))))},g=["components"],v={title:"Amount"},x=void 0,y={unversionedId:"virtual-table/cells/amount",id:"virtual-table/cells/amount",isDocsHomePage:!1,title:"Amount",description:"Basic",source:"@site/docs/virtual-table/cells/amount.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/amount",permalink:"/design-system/docs/virtual-table/cells/amount",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/amount.mdx",version:"current",frontMatter:{title:"Amount"},sidebar:"tutorialSidebar",previous:{title:"Config",permalink:"/design-system/docs/virtual-table/config"},next:{title:"Attachment (beta)",permalink:"/design-system/docs/virtual-table/cells/attachment"}},b=[{value:"Basic",id:"basic",children:[]},{value:"Read only",id:"read-only",children:[]},{value:"Props",id:"props",children:[]}],h={toc:b};function k(e){var t=e.components,n=(0,a.Z)(e,g);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"basic"},"Basic"),(0,o.kt)(p,{mdxType:"CellAmountEdit"}),(0,o.kt)("h2",{id:"read-only"},"Read only"),(0,o.kt)("p",null,"Display the value in numeral format."),(0,o.kt)(f,{mdxType:"CellAmountView"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"formatAmount")),(0,o.kt)("td",{parentName:"tr",align:null},"func"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"formatNumber Helper"),(0,o.kt)("td",{parentName:"tr",align:null},"Parses the value to return a formatted string.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"isDisabled")),(0,o.kt)("td",{parentName:"tr",align:null},"func"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"() => false")),(0,o.kt)("td",{parentName:"tr",align:null},"If the function returns ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the input is disabled. The function receives the row data as uniq argument")))))}k.isMDXComponent=!0}}]);