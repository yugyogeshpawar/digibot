(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[102],{1347:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(3),c=a(37),r=a(25),o=a(259),s=a(260),l=a(1318),i=a(36),j=a(0),b=["links","action","heading","moreLink","sx"];function d(e){var t=e.links,a=e.action,d=e.heading,u=e.moreLink,x=void 0===u?[]:u,O=e.sx,p=Object(c.a)(e,b);return Object(j.jsxs)(o.a,{sx:Object(n.a)({mb:5},O),children:[Object(j.jsxs)(o.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(j.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:d}),Object(j.jsx)(i.b,Object(n.a)({links:t},p))]}),a&&Object(j.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(j.jsx)(o.a,{sx:{mt:2},children:Object(r.isString)(x)?Object(j.jsx)(l.a,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return Object(j.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1351:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return j}));var n=a(3),c=a(260),r=a(661),o=a(1352),s=a(259),l=a(0);function i(e){var t=e.title;return Object(l.jsx)(c.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function j(e){var t=e.title,a=e.sx,c=e.children;return Object(l.jsxs)(r.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(l.jsx)(o.a,{title:t}),Object(l.jsx)(s.a,{sx:Object(n.a)({p:3,minHeight:180},a),children:c})]})}},1352:function(e,t,a){"use strict";var n=a(6),c=a(7),r=a(2),o=a(1),s=a(13),l=a(180),i=a(260),j=a(14),b=a(9),d=a(153),u=a(181);function x(e){return Object(d.a)("MuiCardHeader",e)}var O=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),p=a(0),h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],m=Object(b.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(r.a)((a={},Object(n.a)(a,"& .".concat(O.title),t.title),Object(n.a)(a,"& .".concat(O.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),v=Object(b.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(b.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(b.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=o.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiCardHeader"}),n=a.action,o=a.avatar,b=a.className,d=a.component,u=void 0===d?"div":d,O=a.disableTypography,y=void 0!==O&&O,k=a.subheader,w=a.subheaderTypographyProps,C=a.title,P=a.titleTypographyProps,R=Object(c.a)(a,h),T=Object(r.a)({},a,{component:u,disableTypography:y}),B=function(e){var t=e.classes;return Object(l.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,t)}(T),N=C;null==N||N.type===i.a||y||(N=Object(p.jsx)(i.a,Object(r.a)({variant:o?"body2":"h5",className:B.title,component:"span",display:"block"},P,{children:N})));var S=k;return null==S||S.type===i.a||y||(S=Object(p.jsx)(i.a,Object(r.a)({variant:o?"body2":"body1",className:B.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:S}))),Object(p.jsxs)(m,Object(r.a)({className:Object(s.default)(B.root,b),as:u,ref:t,styleProps:T},R,{children:[o&&Object(p.jsx)(v,{className:B.avatar,styleProps:T,children:o}),Object(p.jsxs)(g,{className:B.content,styleProps:T,children:[N,S]}),n&&Object(p.jsx)(f,{className:B.action,styleProps:T,children:n})]}))}));t.a=y},2538:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(18),c=a(1),r=a(9),o=a(259),s=a(1330),l=a(223),i=a(1338),j=a(1301),b=a(1306),d=a(1340),u=a(26),x=a(436),O=a(1347),p=a(1351),h=a(0),m={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:1}},v=Object(r.a)(x.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function f(){var e=Object(c.useState)("a"),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(h.jsxs)(v,{title:"Components: Radio Buttons | Digibot",children:[Object(h.jsx)(o.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(h.jsx)(s.a,{maxWidth:"lg",children:Object(h.jsx)(O.a,{heading:"Radio Buttons",links:[{name:"Components",href:u.c.components},{name:"Radio Buttons"}],moreLink:"https://next.material-ui.com/components/radio-buttons"})})}),Object(h.jsx)(s.a,{maxWidth:"lg",children:Object(h.jsxs)(l.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(h.jsxs)(l.a,{spacing:3,sx:{width:1},children:[Object(h.jsx)(p.a,{title:"Basic",sx:m,children:Object(h.jsx)(i.a,{component:"fieldset",children:Object(h.jsxs)(j.a,{row:!0,defaultValue:"nn",children:[Object(h.jsx)(b.a,{value:"nn"}),Object(h.jsx)(b.a,{value:"gg"}),Object(h.jsx)(b.a,{disabled:!0,value:"hh"})]})})}),Object(h.jsx)(p.a,{title:"Size",sx:m,children:Object(h.jsxs)(j.a,{row:!0,defaultValue:"g",children:[Object(h.jsx)(d.a,{value:"g",control:Object(h.jsx)(b.a,{}),label:"Normal"}),Object(h.jsx)(d.a,{value:"p",control:Object(h.jsx)(b.a,{size:"small"}),label:"Small"})]})}),Object(h.jsx)(p.a,{title:"Placement",sx:m,children:Object(h.jsx)(i.a,{component:"fieldset",children:Object(h.jsxs)(j.a,{row:!0,defaultValue:"top",children:[Object(h.jsx)(d.a,{value:"top",label:"Top",labelPlacement:"top",control:Object(h.jsx)(b.a,{})}),Object(h.jsx)(d.a,{value:"start",label:"Start",labelPlacement:"start",control:Object(h.jsx)(b.a,{})}),Object(h.jsx)(d.a,{value:"bottom",label:"Bottom",labelPlacement:"bottom",control:Object(h.jsx)(b.a,{})}),Object(h.jsx)(d.a,{value:"end",label:"End",control:Object(h.jsx)(b.a,{})})]})})})]}),Object(h.jsx)(p.a,{title:"Adding Colors",children:Object(h.jsx)(i.a,{component:"fieldset",children:Object(h.jsxs)(j.a,{value:a,onChange:function(e){r(e.target.value)},children:[Object(h.jsx)(d.a,{value:"a1",control:Object(h.jsx)(b.a,{color:"default"}),label:"Default"}),Object(h.jsx)(d.a,{value:"a2",control:Object(h.jsx)(b.a,{}),label:"Primary"}),Object(h.jsx)(d.a,{value:"a3",control:Object(h.jsx)(b.a,{color:"secondary"}),label:"Secondary"}),Object(h.jsx)(d.a,{value:"a4",control:Object(h.jsx)(b.a,{color:"info"}),label:"Info"}),Object(h.jsx)(d.a,{value:"a5",control:Object(h.jsx)(b.a,{color:"success"}),label:"Success"}),Object(h.jsx)(d.a,{value:"a6",control:Object(h.jsx)(b.a,{color:"warning"}),label:"Warning"}),Object(h.jsx)(d.a,{value:"a7",control:Object(h.jsx)(b.a,{color:"error"}),label:"Error"}),Object(h.jsx)(d.a,{disabled:!0,value:"a8",control:Object(h.jsx)(b.a,{color:"error"}),label:"Disabled"})]})})})]})})]})}}}]);
//# sourceMappingURL=102.8fa523e9.chunk.js.map