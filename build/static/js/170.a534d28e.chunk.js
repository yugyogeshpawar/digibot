(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[170],{2479:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var i=n(18),a=n(1),c=n(226),s=n(661),l=n(1352),r=n(259),j=n(121),d=n(1368),o=n(1369),b=n(1370),u=n(1371),h=n(1385),x=n(1372),O=n(260),v=n(1295),f=n(2571),g=n(225),m=n(344),p=n(105),w=n(0);function D(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.user})).stoneBonus;Object(a.useEffect)((function(){e(Object(m.w)({incomeType:"STAKING BONUS"}))}),[e]);var n=Object(a.useState)(1),D=Object(i.a)(n,2),y=D[0],P=D[1],C=Object(a.useState)(5),S=Object(i.a)(C,2),W=S[0],B=(S[1],Object(a.useState)("")),T=Object(i.a)(B,2),_=T[0],N=T[1],M=(t||[]).filter((function(e){return e.calculate_date.toLowerCase().includes(_.toLowerCase())}));console.log(M,"filteredDatafilteredDatafilteredData");var R=function(e,t){P(t)};return Object(w.jsxs)(s.a,{children:[Object(w.jsx)(l.a,{title:"Trade Bonus",sx:{mb:3}}),Object(w.jsx)(r.a,{children:Object(w.jsx)(r.a,{width:250,m:1,display:"flex",justifyContent:"flex-end",children:Object(w.jsx)(j.a,{label:"Search Date",variant:"outlined",size:"small",fullWidth:!0,value:_,onChange:function(e){return N(e.target.value)},sx:{marginBottom:2,marginRight:2}})})}),Object(w.jsx)(p.a,{children:Object(w.jsx)(d.a,{sx:{minWidth:720},children:Object(w.jsxs)(o.a,{children:[Object(w.jsx)(b.a,{children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(h.a,{sx:{minWidth:120},children:"No."}),Object(w.jsx)(h.a,{sx:{minWidth:160},children:"Date"}),Object(w.jsx)(h.a,{sx:{minWidth:200},children:"Trade Bonus"}),Object(w.jsx)(h.a,{sx:{minWidth:120},children:"Percentage ( % ) "}),Object(w.jsx)(h.a,{sx:{minWidth:120},children:"Trading"})]})}),Object(w.jsx)(x.a,{children:0===(null===M||void 0===M?void 0:M.length)?Object(w.jsx)(u.a,{children:Object(w.jsx)(h.a,{colSpan:5,children:Object(w.jsx)(O.a,{variant:"h6",children:"No Data Found"})})}):Object(w.jsx)(w.Fragment,{children:null===M||void 0===M?void 0:M.slice((y-1)*W,y*W).map((function(e,t){return Object(w.jsxs)(u.a,{children:[Object(w.jsx)(h.a,{children:Object(w.jsx)(O.a,{variant:"subtitle2",children:t+1})}),Object(w.jsx)(h.a,{children:Object(g.a)(new Date(null===e||void 0===e?void 0:e.calculate_date),"dd MMM yyyy")}),Object(w.jsxs)(h.a,{children:[null===e||void 0===e?void 0:e.income_amt," $ "]}),Object(w.jsxs)(h.a,{children:[null===e||void 0===e?void 0:e.Bonus_percent," % "]}),Object(w.jsx)(h.a,{sx:{textTransform:"capitalize"},children:null===(null===e||void 0===e?void 0:e.investment_amt)?"Not defined ":"".concat(null===e||void 0===e?void 0:e.investment_amt," $")})]},t)}))})})]})})}),Object(w.jsx)(v.a,{}),Object(w.jsx)(f.a,{count:Math.ceil((null===M||void 0===M?void 0:M.length)/W),page:y,onChange:R,rowsPerPageOptions:[5,10,25],rowsPerPage:W,onPageChange:R,labelRowsPerPage:"Rows per page",component:"div",sx:{margin:"10px auto",display:"flex",justifyContent:"center"}})]})}}}]);
//# sourceMappingURL=170.a534d28e.chunk.js.map