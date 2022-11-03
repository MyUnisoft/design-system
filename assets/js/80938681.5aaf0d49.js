"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1038],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(n),k=a,m=u["".concat(o,".").concat(k)]||u[k]||s[k]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89724:function(e,t,n){var r=n(27378),a=n(2638);t.Z=function(){const[e,t]=(0,r.useState)(!1);return r.createElement("div",{onClick:()=>t((e=>!e)),style:{height:"20px",border:"2px solid orange",display:"flex",alignItems:"center",cursor:"pointer"}},r.createElement(a.Z,{size:15,checked:e}),r.createElement("div",null," check me"))}},83197:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var r=n(83117),a=(n(27378),n(3905)),i=n(2638),l=n(89724);const p={title:"Checkbox"},o=void 0,d={unversionedId:"basics/Checkbox",id:"basics/Checkbox",title:"Checkbox",description:"",source:"@site/docs/basics/Checkbox.mdx",sourceDirName:"basics",slug:"/basics/Checkbox",permalink:"/design-system/docs/basics/Checkbox",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/basics/Checkbox.mdx",tags:[],version:"current",frontMatter:{title:"Checkbox"},sidebar:"tutorialSidebar",previous:{title:"AutocompleteMultiple",permalink:"/design-system/docs/Autocomplete/AutocompleteMultiple"},next:{title:"Chips",permalink:"/design-system/docs/basics/Chips"}},c={},s=[{value:"Default",id:"default",level:3},{value:"Exemples",id:"exemples",level:3},{value:"Props",id:"props",level:2}],u={toc:s};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Checkbox component."),(0,a.kt)("h3",{id:"default"},"Default"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Checkbox />\n")),(0,a.kt)("p",null,"Checkbox is defined by UI/UX in styleguide : ",(0,a.kt)("a",{parentName:"p",href:"https://app.zeplin.io/styleguide/"},"https://app.zeplin.io/styleguide/")),(0,a.kt)("h3",{id:"exemples"},"Exemples"),(0,a.kt)("p",null,"Checked "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{ height:'30px', border : '2px solid', margin : '5px', padding : '2px' }}>\n  <Checkbox checked size={15} />\n</div>\n<div style={{ height:'30px', border : '2px solid', margin : '5px', padding : '2px' }}>\n  <Checkbox checked size={15} disabled/>\n</div>\n")),(0,a.kt)("div",{style:{height:"30px",border:"2px solid",margin:"5px",padding:"2px"}},(0,a.kt)(i.Z,{checked:!0,size:15,mdxType:"Checkbox"})),(0,a.kt)("div",{style:{height:"30px",border:"2px solid",margin:"5px",padding:"2px"}},(0,a.kt)(i.Z,{checked:!0,size:15,disabled:!0,mdxType:"Checkbox"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Not checked "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{ height:'60px', border : '2px solid', margin : '5px', padding : '5px' }}>\n  <div style={{margin : '5px'}}> \n    <Checkbox size={15} /> \n  </div>\n  <div style={{margin : '5px'}}> \n    <Checkbox size={15} checked={false} disabled/>\n  </div>\n</div>\n")),(0,a.kt)("div",{style:{height:"60px",border:"2px solid",margin:"5px",padding:"5px"}},(0,a.kt)("div",{style:{margin:"5px"}},(0,a.kt)(i.Z,{size:15,mdxType:"Checkbox"})),(0,a.kt)("div",{style:{margin:"5px"}},(0,a.kt)(i.Z,{size:15,checked:!1,disabled:!0,mdxType:"Checkbox"}))),(0,a.kt)("br",null),(0,a.kt)("p",null,"No specific size"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{ height:'30px', width:'30px', border : '2px solid', padding : '2px' }}>\n  <Checkbox checked />\n</div>\n<div style={{ height:'30px', width:'60px', border : '2px solid' }}>\n  <Checkbox checked />\n</div>\n")),(0,a.kt)("div",{style:{height:"30px",width:"30px",border:"2px solid",padding:"2px"}},(0,a.kt)(i.Z,{checked:!0,mdxType:"Checkbox"})),(0,a.kt)("div",{style:{height:"30px",width:"60px",border:"2px solid"}},(0,a.kt)(i.Z,{checked:!0,mdxType:"Checkbox"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Code example : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"  const [ischecked, setIschecked] = useState(false);\n\n  return (\n    <div\n      onClick={() => setIschecked((prevCheck) => !prevCheck)}\n      style={{\n        height: '20px',\n        border: '2px solid orange',\n        display: 'flex',\n        alignItems: 'center',\n        cursor: 'pointer'\n      }}\n    >\n      <Chekbox size={15} checked={ischecked} />\n      <div> check me</div>\n    </div>\n  );\n")),(0,a.kt)("div",{style:{height:"100px",width:"200px",border:"2px solid red",margin:"2px",padding:"5px"}},(0,a.kt)(l.Z,{mdxType:"CheckboxExample"})),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"size"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"100% container"),(0,a.kt)("td",{parentName:"tr",align:null},"Size of checkbox")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"checked"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"checked or not")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"disabled"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"disabled design")))))}k.isMDXComponent=!0}}]);