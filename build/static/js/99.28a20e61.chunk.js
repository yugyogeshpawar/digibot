(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[99],{1347:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(3),r=a(37),c=a(25),i=a(259),s=a(260),o=a(1318),l=a(36),d=a(0),j=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,a=e.action,b=e.heading,u=e.moreLink,x=void 0===u?[]:u,O=e.sx,h=Object(r.a)(e,j);return Object(d.jsxs)(i.a,{sx:Object(n.a)({mb:5},O),children:[Object(d.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(d.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(l.b,Object(n.a)({links:t},h))]}),a&&Object(d.jsx)(i.a,{sx:{flexShrink:0},children:a})]}),Object(d.jsx)(i.a,{sx:{mt:2},children:Object(c.isString)(x)?Object(d.jsx)(o.a,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return Object(d.jsx)(o.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1351:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return d}));var n=a(3),r=a(260),c=a(661),i=a(1352),s=a(259),o=a(0);function l(e){var t=e.title;return Object(o.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,a=e.sx,r=e.children;return Object(o.jsxs)(c.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(o.jsx)(i.a,{title:t}),Object(o.jsx)(s.a,{sx:Object(n.a)({p:3,minHeight:180},a),children:r})]})}},1352:function(e,t,a){"use strict";var n=a(6),r=a(7),c=a(2),i=a(1),s=a(13),o=a(180),l=a(260),d=a(14),j=a(9),b=a(153),u=a(181);function x(e){return Object(b.a)("MuiCardHeader",e)}var O=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),p=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],m=Object(j.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(n.a)(a,"& .".concat(O.title),t.title),Object(n.a)(a,"& .".concat(O.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),g=Object(j.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(j.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=Object(j.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),n=a.action,i=a.avatar,j=a.className,b=a.component,u=void 0===b?"div":b,O=a.disableTypography,y=void 0!==O&&O,P=a.subheader,C=a.subheaderTypographyProps,k=a.title,w=a.titleTypographyProps,R=Object(r.a)(a,p),B=Object(c.a)({},a,{component:u,disableTypography:y}),T=function(e){var t=e.classes;return Object(o.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,t)}(B),N=k;null==N||N.type===l.a||y||(N=Object(h.jsx)(l.a,Object(c.a)({variant:i?"body2":"h5",className:T.title,component:"span",display:"block"},w,{children:N})));var H=P;return null==H||H.type===l.a||y||(H=Object(h.jsx)(l.a,Object(c.a)({variant:i?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:H}))),Object(h.jsxs)(m,Object(c.a)({className:Object(s.default)(T.root,j),as:u,ref:t,styleProps:B},R,{children:[i&&Object(h.jsx)(g,{className:T.avatar,styleProps:B,children:i}),Object(h.jsxs)(f,{className:T.content,styleProps:B,children:[N,H]}),n&&Object(h.jsx)(v,{className:T.action,styleProps:B,children:n})]}))}));t.a=y},2519:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(18),r=a(1),c=a(9),i=a(259),s=a(1330),o=a(435),l=a(2567),d=a(2592),j=a(26),b=a(436),u=a(1347),x=a(1351),O=a(0),h=Object(c.a)(b.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),p={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{my:1}};function m(){var e=Object(r.useState)(2),t=Object(n.a)(e,2),a=t[0],c=t[1],b=Object(r.useState)(10),m=Object(n.a)(b,2),g=m[0],v=m[1];return Object(O.jsxs)(h,{title:"Components: Pagination | Digibot",children:[Object(O.jsx)(i.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(O.jsx)(s.a,{maxWidth:"lg",children:Object(O.jsx)(u.a,{heading:"Pagination",links:[{name:"Components",href:j.c.components},{name:"Pagination"}],moreLink:"https://next.material-ui.com/components/pagination"})})}),Object(O.jsx)(s.a,{maxWidth:"lg",children:Object(O.jsxs)(o.a,{container:!0,spacing:3,children:[Object(O.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(x.a,{title:"Basic",sx:p,children:[Object(O.jsx)(l.a,{count:10}),Object(O.jsx)(l.a,{count:10,color:"primary"}),Object(O.jsx)(l.a,{count:10,disabled:!0})]})}),Object(O.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(x.a,{title:"Outlined",sx:p,children:[Object(O.jsx)(l.a,{count:10,variant:"outlined"}),Object(O.jsx)(l.a,{count:10,variant:"outlined",color:"primary"}),Object(O.jsx)(l.a,{count:10,variant:"outlined",disabled:!0})]})}),Object(O.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(x.a,{title:"Rounded",sx:p,children:[Object(O.jsx)(l.a,{count:10,shape:"rounded"}),Object(O.jsx)(l.a,{count:10,variant:"outlined",shape:"rounded"}),Object(O.jsx)(l.a,{count:10,shape:"rounded",color:"primary"}),Object(O.jsx)(l.a,{count:10,variant:"outlined",shape:"rounded",color:"primary"})]})}),Object(O.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(x.a,{title:"Size",sx:p,children:[Object(O.jsx)(l.a,{count:10,size:"small"}),Object(O.jsx)(l.a,{count:10}),Object(O.jsx)(l.a,{count:10,size:"large"})]})}),Object(O.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(x.a,{title:"Buttons",sx:p,children:[Object(O.jsx)(l.a,{count:10,showFirstButton:!0,showLastButton:!0}),Object(O.jsx)(l.a,{count:10,hidePrevButton:!0,hideNextButton:!0})]})}),Object(O.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(x.a,{title:"Ranges",sx:p,children:[Object(O.jsx)(l.a,{count:11,defaultPage:6,siblingCount:0}),Object(O.jsx)(l.a,{count:11,defaultPage:6}),Object(O.jsx)(l.a,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),Object(O.jsx)(l.a,{count:11,defaultPage:6,boundaryCount:2})]})}),Object(O.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(x.a,{title:"Table",sx:p,children:Object(O.jsx)(d.a,{component:"div",count:100,page:a,onPageChange:function(e,t){c(t)},rowsPerPage:g,onRowsPerPageChange:function(e){v(parseInt(e.target.value,10)),c(0)}})})})]})})]})}}}]);
//# sourceMappingURL=99.28a20e61.chunk.js.map