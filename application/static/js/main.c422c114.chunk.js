(this["webpackJsonpreact-lap"]=this["webpackJsonpreact-lap"]||[]).push([[0],{102:function(e,a,t){},113:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c),o=t(21),i=(t(102),t(62)),m=t(16),s=t(3),u=t(178),d=t(182),p=t(179),h=t(159),g=t(51),E=t(180),f=t(171),b=t(183),v=t(83),k=t(155),y=Object(k.a)((function(e){return{root:{display:"flex"},fab:{position:"absolute",bottom:e.spacing(3),right:e.spacing(3),zIndex:e.zIndex.modal+1},toolbar:{paddingRight:24},toolbarIcon:Object(v.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},modal:{overflowY:"scroll"},breadcrumbs:{padding:e.spacing(0,2,2,2)},grid:{flexGrow:1}}})),j=t(11),x=t(115),N=t(30),C=t(160),w=t(161),O=t(164),F=t(163),S=t(167),P=t(181),A=t(162),R=t(157),I=t(68),z=t.n(I),B=t(70),D=t.n(B),M=t(69),L=t.n(M),W=t(67),H=t.n(W),T=t(165),Y=t(166),_=t(105),G=Object(k.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function J(e){var a=G(),t=Object(N.a)(),n=e.count,c=e.page,l=e.rowsPerPage,o=e.onChangePage;return r.a.createElement("div",{className:a.root},r.a.createElement(R.a,{onClick:function(e){o(e,0)},disabled:0===c,"aria-label":"first page"},"rtl"===t.direction?r.a.createElement(H.a,null):r.a.createElement(z.a,null)),r.a.createElement(R.a,{onClick:function(e){o(e,c-1)},disabled:0===c,"aria-label":"previous page"},"rtl"===t.direction?r.a.createElement(L.a,null):r.a.createElement(D.a,null)),r.a.createElement(R.a,{onClick:function(e){o(e,c+1)},disabled:c>=Math.ceil(n/l)-1,"aria-label":"next page"},"rtl"===t.direction?r.a.createElement(D.a,null):r.a.createElement(L.a,null)),r.a.createElement(R.a,{onClick:function(e){o(e,Math.max(0,Math.ceil(n/l)-1))},disabled:c>=Math.ceil(n/l)-1,"aria-label":"last page"},"rtl"===t.direction?r.a.createElement(z.a,null):r.a.createElement(H.a,null)))}var U=Object(k.a)((function(e){return{table:{minWidth:500},button:{margin:e.spacing(.5,1,.5,0)}}})),V=Object(k.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},title:{flex:"1 1 100%"}}})),$=function(){var e=V();return r.a.createElement(h.a,{className:e.root},r.a.createElement(g.a,{className:e.title,variant:"h6",id:"tableTitle",component:"div"},"Reported Fake Accounts"))};function q(e){var a=e.accounts,t=e.handleFetch,n=U(),c=r.a.useState(0),l=Object(m.a)(c,2),i=l[0],s=l[1],u=r.a.useState(5),d=Object(m.a)(u,2),p=d[0],h=d[1],g=a,E=p-Math.min(p,(g.length<1?1:g.length)-i*p);return r.a.useEffect(t,[]),r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(C.a,{className:n.table,"aria-label":"custom pagination table"},r.a.createElement(w.a,null,r.a.createElement(A.a,null,r.a.createElement(F.a,null,"FB Username"),r.a.createElement(F.a,{align:"right"}),r.a.createElement(F.a,{align:"right"},"Date Reported"))),r.a.createElement(O.a,null,!g||g.length<=0?r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,null),r.a.createElement(A.a,null),r.a.createElement(A.a,null,r.a.createElement(F.a,{colSpan:6,align:"center"},"No data to show.")),r.a.createElement(A.a,null),r.a.createElement(A.a,null)):(p>0?g.slice(i*p,i*p+p):g).map((function(e){return r.a.createElement(A.a,{key:e.id},r.a.createElement(F.a,{component:"th",scope:"row"},r.a.createElement(T.a,{component:o.b,color:"inherit",to:"/".concat(e.id)},e.username)),r.a.createElement(F.a,{style:{width:300},align:"right"},r.a.createElement(Y.a,{className:n.button,component:o.b,variant:"contained",color:"secondary",size:"small",to:"/".concat(e.id)},"View Details"),r.a.createElement(Y.a,{className:n.button,variant:"contained",color:"primary",size:"small",href:"https://facebook.com/".concat(e.username),target:"_blank"},"Facebook")),r.a.createElement(F.a,{style:{width:160},align:"right"},_(e.created_at).tz("Asia/Singapore").format("MM/DD/YY hh:mm a")))})),E>0&&r.a.createElement(A.a,{style:{height:53*E}},r.a.createElement(F.a,{colSpan:6}))),r.a.createElement(S.a,null,r.a.createElement(A.a,null,r.a.createElement(P.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:3,count:g.length,rowsPerPage:p,page:i,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,a){s(a)},onChangeRowsPerPage:function(e){h(parseInt(e.target.value,10)),s(0)},ActionsComponent:J})))))}function K(e){var a=e.accounts,t=e.handleFetch,n=y();return r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(x.a,{className:n.paper},r.a.createElement(q,{accounts:a,handleFetch:t})))}var Q=t(184),X=t(186),Z=t(170),ee=t(168),ae=t(172),te=t(173),ne=t(174),re=Object(k.a)((function(e){return{card:{padding:e.spacing(2),"& > *":{marginBottom:e.spacing(2)},"& > h5, & > h6":{fontWeight:700},"& > h5":{marginBottom:e.spacing(3)},"& > h6":{marginBottom:e.spacing(1)}},lastItem:{marginBottom:0}}})),ce=function(e){var a=e.loading,t=e.account,n=re();return r.a.createElement(x.a,{className:n.card},a||!t?"Loading...":t.username?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"h6"},"Account: ",t.username),r.a.createElement(X.a,{label:"Fake",color:"secondary",size:"small"}),r.a.createElement(g.a,{variant:"body1"},"You may report this account by visiting its Facebook profile below:"),r.a.createElement(Y.a,{className:n.lastItem,variant:"outlined",color:"primary",size:"small",href:"https://facebook.com/".concat(t.username),target:"_blank"},"Facebook Profile")):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"h6"},"Facebook Account"),r.a.createElement(X.a,{label:"Real",color:"primary",size:"small"}),r.a.createElement(g.a,{variant:"body1"},"Due to privacy concerns, this account may not be viewed by the public. However, you may report the associated accounts in the list to the right/below."),r.a.createElement(g.a,{className:n.lastItem,variant:"body1"},"Additionally, this page is not listed in the home page. If you wish to share this page, you may send them the link of this page.")))},le=function(e){var a=e.primary,t=e.to,n=r.a.useMemo((function(){return r.a.forwardRef((function(e,a){return r.a.createElement(o.b,Object.assign({ref:a,to:t},e))}))}),[t]);return r.a.createElement("li",null,r.a.createElement(ee.a,{button:!0,component:n},r.a.createElement(ae.a,{primary:a}),r.a.createElement(te.a,null,r.a.createElement(Y.a,{variant:"outlined",color:"primary",size:"small",href:"https://facebook.com/".concat(a),target:"_blank"},"Facebook Profile"))))},oe=function(e){var a=e.loading,t=e.account,n=re();return r.a.createElement(x.a,{className:n.card},a||!t?"Loading...":r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"h6"},t.username?"Similar":"Related"," Fake Accounts"),r.a.createElement(Z.a,{className:n.lastItem},r.a.createElement(ne.a,{component:"li"}),t.similar.length<1?r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,null,r.a.createElement(ae.a,{primary:"No "+(t.username?"similar":"related")+" accounts"})),r.a.createElement(ne.a,{component:"li"})):t.similar.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,{primary:e.username,to:"/".concat(e.id)}),r.a.createElement(ne.a,{component:"li"}))})))))},ie=function(){var e=re();return r.a.createElement(x.a,{className:e.card},r.a.createElement(g.a,{className:e.header,variant:"h5",align:"center"},"404: Account not found!"),r.a.createElement(g.a,{variant:"body1",align:"center"},"You may go back to the homepage by clicking 'Home' at the top left."))},me="https://reportfakefbph.herokuapp.com";var se={reports:{list:"".concat(me,"/reports"),add:"".concat(me,"/reports")},report:function(e){return"".concat(me,"/reports/").concat(e)}};function ue(){var e=y(),a=Object(j.h)().uuid,t=Object(j.g)(),n=r.a.useState(!1),c=Object(m.a)(n,2),l=c[0],i=c[1],s=r.a.useState(void 0),u=Object(m.a)(s,2),d=u[0],p=u[1],h=r.a.useState(void 0),g=Object(m.a)(h,2),E=g[0],b=g[1];return r.a.useEffect((function(){i(!0),fetch(se.report(a)).then((function(e){return 200===e.status?Promise.resolve(e.json()):Promise.resolve(e.json()).then((function(e){return Promise.reject(e)}))})).then((function(e){p(e),i(!1)}),(function(e){console.error("Error: ",e),b(e),i(!1)})).catch((function(e){console.error("Caught: ",e)}))}),[t]),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(Q.a,{className:e.breadcrumbs},r.a.createElement(T.a,{color:"inherit",component:o.b,to:"/"},"Home"),r.a.createElement(T.a,{color:"textPrimary",component:o.b,to:"/".concat(a)},l?"Loading":E?"Error":d?d.username?d.username:"Facebook Account":"Account")),r.a.createElement(f.a,{className:e.grid,container:!0,spacing:4},l&&!d||d?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(ce,{loading:l,account:d})),r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(oe,{loading:l,account:d}))):r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(ie,null))))}var de=t(175),pe=t(81),he=t.n(pe),ge=t(80),Ee=t.n(ge),fe=Object(k.a)((function(e){return{fab:{position:"absolute",bottom:e.spacing(3),right:e.spacing(3),zIndex:e.zIndex.modal+1},extendedIcon:{marginRight:e.spacing(1)}}})),be=function(e){var a=e.open,t=e.handleClick,n=fe();return r.a.createElement(de.a,{className:n.fab,variant:a?"round":"extended",color:a?"primary":"secondary",onClick:t},a?r.a.createElement(Ee.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,{className:n.extendedIcon}),"Add Report"))},ve=function(){return r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Made by ",r.a.createElement(T.a,{color:"inherit",href:"http://github.com/coarse"},"Michael Pio Mayol")," ",r.a.createElement(r.a.Fragment,null,"\u2014")," Source Code: ",r.a.createElement(T.a,{color:"inherit",href:"https://github.com/coarse/reportfakefb-api"},"Server")," / ",r.a.createElement(T.a,{color:"inherit",href:"https://github.com/coarse/reportfakefb-app"},"Web App"))},ke=Object(k.a)((function(e){return{root:{margin:e.spacing(2,2,0,2)}}})),ye=function(e){e.className;var a=e.text,t=ke();return r.a.createElement(g.a,{variant:"subtitle2",className:t.root},a)},je=t(176),xe=t(187),Ne=t(169),Ce=t(177),we=Object(k.a)((function(e){return{root:{margin:e.spacing(1,0,2,2)}}})),Oe=function(e){var a=e.value,t=e.handleChange,n=we();return r.a.createElement(je.a,{className:n.root},r.a.createElement(xe.a,{htmlFor:"real-username",shrink:!0},"Link/Username to Real FB Account"),r.a.createElement(Ne.a,{id:"real-username",value:a,onChange:t}),r.a.createElement(Ce.a,null,"This information will not be shared to the public."))},Fe=Object(k.a)((function(e){return{send:{margin:e.spacing(0,0,2,2)},entry:{margin:e.spacing(2,0,2,2)}}})),Se=function(e){var a=e.disabled,t=e.onClick,n=Fe();return r.a.createElement(Y.a,{className:n.entry,color:"secondary",variant:"contained",size:"small",disabled:a,onClick:t},"Add Entry")},Pe=function(e){var a=e.disabled,t=e.onClick,n=Fe();return r.a.createElement(Y.a,{className:n.entry,color:"primary",variant:"contained",size:"small",disabled:a,onClick:t},"Delete Entry")},Ae=function(e){var a=e.disabled,t=e.onClick,n=Fe();return r.a.createElement(Y.a,{className:n.send,color:"primary",variant:"contained",size:"small",disabled:a,onClick:t},"Send Report")},Re=Object(k.a)((function(e){return{field:{margin:e.spacing(1,0,1,2)}}})),Ie=function(e){var a=e.index,t=e.sending,n=e.username,c=e.handleChange,l=e.handleDelete,o=Re();return r.a.createElement(r.a.Fragment,null,r.a.createElement(je.a,{className:o.field},r.a.createElement(xe.a,{htmlFor:"fake-username-".concat(a),shrink:!0},"Link/Username #","".concat(a+1)),r.a.createElement(Ne.a,{id:"fake-username-".concat(a),value:n,onChange:function(e){return c(a,e.target.value)}})),a>0?r.a.createElement(Pe,{disabled:t,onClick:function(){return l(a)}}):"")},ze=t(82),Be=t.n(ze),De=Object(k.a)((function(e){return{form:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,backgroundColor:e.palette.background.paper,outline:0,borderRadius:4,boxShadow:e.shadows[5],"& > hr":{margin:e.spacing(0,2,2,2)}},title:{margin:e.spacing(2)},error:{color:Be.a[500],margin:e.spacing(0,2,2,2)}}})),Me=function(e){var a=e.fakes,t=e.real,n=e.sending,c=e.reportError,l=e.handleChangeReal,o=e.handleAdd,i=e.handleChangeFake,m=e.handleDelete,s=e.handleSend,u=De();return r.a.createElement("form",{className:u.form,noValidate:!0,autoComplete:"off"},r.a.createElement(g.a,{className:u.title,variant:"h6"},"Report Form"),r.a.createElement(ye,{text:"Real Account Details"}),r.a.createElement(Oe,{value:t,handleChange:l}),r.a.createElement(ne.a,null),r.a.createElement(ye,{text:"Fake Accounts"}),a.map((function(e,a){return r.a.createElement(Ie,{key:a,index:a,sending:n,username:e,handleChange:i,handleDelete:m})})),r.a.createElement(Se,{disabled:n,onClick:o}),r.a.createElement(ne.a,null),c?r.a.createElement(g.a,{className:u.error,variant:"subtitle2"},c.message):"",r.a.createElement(Ae,{disabled:n,onClick:s}))};function Le(){var e=y(),a=Object(j.f)(),t=r.a.useState(!1),n=Object(m.a)(t,2),c=n[0],l=n[1],o=r.a.useState(""),v=Object(m.a)(o,2),k=v[0],x=v[1],N=r.a.useState([""]),C=Object(m.a)(N,2),w=C[0],O=C[1],F=r.a.useState(!1),S=Object(m.a)(F,2),P=S[0],A=S[1],R=r.a.useState(null),I=Object(m.a)(R,2),z=I[0],B=I[1],D=r.a.useState([]),M=Object(m.a)(D,2),L=M[0],W=M[1],H=function(){l(!1),T()},T=function(){x(""),O([""]),A(!1)},Y=r.a.createElement("div",null,r.a.createElement(Me,{fakes:w,real:k,sending:P,reportError:z,handleChangeReal:function(e){return x(e.target.value)},handleAdd:function(){return O([].concat(Object(i.a)(w),[""]))},handleChangeFake:function(e,a){var t=Object(i.a)(w);t[e]=a,O(t)},handleDelete:function(e){var a=Object(i.a)(w);a.splice(e,1),O(a)},handleSend:function(){A(!0),fetch(se.reports.add,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({real:k,fakes:w})}).then((function(e){return 200===e.status?Promise.resolve(e.json()):Promise.resolve(e.json()).then((function(e){return Promise.reject(e)}))})).then((function(e){H(),a.push("/".concat(e.id))}),(function(e){console.error("error: ",e.message),B(e),A(!1)})).catch((function(e){console.error("Caught: ",e)}))}}));return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,null),r.a.createElement(p.a,{position:"absolute",className:Object(s.a)(e.appBar)},r.a.createElement(h.a,{className:e.toolbar},r.a.createElement(g.a,{className:e.title,variant:"h6",component:"h1",color:"inherit",noWrap:!0},"Report Fake FB PH"))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(E.a,{maxWidth:"lg",className:e.container},r.a.createElement(f.a,{container:!0,spacing:3},r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/",exact:!0},r.a.createElement(K,{accounts:L,handleFetch:function(){fetch(se.reports.list).then((function(e){return e.json()})).then((function(e){W(e.accounts)}),(function(e){console.error(e)}))}})),r.a.createElement(j.a,{path:"/:uuid"},r.a.createElement(ue,null)))),r.a.createElement(d.a,{pt:4},r.a.createElement(ve,null)),r.a.createElement(be,{open:c,handleClick:function(){return c?H():l(!0)}}))),r.a.createElement(b.a,{className:e.modal,open:c,onClose:H},Y))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(Le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,a,t){e.exports=t(113)}},[[97,1,2]]]);
//# sourceMappingURL=main.c422c114.chunk.js.map