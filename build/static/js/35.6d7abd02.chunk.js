(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[35],{1347:function(e,t,o){"use strict";o.d(t,"a",(function(){return j}));var n=o(3),r=o(37),a=o(25),c=o(259),i=o(260),s=o(1318),l=o(36),d=o(0),u=["links","action","heading","moreLink","sx"];function j(e){var t=e.links,o=e.action,j=e.heading,b=e.moreLink,p=void 0===b?[]:b,h=e.sx,v=Object(r.a)(e,u);return Object(d.jsxs)(c.a,{sx:Object(n.a)({mb:5},h),children:[Object(d.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(d.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:j}),Object(d.jsx)(l.b,Object(n.a)({links:t},v))]}),o&&Object(d.jsx)(c.a,{sx:{flexShrink:0},children:o})]}),Object(d.jsx)(c.a,{sx:{mt:2},children:Object(a.isString)(p)?Object(d.jsx)(s.a,{href:p,target:"_blank",variant:"body2",children:p}):p.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1351:function(e,t,o){"use strict";o.d(t,"b",(function(){return l})),o.d(t,"a",(function(){return d}));var n=o(3),r=o(260),a=o(661),c=o(1352),i=o(259),s=o(0);function l(e){var t=e.title;return Object(s.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,o=e.sx,r=e.children;return Object(s.jsxs)(a.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(c.a,{title:t}),Object(s.jsx)(i.a,{sx:Object(n.a)({p:3,minHeight:180},o),children:r})]})}},1352:function(e,t,o){"use strict";var n=o(6),r=o(7),a=o(2),c=o(1),i=o(13),s=o(180),l=o(260),d=o(14),u=o(9),j=o(153),b=o(181);function p(e){return Object(j.a)("MuiCardHeader",e)}var h=Object(b.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),v=o(0),f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],g=Object(u.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var o;return Object(a.a)((o={},Object(n.a)(o,"& .".concat(h.title),t.title),Object(n.a)(o,"& .".concat(h.subheader),t.subheader),o),t.root)}})({display:"flex",alignItems:"center",padding:16}),O=Object(u.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),x=Object(u.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),m=Object(u.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=c.forwardRef((function(e,t){var o=Object(d.a)({props:e,name:"MuiCardHeader"}),n=o.action,c=o.avatar,u=o.className,j=o.component,b=void 0===j?"div":j,h=o.disableTypography,y=void 0!==h&&h,w=o.subheader,I=o.subheaderTypographyProps,M=o.title,S=o.titleTypographyProps,C=Object(r.a)(o,f),A=Object(a.a)({},o,{component:b,disableTypography:y}),k=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(A),z=M;null==z||z.type===l.a||y||(z=Object(v.jsx)(l.a,Object(a.a)({variant:c?"body2":"h5",className:k.title,component:"span",display:"block"},S,{children:z})));var P=w;return null==P||P.type===l.a||y||(P=Object(v.jsx)(l.a,Object(a.a)({variant:c?"body2":"body1",className:k.subheader,color:"text.secondary",component:"span",display:"block"},I,{children:P}))),Object(v.jsxs)(g,Object(a.a)({className:Object(i.default)(k.root,u),as:b,ref:t,styleProps:A},C,{children:[c&&Object(v.jsx)(O,{className:k.avatar,styleProps:A,children:c}),Object(v.jsxs)(m,{className:k.content,styleProps:A,children:[z,P]}),n&&Object(v.jsx)(x,{className:k.action,styleProps:A,children:n})]}))}));t.a=y},1467:function(e,t,o){"use strict";o.d(t,"a",(function(){return h}));var n=o(6),r=o(3),a=o(1569),c=o(1570),i=o(1571),s=o(9),l=o(260),d=o(1295),u=o(1318),j=o(0),b=Object(s.a)("div")((function(e){var t,o=e.theme,a="light"===o.palette.mode;return{"& ul, & ol":Object(r.a)(Object(r.a)({},o.typography.body1),{},{paddingLeft:o.spacing(5),"& li":{lineHeight:2}}),"& blockquote":(t={lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:o.spacing(3,3,3,8),borderRadius:o.shape.borderRadiusMd,backgroundColor:o.palette.background.neutral,color:"".concat(o.palette.text.secondary," !important")},Object(n.a)(t,o.breakpoints.up("md"),{width:"80%"}),Object(n.a)(t,"& p, & span",{marginBottom:"0 !important",fontSize:"inherit !important",fontFamily:"Georgia, serif !important",color:"".concat(o.palette.text.secondary," !important")}),Object(n.a)(t,"&:before",{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:o.palette.text.disabled}),t),"& pre, & pre > code":{fontSize:16,overflowX:"auto",whiteSpace:"pre",padding:o.spacing(2),color:o.palette.common.white,borderRadius:o.shape.borderRadius,backgroundColor:o.palette.grey[a?900:50016]},"& code":{fontSize:14,borderRadius:4,whiteSpace:"pre",padding:o.spacing(.2,.5),color:o.palette.warning[a?"darker":"lighter"],backgroundColor:o.palette.warning[a?"lighter":"darker"],"&.hljs":{padding:0,backgroundColor:"transparent"}}}})),p={h1:function(e){var t=Object.assign({},e);return Object(j.jsx)(l.a,Object(r.a)({variant:"h1"},t))},h2:function(e){var t=Object.assign({},e);return Object(j.jsx)(l.a,Object(r.a)({variant:"h2"},t))},h3:function(e){var t=Object.assign({},e);return Object(j.jsx)(l.a,Object(r.a)({variant:"h3"},t))},h4:function(e){var t=Object.assign({},e);return Object(j.jsx)(l.a,Object(r.a)({variant:"h4"},t))},h5:function(e){var t=Object.assign({},e);return Object(j.jsx)(l.a,Object(r.a)({variant:"h5"},t))},h6:function(e){var t=Object.assign({},e);return Object(j.jsx)(l.a,Object(r.a)({variant:"h6"},t))},hr:function(e){var t=Object.assign({},e);return Object(j.jsx)(d.a,Object(r.a)({sx:{my:3}},t))},a:function(e){var t=Object.assign({},e);return t.href.includes("http")?Object(j.jsx)(u.a,Object(r.a)({target:"_blank",rel:"nofollow noreferrer noopener"},t)):Object(j.jsx)(u.a,Object(r.a)({},t))}};function h(e){var t=Object.assign({},e);return Object(j.jsx)(b,{children:Object(j.jsx)(a.a,Object(r.a)({rehypePlugins:[c.a,i.a],components:p},t))})}},1495:function(e,t,o){"use strict";var n=o(7),r=o(2),a=o(1),c=o(13),i=o(180),s=o(9),l=o(14),d=o(153),u=o(181);function j(e){return Object(d.a)("MuiDialogContent",e)}Object(u.a)("MuiDialogContent",["root","dividers"]);var b=o(0),p=["className","dividers"],h=Object(s.a)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var o=e.styleProps;return[t.root,o.dividers&&t.dividers]}})((function(e){var t=e.theme,o=e.styleProps;return Object(r.a)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},o.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat(t.palette.divider),borderBottom:"1px solid ".concat(t.palette.divider)}:{".MuiDialogTitle-root + &":{paddingTop:0}})})),v=a.forwardRef((function(e,t){var o=Object(l.a)({props:e,name:"MuiDialogContent"}),a=o.className,s=o.dividers,d=void 0!==s&&s,u=Object(n.a)(o,p),v=Object(r.a)({},o,{dividers:d}),f=function(e){var t=e.classes,o={root:["root",e.dividers&&"dividers"]};return Object(i.a)(o,j,t)}(v);return Object(b.jsx)(h,Object(r.a)({className:Object(c.default)(f.root,a),styleProps:v,ref:t},u))}));t.a=v},1508:function(e,t,o){"use strict";var n=o(2),r=o(7),a=o(1),c=o(13),i=o(180),s=o(260),l=o(9),d=o(14),u=o(153),j=o(181);function b(e){return Object(u.a)("MuiDialogTitle",e)}Object(j.a)("MuiDialogTitle",["root"]);var p=o(444),h=o(0),v=["className","id"],f=Object(l.a)(s.a,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),g=a.forwardRef((function(e,t){var o=Object(d.a)({props:e,name:"MuiDialogTitle"}),s=o.className,l=o.id,u=Object(r.a)(o,v),j=o,g=function(e){var t=e.classes;return Object(i.a)({root:["root"]},b,t)}(j),O=a.useContext(p.a).titleId,x=void 0===O?l:O;return Object(h.jsx)(f,Object(n.a)({component:"h2",className:Object(c.default)(g.root,s),styleProps:j,ref:t,variant:"h6",id:x},u))}));t.a=g},1565:function(e,t,o){"use strict";var n=o(662);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o(663)),a=o(0),c=(0,r.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=c},1566:function(e,t,o){"use strict";var n=o(662);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o(663)),a=o(0),c=(0,r.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle");t.default=c},2352:function(e,t){t.__esModule=!0,t.default={body:'<g fill="currentColor"><path d="M11.28 13H7a1 1 0 0 1-.86-.5a1 1 0 0 1 0-1L9.28 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h4.25z"/><path d="M15.83 6h-4.25l-2.86 5H13a1 1 0 0 1 .86.5a1 1 0 0 1 0 1L10.72 18h5.11A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6zM21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"/></g>',width:24,height:24}},2353:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M19.54 5.08A10.61 10.61 0 0 0 11.91 2a10 10 0 0 0-.05 20a2.58 2.58 0 0 0 2.53-1.89a2.52 2.52 0 0 0-.57-2.28a.5.5 0 0 1 .37-.83h1.65A6.15 6.15 0 0 0 22 11.33a8.48 8.48 0 0 0-2.46-6.25zm-12.7 9.66a1.5 1.5 0 1 1 .4-2.08a1.49 1.49 0 0 1-.4 2.08zM8.3 9.25a1.5 1.5 0 1 1-.55-2a1.5 1.5 0 0 1 .55 2zM11 7a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 11 7zm5.75.8a1.5 1.5 0 1 1 .55-2a1.5 1.5 0 0 1-.55 2z"/>',width:24,height:24}},2354:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.69 11.86l-3 2.86a.49.49 0 0 1-.15.1a.54.54 0 0 1-.16.1a.94.94 0 0 1-.76 0a1 1 0 0 1-.33-.21l-3-3a1 1 0 0 1 1.42-1.42l1.29 1.3V8a1 1 0 0 1 2 0v5.66l1.31-1.25a1 1 0 0 1 1.38 1.45z"/>',width:24,height:24}},2355:function(e,t){t.__esModule=!0,t.default={body:'<path d="M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37a1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41zm13.14 6.14l-4.78-6a1 1 0 0 0-1.41-.15a1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z" fill="currentColor"/>',width:24,height:24}},2356:function(e,t,o){"use strict";var n=o(662);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o(663)),a=o(0),c=(0,r.default)((0,a.jsx)("path",{d:"M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}),"Adb");t.default=c},2357:function(e,t,o){"use strict";var n=o(662);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o(663)),a=o(0),c=(0,r.default)((0,a.jsx)("path",{d:"M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z"}),"AirplanemodeActive");t.default=c},2358:function(e,t,o){"use strict";var n=o(662);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var o=c(t);if(o&&o.has(e))return o.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,o&&o.set(e,n)}(o(1));var r=n(o(663)),a=o(0);function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(c=function(e){return e?o:t})(e)}var i=(0,r.default)((0,a.jsx)("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"}),"Apple");t.default=i},2589:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return E}));var n=o(22),r=o(461),a=o.n(r),c=o(2352),i=o.n(c),s=o(310),l=o.n(s),d=o(2353),u=o.n(d),j=o(2354),b=o.n(j),p=o(2356),h=o.n(p),v=o(1565),f=o.n(v),g=o(2358),O=o.n(g),x=o(1566),m=o.n(x),y=o(2357),w=o.n(y),I=o(9),M=o(259),S=o(1330),C=o(223),A=o(322),k=o(26),z=o(436),P=o(18),_=o(1),R=o(2355),D=o.n(R),T=o(1336),H=o(1320),L=o(1508),F=o(1495),N=o(1467),W=o(135),V=o(0);function B(e){var t=e.source,o=e.title,r=e.sx,a=Object(_.useState)(!1),c=Object(P.a)(a,2),i=c[0],s=c[1];return Object(V.jsxs)(M.a,{sx:r,children:[Object(V.jsx)(T.a,{title:"View Code",children:Object(V.jsx)(H.a,{onClick:function(){return s(!0)},color:i?"primary":"default",sx:{right:8,bottom:8,position:"absolute"},children:Object(V.jsx)(n.a,{icon:D.a,width:20,height:20})})}),Object(V.jsxs)(W.b,{fullWidth:!0,open:i,maxWidth:"md",scroll:"paper",onClose:function(){return s(!1)},children:[o&&Object(V.jsx)(L.a,{children:o}),Object(V.jsx)(F.a,{children:Object(V.jsx)(N.a,{children:t})})]})]})}var G=o(454),J=o(1347),q=o(1351),X=Object(I.a)(z.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),Y={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function E(){return Object(V.jsxs)(X,{title:"Foundations: Icons | Digibot",children:[Object(V.jsx)(M.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(V.jsx)(S.a,{maxWidth:"lg",children:Object(V.jsx)(J.a,{heading:"Icons",links:[{name:"Components",href:k.c.components},{name:"Icons"}],moreLink:["https://material-ui.com/components/material-icons","https://iconify.design/icon-sets"]})})}),Object(V.jsx)(S.a,{maxWidth:"lg",children:Object(V.jsxs)(C.a,{spacing:3,children:[Object(V.jsx)(M.a,{sx:{position:"relative"},children:Object(V.jsxs)(q.a,{title:"Material Icons",sx:Y,children:[Object(V.jsx)(B,{source:'\n~~~ js\n\nimport AdbIcon from \'@material-ui/icons/Adb\';\nimport AddIcon from \'@material-ui/icons/Add\';\nimport AppleIcon from \'@material-ui/icons/Apple\';\nimport AccountCircleIcon from \'@material-ui/icons/AccountCircle\';\nimport AirplanemodeActiveIcon from \'@material-ui/icons/AirplanemodeActive\';\n\n// ----------------------------------------------------------------------\n\nfunction IconMaterial() {\n  return (\n    <>\n      <AdbIcon color="action" />\n      <AddIcon color="disabled" />\n      <AccountCircleIcon color="error" />\n      <AirplanemodeActiveIcon color="inherit" />\n      <AppleIcon color="primary" />\n      <AppleIcon color="secondary" />\n    </>\n  );\n}\n\n\n~~~'}),Object(V.jsx)(h.a,{color:"action"}),Object(V.jsx)(f.a,{color:"disabled"}),Object(V.jsx)(m.a,{color:"error"}),Object(V.jsx)(w.a,{color:"inherit"}),Object(V.jsx)(O.a,{color:"primary"}),Object(V.jsx)(O.a,{color:"secondary"})]})}),Object(V.jsx)(M.a,{sx:{position:"relative"},children:Object(V.jsxs)(q.a,{title:"Iconify Icons",sx:Y,children:[Object(V.jsx)(B,{source:"\n~~~ js\n\nimport { Icon } from '@iconify/react';\nimport { SvgIcon } from '@material-ui/core';\nimport clockFill from '@iconify/icons-eva/clock-fill';\nimport chargingFill from '@iconify/icons-eva/charging-fill';\nimport alertCircleFill from '@iconify/icons-eva/alert-circle-fill';\nimport colorPaletteFill from '@iconify/icons-eva/color-palette-fill';\nimport arrowCircleDownFill from '@iconify/icons-eva/arrow-circle-down-fill';\n\n// ----------------------------------------------------------------------\n\nfunction IconIconify() {\n  return (\n    <>\n      <SvgIcon color=\"action\">\n        <Icon icon={alertCircleFill} width={24} height={24} />\n      </SvgIcon>\n      <SvgIcon color=\"disabled\">\n        <Icon icon={chargingFill} width={24} height={24} />\n      </SvgIcon>\n      <SvgIcon color=\"error\">\n        <Icon icon={arrowCircleDownFill} width={24} height={24} />\n      </SvgIcon>\n      <SvgIcon color=\"inherit\">\n        <Icon icon={clockFill} width={24} height={24} />\n      </SvgIcon>\n      <SvgIcon color=\"primary\">\n        <Icon icon={colorPaletteFill} width={24} height={24} />\n      </SvgIcon>\n      <SvgIcon color=\"secondary\">\n      <Icon icon={colorPaletteFill} width={24} height={24} />\n    </SvgIcon>\n    </>\n  );\n}\n\n\n~~~"}),Object(V.jsx)(A.a,{color:"action",children:Object(V.jsx)(n.a,{icon:l.a,width:24,height:24})}),Object(V.jsx)(A.a,{color:"disabled",children:Object(V.jsx)(n.a,{icon:i.a,width:24,height:24})}),Object(V.jsx)(A.a,{color:"error",children:Object(V.jsx)(n.a,{icon:b.a,width:24,height:24})}),Object(V.jsx)(A.a,{color:"inherit",children:Object(V.jsx)(n.a,{icon:a.a,width:24,height:24})}),Object(V.jsx)(A.a,{color:"primary",children:Object(V.jsx)(n.a,{icon:u.a,width:24,height:24})}),Object(V.jsx)(A.a,{color:"secondary",children:Object(V.jsx)(n.a,{icon:u.a,width:24,height:24})})]})}),Object(V.jsx)(M.a,{sx:{position:"relative"},children:Object(V.jsxs)(q.a,{title:"Local Icons",sx:Y,children:[Object(V.jsx)(B,{source:'\n~~~ js\n\nimport  SvgIconStyle  from \'src/components/SvgIconStyle\';\n\n// ----------------------------------------------------------------------\n\nfunction IconLocal() {\n  return (\n    <>\n      <SvgIconStyle src="/static/icons/browser-edge.svg" />\n      <SvgIconStyle src="/static/icons/browser-edge.svg" color="action" />\n      <SvgIconStyle src="/static/icons/browser-edge.svg" color="disabled" />\n      <SvgIconStyle src="/static/icons/browser-edge.svg" color="primary" />\n      <SvgIconStyle src="/static/icons/browser-edge.svg" color="secondary" />\n      <SvgIconStyle src="/static/icons/elephant.svg" color="info" />\n      <SvgIconStyle src="/static/icons/json-logo.svg" color="success" />\n      <SvgIconStyle src="/static/icons/love-camera.svg" color="warning" />\n      <SvgIconStyle src="/static/icons/shield.svg" color="error" />\n    </>\n  );\n}\n\n~~~'}),Object(V.jsx)(G.a,{src:"/static/icons/browser-edge.svg"}),Object(V.jsx)(G.a,{src:"/static/icons/browser-edge.svg",color:"action"}),Object(V.jsx)(G.a,{src:"/static/icons/browser-edge.svg",color:"disabled"}),Object(V.jsx)(G.a,{src:"/static/icons/browser-edge.svg",color:"primary"}),Object(V.jsx)(G.a,{src:"/static/icons/browser-edge.svg",color:"secondary"}),Object(V.jsx)(G.a,{src:"/static/icons/elephant.svg",color:"info"}),Object(V.jsx)(G.a,{src:"/static/icons/json-logo.svg",color:"success"}),Object(V.jsx)(G.a,{src:"/static/icons/love-camera.svg",color:"warning"}),Object(V.jsx)(G.a,{src:"/static/icons/shield.svg",color:"error"})]})})]})})]})}}}]);
//# sourceMappingURL=35.6d7abd02.chunk.js.map