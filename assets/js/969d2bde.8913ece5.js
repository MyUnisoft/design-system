(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5575],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),v=u(a),m=r,p=v["".concat(s,".").concat(m)]||v[m]||c[m]||i;return a?n.createElement(p,l(l({ref:t},d),{},{components:a})):n.createElement(p,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=v;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},79443:function(e,t,a){"use strict";var n=(0,a(27378).createContext)(void 0);t.Z=n},93709:function(e,t,a){"use strict";a.d(t,{Z:function(){return N}});var n=a(22122),r=a(27378),i=a(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(86010),s="tabItem_1uMI",u="tabItemActive_2DSg";var d=37,c=39;var v=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,i=e.values,v=e.groupId,m=e.className,p=l(),f=p.tabGroupChoices,b=p.setTabGroupChoices,g=(0,r.useState)(n),y=g[0],h=g[1],w=r.Children.toArray(e.children),k=[];if(null!=v){var E=f[v];null!=E&&E!==y&&i.some((function(e){return e.value===E}))&&h(E)}var O=function(e){var t=e.currentTarget,a=k.indexOf(t),n=i[a].value;h(n),null!=v&&(b(v,n),setTimeout((function(){var e,a,n,r,i,l,o,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,a>=0&&i<=s&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},T=function(e){var t,a;switch(e.keyCode){case c:var n=k.indexOf(e.target)+1;a=k[n]||k[0];break;case d:var r=k.indexOf(e.target)-1;a=k[r]||k[k.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},i.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:T,onFocus:O,onClick:O},a)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))};var m,p=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},f=a(40391),b=a(9429),g=a(63474),y=a(74949),h=((m={})[y.v.AMOUNT]={add:!0,edit:!0,view:!0},m[y.v.ATTACHMENT]={add:!1,edit:!1,view:!0},m[y.v.AUTOCOMPLETE]={add:!0,edit:!0,view:!0},m[y.v.BADGE_STATUS]={add:!1,edit:!1,view:!0},m[y.v.BUTTON]={add:!1,edit:!1,view:!0},m[y.v.CHECKBOX]={add:!1,edit:!0,view:!0},m[y.v.CHIP]={add:!0,edit:!0,view:!0},m[y.v.COMMENT]={add:!1,edit:!1,view:!0},m[y.v.DATE]={add:!0,edit:!0,view:!0},m[y.v.MULTIPLE_INPUTS]={add:!0,edit:!1,view:!0},m[y.v.NUMBER]={add:!0,edit:!0,view:!0},m[y.v.SELECT]={add:!0,edit:!0,view:!0},m[y.v.STATUS]={add:!1,edit:!1,view:!0},m[y.v.STRING]={add:!0,edit:!0,view:!0},m[y.v.SWITCH_BADGE_STATUS]={add:!1,edit:!1,view:!0},m[y.v.THUMBNAIL]={add:!1,edit:!1,view:!0},m[y.v.WALLET]={add:!1,edit:!1,view:!0},m);function w(e,t){return h[e]&&h[e][t]}var k={},E={},O=!0,T=function(){},x={columns:[{editable:!0,key:"price"},{editable:!0,key:"language",optionList:[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"},{label:"Deutsche",value:"de"}],listData:[{name:"Fran\xe7ais",value:"fr"},{name:"English",value:"en"},{name:"Deutsche",value:"de"}],listStatus:[{value:"Fran\xe7ais",status:"fr",showMenu:["de","en"]},{value:"English",status:"en",showMenu:["de","fr"]},{value:"Deutsche",status:"de",showMenu:["en","fr"]}]},{editable:!0,key:"spokenLanguages",listOptions:[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"},{label:"Deutsche",value:"de"}]},{editable:!0,key:"badgeStatus",actionsByStatus:[{label:"Only ok",status:["ok"]},{label:"Ok or In Progress",status:["ok","in-progress"]},{label:"Only ko",status:["ko"]}]},{editable:!0,key:"switchBadgeStatus",switchKey:"ok",actionsByStatus:[{label:"Ok or In Progress",status:["ok","in-progress"]},{label:"In Progress or ko",status:["in-progress","ko"]},{label:"Only ko",status:["ko"]}]},{editable:!0,key:"status",listStatus:[],valueData:[]},{editable:!0,key:"files"},{editable:!0,key:"comments",showLastComment:!0,canEdit:!0},{editable:!0,key:"date"},{key:"button",label:"Click me",handleClick:function(){return alert("Clicked !")}},{editable:!0,key:"multiple"}]},C={id:1,price:50,language:"fr",spokenLanguages:[{label:"Fran\xe7ais",value:"fr"},{label:"English",value:"en"}],comments:[{avatarImgSrc:"",body:"<p>Un commentaire du superviseur</p>",date:"2021-06-30T14:52:30",history:[],id:73434,initials:"JD",name:"John Doe"}],badgeStatus:{status:"ok"},switchBadgeStatus:[{key:"ok",status:"ok"}],date:"31/10/2000",multiple:[{first:{label:"Hello"},second:{label:"Everybody"}}],files:[{thumbnail:"https://via.placeholder.com/150x75"}],wallets:{count:5,array:[{id:"AAA"},{id:"BBB"},{id:"CCC"},{id:"DDD"}]}},N=function(e){var t=x.columns.findIndex((function(t){return t.key===e.dataKey})),a=[{label:"View mode",value:"view"}];return w(e.type,"add")&&a.push({label:"Add mode",value:"add"}),w(e.type,"edit")&&a.push({label:"Edit mode",value:"edit"}),r.createElement(v,{defaultValue:"view",values:a,style:{marginBottom:20}},r.createElement(p,{value:"view"},r.createElement("div",{style:{background:"#ddd",padding:"20px 10px"}},r.createElement("div",{style:{background:"#fff",margin:"auto",width:"120px",position:"relative",height:32}},r.createElement(b.Z.Provider,{value:{state:k,context:E,send:T,can:O,config:x}},r.createElement(f.Z,(0,n.Z)({data:C},e,{columnIndex:t})))))),w(e.type,"add")&&r.createElement(p,{value:"add"},r.createElement("div",{style:{background:"#ddd",padding:"20px 10px"}},r.createElement("div",{style:{background:"#fff",margin:"auto",width:"120px",position:"relative",height:32}},r.createElement(b.Z.Provider,{value:{state:k,context:E,send:T,can:O,config:Object.assign({},x,{modeAdd:!0})}},r.createElement(f.Z,(0,n.Z)({data:Object.assign({},C,{rowType:g.Os.NEW})},e,{columnIndex:t})))))),w(e.type,"edit")&&r.createElement(p,{value:"edit"},r.createElement("div",{style:{background:"#ddd",padding:"20px 10px"}},r.createElement("div",{style:{background:"#fff",margin:"auto",width:"120px",position:"relative",height:32}},r.createElement(b.Z.Provider,{value:{state:"EDIT",context:{selectedRows:new Set([1])},send:T,can:O,config:Object.assign({},x,{modeEdit:!0,alwaysInEdition:!0})}},r.createElement(f.Z,(0,n.Z)({data:Object.assign({},C,{rowType:g.Os.EDIT})},e,{columnIndex:t})))))))}},56417:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var n=a(22122),r=a(19756),i=(a(27378),a(3905)),l=a(93709),o=["components"],s={title:"Thumbnail (beta)"},u=void 0,d={unversionedId:"virtual-table/cells/thumbnail",id:"virtual-table/cells/thumbnail",isDocsHomePage:!1,title:"Thumbnail (beta)",description:"This type must be redefined",source:"@site/docs/virtual-table/cells/thumbnail.mdx",sourceDirName:"virtual-table/cells",slug:"/virtual-table/cells/thumbnail",permalink:"/design-system/docs/virtual-table/cells/thumbnail",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/virtual-table/cells/thumbnail.mdx",version:"current",frontMatter:{title:"Thumbnail (beta)"},sidebar:"tutorialSidebar",previous:{title:"String",permalink:"/design-system/docs/virtual-table/cells/string"},next:{title:"Wallet",permalink:"/design-system/docs/virtual-table/cells/wallet"}},c=[],v={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This type must be redefined "))),(0,i.kt)(l.Z,{type:"thumbnail",dataKey:"files",mdxType:"CellTypePreviewer"}))}m.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);