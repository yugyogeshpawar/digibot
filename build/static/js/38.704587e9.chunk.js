(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[38],{1347:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var r=a(3),c=a(37),n=a(25),o=a(259),i=a(260),s=a(1318),l=a(36),d=a(0),b=["links","action","heading","moreLink","sx"];function j(e){var t=e.links,a=e.action,j=e.heading,u=e.moreLink,h=void 0===u?[]:u,O=e.sx,p=Object(c.a)(e,b);return Object(d.jsxs)(o.a,{sx:Object(r.a)({mb:5},O),children:[Object(d.jsxs)(o.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(d.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:j}),Object(d.jsx)(l.b,Object(r.a)({links:t},p))]}),a&&Object(d.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(d.jsx)(o.a,{sx:{mt:2},children:Object(n.isString)(h)?Object(d.jsx)(s.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1368:function(e,t,a){"use strict";var r=a(2),c=a(7),n=a(1),o=a(13),i=a(180),s=a(14),l=a(9),d=a(153),b=a(181);function j(e){return Object(d.a)("MuiTableContainer",e)}Object(b.a)("MuiTableContainer",["root"]);var u=a(0),h=["className","component"],O=Object(l.a)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),p=n.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableContainer"}),n=a.className,l=a.component,d=void 0===l?"div":l,b=Object(c.a)(a,h),p=Object(r.a)({},a,{component:d}),f=function(e){var t=e.classes;return Object(i.a)({root:["root"]},j,t)}(p);return Object(u.jsx)(O,Object(r.a)({ref:t,as:d,className:Object(o.default)(f.root,n),styleProps:p},b))}));t.a=p},1369:function(e,t,a){"use strict";var r=a(7),c=a(2),n=a(1),o=a(13),i=a(180),s=a(1353),l=a(14),d=a(9),b=a(153),j=a(181);function u(e){return Object(b.a)("MuiTable",e)}Object(j.a)("MuiTable",["root","stickyHeader"]);var h=a(0),O=["className","component","padding","size","stickyHeader"],p=Object(d.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.styleProps;return Object(c.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(c.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),f="table",v=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTable"}),d=a.className,b=a.component,j=void 0===b?f:b,v=a.padding,m=void 0===v?"normal":v,x=a.size,g=void 0===x?"medium":x,y=a.stickyHeader,w=void 0!==y&&y,M=Object(r.a)(a,O),k=Object(c.a)({},a,{component:j,padding:m,size:g,stickyHeader:w}),C=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(i.a)(a,u,t)}(k),S=n.useMemo((function(){return{padding:m,size:g,stickyHeader:w}}),[m,g,w]);return Object(h.jsx)(s.a.Provider,{value:S,children:Object(h.jsx)(p,Object(c.a)({as:j,role:j===f?null:"table",ref:t,className:Object(o.default)(C.root,d),styleProps:k},M))})}));t.a=v},1370:function(e,t,a){"use strict";var r=a(2),c=a(7),n=a(1),o=a(13),i=a(180),s=a(1349),l=a(14),d=a(9),b=a(153),j=a(181);function u(e){return Object(b.a)("MuiTableHead",e)}Object(j.a)("MuiTableHead",["root"]);var h=a(0),O=["className","component"],p=Object(d.a)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),f={variant:"head"},v="thead",m=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableHead"}),n=a.className,d=a.component,b=void 0===d?v:d,j=Object(c.a)(a,O),m=Object(r.a)({},a,{component:b}),x=function(e){var t=e.classes;return Object(i.a)({root:["root"]},u,t)}(m);return Object(h.jsx)(s.a.Provider,{value:f,children:Object(h.jsx)(p,Object(r.a)({as:b,className:Object(o.default)(x.root,n),ref:t,role:b===v?null:"rowgroup",styleProps:m},j))})}));t.a=m},1371:function(e,t,a){"use strict";var r=a(6),c=a(2),n=a(7),o=a(1),i=a(13),s=a(180),l=a(68),d=a(1349),b=a(14),j=a(9),u=a(153),h=a(181);function O(e){return Object(u.a)("MuiTableRow",e)}var p=Object(h.a)("MuiTableRow",["root","selected","hover","head","footer"]),f=a(0),v=["className","component","hover","selected"],m=Object(j.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(r.a)(t,"&.".concat(p.hover,":hover"),{backgroundColor:a.palette.action.hover}),Object(r.a)(t,"&.".concat(p.selected),{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),x=o.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiTableRow"}),r=a.className,l=a.component,j=void 0===l?"tr":l,u=a.hover,h=void 0!==u&&u,p=a.selected,x=void 0!==p&&p,g=Object(n.a)(a,v),y=o.useContext(d.a),w=Object(c.a)({},a,{component:j,hover:h,selected:x,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),M=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(s.a)(a,O,t)}(w);return Object(f.jsx)(m,Object(c.a)({as:j,ref:t,className:Object(i.default)(M.root,r),role:"tr"===j?null:"row",styleProps:w},g))}));t.a=x},1372:function(e,t,a){"use strict";var r=a(2),c=a(7),n=a(1),o=a(13),i=a(180),s=a(1349),l=a(14),d=a(9),b=a(153),j=a(181);function u(e){return Object(b.a)("MuiTableBody",e)}Object(j.a)("MuiTableBody",["root"]);var h=a(0),O=["className","component"],p=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),f={variant:"body"},v="tbody",m=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableBody"}),n=a.className,d=a.component,b=void 0===d?v:d,j=Object(c.a)(a,O),m=Object(r.a)({},a,{component:b}),x=function(e){var t=e.classes;return Object(i.a)({root:["root"]},u,t)}(m);return Object(h.jsx)(s.a.Provider,{value:f,children:Object(h.jsx)(p,Object(r.a)({className:Object(o.default)(x.root,n),as:b,ref:t,role:b===v?null:"rowgroup",styleProps:m},j))})}));t.a=m},1424:function(e,t,a){"use strict";a(1);var r=a(45),c=a(0);t.a=Object(r.a)(Object(c.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage")},1425:function(e,t,a){"use strict";a(1);var r=a(45),c=a(0);t.a=Object(r.a)(Object(c.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage")},1431:function(e,t,a){"use strict";t.a={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"}},1437:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(3),c=a(37),n=a(660),o=a(260),i=a(0),s=["searchQuery"];function l(e){var t=e.searchQuery,a=void 0===t?"":t,l=Object(c.a)(e,s);return Object(i.jsxs)(n.a,Object(r.a)(Object(r.a)({},l),{},{children:[Object(i.jsx)(o.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(i.jsxs)(o.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(i.jsxs)("strong",{children:['"',a,'"']}),". Try checking for typos or using complete words."]})]}))}},1464:function(e,t){t.__esModule=!0,t.default={body:'<g fill="currentColor"><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"/><path d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1zm6 0a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/></g>',width:24,height:24}},1466:function(e,t){t.__esModule=!0,t.default={body:'<path d="M11 18h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm4 6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z" fill="currentColor"/>',width:24,height:24}},1577:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(5),c=a(274),n=a(447);function o(e,t){var a=e.toLowerCase();return 0===t?Object(n.a)(a):a}function i(e,t){return void 0===t&&(t={}),Object(c.a)(e,Object(r.a)({delimiter:" ",transform:o},t))}},1919:function(e,t,a){"use strict";var r=a(6),c=a(7),n=a(2),o=a(180),i=a(13),s=a(1),l=a(1235),d=a(45),b=a(0),j=Object(d.a)(Object(b.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),u=a(9),h=a(14),O=a(15),p=a(153),f=a(181);function v(e){return Object(p.a)("MuiTableSortLabel",e)}var m=Object(f.a)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),x=["active","children","className","direction","hideSortIcon","IconComponent"],g=Object(u.a)(l.a,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return[t.root,a.active&&t.active]}})((function(e){var t=e.theme;return Object(r.a)({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:t.palette.text.secondary},"&:hover":Object(r.a)({color:t.palette.text.secondary},"& .".concat(m.icon),{opacity:.5})},"&.".concat(m.active),Object(r.a)({color:t.palette.text.primary},"& .".concat(m.icon),{opacity:1,color:t.palette.text.secondary}))})),y=Object(u.a)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:function(e,t){var a=e.styleProps;return[t.icon,t["iconDirection".concat(Object(O.a)(a.direction))]]}})((function(e){var t=e.theme,a=e.styleProps;return Object(n.a)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===a.direction&&{transform:"rotate(0deg)"},"asc"===a.direction&&{transform:"rotate(180deg)"})})),w=s.forwardRef((function(e,t){var a=Object(h.a)({props:e,name:"MuiTableSortLabel"}),r=a.active,s=void 0!==r&&r,l=a.children,d=a.className,u=a.direction,p=void 0===u?"asc":u,f=a.hideSortIcon,m=void 0!==f&&f,w=a.IconComponent,M=void 0===w?j:w,k=Object(c.a)(a,x),C=Object(n.a)({},a,{active:s,direction:p,hideSortIcon:m,IconComponent:M}),S=function(e){var t=e.classes,a=e.direction,r={root:["root",e.active&&"active"],icon:["icon","iconDirection".concat(Object(O.a)(a))]};return Object(o.a)(r,v,t)}(C);return Object(b.jsxs)(g,Object(n.a)({className:Object(i.default)(S.root,d),component:"span",disableRipple:!0,styleProps:C,ref:t},k,{children:[l,m&&!s?null:Object(b.jsx)(y,{as:M,className:Object(i.default)(S.icon),styleProps:C})]}))}));t.a=w},2573:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return fe}));var r=a(18),c=a(25),n=a(22),o=a(1577),i=a(1),s=a(267),l=a.n(s),d=a(32),b=a(9),j=a(56),u=a(1330),h=a(1331),O=a(661),p=a(1368),f=a(1369),v=a(1372),m=a(1371),x=a(1385),g=a(1309),y=a(259),w=a(260),M=a(2592),k=a(122),C=a(437),S=a(184),P=a(89),R=a(26),T=a(90),N=a(436),L=a(345),z=a(105),H=a(1437),D=a(1347),I=a(3),A=a(1431),_=a(1370),B=a(1919),W=a(0);function F(e){var t=e.order,a=e.orderBy,r=e.rowCount,c=e.headLabel,n=e.numSelected,o=e.onRequestSort,i=e.onSelectAllClick;return Object(W.jsx)(_.a,{children:Object(W.jsxs)(m.a,{children:[Object(W.jsx)(x.a,{padding:"checkbox",children:Object(W.jsx)(g.a,{indeterminate:n>0&&n<r,checked:r>0&&n===r,onChange:i})}),c.map((function(e){return Object(W.jsx)(x.a,{align:e.alignRight?"right":"left",sortDirection:a===e.id&&t,children:Object(W.jsxs)(B.a,{hideSortIcon:!0,active:a===e.id,direction:a===e.id?t:"asc",onClick:(r=e.id,function(e){o(e,r)}),children:[e.label,a===e.id?Object(W.jsx)(y.a,{sx:Object(I.a)({},A.a),children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))]})})}var V=a(349),E=a.n(V),Q=a(453),q=a.n(Q),J=a(1466),G=a.n(J),X=a(1328),K=a(1316),U=a(1333),Y=a(1336),Z=a(1320),$=Object(b.a)(X.a)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}})),ee=Object(b.a)(K.a)((function(e){var t=e.theme;return{width:240,transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:t.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));function te(e){var t=e.numSelected,a=e.filterName,r=e.onFilterName,c="light"===Object(j.a)().palette.mode;return Object(W.jsxs)($,{sx:Object(I.a)({},t>0&&{color:c?"primary.main":"text.primary",bgcolor:c?"primary.lighter":"primary.dark"}),children:[t>0?Object(W.jsxs)(w.a,{component:"div",variant:"subtitle1",children:[t," selected"]}):Object(W.jsx)(ee,{value:a,onChange:r,placeholder:"Search product...",startAdornment:Object(W.jsx)(U.a,{position:"start",children:Object(W.jsx)(y.a,{component:n.a,icon:E.a,sx:{color:"text.disabled"}})})}),t>0?Object(W.jsx)(Y.a,{title:"Delete",children:Object(W.jsx)(Z.a,{children:Object(W.jsx)(n.a,{icon:q.a})})}):Object(W.jsx)(Y.a,{title:"Filter list",children:Object(W.jsx)(Z.a,{children:Object(W.jsx)(n.a,{icon:G.a})})})]})}var ae=a(1280),re=a(443),ce=a.n(re),ne=a(1464),oe=a.n(ne),ie=a(442),se=a.n(ie),le=a(657),de=a(1334),be=a(1293),je=a(1294);function ue(e){var t=e.onDelete,a=e.productName,c=Object(i.useRef)(null),o=Object(i.useState)(!1),s=Object(r.a)(o,2),l=s[0],b=s[1];return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(Z.a,{ref:c,onClick:function(){return b(!0)},children:Object(W.jsx)(n.a,{icon:se.a,width:20,height:20})}),Object(W.jsxs)(le.a,{open:l,anchorEl:c.current,onClose:function(){return b(!1)},PaperProps:{sx:{width:200,maxWidth:"100%"}},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(W.jsxs)(de.a,{onClick:t,sx:{color:"text.secondary"},children:[Object(W.jsx)(be.a,{children:Object(W.jsx)(n.a,{icon:oe.a,width:24,height:24})}),Object(W.jsx)(je.a,{primary:"Delete",primaryTypographyProps:{variant:"body2"}})]}),Object(W.jsxs)(de.a,{component:d.b,to:"".concat(R.b.eCommerce.root,"/product/").concat(Object(ae.a)(a),"/edit"),sx:{color:"text.secondary"},children:[Object(W.jsx)(be.a,{children:Object(W.jsx)(n.a,{icon:ce.a,width:24,height:24})}),Object(W.jsx)(je.a,{primary:"Edit",primaryTypographyProps:{variant:"body2"}})]})]})]})}var he=[{id:"name",label:"Product",alignRight:!1},{id:"createdAt",label:"Create at",alignRight:!1},{id:"inventoryType",label:"Status",alignRight:!1},{id:"price",label:"Price",alignRight:!0},{id:""}],Oe=Object(b.a)("img")((function(e){var t=e.theme;return{width:64,height:64,objectFit:"cover",margin:t.spacing(0,2),borderRadius:t.shape.borderRadiusSm}}));function pe(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function fe(){var e=Object(T.a)().themeStretch,t=Object(j.a)(),a=Object(k.c)(),s=Object(k.d)((function(e){return e.product})).products,b=Object(i.useState)(0),I=Object(r.a)(b,2),A=I[0],_=I[1],B=Object(i.useState)("asc"),V=Object(r.a)(B,2),E=V[0],Q=V[1],q=Object(i.useState)([]),J=Object(r.a)(q,2),G=J[0],X=J[1],K=Object(i.useState)(""),U=Object(r.a)(K,2),Y=U[0],Z=U[1],$=Object(i.useState)(5),ee=Object(r.a)($,2),ae=ee[0],re=ee[1],ce=Object(i.useState)("createdAt"),ne=Object(r.a)(ce,2),oe=ne[0],ie=ne[1];Object(i.useEffect)((function(){a(Object(C.l)())}),[a]);var se=A>0?Math.max(0,(1+A)*ae-s.length):0,le=function(e,t,a){var r=e.map((function(e,t){return[e,t]}));return r.sort((function(e,a){var r=t(e[0],a[0]);return 0!==r?r:e[1]-a[1]})),a?Object(c.filter)(e,(function(e){return-1!==e.name.toLowerCase().indexOf(a.toLowerCase())})):r.map((function(e){return e[0]}))}(s,function(e,t){return"desc"===e?function(e,a){return pe(e,a,t)}:function(e,a){return-pe(e,a,t)}}(E,oe),Y),de=0===le.length;return Object(W.jsx)(N.a,{title:"Ecommerce: Product List | Digibot",children:Object(W.jsxs)(u.a,{maxWidth:!e&&"lg",children:[Object(W.jsx)(D.a,{heading:"Product List",links:[{name:"Dashboard",href:R.b.root},{name:"E-Commerce",href:R.b.eCommerce.root},{name:"Product List"}],action:Object(W.jsx)(h.a,{variant:"contained",component:d.b,to:R.b.eCommerce.newProduct,startIcon:Object(W.jsx)(n.a,{icon:l.a}),children:"New Product"})}),Object(W.jsxs)(O.a,{children:[Object(W.jsx)(te,{numSelected:G.length,filterName:Y,onFilterName:function(e){Z(e.target.value)}}),Object(W.jsx)(z.a,{children:Object(W.jsx)(p.a,{sx:{minWidth:800},children:Object(W.jsxs)(f.a,{children:[Object(W.jsx)(F,{order:E,orderBy:oe,headLabel:he,rowCount:s.length,numSelected:G.length,onRequestSort:function(e,t){Q(oe===t&&"asc"===E?"desc":"asc"),ie(t)},onSelectAllClick:function(e){if(e.target.checked){var t=s.map((function(e){return e.name}));X(t)}else X([])}}),Object(W.jsxs)(v.a,{children:[le.slice(A*ae,A*ae+ae).map((function(e){var r=e.id,c=e.name,n=e.cover,i=e.price,s=e.createdAt,l=e.inventoryType,d=-1!==G.indexOf(c);return Object(W.jsxs)(m.a,{hover:!0,tabIndex:-1,role:"checkbox",selected:d,"aria-checked":d,children:[Object(W.jsx)(x.a,{padding:"checkbox",children:Object(W.jsx)(g.a,{checked:d,onChange:function(e){return function(e,t){var a=G.indexOf(t),r=[];-1===a?r=r.concat(G,t):0===a?r=r.concat(G.slice(1)):a===G.length-1?r=r.concat(G.slice(0,-1)):a>0&&(r=r.concat(G.slice(0,a),G.slice(a+1))),X(r)}(0,c)}})}),Object(W.jsx)(x.a,{component:"th",scope:"row",padding:"none",children:Object(W.jsxs)(y.a,{sx:{py:2,display:"flex",alignItems:"center"},children:[Object(W.jsx)(Oe,{alt:c,src:n}),Object(W.jsx)(w.a,{variant:"subtitle2",noWrap:!0,children:c})]})}),Object(W.jsx)(x.a,{style:{minWidth:160},children:Object(S.a)(s)}),Object(W.jsx)(x.a,{style:{minWidth:160},children:Object(W.jsx)(L.a,{variant:"light"===t.palette.mode?"ghost":"filled",color:("out_of_stock"===l?"error":"low_stock"===l&&"warning")||"success",children:Object(o.a)(l)})}),Object(W.jsx)(x.a,{align:"right",children:Object(P.a)(i)}),Object(W.jsx)(x.a,{align:"right",children:Object(W.jsx)(ue,{onDelete:function(){return e=r,void a(Object(C.h)(e));var e},productName:c})})]},r)})),se>0&&Object(W.jsx)(m.a,{style:{height:53*se},children:Object(W.jsx)(x.a,{colSpan:6})})]}),de&&Object(W.jsx)(v.a,{children:Object(W.jsx)(m.a,{children:Object(W.jsx)(x.a,{align:"center",colSpan:6,children:Object(W.jsx)(y.a,{sx:{py:3},children:Object(W.jsx)(H.a,{searchQuery:Y})})})})})]})})}),Object(W.jsx)(M.a,{rowsPerPageOptions:[5,10,25],component:"div",count:s.length,rowsPerPage:ae,page:A,onPageChange:function(e,t){_(t)},onRowsPerPageChange:function(e){re(parseInt(e.target.value,10)),_(0)}})]})]})})}}}]);
//# sourceMappingURL=38.704587e9.chunk.js.map