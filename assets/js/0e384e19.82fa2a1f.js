"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9671],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u}});var r=n(83117),o=(n(27378),n(3905));const i={sidebar_position:0},l="Introduction",a={unversionedId:"intro",id:"intro",title:"Introduction",description:"Installation",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/design-system/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"AutocompleteMultiple",permalink:"/design-system/docs/Autocomplete/AutocompleteMultiple"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Start",id:"start",level:2},{value:"Folder structure",id:"folder-structure",level:2},{value:"src",id:"src",level:3},{value:"website",id:"website",level:3}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Clone the repository then run the following commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install\ncd website && npm install\n")),(0,o.kt)("h2",{id:"start"},"Start"),(0,o.kt)("p",null,"Go back to the root folder and run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run start\n")),(0,o.kt)("h2",{id:"folder-structure"},"Folder structure"),(0,o.kt)("h3",{id:"src"},"src"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder contains the files related to the package. Only those files will be part of the npm package."),(0,o.kt)("h3",{id:"website"},"website"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"website")," folder contains all the documentation and components used as examples."),(0,o.kt)("p",null,"Most of the time, you'll only need to work inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"website/docs/")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"website/src/components/")," folder."))}p.isMDXComponent=!0}}]);