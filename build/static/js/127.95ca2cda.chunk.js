(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[127],{1347:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(3),i=a(37),r=a(25),l=a(259),c=a(260),s=a(1318),o=a(36),d=a(0),u=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,a=e.action,b=e.heading,h=e.moreLink,m=void 0===h?[]:h,j=e.sx,g=Object(i.a)(e,u);return Object(d.jsxs)(l.a,{sx:Object(n.a)({mb:5},j),children:[Object(d.jsxs)(l.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(l.a,{sx:{flexGrow:1},children:[Object(d.jsx)(c.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(o.b,Object(n.a)({links:t},g))]}),a&&Object(d.jsx)(l.a,{sx:{flexShrink:0},children:a})]}),Object(d.jsx)(l.a,{sx:{mt:2},children:Object(r.isString)(m)?Object(d.jsx)(s.a,{href:m,target:"_blank",variant:"body2",children:m}):m.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},2594:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return J}));var n=a(9),i=a(259),r=a(1330),l=a(223),c=a(661),s=a(1352),o=a(26),d=a(436),u=a(1347),b=a(21),h=a(22),m=a(442),j=a.n(m),g=a(1917),x=a(4),f=a(36),p=a(0),O=[{field:"id",headerName:"ID",width:120},{field:"firstName",headerName:"First name",width:160,editable:!0},{field:"lastName",headerName:"Last name",width:160,editable:!0},{field:"age",headerName:"Age",type:"number",width:120,editable:!0,align:"center",headerAlign:"center"},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",flex:1,valueGetter:function(e){return"".concat(e.getValue(e.id,"firstName")||""," ").concat(e.getValue(e.id,"lastName")||"")}},{field:"action",headerName:" ",width:80,align:"right",sortable:!1,disableColumnMenu:!0,renderCell:function(){return Object(p.jsx)(f.e,{children:Object(p.jsx)(i.a,{component:h.a,icon:j.a,sx:{width:20,height:20}})})}}],v=Object(b.a)(Array(30)).map((function(e,t){return{id:x.a.id(t),lastName:x.a.name.lastName(t),firstName:x.a.name.firstName(t),age:x.a.number.age(t)}}));function w(){return Object(p.jsx)(g.a,{columns:O,rows:v,checkboxSelection:!0,disableSelectionOnClick:!0})}var y=a(3),N=a(25),C=a(273),k=a.n(C),D=a(56),A=a(260),S=a(1572),V=a(1574),I=a(2571),L=a(413),G=a(89),T=a(345);var z=[{field:"id",hide:!0},{field:"avatar",headerName:"Avatar",width:64,sortable:!1,filterable:!1,disableColumnMenu:!0,align:"center",renderCell:function(e){var t=e.getValue(e.id,"name");return Object(p.jsx)(f.a,{color:Object(L.a)(t).color,sx:{width:36,height:36},children:Object(L.a)(t).name})}},{field:"name",headerName:"Name",flex:1},{field:"email",headerName:"Email",flex:1,renderCell:function(e){var t=e.getValue(e.id,"email");return Object(p.jsx)(A.a,{variant:"body2",sx:{textDecoration:"underline"},noWrap:!0,children:t})}},{field:"lastLogin",type:"dateTime",headerName:"Last login",width:200,align:"right",headerAlign:"right"},{field:"rating",type:"number",headerName:"Rating",width:160,disableColumnMenu:!0,renderCell:function(e){var t=e.getValue(e.id,"rating");return Object(p.jsx)(S.a,{size:"small",value:t,precision:.5,readOnly:!0})}},{field:"status",type:"singleSelect",headerName:"Status",width:120,valueOptions:["online","away","busy"],renderCell:function(e){return function(e){var t="light"===Object(D.a)().palette.mode;return Object(p.jsx)(T.a,{variant:t?"ghost":"filled",color:("busy"===e?"error":"away"===e&&"warning")||"success",sx:{textTransform:"capitalize",mx:"auto"},children:e})}(e.getValue(e.id,"status"))}},{field:"isAdmin",type:"boolean",width:120,renderCell:function(e){var t=e.getValue(e.id,"isAdmin");return Object(p.jsx)(l.a,{alignItems:"center",sx:{width:1,textAlign:"center"},children:t?Object(p.jsx)(i.a,{component:h.a,icon:k.a,sx:{width:20,height:20,color:"primary.main"}}):"-"})}},{field:"performance",type:"number",headerName:"Performance",width:160,renderCell:function(e){var t=e.getValue(e.id,"performance");return Object(p.jsxs)(l.a,{direction:"row",alignItems:"center",sx:{px:2,width:1,height:1},children:[Object(p.jsx)(V.a,{value:t,variant:"determinate",color:(t<30?"error":t>30&&t<70&&"warning")||"primary",sx:{width:1,height:6}}),Object(p.jsx)(A.a,{variant:"caption",sx:{width:90},children:Object(G.d)(t)})]})}},{field:"action",headerName:" ",width:80,align:"right",sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:function(e){var t=e.row.id;return Object(p.jsx)(f.e,{onClick:function(){console.log("selectedID",t)},children:Object(p.jsx)(i.a,{component:h.a,icon:j.a,sx:{width:20,height:20}})})}}],M=Object(b.a)(Array(36)).map((function(e,t){return{id:x.a.id(t),name:x.a.name.fullName(t),email:x.a.email(t),lastLogin:x.a.time(t),performance:x.a.number.percent(t),rating:x.a.number.rating(t),status:Object(N.sample)(["online","away","busy"]),isAdmin:x.a.boolean(t)}}));function W(){var e=Object(g.d)(),t=e.state,a=e.apiRef;return Object(p.jsx)(I.a,{color:"primary",count:t.pagination.pageCount,page:t.pagination.page+1,onChange:function(e,t){return a.current.setPage(t-1)}})}function B(e){var t=e.item,a=e.applyValue;return Object(p.jsx)(i.a,{sx:{p:1,height:1,alignItems:"flex-end",display:"flex"},children:Object(p.jsx)(S.a,{size:"small",precision:.5,placeholder:"Filter value",value:Number(t.value),onChange:function(e,n){a(Object(y.a)(Object(y.a)({},t),{},{value:n}))}})})}function F(){if(z.length>0){var e=z.find((function(e){return"rating"===e.field})),t=z.findIndex((function(e){return"rating"===e.field})),a=Object(g.c)().map((function(e){return Object(y.a)(Object(y.a)({},e),{},{InputComponent:B})}));z[t]=Object(y.a)(Object(y.a)({},e),{},{filterOperators:a})}return Object(p.jsx)(g.a,{checkboxSelection:!0,disableSelectionOnClick:!0,rows:M,columns:z,pagination:!0,pageSize:10,components:{Toolbar:g.b,Pagination:W}})}var P=Object(n.a)(d.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function J(){return Object(p.jsxs)(P,{title:"Components: DataGrid | Digibot",children:[Object(p.jsx)(i.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(p.jsx)(r.a,{maxWidth:"lg",children:Object(p.jsx)(u.a,{heading:"DataGrid",links:[{name:"Components",href:o.c.components},{name:"DataGrid"}],moreLink:"https://material-ui.com/components/data-grid"})})}),Object(p.jsx)(r.a,{maxWidth:"lg",children:Object(p.jsxs)(l.a,{spacing:5,children:[Object(p.jsxs)(c.a,{children:[Object(p.jsx)(s.a,{title:"Basic",sx:{mb:2}}),Object(p.jsx)(i.a,{sx:{height:390},children:Object(p.jsx)(w,{})})]}),Object(p.jsxs)(c.a,{children:[Object(p.jsx)(s.a,{title:"Custom",sx:{mb:2}}),Object(p.jsx)(i.a,{sx:{height:720},children:Object(p.jsx)(F,{})})]})]})})]})}}}]);
//# sourceMappingURL=127.95ca2cda.chunk.js.map