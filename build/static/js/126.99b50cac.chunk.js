(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[126],{1347:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(3),c=n(37),i=n(25),r=n(259),s=n(260),l=n(1318),j=n(36),o=n(0),d=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,h=e.moreLink,x=void 0===h?[]:h,g=e.sx,u=Object(c.a)(e,d);return Object(o.jsxs)(r.a,{sx:Object(a.a)({mb:5},g),children:[Object(o.jsxs)(r.a,{sx:{display:"flex",alignItems:"center"},children:[Object(o.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(o.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:b}),Object(o.jsx)(j.b,Object(a.a)({links:t},u))]}),n&&Object(o.jsx)(r.a,{sx:{flexShrink:0},children:n})]}),Object(o.jsx)(r.a,{sx:{mt:2},children:Object(i.isString)(x)?Object(o.jsx)(l.a,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return Object(o.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},2563:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return be}));var a=n(9),c=n(259),i=n(1330),r=n(223),s=n(661),l=n(1352),j=n(26),o=n(436),d=n(1347),b=n(1368),h=n(1369),x=n(1370),g=n(1371),u=n(1385),O=n(1372),m=n(105),p=n(0);function f(e,t,n,a,c){return{name:e,calories:t,fat:n,carbs:a,protein:c}}var v=[f("Frozen yoghurt",159,6,24,4),f("Ice cream sandwich",237,9,37,4.3),f("Eclair",262,16,24,6),f("Cupcake",305,3.7,67,4.3),f("Gingerbread",356,16,49,3.9)];function k(){return Object(p.jsx)(m.a,{children:Object(p.jsx)(b.a,{sx:{minWidth:800,mt:3},children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(x.a,{children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(u.a,{children:"Dessert (100g serving)"}),Object(p.jsx)(u.a,{align:"right",children:"Calories"}),Object(p.jsx)(u.a,{align:"right",children:"Fat\xa0(g)"}),Object(p.jsx)(u.a,{align:"right",children:"Carbs\xa0(g)"}),Object(p.jsx)(u.a,{align:"right",children:"Protein\xa0(g)"})]})}),Object(p.jsx)(O.a,{children:v.map((function(e){return Object(p.jsxs)(g.a,{children:[Object(p.jsx)(u.a,{component:"th",scope:"row",children:e.name}),Object(p.jsx)(u.a,{align:"right",children:e.calories}),Object(p.jsx)(u.a,{align:"right",children:e.fat}),Object(p.jsx)(u.a,{align:"right",children:e.carbs}),Object(p.jsx)(u.a,{align:"right",children:e.protein})]},e.name)}))})]})})})}var y=n(18),C=n(22),S=n(1),P=n(548),w=n.n(P),I=n(197),D=n.n(I),F=n(1320),W=n(549),B=n(260);function z(e){var t=e.row,n=Object(S.useState)(!1),a=Object(y.a)(n,2),i=a[0],r=a[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(g.a,{children:[Object(p.jsx)(u.a,{children:Object(p.jsx)(F.a,{size:"small",onClick:function(){return r(!i)},children:Object(p.jsx)(C.a,{icon:i?w.a:D.a})})}),Object(p.jsx)(u.a,{component:"th",scope:"row",children:t.name}),Object(p.jsx)(u.a,{align:"right",children:t.calories}),Object(p.jsx)(u.a,{align:"right",children:t.fat}),Object(p.jsx)(u.a,{align:"right",children:t.carbs}),Object(p.jsx)(u.a,{align:"right",children:t.protein})]}),Object(p.jsx)(g.a,{children:Object(p.jsx)(u.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(p.jsx)(W.a,{in:i,timeout:"auto",unmountOnExit:!0,children:Object(p.jsxs)(c.a,{sx:{margin:1},children:[Object(p.jsx)(B.a,{variant:"h6",gutterBottom:!0,component:"div",children:"History"}),Object(p.jsxs)(h.a,{size:"small","aria-label":"purchases",children:[Object(p.jsx)(x.a,{children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(u.a,{children:"Date"}),Object(p.jsx)(u.a,{children:"Customer"}),Object(p.jsx)(u.a,{align:"right",children:"Amount"}),Object(p.jsx)(u.a,{align:"right",children:"Total price ($)"})]})}),Object(p.jsx)(O.a,{children:t.history.map((function(e){return Object(p.jsxs)(g.a,{children:[Object(p.jsx)(u.a,{component:"th",scope:"row",children:e.date}),Object(p.jsx)(u.a,{children:e.customerId}),Object(p.jsx)(u.a,{align:"right",children:e.amount}),Object(p.jsx)(u.a,{align:"right",children:Math.round(e.amount*t.price*100)/100})]},e.date)}))})]})]})})})})]})}function T(e,t,n,a,c,i){return{name:e,calories:t,fat:n,carbs:a,protein:c,price:i,history:[{date:"2020-01-05",customerId:"11091700",amount:3},{date:"2020-01-02",customerId:"Anonymous",amount:1}]}}var G=[T("Frozen yoghurt",159,6,24,4,3.99),T("Ice cream sandwich",237,9,37,4.3,4.99),T("Eclair",262,16,24,6,3.79),T("Cupcake",305,3.7,67,4.3,2.5),T("Gingerbread",356,16,49,3.9,1.5)];function L(){return Object(p.jsx)(m.a,{children:Object(p.jsx)(b.a,{sx:{minWidth:800,mt:3},children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(x.a,{children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(u.a,{}),Object(p.jsx)(u.a,{children:"Dessert (100g serving)"}),Object(p.jsx)(u.a,{align:"right",children:"Calories"}),Object(p.jsx)(u.a,{align:"right",children:"Fat\xa0(g)"}),Object(p.jsx)(u.a,{align:"right",children:"Carbs\xa0(g)"}),Object(p.jsx)(u.a,{align:"right",children:"Protein\xa0(g)"})]})}),Object(p.jsx)(O.a,{children:G.map((function(e){return Object(p.jsx)(z,{row:e},e.name)}))})]})})})}var R=n(1309),A=n(2592),U=n(1340),E=n(1342),N=n(3),H=n(1431),J=n(1919);function M(e){var t=e.order,n=e.orderBy,a=e.rowCount,i=e.headLabel,r=e.numSelected,s=e.onRequestSort,l=e.onSelectAllClick;return Object(p.jsx)(x.a,{children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(u.a,{padding:"checkbox",children:Object(p.jsx)(R.a,{indeterminate:r>0&&r<a,checked:a>0&&r===a,onChange:l,inputProps:{"aria-label":"select all desserts"}})}),i.map((function(e){return Object(p.jsx)(u.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:n===e.id&&t,children:Object(p.jsxs)(J.a,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(a=e.id,function(e){s(e,a)}),children:[e.label,n===e.id?Object(p.jsx)(c.a,{component:"span",sx:Object(N.a)({},H.a),children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var a}))]})})}var K=n(453),q=n.n(K),_=n(1466),X=n.n(_),$=n(56),Q=n(1328),V=n(1336),Y=Object(a.a)(Q.a)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}}));function Z(e){var t=e.numSelected,n="light"===Object($.a)().palette.mode;return Object(p.jsxs)(Y,{sx:Object(N.a)({},t>0&&{color:n?"primary.main":"text.primary",bgcolor:n?"primary.lighter":"primary.dark"}),children:[t>0?Object(p.jsxs)(B.a,{color:"inherit",variant:"subtitle1",component:"div",children:[t," selected"]}):Object(p.jsx)(B.a,{variant:"h6",id:"tableTitle",component:"div",children:"Sorting & Selecting"}),t>0?Object(p.jsx)(V.a,{title:"Delete",children:Object(p.jsx)(F.a,{children:Object(p.jsx)(C.a,{icon:q.a})})}):Object(p.jsx)(V.a,{title:"Filter list",children:Object(p.jsx)(F.a,{children:Object(p.jsx)(C.a,{icon:X.a})})})]})}function ee(e,t,n,a,c){return{name:e,calories:t,fat:n,carbs:a,protein:c}}var te=[ee("Cupcake",305,3.7,67,4.3),ee("Donut",452,25,51,4.9),ee("Eclair",262,16,24,6),ee("Frozen yoghurt",159,6,24,4),ee("Gingerbread",356,16,49,3.9),ee("Honeycomb",408,3.2,87,6.5),ee("Ice cream sandwich",237,9,37,4.3),ee("Jelly Bean",375,0,94,0),ee("KitKat",518,26,65,7),ee("Lollipop",392,.2,98,0),ee("Marshmallow",318,0,81,2),ee("Nougat",360,19,9,37),ee("Oreo",437,18,63,4)],ne=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert\xa0(100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat\xa0(g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs\xa0(g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein\xa0(g)"}];function ae(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function ce(e,t){return"desc"===e?function(e,n){return ae(e,n,t)}:function(e,n){return-ae(e,n,t)}}function ie(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}function re(){var e=Object(S.useState)("asc"),t=Object(y.a)(e,2),n=t[0],a=t[1],i=Object(S.useState)("calories"),r=Object(y.a)(i,2),s=r[0],l=r[1],j=Object(S.useState)([]),o=Object(y.a)(j,2),d=o[0],x=o[1],f=Object(S.useState)(0),v=Object(y.a)(f,2),k=v[0],C=v[1],P=Object(S.useState)(!1),w=Object(y.a)(P,2),I=w[0],D=w[1],F=Object(S.useState)(5),W=Object(y.a)(F,2),B=W[0],z=W[1],T=k>0?Math.max(0,(1+k)*B-te.length):0;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Z,{numSelected:d.length}),Object(p.jsx)(m.a,{children:Object(p.jsx)(b.a,{sx:{minWidth:800},children:Object(p.jsxs)(h.a,{size:I?"small":"medium",children:[Object(p.jsx)(M,{order:n,orderBy:s,headLabel:ne,numSelected:d.length,onRequestSort:function(e,t){a(s===t&&"asc"===n?"desc":"asc"),l(t)},rowCount:te.length,onSelectAllClick:function(e){if(e.target.checked){var t=te.map((function(e){return e.name}));x(t)}else x([])}}),Object(p.jsxs)(O.a,{children:[ie(te,ce(n,s)).slice(k*B,k*B+B).map((function(e,t){var n,a=(n=e.name,-1!==d.indexOf(n)),c="enhanced-table-checkbox-".concat(t);return Object(p.jsxs)(g.a,{hover:!0,onClick:function(t){return function(e,t){var n=d.indexOf(t),a=[];-1===n?a=a.concat(d,t):0===n?a=a.concat(d.slice(1)):n===d.length-1?a=a.concat(d.slice(0,-1)):n>0&&(a=a.concat(d.slice(0,n),d.slice(n+1))),x(a)}(0,e.name)},role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[Object(p.jsx)(u.a,{padding:"checkbox",children:Object(p.jsx)(R.a,{checked:a})}),Object(p.jsx)(u.a,{component:"th",id:c,scope:"row",padding:"none",children:e.name}),Object(p.jsx)(u.a,{align:"right",children:e.calories}),Object(p.jsx)(u.a,{align:"right",children:e.fat}),Object(p.jsx)(u.a,{align:"right",children:e.carbs}),Object(p.jsx)(u.a,{align:"right",children:e.protein})]},e.name)})),T>0&&Object(p.jsx)(g.a,{style:{height:(I?33:53)*T},children:Object(p.jsx)(u.a,{colSpan:6})})]})]})})}),Object(p.jsxs)(c.a,{sx:{position:"relative"},children:[Object(p.jsx)(A.a,{rowsPerPageOptions:[5,10,25],component:"div",count:te.length,rowsPerPage:B,page:k,onPageChange:function(e,t){C(t)},onRowsPerPageChange:function(e){z(parseInt(e.target.value,10)),C(0)}}),Object(p.jsx)(c.a,{sx:{px:3,py:1.5,top:0,position:{md:"absolute"}},children:Object(p.jsx)(U.a,{control:Object(p.jsx)(E.a,{checked:I,onChange:function(e){D(e.target.checked)}}),label:"Dense padding"})})]})]})}function se(e,t,n,a){return{name:e,code:t,population:n,size:a,density:n/a}}var le=[se("India","IN",1324171354,3287263),se("China","CN",1403500365,9596961),se("Italy","IT",60483973,301340),se("United States","US",327167434,9833520),se("Canada","CA",37602103,9984670),se("Australia","AU",25475400,7692024),se("Germany","DE",83019200,357578),se("Ireland","IE",4857e3,70273),se("Mexico","MX",126577691,1972550),se("Japan","JP",126317e3,377973),se("France","FR",67022e3,640679),se("United Kingdom","GB",67545757,242495),se("Russia","RU",146793744,17098246),se("Nigeria","NG",200962417,923768),se("Brazil","BR",210147125,8515767)],je=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"density",label:"Density",minWidth:170,align:"right",format:function(e){return e.toFixed(2)}}];function oe(){var e=Object(S.useState)(0),t=Object(y.a)(e,2),n=t[0],a=t[1],c=Object(S.useState)(10),i=Object(y.a)(c,2),r=i[0],s=i[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m.a,{children:Object(p.jsx)(b.a,{sx:{minWidth:800,maxHeight:400},children:Object(p.jsxs)(h.a,{stickyHeader:!0,children:[Object(p.jsxs)(x.a,{children:[Object(p.jsxs)(g.a,{children:[Object(p.jsx)(u.a,{align:"center",colSpan:2,sx:{background:function(e){return e.palette.background.paper}},children:"Country"}),Object(p.jsx)(u.a,{align:"center",colSpan:3,sx:{background:function(e){return e.palette.background.paper}},children:"Details"})]}),Object(p.jsx)(g.a,{children:je.map((function(e){return Object(p.jsx)(u.a,{align:e.align,style:{top:56,minWidth:e.minWidth},children:e.label},e.id)}))})]}),Object(p.jsx)(O.a,{children:le.slice(n*r,n*r+r).map((function(e){return Object(p.jsx)(g.a,{hover:!0,role:"checkbox",tabIndex:-1,children:je.map((function(t){var n=e[t.id];return Object(p.jsx)(u.a,{align:t.align,children:t.format&&"number"===typeof n?t.format(n):n},t.id)}))},e.code)}))})]})})}),Object(p.jsx)(A.a,{page:n,component:"div",count:le.length,rowsPerPage:r,onPageChange:function(e,t){a(t)},rowsPerPageOptions:[10,25,100],onRowsPerPageChange:function(e){s(+e.target.value),a(0)}})]})}var de=Object(a.a)(o.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function be(){return Object(p.jsxs)(de,{title:"Components: Table | Digibot",children:[Object(p.jsx)(c.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(p.jsx)(i.a,{maxWidth:"lg",children:Object(p.jsx)(d.a,{heading:"Table",links:[{name:"Components",href:j.c.components},{name:"Table"}],moreLink:"https://next.material-ui.com/components/tables"})})}),Object(p.jsx)(i.a,{maxWidth:"lg",children:Object(p.jsxs)(r.a,{spacing:5,children:[Object(p.jsxs)(s.a,{children:[Object(p.jsx)(l.a,{title:"Basic Table"}),Object(p.jsx)(k,{})]}),Object(p.jsx)(s.a,{children:Object(p.jsx)(re,{})}),Object(p.jsxs)(s.a,{children:[Object(p.jsx)(l.a,{title:"Grouping & FixedHeader"}),Object(p.jsx)(oe,{})]}),Object(p.jsxs)(s.a,{children:[Object(p.jsx)(l.a,{title:"Collapsible Table"}),Object(p.jsx)(L,{})]})]})})]})}}}]);
//# sourceMappingURL=126.99b50cac.chunk.js.map