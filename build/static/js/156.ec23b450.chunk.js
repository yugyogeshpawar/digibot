(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[156],{2504:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var i=n(18),c=n(1),a=n(661),l=n(1352),s=n(1368),o=n(259),j=n(121),r=n(1369),d=n(1370),b=n(1371),u=n(1385),h=n(1372),x=n(260),O=n(2567),m=n(1295),v=n(225),f=n(122),p=n(344),y=n(105),g=n(0);function w(){var e=Object(f.c)(),t=Object(f.d)((function(e){return e.user})).monthlyPayrollBonus,n=Object(c.useState)(1),w=Object(i.a)(n,2),C=w[0],D=w[1],S=Object(c.useState)(10),B=Object(i.a)(S,2),W=B[0],I=B[1],M=Object(c.useState)(""),T=Object(i.a)(M,2),_=T[0],L=T[1];Object(c.useEffect)((function(){e(Object(p.p)({incomeType:"MONTHLY BONUS"}))}),[e]);var N=null===t||void 0===t?void 0:t.filter((function(e){return null===e||void 0===e?void 0:e.income_type.toLowerCase().includes(_.toLowerCase())})),P=C*W,F=P-W,k=null===N||void 0===N?void 0:N.slice(F,P);return Object(g.jsxs)(a.a,{children:[Object(g.jsx)(l.a,{title:"Global Community Pool",sx:{mb:3}}),Object(g.jsxs)(y.a,{children:[Object(g.jsxs)(s.a,{children:[Object(g.jsx)(o.a,{children:Object(g.jsx)(o.a,{width:250,m:1,display:"flex",justifyContent:"flex-end",children:Object(g.jsx)(j.a,{label:"Search by Income Type",variant:"outlined",fullWidth:!0,margin:"normal",value:_,onChange:function(e){return L(e.target.value)}})})}),Object(g.jsxs)(r.a,{children:[Object(g.jsx)(d.a,{children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(u.a,{sx:{minWidth:120},children:"No."}),Object(g.jsx)(u.a,{sx:{minWidth:160},children:"Date"}),Object(g.jsx)(u.a,{sx:{minWidth:200},children:"Income Amount"}),Object(g.jsx)(u.a,{sx:{minWidth:120},children:"Bonus Per"}),Object(g.jsx)(u.a,{sx:{minWidth:120},children:"Income Type"})]})}),Object(g.jsx)(h.a,{children:0===(null===k||void 0===k?void 0:k.length)?Object(g.jsx)(b.a,{children:Object(g.jsx)(u.a,{colSpan:5,children:Object(g.jsx)(o.a,{m:4,display:"flex",justifyContent:"center",alignItems:"center",sx:{width:"fit-content"},children:Object(g.jsx)(x.a,{variant:"h6",children:"No Data Found"})})})}):Object(g.jsx)(g.Fragment,{children:null===k||void 0===k?void 0:k.map((function(e,t){return Object(g.jsxs)(b.a,{children:[Object(g.jsx)(u.a,{children:Object(g.jsx)(x.a,{variant:"subtitle2",children:t+1+F})}),Object(g.jsx)(u.a,{children:Object(v.a)(new Date(null===e||void 0===e?void 0:e.calculate_date),"dd MMM yyyy")}),Object(g.jsx)(u.a,{children:null===e||void 0===e?void 0:e.income_amt}),Object(g.jsx)(u.a,{children:null===e||void 0===e?void 0:e.Bonus_percent}),Object(g.jsx)(u.a,{sx:{textTransform:"capitalize"},children:null===e||void 0===e?void 0:e.income_type})]},t)}))})})]})]}),Object(g.jsxs)(o.a,{mt:2,display:"flex",justifyContent:"flex-end",children:[Object(g.jsx)(o.a,{mr:1,children:Object(g.jsx)(O.a,{count:Math.ceil((null===N||void 0===N?void 0:N.length)/W),page:C,onChange:function(e,t){D(t)},color:"primary",showFirstButton:!0,showLastButton:!0})}),Object(g.jsx)(o.a,{mb:2,mr:1,children:Object(g.jsx)(j.a,{select:!0,variant:"outlined",margin:"normal",value:W,onChange:function(e){I(parseInt(e.target.value,10)),D(1)},label:"Rows per page",SelectProps:{native:!0},children:[10,25,50,100].map((function(e){return Object(g.jsx)("option",{value:e,children:e},e)}))})})]})]}),Object(g.jsx)(m.a,{})]})}}}]);
//# sourceMappingURL=156.ec23b450.chunk.js.map