(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2692],{89829:function(e,t,r){"use strict";r.d(t,{Z:function(){return C}});var a=r(29603),o=r(83721),n=r(27378),l=(r(23615),r(38944)),c=r(63697),i=r(9655),d=r(30584),s=r(89e3),u=r(90547),m=n.forwardRef((function(e,t){var r=e.autoFocus,s=e.checked,m=e.checkedIcon,p=e.classes,f=e.className,b=e.defaultChecked,h=e.disabled,y=e.icon,v=e.id,k=e.inputProps,g=e.inputRef,x=e.name,E=e.onBlur,Z=e.onChange,C=e.onFocus,T=e.readOnly,D=e.required,O=e.tabIndex,B=e.type,A=e.value,H=(0,o.Z)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),M=(0,i.Z)({controlled:s,default:Boolean(b),name:"SwitchBase",state:"checked"}),w=(0,c.Z)(M,2),P=w[0],V=w[1],N=(0,d.Z)(),z=h;N&&void 0===z&&(z=N.disabled);var I="checkbox"===B||"radio"===B;return n.createElement(u.Z,(0,a.Z)({component:"span",className:(0,l.Z)(p.root,f,P&&p.checked,z&&p.disabled),disabled:z,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),N&&N.onFocus&&N.onFocus(e)},onBlur:function(e){E&&E(e),N&&N.onBlur&&N.onBlur(e)},ref:t},H),n.createElement("input",(0,a.Z)({autoFocus:r,checked:s,defaultChecked:b,className:p.input,disabled:z,id:I&&v,name:x,onChange:function(e){var t=e.target.checked;V(t),Z&&Z(e,t)},readOnly:T,ref:g,required:D,tabIndex:O,type:B,value:A},k)),P?m:y)})),p=(0,s.Z)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m),f=r(72546),b=(0,f.Z)(n.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,f.Z)(n.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),y=r(74662),v=(0,f.Z)(n.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),k=r(33056),g=n.createElement(h,null),x=n.createElement(b,null),E=n.createElement(v,null),Z=n.forwardRef((function(e,t){var r=e.checkedIcon,c=void 0===r?g:r,i=e.classes,d=e.color,s=void 0===d?"secondary":d,u=e.icon,m=void 0===u?x:u,f=e.indeterminate,b=void 0!==f&&f,h=e.indeterminateIcon,y=void 0===h?E:h,v=e.inputProps,Z=e.size,C=void 0===Z?"medium":Z,T=(0,o.Z)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),D=b?y:m,O=b?y:c;return n.createElement(p,(0,a.Z)({type:"checkbox",classes:{root:(0,l.Z)(i.root,i["color".concat((0,k.Z)(s))],b&&i.indeterminate),checked:i.checked,disabled:i.disabled},color:s,inputProps:(0,a.Z)({"data-indeterminate":b},v),icon:n.cloneElement(D,{fontSize:void 0===D.props.fontSize&&"small"===C?C:D.props.fontSize}),checkedIcon:n.cloneElement(O,{fontSize:void 0===O.props.fontSize&&"small"===C?C:O.props.fontSize}),ref:t},T))})),C=(0,s.Z)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,y.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,y.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(Z)},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return p}});var a=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(r),p=o,f=m["".concat(i,".").concat(p)]||m[p]||u[p]||n;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var d=2;d<n;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41360:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return x},default:function(){return T},frontMatter:function(){return g},metadata:function(){return E},toc:function(){return Z}});var a=r(22122),o=r(19756),n=r(27378),l=r(3905),c=r(89829),i=r(74604),d=r(12685),s=r(63474),u=r(89564),m=r(74949),p=[],f=(m.v.THUMBNAIL,u.Z.t("common.collab"),u.Z.t("common.total"),u.Z.t("common.month"),m.v.NUMBER,m.v.AUTOCOMPLETE,u.Z.t("common.amount"),m.p.AMOUNT,m.v.AMOUNT,u.Z.t("common.accept"),m.v.CHECKBOX,u.Z.t("common.refuse"),m.v.CHECKBOX,u.Z.t("common.status.text"),m.v.STATUS,u.Z.t("common.status.accepted"),u.Z.t("common.status.refused"),m.v.THUMBNAIL,m.v.THUMBNAIL,u.Z.t("common.comments"),m.v.COMMENT,function(){return{modeAdd:!0,alwaysInEdition:!0,modeDelete:!0,selectableBarInfo:!0,selectableRow:!0,insertPosition:"bottom",withBorders:!0,columns:[{header:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header1"),tooltipHeader:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header1"),key:"HA",size:2,sortable:!1,typeCell:m.v.STRING},{header:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header2"),key:"HB",size:2,sortable:!1,alignText:"center",typeCell:m.v.DATE,formatDate:"DD-MM-YYYY"},{header:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header3"),key:"HC",size:1,sortable:!1,typeCell:m.v.NUMBER},{header:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header4"),tooltipHeader:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header4"),key:"HD",size:1,sortable:!1,typeCell:m.v.NUMBER},{header:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header5"),tooltipHeader:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header5"),key:"HE",size:1,sortable:!1,typeCell:m.v.NUMBER},{header:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header6"),tooltipHeader:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header6"),key:"HF",size:1,sortable:!1,typeCell:m.v.NUMBER},{header:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header7"),tooltipHeader:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header7"),key:"HG",size:1,sortable:!1,typeCell:m.v.NUMBER},{header:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header8"),key:"HH",size:1,sortable:!1,typeCell:m.v.NUMBER},{header:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header9"),tooltipHeader:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header9"),key:"HJ",size:1,sortable:!1,typeCell:m.v.NUMBER},{header:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header10"),key:"HK",size:1,sortable:!1,typeCell:m.v.NUMBER},{header:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header11"),key:"HM",size:1,sortable:!1,typeCell:m.v.NUMBER},{header:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header12"),tooltipHeader:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header12"),key:"GN",size:1,sortable:!1,typeCell:m.v.NUMBER},{header:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header13"),key:"GP",size:1,sortable:!1,typeCell:m.v.NUMBER},{header:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header14"),tooltipHeader:u.Z.t("taxDeclaration.formVT.form2059A.tab1.header14"),key:"HT",size:1,sortable:!1,typeCell:m.v.NUMBER}]}}),b=function(e){var t=e.config,r=e.settings,a=void 0===r?[]:r;return n.createElement("pre",null,n.createElement("code",null,"{\n",a.map((function(e){return"  "+e.key+": "+(t[e.key]?"true":"false")+",\n"})),"}"))},h=Array(5).fill().map((function(e,t){return{id:t,username:"User Lastname #"+(t+1),language:"fr",month:t%12+1,amount:Math.round(t%5*(t%7)/(t%6+1)),status:t%7&&t%3?t%4?null:"refused":"accepted",rowType:s.Os.VIEW}}));h[0].comment=[{avatarImgSrc:"https://cloud.myunisoft.fr/index.php/apps/files_sharing/ajax/publicpreview.php?x=90&y=120&a=true&t=25LPr5nCuEtE59f&scalingup=0",body:"<p>Un commentaire du superviseur</p>",date:"2021-06-30T14:52:30",history:[],id:73434,initials:"LB",name:"Ludovic Bekaert"},{avatarImgSrc:"https://cloud.myunisoft.fr/index.php/apps/files_sharing/ajax/publicpreview.php?x=90&y=120&a=true&t=25LPr5nCuEtE59f&scalingup=0",body:"<img src=x onerror=alert(1)//>",date:"2021-06-30T14:52:30",history:[],id:73435,initials:"LB",name:"Ludovic Bekaert"}];var y=[{key:"hasSearchbar",label:"SearchBar",type:"checkbox"},{key:"modeEdit",label:"Edit mode",type:"checkbox"},{key:"modeAdd",label:"Add mode",type:"checkbox"},{key:"modeDelete",label:"Delete mode",type:"checkbox"},{key:"hasFooter",label:"Footer",type:"checkbox"},{key:"hasHeader",label:"Header",type:"checkbox"},{key:"alwaysInEdition",label:"Edition en ligne",type:"checkbox"},{key:"hideToolbar",label:"Cacher toolbar",type:"checkbox"},{key:"hideCheckbox",label:"Cacher checkbox",type:"checkbox"},{key:"hideStateActions",label:"Cacher actions",type:"checkbox"},{key:"withBorders",label:"Bordure",type:"checkbox"}],v=function(){var e=(0,n.useState)(f),t=e[0],r=e[1],a=(0,n.useState)(""),o=a[0],l=a[1],s=(0,d.B4)(h),u=s.data,m=s.onAdd,p=s.onEdit,v=s.onDelete;return n.createElement(n.Fragment,null,n.createElement("div",null,y.map((function(e){return n.createElement("span",{key:e.key,style:{marginRight:20}},n.createElement("label",null,n.createElement(c.Z,{checked:t[e.key]||!1,onClick:function(){return r((function(t){var r;return Object.assign({},t,((r={})[e.key]=!t[e.key],r))}))}})," ",e.label," "))}))),n.createElement("div",{style:{margin:"2rem 0"}},n.createElement(i.Z,{data:u,maxHeight:"600px",config:t,handleRowsToDelete:function(e){v(e)},handleValidateAdd:function(e,t){m(e,t)},handleValidateEdit:function(e,t){console.log("edit",e),p(e,t)},onFocusChange:function(e){var t=e.to;l(t?t[0]+":"+t[1]:"--")}})),n.createElement("div",null,"Current Cell: ",o),n.createElement(b,{config:t,settings:y}))},k=["components"],g={sidebar_position:0,title:"Playground"},x=void 0,E={unversionedId:"virtual-table/playground",id:"virtual-table/playground",isDocsHomePage:!1,title:"Playground",description:"`mdx-code-block",source:"@site/docs/virtual-table/playground.mdx",sourceDirName:"virtual-table",slug:"/virtual-table/playground",permalink:"/design-system/docs/virtual-table/playground",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/playground.mdx",version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Playground"},sidebar:"tutorialSidebar",previous:{title:"Design System of MyUnisoft",permalink:"/design-system/docs/intro"},next:{title:"Config",permalink:"/design-system/docs/virtual-table/config"}},Z=[],C={toc:Z};function T(e){var t=e.components,r=(0,o.Z)(e,k);return(0,l.kt)("wrapper",(0,a.Z)({},C,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(v,{mdxType:"VirtualTablePlayground"}))}T.isMDXComponent=!0}}]);