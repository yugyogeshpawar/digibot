(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[104],{1347:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c=a(3),r=a(37),n=a(25),s=a(259),o=a(260),l=a(1318),i=a(36),j=a(0),b=["links","action","heading","moreLink","sx"];function d(e){var t=e.links,a=e.action,d=e.heading,x=e.moreLink,u=void 0===x?[]:x,O=e.sx,h=Object(r.a)(e,b);return Object(j.jsxs)(s.a,{sx:Object(c.a)({mb:5},O),children:[Object(j.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(j.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:d}),Object(j.jsx)(i.b,Object(c.a)({links:t},h))]}),a&&Object(j.jsx)(s.a,{sx:{flexShrink:0},children:a})]}),Object(j.jsx)(s.a,{sx:{mt:2},children:Object(n.isString)(u)?Object(j.jsx)(l.a,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return Object(j.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1351:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return j}));var c=a(3),r=a(260),n=a(661),s=a(1352),o=a(259),l=a(0);function i(e){var t=e.title;return Object(l.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function j(e){var t=e.title,a=e.sx,r=e.children;return Object(l.jsxs)(n.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(l.jsx)(s.a,{title:t}),Object(l.jsx)(o.a,{sx:Object(c.a)({p:3,minHeight:180},a),children:r})]})}},1352:function(e,t,a){"use strict";var c=a(6),r=a(7),n=a(2),s=a(1),o=a(13),l=a(180),i=a(260),j=a(14),b=a(9),d=a(153),x=a(181);function u(e){return Object(d.a)("MuiCardHeader",e)}var O=Object(x.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),p=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],m=Object(b.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(n.a)((a={},Object(c.a)(a,"& .".concat(O.title),t.title),Object(c.a)(a,"& .".concat(O.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),f=Object(b.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(b.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(b.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=s.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiCardHeader"}),c=a.action,s=a.avatar,b=a.className,d=a.component,x=void 0===d?"div":d,O=a.disableTypography,y=void 0!==O&&O,k=a.subheader,C=a.subheaderTypographyProps,w=a.title,P=a.titleTypographyProps,S=Object(r.a)(a,p),T=Object(n.a)({},a,{component:x,disableTypography:y}),N=function(e){var t=e.classes;return Object(l.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u,t)}(T),D=w;null==D||D.type===i.a||y||(D=Object(h.jsx)(i.a,Object(n.a)({variant:s?"body2":"h5",className:N.title,component:"span",display:"block"},P,{children:D})));var H=k;return null==H||H.type===i.a||y||(H=Object(h.jsx)(i.a,Object(n.a)({variant:s?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:H}))),Object(h.jsxs)(m,Object(n.a)({className:Object(o.default)(N.root,b),as:x,ref:t,styleProps:T},S,{children:[s&&Object(h.jsx)(f,{className:N.avatar,styleProps:T,children:s}),Object(h.jsxs)(g,{className:N.content,styleProps:T,children:[D,H]}),c&&Object(h.jsx)(v,{className:N.action,styleProps:T,children:c})]}))}));t.a=y},2542:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var c=a(9),r=a(259),n=a(1330),s=a(223),o=a(1342),l=a(1340),i=a(1338),j=a(1241),b=a(26),d=a(436),x=a(1347),u=a(1351),O=a(0),h={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},p=Object(c.a)(d.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function m(){return Object(O.jsxs)(p,{title:"Components: Switches | Digibot",children:[Object(O.jsx)(r.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(O.jsx)(n.a,{maxWidth:"lg",children:Object(O.jsx)(x.a,{heading:"Switches",links:[{name:"Components",href:b.c.components},{name:"Switches"}],moreLink:"https://next.material-ui.com/components/alert"})})}),Object(O.jsx)(n.a,{maxWidth:"lg",children:Object(O.jsxs)(s.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(O.jsxs)(s.a,{spacing:3,sx:{width:1},children:[Object(O.jsxs)(u.a,{title:"Basic",sx:h,children:[Object(O.jsx)(o.a,{defaultChecked:!0}),Object(O.jsx)(o.a,{}),Object(O.jsx)(o.a,{disabled:!0}),Object(O.jsx)(o.a,{disabled:!0,checked:!0}),Object(O.jsx)(o.a,{defaultChecked:!0,color:"default"})]}),Object(O.jsxs)(u.a,{title:"Sizes",sx:h,children:[Object(O.jsx)(l.a,{control:Object(O.jsx)(o.a,{size:"small"}),label:"Small"}),Object(O.jsx)(l.a,{control:Object(O.jsx)(o.a,{}),label:"Normal"})]}),Object(O.jsx)(u.a,{title:"Placement",sx:h,children:Object(O.jsx)(i.a,{component:"fieldset",children:Object(O.jsxs)(j.a,{row:!0,children:[Object(O.jsx)(l.a,{value:"top",label:"Top",labelPlacement:"top",control:Object(O.jsx)(o.a,{})}),Object(O.jsx)(l.a,{value:"start",label:"Start",labelPlacement:"start",control:Object(O.jsx)(o.a,{})}),Object(O.jsx)(l.a,{value:"bottom",label:"Bottom",labelPlacement:"bottom",control:Object(O.jsx)(o.a,{})}),Object(O.jsx)(l.a,{value:"end",label:"End",labelPlacement:"end",control:Object(O.jsx)(o.a,{})})]})})})]}),Object(O.jsx)(u.a,{title:"Adding Colors",children:Object(O.jsx)(i.a,{component:"fieldset",children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(l.a,{control:Object(O.jsx)(o.a,{defaultChecked:!0,color:"default"}),label:"Default"}),Object(O.jsx)(l.a,{control:Object(O.jsx)(o.a,{defaultChecked:!0}),label:"Primary"}),Object(O.jsx)(l.a,{control:Object(O.jsx)(o.a,{defaultChecked:!0,color:"info"}),label:"Info"}),Object(O.jsx)(l.a,{control:Object(O.jsx)(o.a,{defaultChecked:!0,color:"success"}),label:"Success"}),Object(O.jsx)(l.a,{control:Object(O.jsx)(o.a,{defaultChecked:!0,color:"warning"}),label:"Warning"}),Object(O.jsx)(l.a,{control:Object(O.jsx)(o.a,{defaultChecked:!0,color:"error"}),label:"Error"}),Object(O.jsx)(l.a,{disabled:!0,control:Object(O.jsx)(o.a,{defaultChecked:!0,color:"error"}),label:"Disabled"}),Object(O.jsx)(l.a,{disabled:!0,control:Object(O.jsx)(o.a,{color:"error"}),label:"Disabled"})]})})})]})})]})}}}]);
//# sourceMappingURL=104.6fde1a14.chunk.js.map