(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[41],{1347:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(3),c=a(37),r=a(25),i=a(259),o=a(260),s=a(1318),l=a(36),b=a(0),u=["links","action","heading","moreLink","sx"];function j(e){var t=e.links,a=e.action,j=e.heading,d=e.moreLink,O=void 0===d?[]:d,p=e.sx,x=Object(c.a)(e,u);return Object(b.jsxs)(i.a,{sx:Object(n.a)({mb:5},p),children:[Object(b.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(b.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:j}),Object(b.jsx)(l.b,Object(n.a)({links:t},x))]}),a&&Object(b.jsx)(i.a,{sx:{flexShrink:0},children:a})]}),Object(b.jsx)(i.a,{sx:{mt:2},children:Object(r.isString)(O)?Object(b.jsx)(s.a,{href:O,target:"_blank",variant:"body2",children:O}):O.map((function(e){return Object(b.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1351:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return b}));var n=a(3),c=a(260),r=a(661),i=a(1352),o=a(259),s=a(0);function l(e){var t=e.title;return Object(s.jsx)(c.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function b(e){var t=e.title,a=e.sx,c=e.children;return Object(s.jsxs)(r.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(i.a,{title:t}),Object(s.jsx)(o.a,{sx:Object(n.a)({p:3,minHeight:180},a),children:c})]})}},1352:function(e,t,a){"use strict";var n=a(6),c=a(7),r=a(2),i=a(1),o=a(13),s=a(180),l=a(260),b=a(14),u=a(9),j=a(153),d=a(181);function O(e){return Object(j.a)("MuiCardHeader",e)}var p=Object(d.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=a(0),f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],h=Object(u.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(r.a)((a={},Object(n.a)(a,"& .".concat(p.title),t.title),Object(n.a)(a,"& .".concat(p.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),m=Object(u.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(u.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(u.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiCardHeader"}),n=a.action,i=a.avatar,u=a.className,j=a.component,d=void 0===j?"div":j,p=a.disableTypography,y=void 0!==p&&p,k=a.subheader,I=a.subheaderTypographyProps,w=a.title,C=a.titleTypographyProps,R=Object(c.a)(a,f),T=Object(r.a)({},a,{component:d,disableTypography:y}),D=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},O,t)}(T),M=w;null==M||M.type===l.a||y||(M=Object(x.jsx)(l.a,Object(r.a)({variant:i?"body2":"h5",className:D.title,component:"span",display:"block"},C,{children:M})));var z=k;return null==z||z.type===l.a||y||(z=Object(x.jsx)(l.a,Object(r.a)({variant:i?"body2":"body1",className:D.subheader,color:"text.secondary",component:"span",display:"block"},I,{children:z}))),Object(x.jsxs)(h,Object(r.a)({className:Object(o.default)(D.root,u),as:d,ref:t,styleProps:T},R,{children:[i&&Object(x.jsx)(m,{className:D.avatar,styleProps:T,children:i}),Object(x.jsxs)(g,{className:D.content,styleProps:T,children:[M,z]}),n&&Object(x.jsx)(v,{className:D.action,styleProps:T,children:n})]}))}));t.a=y},1495:function(e,t,a){"use strict";var n=a(7),c=a(2),r=a(1),i=a(13),o=a(180),s=a(9),l=a(14),b=a(153),u=a(181);function j(e){return Object(b.a)("MuiDialogContent",e)}Object(u.a)("MuiDialogContent",["root","dividers"]);var d=a(0),O=["className","dividers"],p=Object(s.a)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return[t.root,a.dividers&&t.dividers]}})((function(e){var t=e.theme,a=e.styleProps;return Object(c.a)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},a.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat(t.palette.divider),borderBottom:"1px solid ".concat(t.palette.divider)}:{".MuiDialogTitle-root + &":{paddingTop:0}})})),x=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiDialogContent"}),r=a.className,s=a.dividers,b=void 0!==s&&s,u=Object(n.a)(a,O),x=Object(c.a)({},a,{dividers:b}),f=function(e){var t=e.classes,a={root:["root",e.dividers&&"dividers"]};return Object(o.a)(a,j,t)}(x);return Object(d.jsx)(p,Object(c.a)({className:Object(i.default)(f.root,r),styleProps:x,ref:t},u))}));t.a=x},1496:function(e,t,a){"use strict";var n=a(7),c=a(2),r=a(1),i=a(13),o=a(180),s=a(9),l=a(14),b=a(153),u=a(181);function j(e){return Object(b.a)("MuiDialogActions",e)}Object(u.a)("MuiDialogActions",["root","spacing"]);var d=a(0),O=["className","disableSpacing"],p=Object(s.a)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return[t.root,!a.disableSpacing&&t.spacing]}})((function(e){var t=e.styleProps;return Object(c.a)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),x=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiDialogActions"}),r=a.className,s=a.disableSpacing,b=void 0!==s&&s,u=Object(n.a)(a,O),x=Object(c.a)({},a,{disableSpacing:b}),f=function(e){var t=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return Object(o.a)(a,j,t)}(x);return Object(d.jsx)(p,Object(c.a)({className:Object(i.default)(f.root,r),styleProps:x,ref:t},u))}));t.a=x},1499:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return b}));var n=a(18),c=a(1),r=a(0),i=c.createContext(null);function o(e){var t=e.children,a=e.value,o=function(){var e=c.useState(null),t=Object(n.a)(e,2),a=t[0],r=t[1];return c.useEffect((function(){r("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),a}(),s=c.useMemo((function(){return{idPrefix:o,value:a}}),[o,a]);return Object(r.jsx)(i.Provider,{value:s,children:t})}function s(){return c.useContext(i)}function l(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(t)}function b(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(t)}},1500:function(e,t,a){"use strict";var n=a(2),c=a(7),r=a(1),i=a(2571),o=a(1499),s=a(0),l=["children"],b=r.forwardRef((function(e,t){var a=e.children,b=Object(c.a)(e,l),u=Object(o.d)();if(null===u)throw new TypeError("No TabContext provided");var j=r.Children.map(a,(function(e){return r.isValidElement(e)?r.cloneElement(e,{"aria-controls":Object(o.b)(u,e.props.value),id:Object(o.c)(u,e.props.value)}):null}));return Object(s.jsx)(i.a,Object(n.a)({},b,{ref:t,value:u.value,children:j}))}));t.a=b},1507:function(e,t,a){"use strict";var n=a(2),c=a(7),r=a(1),i=a(13),o=a(180),s=a(260),l=a(9),b=a(14),u=a(153),j=a(181);function d(e){return Object(u.a)("MuiDialogTitle",e)}Object(j.a)("MuiDialogTitle",["root"]);var O=a(444),p=a(0),x=["className","id"],f=Object(l.a)(s.a,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),h=r.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiDialogTitle"}),s=a.className,l=a.id,u=Object(c.a)(a,x),j=a,h=function(e){var t=e.classes;return Object(o.a)({root:["root"]},d,t)}(j),m=r.useContext(O.a).titleId,v=void 0===m?l:m;return Object(p.jsx)(f,Object(n.a)({component:"h2",className:Object(i.default)(h.root,s),styleProps:j,ref:t,variant:"h6",id:v},u))}));t.a=h},1508:function(e,t,a){"use strict";var n=a(2),c=a(7),r=a(1),i=a(13),o=a(9),s=a(14),l=a(180),b=a(153),u=a(181);function j(e){return Object(b.a)("MuiTabPanel",e)}Object(u.a)("MuiTabPanel",["root"]);var d=a(1499),O=a(0),p=["children","className","value"],x=Object(o.a)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(3)}})),f=r.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTabPanel"}),r=a.children,o=a.className,b=a.value,u=Object(c.a)(a,p),f=Object(n.a)({},a),h=function(e){var t=e.classes;return Object(l.a)({root:["root"]},j,t)}(f),m=Object(d.d)();if(null===m)throw new TypeError("No TabContext provided");var v=Object(d.b)(m,b),g=Object(d.c)(m,b);return Object(O.jsx)(x,Object(n.a)({"aria-labelledby":g,className:Object(i.default)(h.root,o),hidden:b!==m.value,id:v,ref:t,role:"tabpanel",styleProps:f},u,{children:b===m.value&&r}))}));t.a=f},1568:function(e,t,a){"use strict";var n=a(7),c=a(2),r=a(1),i=a(180),o=a(9),s=a(14),l=a(260),b=a(153),u=a(181);function j(e){return Object(b.a)("MuiDialogContentText",e)}Object(u.a)("MuiDialogContentText",["root"]);var d=a(0),O=["children"],p=Object(o.a)(l.a,{shouldForwardProp:function(e){return Object(o.b)(e)||"classes"===e},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),x=r.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiDialogContentText"}),r=Object(n.a)(a,O),o=function(e){var t=e.classes,a=Object(i.a)({root:["root"]},j,t);return Object(c.a)({},t,a)}(r);return Object(d.jsx)(p,Object(c.a)({component:"p",variant:"body1",color:"text.secondary",ref:t,styleProps:r},a,{classes:o}))}));t.a=x},1605:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19A7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7a7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83a1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06a.33.33 0 0 0 .1-.06a.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3A9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z"/>',width:24,height:24}},2555:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Ce}));var n=a(18),c=a(1),r=a(9),i=a(259),o=a(1330),s=a(2600),l=a(1499),b=a(1500),u=a(1508),j=a(26),d=a(436),O=a(1347),p=a(661),x=a(435),f=[{type:"slide in",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"slide out",values:["slideOutUp","slideOutDown","slideOutLeft","slideOutRight"]},{type:"fade in",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"fade out",values:["fadeOut","fadeOutUp","fadeOutDown","fadeOutLeft","fadeOutRight"]},{type:"zoom in",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"zoom out",values:["zoomOut","zoomOutUp","zoomOutDown","zoomOutLeft","zoomOutRight"]},{type:"bounce in",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"bounce out",values:["bounceOut","bounceOutUp","bounceOutDown","bounceOutLeft","bounceOutRight"]},{type:"flip in",values:["flipInX","flipInY"]},{type:"flip out",values:["flipOutX","flipOutY"]},{type:"scale in",values:["scaleInX","scaleInY"]},{type:"scale out",values:["scaleOutX","scaleOutY"]},{type:"rotate in",values:["rotateIn"]},{type:"rotate out",values:["rotateOut"]}],h=a(3),m=a(37),v=a(22),g=a(1605),y=a.n(g),k=a(223),I=a(1340),w=a(1342),C=a(36),R=a(0),T=["isText","isMulti","onChangeText","onChangeMulti","onRefresh"];function D(e){var t=e.isText,a=e.isMulti,n=e.onChangeText,c=e.onChangeMulti,r=e.onRefresh,i=Object(m.a)(e,T);return Object(R.jsxs)(k.a,Object(h.a)(Object(h.a)({direction:"row",alignItems:"center",justifyContent:"space-between"},i),{},{children:[Object(R.jsx)(I.a,{control:Object(R.jsx)(w.a,{checked:t,onChange:n}),label:"Text Object"}),Object(R.jsxs)(k.a,{direction:"row",alignItems:"center",children:[!t&&Object(R.jsx)(I.a,{control:Object(R.jsx)(w.a,{checked:a,onChange:c}),label:"Multi Item"}),Object(R.jsx)(C.e,{onClick:r,children:Object(R.jsx)(v.a,{icon:y.a,width:20,height:20})})]})]}))}var M=a(660),z=a(1301),L=a(260),P=a(1306),S=a(105);function U(e){var t=e.variantTypes,a=e.selectVariant,n=e.onChangeVariant,c=e.sx;return Object(R.jsx)(M.a,{variant:"outlined",sx:Object(h.a)({height:480},c),children:Object(R.jsx)(S.a,{children:Object(R.jsx)(z.a,{value:a,onChange:n,sx:{px:1,py:1},children:t.map((function(e){return Object(R.jsxs)(i.a,{sx:{my:1.5},children:[Object(R.jsx)(L.a,{variant:"overline",sx:{px:1,mb:1,display:"block"},children:e.type}),e.values.map((function(e){return Object(R.jsx)(I.a,{value:e,label:e,control:Object(R.jsx)(P.a,{sx:{display:"none"}}),sx:Object(h.a)(Object(h.a)({px:1,py:.5,mx:0,my:.25,width:"100%",borderRadius:.75,color:"text.secondary"},a===e&&{color:"warning.contrastText"}),a===e&&{bgcolor:"warning.main"})},e)}))]},e.type)}))})})})}var V=a(433),N=a(135),A=a(10),B=a.n(A);function Y(e){var t;switch(e){case"slideInUp":t=N.Z;break;case"slideInDown":t=N.W;break;case"slideInLeft":t=N.X;break;case"slideInRight":t=N.Y;break;case"slideOutUp":t=N.db;break;case"slideOutDown":t=N.ab;break;case"slideOutLeft":t=N.bb;break;case"slideOutRight":t=N.cb;break;case"fadeIn":t=N.t;break;case"fadeInUp":t=N.x;break;case"fadeInDown":t=N.u;break;case"fadeInLeft":t=N.v;break;case"fadeInRight":t=N.w;break;case"fadeOut":t=N.y;break;case"fadeOutUp":t=N.C;break;case"fadeOutDown":t=N.z;break;case"fadeOutLeft":t=N.A;break;case"fadeOutRight":t=N.B;break;case"zoomIn":t=N.fb;break;case"zoomInUp":t=N.jb;break;case"zoomInDown":t=N.gb;break;case"zoomInLeft":t=N.hb;break;case"zoomInRight":t=N.ib;break;case"zoomOut":t=N.kb;break;case"zoomOutLeft":t=N.mb;break;case"zoomOutRight":t=N.nb;break;case"zoomOutUp":t=N.ob;break;case"zoomOutDown":t=N.lb;break;case"bounceIn":t=N.f;break;case"bounceInUp":t=N.j;break;case"bounceInDown":t=N.g;break;case"bounceInLeft":t=N.h;break;case"bounceInRight":t=N.i;break;case"bounceOut":t=N.k;break;case"bounceOutUp":t=N.o;break;case"bounceOutDown":t=N.l;break;case"bounceOutLeft":t=N.m;break;case"bounceOutRight":t=N.n;break;case"flipInX":t=N.D;break;case"flipInY":t=N.E;break;case"flipOutX":t=N.F;break;case"flipOutY":t=N.G;break;case"scaleInX":t=N.S;break;case"scaleInY":t=N.T;break;case"scaleOutX":t=N.U;break;case"scaleOutY":t=N.V;break;case"rotateIn":t=N.Q;break;case"rotateOut":t=N.R;break;case"kenburnsTop":t=N.K;break;case"kenburnsBottom":t=N.H;break;case"kenburnsLeft":t=N.I;break;case"kenburnsRight":t=N.J;break;case"panTop":t=N.O;break;case"panBottom":t=N.L;break;case"panLeft":t=N.M;break;case"panRight":t=N.N;break;case"color2x":t=N.p;break;case"color3x":t=N.q;break;case"color4x":t=N.r;break;case"color5x":t=N.s;break;default:t=e}return t}Y.propTypes={variant:B.a.string};var X=["isText","isMulti","selectVariant"],H=["/static/mock-images/feeds/feed_6.jpg","/static/mock-images/feeds/feed_6.jpg","/static/mock-images/feeds/feed_6.jpg","/static/mock-images/feeds/feed_6.jpg","/static/mock-images/feeds/feed_6.jpg"];function _(e){var t=e.isText,a=e.isMulti,n=e.selectVariant,c=Object(m.a)(e,X),r=a?H:H.slice(0,1);return Object(R.jsx)(M.a,Object(h.a)(Object(h.a)({sx:{p:3,minHeight:480,display:"flex",overflow:"hidden",alignItems:"center",justifyContent:"center",bgcolor:"background.neutral"}},c),{},{children:t?Object(R.jsx)(N.c,{open:!0,initial:"initial",children:Object(R.jsx)(N.e,{text:"digibots",variants:Y(n)})}):Object(R.jsx)(N.c,{open:!0,initial:"initial",children:r.map((function(e,t){return Object(R.jsx)(i.a,{component:V.a.img,src:e,variants:Y(n),sx:{my:2,width:480,borderRadius:1,objectFit:"cover",height:a?72:320,boxShadow:function(e){return e.customShadows.z8}}},t)}))})}))}function G(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(!1),o=Object(n.a)(i,2),s=o[0],l=o[1],b=Object(c.useState)(!1),u=Object(n.a)(b,2),j=u[0],d=u[1],O=Object(c.useState)("slideInUp"),h=Object(n.a)(O,2),m=h[0],v=h[1];return Object(R.jsxs)(p.a,{sx:{p:3},children:[Object(R.jsx)(x.a,{container:!0,sx:{mb:3},children:Object(R.jsx)(x.a,{item:!0,xs:9,children:Object(R.jsx)(D,{isText:j,isMulti:s,onChangeText:function(e){return d(e.target.checked)},onChangeMulti:function(e){return l(e.target.checked)},onRefresh:function(){return r(a+1)}})})}),Object(R.jsxs)(x.a,{container:!0,spacing:3,children:[Object(R.jsx)(x.a,{item:!0,xs:9,children:Object(R.jsx)(_,{isText:j,isMulti:s,selectVariant:m},a)}),Object(R.jsx)(x.a,{item:!0,xs:3,children:Object(R.jsx)(U,{variantTypes:f,selectVariant:m,onChangeVariant:function(e){r(a+1),v(e.target.value)}})})]})]})}var W=a(56);function F(){var e=Object(W.a)(),t=e.palette.primary.light,a=e.palette.primary.main,n=e.palette.primary.dark;return Object(R.jsxs)(i.a,{component:V.a.svg,viewBox:"0 0 512 512",sx:{width:240,height:240,strokeWidth:4,stroke:a},children:[Object(R.jsxs)("defs",{children:[Object(R.jsxs)("linearGradient",{x1:"100%",y1:"9.946%",x2:"50%",y2:"50%",id:"a",children:[Object(R.jsx)("stop",{stopColor:n,offset:"0%"}),Object(R.jsx)("stop",{stopColor:a,offset:"100%"})]}),Object(R.jsxs)("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"b",children:[Object(R.jsx)("stop",{stopColor:t,offset:"0%"}),Object(R.jsx)("stop",{stopColor:a,offset:"100%"})]}),Object(R.jsxs)("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"c",children:[Object(R.jsx)("stop",{stopColor:t,offset:"0%"}),Object(R.jsx)("stop",{stopColor:a,offset:"100%"})]})]}),Object(R.jsxs)("g",{fill:"none",fillRule:"nonzero",children:[Object(R.jsx)(V.a.path,Object(h.a)(Object(h.a)({},N.P),{},{d:"M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z",fill:"url(#a)"})),Object(R.jsx)(V.a.path,Object(h.a)(Object(h.a)({},N.P),{},{d:"M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994",fill:"url(#b)"})),Object(R.jsx)(V.a.path,Object(h.a)(Object(h.a)({},N.P),{},{d:"M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48",fill:"url(#c)"}))]})]})}var E=a(267),J=a.n(E),q=a(1331),K=a(1319),Q=a(1320);function Z(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(N.a,{children:Object(R.jsx)(q.a,{variant:"contained",children:"Button"})}),Object(R.jsx)(N.a,{children:Object(R.jsx)(K.a,{size:"small",children:Object(R.jsx)(v.a,{icon:J.a,width:20,height:20})})}),Object(R.jsx)(N.a,{children:Object(R.jsx)(Q.a,{color:"primary",children:Object(R.jsx)(v.a,{icon:J.a,width:20,height:20})})})]})}function $(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(N.a,{mediumClick:!0,children:Object(R.jsx)(q.a,{variant:"contained",size:"large",children:"Button"})}),Object(R.jsx)(N.a,{mediumClick:!0,children:Object(R.jsx)(K.a,{children:Object(R.jsx)(v.a,{icon:J.a,width:20,height:20})})}),Object(R.jsx)(N.a,{mediumClick:!0,children:Object(R.jsx)(Q.a,{color:"primary",children:Object(R.jsx)(v.a,{icon:J.a,width:24,height:24})})})]})}var ee=a(1351),te={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function ae(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(R.jsxs)(x.a,{container:!0,spacing:3,children:[Object(R.jsx)(x.a,{item:!0,xs:12,md:6,children:Object(R.jsx)(ee.a,{title:"Small Click",sx:te,children:Object(R.jsx)(Z,{})})}),Object(R.jsx)(x.a,{item:!0,xs:12,md:6,children:Object(R.jsx)(ee.a,{title:"Medium Click",sx:te,children:Object(R.jsx)($,{})})}),Object(R.jsx)(x.a,{item:!0,xs:12,md:6,children:Object(R.jsxs)(ee.a,{title:"Path",sx:te,children:[Object(R.jsx)(i.a,{sx:{position:"absolute",right:0,top:32},children:Object(R.jsx)(C.e,{onClick:function(){return r(a+1)},children:Object(R.jsx)(v.a,{icon:y.a,width:20,height:20})})}),Object(R.jsx)(F,{},a)]})})]})}var ne=["onRefresh","sx"];function ce(e){var t=e.onRefresh,a=e.sx,n=Object(m.a)(e,ne);return Object(R.jsx)(M.a,Object(h.a)(Object(h.a)({sx:Object(h.a)({display:"flex",alignItems:"center",justifyContent:"flex-end"},a)},n),{},{children:Object(R.jsx)(C.e,{onClick:t,children:Object(R.jsx)(v.a,{icon:y.a,width:20,height:20})})}))}var re=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}],ie=a(21),oe=["selectVariant","sx"];function se(e){var t=e.selectVariant,a=e.sx,n=Object(m.a)(e,oe);return Object(R.jsx)(M.a,Object(h.a)(Object(h.a)({sx:Object(h.a)({height:480,overflow:"hidden",bgcolor:"background.neutral"},a)},n),{},{children:Object(R.jsx)(S.a,{children:Object(ie.a)(Array(40)).map((function(e,a){return Object(R.jsx)(N.d,{variants:Y(t),children:Object(R.jsx)(i.a,{sx:{my:2,mx:"auto",height:72,maxWidth:480,display:"flex",borderRadius:1,alignItems:"center",justifyContent:"center",bgcolor:"background.paper",boxShadow:function(e){return e.customShadows.z8}},children:Object(R.jsxs)(L.a,{variant:"body2",children:["Item ",a+1]})})},a)}))})}))}function le(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)("slideInUp"),o=Object(n.a)(i,2),s=o[0],l=o[1];return Object(R.jsxs)(p.a,{sx:{p:3},children:[Object(R.jsx)(x.a,{container:!0,sx:{mb:3},children:Object(R.jsx)(x.a,{item:!0,xs:9,children:Object(R.jsx)(ce,{onRefresh:function(){return r(a+1)}})})}),Object(R.jsxs)(x.a,{container:!0,spacing:3,children:[Object(R.jsx)(x.a,{item:!0,xs:9,children:Object(R.jsx)(se,{selectVariant:s},a)}),Object(R.jsx)(x.a,{item:!0,xs:3,children:Object(R.jsx)(U,{variantTypes:re,selectVariant:s,onChangeVariant:function(e){r(a+1),l(e.target.value)}})})]})]})}var be=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}],ue=a(1507),je=a(1495),de=a(1568),Oe=a(1496),pe=["isOpen","onOpen","onClose","selectVariant"];function xe(e){var t=e.isOpen,a=e.onOpen,n=e.onClose,c=e.selectVariant,r=Object(m.a)(e,pe);return Object(R.jsxs)(M.a,Object(h.a)(Object(h.a)({sx:{height:480,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.neutral"}},r),{},{children:[Object(R.jsx)(q.a,{variant:"contained",onClick:a,children:"Click Me!"}),Object(R.jsxs)(N.b,{open:t,onClose:n,animate:Y(c),children:[Object(R.jsx)(ue.a,{id:"alert-dialog-title",children:"Use Google's location service?"}),Object(R.jsx)(je.a,{children:Object(R.jsx)(de.a,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(R.jsxs)(Oe.a,{children:[Object(R.jsx)(q.a,{variant:"contained",onClick:n,children:"Disagree"}),Object(R.jsx)(q.a,{onClick:n,autoFocus:!0,children:"Agree"})]})]})]}))}function fe(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)("slideInUp"),o=Object(n.a)(i,2),s=o[0],l=o[1];return Object(R.jsx)(p.a,{sx:{p:3},children:Object(R.jsxs)(x.a,{container:!0,spacing:3,children:[Object(R.jsx)(x.a,{item:!0,xs:9,children:Object(R.jsx)(xe,{isOpen:a,onOpen:function(){return r(!0)},onClose:function(){return r(!1)},selectVariant:s})}),Object(R.jsx)(x.a,{item:!0,xs:3,children:Object(R.jsx)(U,{variantTypes:be,selectVariant:s,onChangeVariant:function(e){l(e.target.value)}})})]})})}var he=[{type:"kenburns",values:["kenburnsTop","kenburnsBottom","kenburnsLeft","kenburnsRight"]},{type:"pan",values:["panTop","panBottom","panLeft","panRight"]},{type:"color change",values:["color2x","color3x","color4x","color5x"]}],me=["onRefresh"];function ve(e){var t=e.onRefresh,a=Object(m.a)(e,me);return Object(R.jsx)(M.a,Object(h.a)(Object(h.a)({sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"}},a),{},{children:Object(R.jsx)(C.e,{onClick:t,children:Object(R.jsx)(v.a,{icon:y.a,width:20,height:20})})}))}var ge=["selectVariant"];function ye(e){var t=e.selectVariant,a=Object(m.a)(e,ge),n=t.includes("kenburns");return Object(R.jsx)(M.a,Object(h.a)(Object(h.a)({sx:{height:480,width:"100%",overflow:"hidden",boxShadow:function(e){return e.customShadows.z8}}},a),{},{children:n?Object(R.jsx)(i.a,Object(h.a)(Object(h.a)({component:V.a.img,src:"/static/mock-images/feeds/feed_8.jpg"},Y(t)),{},{sx:{width:"100%",height:"100%",objectFit:"cover"}})):Object(R.jsx)(i.a,Object(h.a)(Object(h.a)({component:V.a.div},Y(t)),{},{sx:{height:"100%",width:"100%"}}))}))}function ke(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)("kenburnsTop"),o=Object(n.a)(i,2),s=o[0],l=o[1];return Object(R.jsxs)(p.a,{sx:{p:3},children:[Object(R.jsx)(x.a,{container:!0,sx:{mb:3},children:Object(R.jsx)(x.a,{item:!0,xs:9,children:Object(R.jsx)(ve,{onRefresh:function(){return r(a+1)}})})}),Object(R.jsxs)(x.a,{container:!0,spacing:3,children:[Object(R.jsx)(x.a,{item:!0,xs:9,children:Object(R.jsx)(ye,{selectVariant:s},a)}),Object(R.jsx)(x.a,{item:!0,xs:3,children:Object(R.jsx)(U,{variantTypes:he,selectVariant:s,onChangeVariant:function(e){r(a+1),l(e.target.value)}})})]})]})}var Ie=[{label:"In View",component:Object(R.jsx)(G,{})},{label:"Scroll",component:Object(R.jsx)(le,{})},{label:"Dialog",component:Object(R.jsx)(fe,{})},{label:"Background",component:Object(R.jsx)(ke,{})},{label:"Other",component:Object(R.jsx)(ae,{})}],we=Object(r.a)(d.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function Ce(){var e=Object(c.useState)("In View"),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(R.jsxs)(we,{title:"Components: Animate | Digibot",children:[Object(R.jsx)(i.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(R.jsx)(o.a,{maxWidth:"lg",children:Object(R.jsx)(O.a,{heading:"Animate",links:[{name:"Components",href:j.c.components},{name:"Animate"}],moreLink:"https://www.framer.com/api/motion"})})}),Object(R.jsx)(o.a,{maxWidth:"lg",children:Object(R.jsxs)(l.a,{value:a,children:[Object(R.jsx)(i.a,{sx:{mb:5},children:Object(R.jsx)(b.a,{onChange:function(e,t){r(t)},children:Ie.map((function(e){return Object(R.jsx)(s.a,{label:e.label,value:e.label,disableRipple:!0},e.label)}))})}),Ie.map((function(e){return Object(R.jsx)(u.a,{value:e.label,children:e.component},e.label)}))]})})]})}}}]);
//# sourceMappingURL=41.a1916f66.chunk.js.map