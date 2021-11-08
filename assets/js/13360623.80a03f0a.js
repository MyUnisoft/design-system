(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9255],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return s}});var a=n(27378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=d(n),s=r,N=k["".concat(o,".").concat(s)]||k[s]||m[s]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},99658:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return k}});var a=n(22122),r=n(19756),l=(n(27378),n(3905)),i=["components"],p={title:"Export",sidebar_position:8},o=void 0,d={unversionedId:"virtual-table/export",id:"virtual-table/export",isDocsHomePage:!1,title:"Export",description:"Supported type",source:"@site/docs/virtual-table/export.mdx",sourceDirName:"virtual-table",slug:"/virtual-table/export",permalink:"/design-system/docs/virtual-table/export",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/export.mdx",version:"current",sidebarPosition:8,frontMatter:{title:"Export",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Event",permalink:"/design-system/docs/virtual-table/event"},next:{title:"Roadmap",permalink:"/design-system/docs/virtual-table/roadmap"}},u=[{value:"Supported type",id:"supported-type",children:[]},{value:"Ignore columns",id:"ignore-columns",children:[]},{value:"Disable the feature",id:"disable-the-feature",children:[]}],m={toc:u};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"supported-type"},"Supported type"),(0,l.kt)("p",null,"Here is the list of the typeCell supported by the export feature. We try to render the value as close as possible from the view mode."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"typeCell"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Output"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Amount")),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The formatted value using the ",(0,l.kt)("inlineCode",{parentName:"td"},"formatAmount")," property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Attachment")),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The documents URI separated by commas.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Autocomplete")),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The selected value. If ",(0,l.kt)("inlineCode",{parentName:"td"},"multiple"),", the selected values separated by commas.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Badge")),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"One of the ",(0,l.kt)("inlineCode",{parentName:"td"},"BADGE_STATUS")," label (in french).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Button")),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Checkbox")),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"'X' if checked and empty string if not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Chip")),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Comment")),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Custom")),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The value returned by the ",(0,l.kt)("inlineCode",{parentName:"td"},"renderExport")," callback.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Date")),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The formatted value using the ",(0,l.kt)("inlineCode",{parentName:"td"},"outputFormat")," property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Multiple")),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Number")),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The cell value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Select")),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The selected value ",(0,l.kt)("inlineCode",{parentName:"td"},"label"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Status")),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The selected value ",(0,l.kt)("inlineCode",{parentName:"td"},"label"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The cell value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Thumbnail")),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The documents URI separated by commas.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Wallet")),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The list of ",(0,l.kt)("inlineCode",{parentName:"td"},"id")," from the ",(0,l.kt)("inlineCode",{parentName:"td"},"array")," object separated by commas.")))),(0,l.kt)("h2",{id:"ignore-columns"},"Ignore columns"),(0,l.kt)("p",null,"You can ignore some columns from the export by setting the property ",(0,l.kt)("inlineCode",{parentName:"p"},"ignoreExport: true"),"."),(0,l.kt)("h2",{id:"disable-the-feature"},"Disable the feature"),(0,l.kt)("p",null,"The export feature is activated by default. To disable it, the following config as to be used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<VirtualTable\n  config={\n    {\n      ...yourConfig,\n      exportFormat: []\n    }\n  }\n/> \n")))}k.isMDXComponent=!0}}]);