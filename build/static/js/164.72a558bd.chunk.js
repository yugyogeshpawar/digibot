(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[164],{2506:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return y}));var n=i(18),c=i(1),a=i(661),r=i(1352),s=i(259),l=i(121),j=i(1368),d=i(1369),o=i(1370),b=i(1371),u=i(1385),x=i(1372),h=i(260),O=i(2571),v=i(1295),f=i(122),m=i(344),p=i(105),g=i(0);function y(){var e=Object(f.c)(),t=Object(f.d)((function(e){return e.user})).directM;Object(c.useEffect)((function(){e(Object(m.c)())}),[e]);var i=Object(c.useState)(""),y=Object(n.a)(i,2),D=y[0],C=y[1],M=Object(c.useState)(1),S=Object(n.a)(M,2),W=S[0],_=S[1],w=null===t||void 0===t?void 0:t.filter((function(e){return e.member_user_id.toLowerCase().includes(D.toLowerCase())})),J=Math.ceil((null===w||void 0===w?void 0:w.length)/10),z=null===w||void 0===w?void 0:w.slice(10*(W-1),10*W);function F(e){var t=new Date(e),i=t.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],c=t.getFullYear();return"".concat(i," ").concat(n," ").concat(c)}return Object(g.jsxs)(a.a,{children:[Object(g.jsx)(r.a,{title:"My Level",sx:{mb:3}}),Object(g.jsx)(s.a,{p:2,display:"flex",justifyContent:"flex-end",children:Object(g.jsx)(l.a,{label:"Search",variant:"outlined",value:D,onChange:function(e){return C(e.target.value)}})}),Object(g.jsx)(p.a,{children:Object(g.jsx)(j.a,{eContainer:!0,sx:{minWidth:720},children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(o.a,{children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(u.a,{sx:{minWidth:120},children:"No."}),Object(g.jsx)(u.a,{sx:{minWidth:160},children:"Member Id"}),Object(g.jsx)(u.a,{sx:{minWidth:160},children:"Sponser Id "}),Object(g.jsx)(u.a,{sx:{minWidth:160},children:"Reg. Date"}),Object(g.jsx)(u.a,{sx:{minWidth:120},children:"Package"}),Object(g.jsx)(u.a,{sx:{minWidth:120},children:"Status"})]})}),Object(g.jsx)(x.a,{children:0===(null===z||void 0===z?void 0:z.length)?Object(g.jsx)(b.a,{children:Object(g.jsx)(u.a,{colSpan:6,align:"center",children:Object(g.jsx)(h.a,{variant:"h6",children:"No Data Found"})})}):Object(g.jsx)(g.Fragment,{children:null===z||void 0===z?void 0:z.map((function(e,t){return Object(g.jsxs)(b.a,{children:[Object(g.jsx)(u.a,{children:Object(g.jsx)(h.a,{variant:"subtitle2",children:10*(W-1)+t+1})}),Object(g.jsx)(u.a,{children:null===e||void 0===e?void 0:e.member_user_id}),Object(g.jsx)(u.a,{sx:{textTransform:"capitalize"},children:F(null===e||void 0===e?void 0:e.registration_date)}),Object(g.jsx)(u.a,{sx:{textTransform:"capitalize"},children:null===e||void 0===e?void 0:e.position}),Object(g.jsx)(u.a,{sx:{textTransform:"capitalize"},children:null===e||void 0===e?void 0:e.investment_busd}),Object(g.jsx)(u.a,{sx:{textTransform:"capitalize"},children:1===(null===e||void 0===e?void 0:e.status)?Object(g.jsx)(s.a,{color:"green",children:" Active "}):Object(g.jsx)(s.a,{color:"red",children:" Inactive "})})]},t)}))})})]})})}),Object(g.jsx)(s.a,{p:2,display:"flex",justifyContent:"center",children:Object(g.jsx)(O.a,{count:J,page:W,onChange:function(e,t){return function(e){_(e)}(t)},color:"primary"})}),Object(g.jsx)(v.a,{})]})}}}]);
//# sourceMappingURL=164.72a558bd.chunk.js.map