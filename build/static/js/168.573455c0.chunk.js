(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[168],{2481:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var i=n(18),c=n(1),a=n(661),l=n(1352),s=n(259),o=n(121),d=n(1368),j=n(1369),r=n(1370),u=n(1371),b=n(1385),h=n(1372),x=n(260),O=n(2571),v=n(1295),m=n(225),f=n(122),p=n(344),g=n(105),y=n(0);function w(){var e,t=Object(f.c)(),n=Object(f.d)((function(e){return e.user})).capitalBonus,w=Object(c.useState)(1),C=Object(i.a)(w,2),S=C[0],B=C[1],D=Object(c.useState)(10),M=Object(i.a)(D,1)[0],_=Object(c.useState)(""),W=Object(i.a)(_,2),L=W[0],N=W[1];Object(c.useEffect)((function(){t(Object(p.g)({incomeType:"MATCHING BUSINESS"}))}),[t]);console.log(n,"capitalBonuscapitalBonuscapitalBonuscapitalBonus");var I=null===n||void 0===n?void 0:n.filter((function(e){return!L||((null===e||void 0===e?void 0:e.calculate_date.toLowerCase().includes(L.toLowerCase()))||(null===e||void 0===e?void 0:e.income_amt.toString().includes(L))||(null===e||void 0===e?void 0:e.Bonus_percent.toString().includes(L))||(null===e||void 0===e?void 0:e.income_type.toLowerCase().includes(L.toLowerCase())))}));Math.min(M,(null===I||void 0===I?void 0:I.length)-(S-1)*M);return Object(y.jsxs)(a.a,{children:[Object(y.jsx)(l.a,{title:"Reward Bonus List",sx:{mb:3}}),Object(y.jsx)(s.a,{width:250,m:1,display:"flex",justifyContent:"flex-end",sx:{p:2},children:Object(y.jsx)(o.a,{label:"Search",variant:"outlined",fullWidth:!0,value:L,onChange:function(e){N(e.target.value),B(1)}})}),Object(y.jsxs)(g.a,{children:[Object(y.jsx)(d.a,{eContainer:!0,sx:{minWidth:720},children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(r.a,{children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)(b.a,{sx:{minWidth:120},children:"No."}),Object(y.jsx)(b.a,{sx:{minWidth:160},children:"Date"}),Object(y.jsx)(b.a,{sx:{minWidth:200},children:"Reward Amount"}),Object(y.jsx)(b.a,{sx:{minWidth:200},children:"Matching Bussiness"}),Object(y.jsx)(b.a,{})]})}),Object(y.jsx)(h.a,{children:0===(null===I||void 0===I?void 0:I.length)?Object(y.jsx)(u.a,{children:Object(y.jsx)(b.a,{colSpan:6,children:Object(y.jsx)(s.a,{m:4,display:"flex",justifyContent:"center",alignItems:"center",sx:{width:"fit-content"},children:Object(y.jsx)(x.a,{variant:"h6",children:"No Data Found"})})})}):Object(y.jsx)(y.Fragment,{children:null===I||void 0===I||null===(e=I.slice((S-1)*M,S*M))||void 0===e?void 0:e.map((function(e,t){return Object(y.jsxs)(u.a,{children:[Object(y.jsx)(b.a,{children:Object(y.jsx)(x.a,{variant:"subtitle2",children:t+1+(S-1)*M})}),Object(y.jsx)(b.a,{children:Object(m.a)(new Date(null===e||void 0===e?void 0:e.calculate_date),"dd MMM yyyy")}),Object(y.jsxs)(b.a,{children:[null===e||void 0===e?void 0:e.income_amt," $"]}),Object(y.jsxs)(b.a,{sx:{textTransform:"capitalize"},children:[null===e||void 0===e?void 0:e.investment_amt," $ "]})]},t)}))})})]})}),Object(y.jsx)(O.a,{count:Math.ceil((null===I||void 0===I?void 0:I.length)/M),page:S,onChange:function(e,t){B(t)},color:"primary",sx:{my:3,display:"flex",justifyContent:"center"}})]}),Object(y.jsx)(v.a,{})]})}}}]);
//# sourceMappingURL=168.573455c0.chunk.js.map