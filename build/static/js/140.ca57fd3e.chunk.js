(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[140],{1359:function(t,e,o){"use strict";o.d(e,"a",(function(){return b})),o.d(e,"b",(function(){return p})),o.d(e,"c",(function(){return g})),o.d(e,"d",(function(){return h})),o.d(e,"e",(function(){return O})),o.d(e,"f",(function(){return w}));var n=o(3),a=o(1350),r=o(9),c=o(0),i=Object(r.a)(a.b)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:e.spacing(1.5),left:e.spacing(1.5),boxShadow:e.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));function b(t){var e=Object.assign({},t);return Object(c.jsx)(i,Object(n.a)({},e))}var u=Object(r.a)(a.c)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:e.spacing(6),left:e.spacing(1.5),boxShadow:e.customShadows.z8}}));function p(t){var e=Object.assign({},t);return Object(c.jsx)(u,Object(n.a)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0},e))}var s=o(37),l=["onClick"],d=Object(r.a)("svg")((function(t){return{height:20,stroke:"none",cursor:"pointer",fill:t.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function g(t){var e=t.onClick,o=Object(s.a)(t,l);return Object(c.jsx)(a.f,Object(n.a)(Object(n.a)({},o),{},{children:Object(c.jsx)(d,{viewBox:"0 0 24 24",onClick:e,children:Object(c.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}var j=Object(r.a)(a.g)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:e.spacing(6),left:e.spacing(1.5),boxShadow:e.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(e.palette.divider)}}}));function h(t){var e=Object.assign({},t);return Object(c.jsx)(j,Object(n.a)({},e))}var x=["children","onClose"],m=Object(r.a)(a.h)((function(t){var e=t.theme,o="rtl"===e.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:e.spacing(1),boxShadow:e.customShadows.z20,borderRadius:e.shape.borderRadius,backgroundColor:e.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:e.palette.common.white,right:o&&"0",left:o&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:e.palette.grey[800]}}}));function O(t){var e=t.children,o=t.onClose,a=Object(s.a)(t,x);return Object(c.jsx)(m,Object(n.a)(Object(n.a)({tipSize:8,anchor:"bottom",onClose:o,closeButton:!0,closeOnClick:!1},a),{},{children:e}))}var f=["sx"],v=Object(r.a)("div")((function(t){var e=t.theme;return{zIndex:99,position:"absolute",left:e.spacing(1.5),bottom:e.spacing(3.5),boxShadow:e.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:e.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function w(t){var e=t.sx,o=Object(s.a)(t,f);return Object(c.jsx)(v,{sx:e,children:Object(c.jsx)(a.i,Object(n.a)({maxWidth:100,unit:"imperial"},o))})}},1758:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return m}));var n=o(3),a=o(18),r=o(37),c=o(1),i=o(1350),b=o(1359),u=o(9),p=o(68),s=o(1301),l=o(1340),d=o(1306),g=o(0),j=Object(u.a)("div")((function(t){var e=t.theme;return{zIndex:99,minWidth:200,position:"absolute",top:e.spacing(1),right:e.spacing(1),padding:e.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.a)(e.palette.grey[900],.72)}}));function h(t){var e=t.data,o=t.selectedCity,n=t.handleChange;return Object(g.jsx)(j,{children:e.map((function(t){return Object(g.jsx)(s.a,{value:o,onChange:function(e){return n(e,t)},children:Object(g.jsx)(l.a,{value:t.city,label:t.city,control:Object(g.jsx)(d.a,{size:"small"}),sx:{color:"common.white"}})},t.city)}))})}var x=["data"];function m(t){var e=t.data,o=Object(r.a)(t,x),u=Object(c.useState)(e[2].city),p=Object(a.a)(u,2),s=p[0],l=p[1],d=Object(c.useState)({latitude:37.7751,longitude:-122.4193,zoom:10,bearing:0,pitch:0}),j=Object(a.a)(d,2),m=j[0],O=j[1],f=Object(c.useCallback)((function(t,e){var o=e.longitude,n=e.latitude;l(t.target.value),O({longitude:o,latitude:n,zoom:10,transitionInterpolator:new i.a({speed:1.2}),transitionDuration:"auto"})}),[]);return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(i.l,Object(n.a)(Object(n.a)(Object(n.a)({},m),{},{onViewportChange:O,dragRotate:!1},o),{},{children:[Object(g.jsx)(b.f,{}),Object(g.jsx)(b.d,{}),Object(g.jsx)(b.a,{}),Object(g.jsx)(b.b,{}),Object(g.jsx)(h,{data:e,selectedCity:s,handleChange:f})]}))})}}}]);
//# sourceMappingURL=140.ca57fd3e.chunk.js.map