(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3806],{3806:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ve}});var o=n(92137),a=n(87757),i=n.n(a),r=n(56998),c=n(40323),s=n(47424),l=n(87382),d=n(27378),m=n(83216),u=n(89564),f=n(19756),g=n(23615),p=n.n(g),y=n(22122),b=n(75929),C=n(54344),h=n(89e3),v=["#ffd204","#a177ff","#fe3a5e","#ad69c5","#50e3c2"],x=function(e){var t=function(e){void 0===e&&(e="");for(var t=0,n=0;n<e.length;n++)t+=e.charCodeAt(n);return t}(e)%(null==v?void 0:v.length);return v[t]},E=n(61320),N=n.n(E),I=n(20373),j=(0,I.Z)((function(){return{avatarImage:{display:"inline-flex",marginRight:12},avatarInfo:{width:"100%"}}})),T=(0,d.memo)((function(e){var t,n=e.initials,o=e.name,a=e.isEdited,i=e.date,r=e.avatarImgSrc,c=e.classes,s=j();return d.createElement(d.Fragment,null,d.createElement("div",{className:s.avatarImage},d.createElement(b.Z,{src:r,alt:n,style:r?null:{backgroundColor:x(o)}},n)),d.createElement("div",{className:s.avatarInfo},d.createElement(C.Z,{classes:{root:c.name},variant:"body1",display:"inline"},o),a&&d.createElement(C.Z,{classes:{root:c.test},display:"inline"}," "+u.Z.t("commentBox.historyCommentSuffix")),d.createElement(C.Z,{classes:{root:c.date},variant:"subtitle2"},(t=i,N()(t,"YYYY-MM-DD HH:mm").calendar(null,{sameDay:"["+u.Z.t("date.sameDay")+"] HH:mm",nextDay:"["+u.Z.t("date.nextDay")+"] HH:mm",nextWeek:"["+u.Z.t("date.nextWeek")+"] HH:mm",lastDay:"["+u.Z.t("date.lastDay")+"] HH:mm",lastWeek:"DD/MM/YYYY HH:mm",sameElse:"DD/MM/YYYY HH:mm"})))))}));T.defaultProps={avatarImgSrc:"",isEdited:!1},T.propTypes={name:p().string.isRequired,avatarImgSrc:p().string,initials:p().string.isRequired,date:p().string.isRequired,isEdited:p().bool};var M=(0,h.Z)((function(){return{name:{fontWeight:"bold",lineHeight:1,marginBottom:5},date:{color:"#9b9b9b"}}}))(T),Z=n(31699),k=n.n(Z),D=n(89584),S=n(9334),w=(0,I.Z)((function(e){return{container:{border:"1px solid",borderColor:e.palette.common.grey,padding:10,display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}})),L=function(e){var t=e.message,n=w(),o=t.body,a=t.name,i=k().sanitize(o,{KEEP_CONTENT:!1,ADD_ATTR:["target"],RETURN_DOM:!0}).getElementsByTagName("a")[0].href;if(void 0===r)var r={screenX:0,innerWidth:1280,open:function(){}};return d.createElement(D.Z,{className:n.container},d.createElement(C.Z,{variant:"h4"},u.Z.t("discussions.jistyMessage.name",{who:a})),d.createElement(S.Z,{color:"primary",variant:"contained",onClick:function(){r.open(i,"_blank")}},"Join"))};L.propTypes={message:p().shape({name:p().string.isRequired,body:p().string.isRequired}).isRequired};var R=(0,d.memo)(L),z=n(90547),O=n(60042),P=n.n(O),_=n(57704),G=n(54139),H=n(83306),Y=n(82920),B=n(13456),A=n(38428),U=(0,I.Z)((function(e){return{divAttachToNotes:{marginTop:10},formControl:{margin:e.spacing(1),minWidth:120}}})),W=function(e){var t=e.notesInfo,n=e.setNotesInfo,a=useGlobalConfig(),r=a.service.comment,c=r.getCyclesForZone,s=r.getReviewsForZone,l=a.defaultData.comment,m=l.defaultDossierId,f=l.defaultCycleId,g=U(),p=(0,d.useState)([]),y=p[0],b=p[1],C=(0,d.useState)([]),h=C[0],v=C[1],x=(0,d.useState)(!1),E=x[0],I=x[1],j=function(e){var o=Object.assign({},t,e);n(o)},T=function(){var e=(0,o.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),j({dossier_revision_id:t,cycle_da_dp_id:""}),e.next=4,c(dossierSelected.id,dossierSelected.start_date,dossierSelected.end_date);case 4:n=e.sent,b(n),I(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){(0,o.Z)(i().mark((function e(){var t,n,o,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,s();case 3:t=e.sent,n=function(e,t){return e[t]},o=function(e){var t=n(e,"type"),o=n(e,"start_date"),a=n(e,"end_date"),i=u.Z.t("common.fromLowerCase")+" "+N()(o).format("DD/MM/YYYY")+" "+u.Z.t("common.to")+"  "+N()(a).format("DD/MM/YYYY");return u.Z.t("dadp.review.types."+t)+" "+i},a=t.map((function(e){return{id:e.id_dossier_revision,label:o(e),start_date:e.start_date,end_date:e.end_date}})),v(a),I(!1);case 9:case"end":return e.stop()}}),e)})))()}),[]),(0,d.useEffect)((function(){h.length&&m&&T(m)}),[h]),(0,d.useEffect)((function(){y.length&&(f&&y.find((function(e){return e.cycle_da_dp_id===f}))?j({cycle_da_dp_id:f}):j({cycle_da_dp_id:y[0].cycle_da_dp_id}))}),[y]),d.createElement("div",{className:g.divAttachToNotes},d.createElement(G.Z,{className:g.formControl},d.createElement(H.Z,{shrink:!0,id:"dossier-revision"},u.Z.t("commentBox.dossierRevision"),E&&d.createElement(A.Z,{size:15,inline:!0})),d.createElement(Y.Z,{autoWidth:!0,labelId:"dossier-revision",value:t.dossier_revision_id||"",onChange:function(e){return T(e.target.value)}},h.map((function(e){return d.createElement(B.Z,{key:e.id,value:e.id},e.label)})))),d.createElement(G.Z,{className:g.formControl},d.createElement(H.Z,{shrink:!0,id:"cycles"},u.Z.t("commentBox.cycle"),E&&d.createElement(A.Z,{size:15,inline:!0})),d.createElement(Y.Z,{autoWidth:!0,labelId:"cycles",value:t.cycle_da_dp_id||"",onChange:function(e){return j({cycle_da_dp_id:e.target.value})}},y.map((function(e){return d.createElement(B.Z,{key:e.cycle_da_dp_id,value:e.cycle_da_dp_id},e.label)})))))};W.defaultProps={defaultDossierId:0,defaultCycleId:0},W.propTypes={defaultDossierId:p().number,notesInfo:p().object.isRequired,setNotesInfo:p().func.isRequired,defaultCycleId:p().number,getReviewsForZoneComments:p().func.isRequired,getCyclesForZoneComments:p().func.isRequired};var J=W,q=n(3272),Q=(0,I.Z)((function(){return{container:{position:"relative",zIndex:5},colorPickerContainer:{position:"absolute",left:"50%",top:"100%",transform:"translateX(-50%)"},iconContainer:{border:"1px solid #F1F1F1",cursor:"pointer",padding:5,minWidth:25,height:20,borderRadius:2,margin:"0px 4px",display:"flex",justifyContent:"center",alignItems:"center",background:"white",textTransform:"capitalize","&:hover":{boxShadow:"1px 1px 0px #BFBDBD"}},iconImg:{maxWidth:"100%",maxHeight:"100%"}}})),K=function(e){var t,n=e.expanded,o=e.onExpandEvent,a=Q(),i=function(e){e.stopPropagation()},r=function(t){var n=e.onChange;n("color",t.hex)};return d.createElement("div",{"aria-haspopup":"true","aria-expanded":n,"aria-label":"rdw-color-picker",className:a.container},d.createElement("div",{onClick:o,role:"button",tabIndex:"0",className:a.iconContainer},d.createElement("img",{className:a.iconImg,src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ5NS41NzggNDk1LjU3OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk1LjU3OCA0OTUuNTc4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0U2QkU5NDsiIGQ9Ik00MzkuMjA4LDIxNS41NzhjLTQ2Ljk3NS01My41MjktOTYtNjUuOTczLTk2LTEyNWMwLTY0LjMzMy01NC4zMzMtMTEzLjY2Ny0xNDkuNDI5LTc5LjMyMQoJCQlDOTEuODE2LDQ4LjA4MywyMS4yMDgsMTM2LjkxMSwyMS4yMDgsMjQ3LjU3OGMwLDEzNi45NjYsMTExLjAzMywyNDgsMjQ4LDI0OGMyMi41MjcsMCw0NC4zNTQtMy4wMDQsNjUuMDk5LTguNjMybC0wLjAwNi0wLjAyNgoJCQlDNDM5LjIwOCw0NTYuNTc4LDUyNS4yMDgsMzEzLjU3OCw0MzkuMjA4LDIxNS41Nzh6IE0zMzMuNzA5LDE4OS42OWMtMTQuNTAxLDE4LjU1NS01NC42NjgsNy43MDctNzAuMTctMTguNTQ3CgkJCWMtMTMuNjY0LTIzLjE0LTguNjY0LTU2LjIzMiwxNC45ODgtNzAuODIyYzEzLjcxLTguNDU3LDMxLjc5MS0wLjEzNSwzNS4yMzEsMTUuNjAyYzIuOCwxMi44MDYsOC41NDMsMjguNjcxLDIwLjIzOSw0My4xODcKCQkJQzM0MS4xMjUsMTY3Ljk2LDM0MC43MDcsMTgwLjczNiwzMzMuNzA5LDE4OS42OXoiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGNEYxOTsiIGN4PSIxNjUuMDk4IiBjeT0iMTM1LjY4OCIgcj0iNDcuODkiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGOEM2MjsiIGN4PSIxNzYuOTQiIGN5PSIxMjMuNzE1IiByPSIxNi43NjIiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGQ0QwMDsiIGN4PSIxMTcuMDk4IiBjeT0iMjU1LjY4OCIgcj0iNDcuODkiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRTY3MTsiIGN4PSIxMjguOTQiIGN5PSIyNDMuNzE1IiByPSIxNi43NjIiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzAwQzM3QTsiIGN4PSIxNzIuODc5IiBjeT0iMzY3LjQ2OSIgcj0iNDcuODkiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzYwREM0RDsiIGN4PSIxODQuNzIiIGN5PSIzNTUuNDk2IiByPSIxNi43NjIiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzRDRDdGRjsiIGN4PSIyOTMuMDk4IiBjeT0iNDA3LjY4OCIgcj0iNDcuODkiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0FFRUZGRjsiIGN4PSIzMDQuOTM5IiBjeT0iMzk1LjcxNSIgcj0iMTYuNzYyIi8+Cgk8L2c+Cgk8Zz4KCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiMwMDlCQ0E7IiBjeD0iMzgxLjA5OCIgY3k9IjMxOS40NjkiIHI9IjQ3Ljg5Ii8+Cgk8L2c+Cgk8Zz4KCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM0Q0Q3RkY7IiBjeD0iMzkyLjkzOSIgY3k9IjMwNy40OTYiIHI9IjE2Ljc2MiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=",alt:"Color picker icon"})),n&&(t=e.currentState.color,d.createElement("div",{onClick:i,className:a.colorPickerContainer},d.createElement(q.if,{color:t,onChangeComplete:r}))))};K.defaultProps={expanded:void 0},K.propTypes={expanded:p().bool,onExpandEvent:p().func.isRequired,onChange:p().func.isRequired,currentState:p().object.isRequired};var F=K,X=n(72072),V=n.n(X),$=n(67573),ee=n.n($),te=function(e){var t=ee()(e);if(!t)return"";var n=_.ContentState.createFromBlockArray(t.contentBlocks);return _.EditorState.createWithContent(n)},ne=function(e){return V()((0,_.convertToRaw)(e.getCurrentContent())).replace(/(\n)/g,"")},oe=n(62460),ae=n(89829),ie=n(35311),re=n(61247),ce=["attachToNotes","attachToInternalNotes","attachToAccount","attachToOther","attachToDiligence","attachToConfirmationLetter"],se=function(e){var t=e.name,n=e.checked,o=e.handleChange,a=e.className;return d.createElement(oe.Z,{control:d.createElement(ae.Z,{checked:!!n,onChange:o(t),value:t,disabled:"attachToNotes"!==t,color:"primary"}),label:u.Z.t("commentBox."+t),className:a})},le=function(e){var t=e.onChange,n=e.classes,o=e.state,a=function(e){return function(n){t(e,n.target.checked)}};return d.createElement(G.Z,{component:"fieldset"},d.createElement(ie.Z,{component:"legend",className:n.labelRoot,focused:!1},u.Z.t("commentBox.attachToTitle")),d.createElement(re.Z,{row:!0},ce.map((function(e){return d.createElement(se,{className:n.formControlLabel,checked:o[e],name:e,handleChange:a,key:e})}))))};le.propTypes={onChange:p().func.isRequired,classes:p().object.isRequired,state:p().object.isRequired};var de=(0,h.Z)((function(){return{labelRoot:{color:"#000",marginBottom:10},formControlLabel:{marginBottom:5}}}))(le),me=n(43751),ue=(0,I.Z)((function(){return{container:{display:"flex",justifyContent:"flex-end",alignItems:"center",margin:"10px 0 10px 0"}}})),fe=d.memo((function(e){var t=e.onCancel,n=e.onSubmit,o=e.disabled,a=ue(),i=[{_type:"string",color:"default",variant:"outlined",text:u.Z.t("commentBox.buttons.cancel"),onClick:t},{_type:"string",color:"primary",text:u.Z.t("commentBox.buttons.submit"),onClick:n,disabled:o}];return d.createElement("div",{className:a.container},d.createElement(me.CE,{buttons:i}))}));fe.defaultProps={disabled:!1},fe.propTypes={onCancel:p().func.isRequired,onSubmit:p().func.isRequired,disabled:p().bool};var ge=fe,pe=(0,I.Z)((function(){return{wrapperContainer:{border:"solid 1px #d0d0d0",display:"flex",flexDirection:"column",margin:"10px 0 0 0"},toolbarContainer:{padding:"5px 6px","& .rdw-option-wrapper":{minWidth:unset}},editorContainer:{padding:"11px",height:"unset"},textEditorWrapper:{position:"relative"},editorOverlay:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#fff",opacity:.9,zIndex:6,display:"flex",alignItems:"center",justifyContent:"center"}}})),ye={options:["inline","list","colorPicker","link","emoji","history"],inline:{options:["bold","italic","underline"]},list:{options:["unordered"]},colorPicker:{component:F}},be={body:"",attachTo:{}},Ce=function(e){var t=e.className,n=e.onSubmit,a=e.onCancelCustom,r=e.hideOptions,c=e.body,s=e.isLoading,l=e.openConfirmationDialog,f=e.closeDialog,g=e.createMode,p=e.toolbarHidden,y=e.confirmCancel,b=e.canSave,C=pe(),h=(0,d.useState)(te(c)),v=h[0],x=h[1],E=(0,d.useState)(be),N=E[0],I=E[1],j=(0,d.useState)(null),T=j[0],M=j[1],Z=function(e){I(Object.assign({},N,{body:ne(e)})),x(e)},k=(0,d.useMemo)((function(){return b(N.body)}),[N]);(0,d.useEffect)((function(){Z(te(c))}),[c]),(0,d.useEffect)((function(){T&&T.focus()}),[T]);var D=function(){a&&a(),x(_.EditorState.createEmpty()),I(be),f()},S=function(){var e=(0,o.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({body:N.body,attachTo:N.attachTo});case 2:x(_.EditorState.createEmpty()),I(be),g&&f();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(e){var t=Object.assign({},N,{attachTo:Object.assign({},N.attachTo,{attachToNotes:e})});I(t)};return d.createElement("div",{className:P()(C.textEditorWrapper,t)},d.createElement(m.Editor,{editorState:v,wrapperClassName:C.wrapperContainer,toolbarClassName:C.toolbarContainer,editorClassName:C.editorContainer,onEditorStateChange:Z,toolbar:ye,toolbarHidden:p,editorRef:M}),!r&&d.createElement(d.Fragment,null,d.createElement("br",null),d.createElement(de,{onChange:function(e,t){var n,o=Object.assign({},N,{attachTo:Object.assign({},N.attachTo,(n={},n[e]={},n))});t||delete o.attachTo[e],I(o)},state:N.attachTo}),N.attachTo.hasOwnProperty("attachToNotes")&&d.createElement(J,{setNotesInfo:w,notesInfo:N.attachTo.attachToNotes})),d.createElement(ge,{disabled:N.body===c||!N.body||!k,onSubmit:S,onCancel:function(){y&&N.body!==c?l({title:u.Z.t("notifications.warning"),body:u.Z.t("notifications.canLoseChanges"),buttons:[{_type:"string",text:u.Z.t("notifications.yes"),onClick:D,color:"error",variant:"outlined"},{_type:"string",text:u.Z.t("notifications.no"),color:"default",variant:"outlined"}]}):D()}}),s&&d.createElement("div",{className:C.editorOverlay},d.createElement(A.Z,null)))};Ce.defaultProps={className:"",onCancelCustom:void 0,hideOptions:!1,body:"",createMode:!1,toolbarHidden:!1,confirmCancel:!0,canSave:function(){return!0}},Ce.propTypes={className:p().string,onSubmit:p().func.isRequired,isLoading:p().bool.isRequired,onCancelCustom:p().func,hideOptions:p().bool,body:p().string,openConfirmationDialog:p().func.isRequired,closeDialog:p().func.isRequired,createMode:p().bool,toolbarHidden:p().bool,confirmCancel:p().bool,canSave:p().func};var he=Ce,ve=n(19142),xe=p().shape({name:p().string.isRequired,body:p().string.isRequired,avatarImgSrc:p().string,initials:p().string.isRequired,date:p().string.isRequired}),Ee=p().shape(Object.assign({},xe,{history:p().arrayOf(xe)})),Ne=(p().arrayOf(Ee),n(78661)),Ie=(0,I.Z)((function(e){return{commentContainer:{padding:"14px 21px"},mainComment:{display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background-color .2s",padding:"1px 10px",marginLeft:-10,"& .message":{flexGrow:10,overflow:"auto"},"& .messageButton":{opacity:1,transition:"opacity .1s",fontSize:20,padding:"6px 0 6px 0",minWidth:30,justifyContent:"left","&.inactiveReactions":{opacity:.15,backgroundColor:"unset"},"&.semiActiveReactions":{opacity:.45,backgroundColor:"unset"},"&.activeReactions":{opacity:1,backgroundColor:"unset"}},"&.highlightHover":{cursor:"pointer","&:hover":{backgroundColor:e.palette.success.light}}},reaction:{color:"black",fontSize:20,transform:"translateY(-1px)"},historyComment:{backgroundColor:"#f4f4f4"},button:{display:"flex",justifyContent:"space-between",borderRadius:0,padding:12,textAlign:"left","&:hover":{backgroundColor:e.palette.success.light},editButton:{margin:"-6px"}},content:{"& > p":{margin:0}}}})),je=function(e){var t,n=e.isEdited,o=e.canEdit,a=e.onEdit,i=e.canReact,r=e.onReact,c=e.reactions,s=e.message,l=e.onClick,m=e.toolbarHidden,u=e.confirmCancel,f=e.highlightHover,g=e.canSave,p=Ie(),y=(0,d.useMemo)((function(){var e;return P()(p.commentContainer,((e={})[p.historyComment]=n,e[p.mainComment]=!n,e[p.highlightHover]=f,e))}),[n]),b=(0,d.useState)(!1),h=b[0],v=b[1],x=(0,d.useState)(!1),E=x[0],N=x[1];if(h)return d.createElement(he,{body:s.body,onSubmit:function(e){e.body&&e.body!==s.body?(N(!0),a(Object.assign({},s,{body:e.body}),s),v(!1),N(!1)):v(!1)},isLoading:E,onCancelCustom:function(){v(!1)},hideOptions:!0,toolbarHidden:m,confirmCancel:u,canSave:g});var I=k().sanitize(s.body,{KEEP_CONTENT:!1,ADD_ATTR:["target"]}),j=d.createElement(d.Fragment,null,d.createElement("div",{className:p.message},d.createElement(C.Z,{variant:"body1",classes:{root:p.content},dangerouslySetInnerHTML:{__html:I}})),!n&&o&&d.createElement(z.Z,{className:P()(p.messageButton,p.highlightButtonHover),onClick:function(){v(!0)}},d.createElement(Ne.x,{name:"icon-pencil"})),i&&d.createElement(z.Z,{className:P()(p.messageButton,(t={},t[p.inactiveReactions]=!c||"inactive"===c,t[p.semiActiveReactions]="semiActive"===c,t[p.activeReactions]="active"===c,t[p.highlightButtonHover]=i,t)),onClick:function(){i&&r&&r({message:s})}},d.createElement(Ne.x,{className:P()(p.reaction),name:"icon-smiley"})));return l?d.createElement(ve.Z,{fullWidth:!0,component:"div",classes:{root:p.button},onClick:l},j):d.createElement("div",{className:y},j)};je.defaultProps={isEdited:!1,canEdit:!0,onEdit:function(){},canReact:!1,onReact:function(){},reactions:null,toolbarHidden:!1,confirmCancel:!1,onClick:void 0,highlightHover:!0,canSave:function(){return!0}},je.propTypes={message:xe.isRequired,isEdited:p().bool,canEdit:p().bool,onEdit:p().func,canReact:p().bool,onReact:p().func,reactions:p().string,toolbarHidden:p().bool,confirmCancel:p().bool,onClick:p().func,highlightHover:p().bool,canSave:p().func};var Te=(0,d.memo)(je),Me=n(461),Ze=n.n(Me),ke=(0,I.Z)((function(e){return{all:{color:e.palette.primary.main,margin:"0 0 10px 0",display:"flex",flexWrap:"wrap","& a":{textDecoration:"none",display:"flex"},"& button > span":{margin:"auto 3px"}},item:{display:"flex",whiteSpace:"nowrap","&:not(:last-child)":{marginRight:15}},button:{display:"flex",alignItems:"center",padding:0,border:"none",background:"transparent",cursor:"pointer",fontSize:"12px",fontWeight:500,fontStyle:"normal",fontStretch:"normal",color:inherit,marginRight:3},clip:{marginRight:4}}})),De=["attachments","onDelete"],Se=(0,d.memo)((function(e){var t=e.attachments,n=e.onDelete,o=(0,f.Z)(e,De),a=ke();return d.createElement("div",(0,y.Z)({className:a.all},o),t.map((function(e,t){return d.createElement("div",{className:a.item,key:e.id+"-"+t},d.createElement("a",{key:e.id+"-link",className:a.button,href:e.url,target:"_blank",rel:"noopener noreferrer"},d.createElement(Ne.x,{name:"icon-attachment",color:null}),d.createElement("span",null,e.nom_original||e.libelle,"\xa0",e.size&&"("+Ze()(e.size)+")")),d.createElement("button",{key:e.id+"-close",type:"button",className:a.button,onClick:function(){return n(e)}},"\u274c"))})))}));Se.propTypes={attachments:p().arrayOf(p().shape({id_document:p().oneOfType([p().string,p().number]),nom_original:p().string,size:p().number})),onClick:p().func,onDelete:p().func},Se.defaultProps={attachments:[],onClick:function(){return null},onDelete:function(){return null}};var we=Se,Le=p().shape({name:p().string.isRequired,body:p().string.isRequired,avatarImgSrc:p().string,initials:p().string.isRequired,date:p().string.isRequired}),Re=p().shape(Object.assign({},Le,{history:p().arrayOf(Le)})),ze=(p().arrayOf(Re),(0,I.Z)((function(){return{container:{display:"flex",flexDirection:"column",minHeight:"fit-content"},header:{display:"flex",alignItems:"flex-start"},contendEditing:{display:"flex"}}}))),Oe=["message","canEdit","onEdit","canReact","onReact","historyState","toolbarHidden","confirmCancel","classes","reactions","attachments","onAttachmentDelete","bodyProps"],Pe=function(e){var t=e.message,n=e.canEdit,o=e.onEdit,a=e.canReact,i=e.onReact,r=e.historyState,c=e.toolbarHidden,s=e.confirmCancel,l=e.classes,m=e.reactions,u=e.attachments,g=e.onAttachmentDelete,p=e.bodyProps,b=(0,f.Z)(e,Oe),C=ze(),h=t.avatarImgSrc,v=t.initials,x=t.name,E=t.date,N=t.jisty;return d.createElement("div",(0,y.Z)({className:P()(C.container,l)},b),d.createElement("div",{className:C.header},d.createElement(M,{initials:v,name:x,isEdited:r,avatarImgSrc:h,date:E})),N?d.createElement(R,{message:t}):d.createElement(Te,(0,y.Z)({message:t,canEdit:n,onEdit:o,isEdited:r,canReact:a,onReact:i,reactions:m,toolbarHidden:c,confirmCancel:s},p)),u.length>0&&d.createElement(we,{attachments:u,onDelete:g}))};Pe.propTypes={message:Le.isRequired,historyState:p().bool,canEdit:p().bool,onEdit:p().func,canReact:p().bool,onReact:p().func,reactions:p().string,toolbarHidden:p().bool,confirmCancel:p().bool,classes:p().string,attachments:p().arrayOf(p().shape({id_document:p().oneOfType([p().string,p().number]),nom_original:p().string,size:p().number})),onAttachmentDelete:p().func,bodyProps:p().object},Pe.defaultProps={historyState:!1,canEdit:!0,onEdit:function(){},canReact:!1,onReact:function(){},toolbarHidden:!1,confirmCancel:!0,reactions:null,classes:null,attachments:[],onAttachmentDelete:function(){},bodyProps:{}};var _e=Pe,Ge=(0,I.Z)((function(){return{container:{display:"flex",flexDirection:"column",marginTop:10},commentListContainer:{borderLeft:"1px solid #d0d0d0",display:"flex",flexDirection:"column",paddingLeft:13,marginTop:16},commentWrapper:{marginTop:20,"&:first-child":{marginTop:0}}}})),He=(0,I.Z)((function(e){return{showHistory:{cursor:"pointer",color:e.palette.primary.main,fontWeight:"bold"}}})),Ye=(0,d.memo)((function(e){var t=e.history,n=(0,d.useState)(!1),o=n[0],a=n[1],i=He(),r=Ge();return d.createElement("div",{className:r.container},d.createElement(C.Z,{onClick:function(){a(!o)},classes:{root:i.showHistory}},(0,d.useMemo)((function(){return o?u.Z.t("commentBox.hideHistory"):u.Z.t("commentBox.showHistory")}),[o])),o&&d.createElement("div",{className:r.commentListContainer},t.map((function(e,t){return d.createElement("div",{className:r.commentWrapper,key:t},d.createElement(_e,{message:e,historyState:!0}))}))))}));Ye.propTypes={history:p().arrayOf(xe)},Ye.defaultProps={history:[]};var Be=Ye,Ae=(0,I.Z)((function(){return{container:{width:"100%",display:"flex",flexDirection:"column"}}})),Ue=["history"],We=function(e){var t=Ae(),n=e.comment,o=e.onEdit,a=e.canEdit,i=e.hasHistory,r=n.history,c=(0,f.Z)(n,Ue);return d.createElement("div",{className:t.container},d.createElement(_e,{message:c,onEdit:o,canEdit:a}),i&&d.createElement(Be,{history:r}))};We.propTypes={comment:p().object,onEdit:p().func,canEdit:p().bool,hasHistory:p().bool},We.defaultProps={onEdit:function(){},comment:{},canEdit:!1,hasHistory:!0};var Je=We,qe=n(12685),Qe=n(258),Ke=n(71308),Fe={options:["inline","list","colorPicker","link","emoji","history"],inline:{options:["bold","italic","underline"]},list:{options:["unordered"]},colorPicker:{component:F}},Xe={body:"",attachTo:{}},Ve=function(e){var t,n=e.isOpen,a=e.handleClose,f=e.data,g=e.columnIndex,p=e.handleGetComment,y=e.dataKey,b=(0,Ke.Z)(),C=(0,qe.ZR)().config,h=(0,Qe.Z)().service.comment,v=h.create,x=h.update,E=C.selectableRowKey,N=C.idSociety,I=C.columns,j=(void 0===I?[]:I)[g],T=j.canEdit,M=void 0!==T&&T,Z=j.commentKey,k=void 0===Z?"":Z,D=j.location,S=void 0===D?"":D,w=(0,d.useState)(Xe),L=w[0],R=w[1],z=(0,d.useState)(null),O=z[0],P=z[1],_=(0,d.useState)(null),G=_[0],H=_[1];(0,d.useEffect)((function(){G&&G.focus()}),[G]);var Y=function(){var e=(0,o.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(((t={location:S})[k]=f[E],t.comment=ne(O),t),N);case 2:return P(null),e.next=5,p();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=(0,o.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(((n={location:S})[k]=f[E],n.comment=null==t?void 0:t.body,n),null==t?void 0:t.id,N);case 2:return e.next=4,p();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=[{_type:"string",text:u.Z.t("common.send"),onClick:Y,size:"medium",color:"primary",variant:"contained"},{_type:"string",text:u.Z.t("common.cancel"),onClick:a,size:"medium",variant:"outlined",color:"default"}];return d.createElement(r.Z,{open:n,onClose:a,classes:{paper:b.paper}},d.createElement(c.Z,null,u.Z.t("common.comments")),d.createElement(s.Z,{classes:{root:b.root}},d.createElement("div",{className:b.editor},d.createElement(m.Editor,{editorState:O,wrapperClassName:b.wrapperContainer,toolbarClassName:b.toolbarContainer,editorClassName:b.editorContainer,onEditorStateChange:function(e){R(Object.assign({},L,{body:ne(e)})),P(e)},toolbar:Fe,editorRef:H})),d.createElement("div",{className:b.containerComment},null==(t=f[y])?void 0:t.map((function(e){return d.createElement("div",{key:e.id,className:b.separatorComment},d.createElement(Je,{comment:e,onEdit:B,canEdit:M,hasHistory:!1}))})))),d.createElement(l.Z,null,d.createElement(me.CE,{buttons:A})))}}}]);