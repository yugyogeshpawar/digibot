(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[110],{1347:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(3),i=n(37),c=n(25),s=n(259),l=n(260),r=n(1318),o=n(36),j=n(0),b=["links","action","heading","moreLink","sx"];function x(e){var t=e.links,n=e.action,x=e.heading,d=e.moreLink,u=void 0===d?[]:d,O=e.sx,m=Object(i.a)(e,b);return Object(j.jsxs)(s.a,{sx:Object(a.a)({mb:5},O),children:[Object(j.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(j.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:x}),Object(j.jsx)(o.b,Object(a.a)({links:t},m))]}),n&&Object(j.jsx)(s.a,{sx:{flexShrink:0},children:n})]}),Object(j.jsx)(s.a,{sx:{mt:2},children:Object(c.isString)(u)?Object(j.jsx)(r.a,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return Object(j.jsx)(r.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1351:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return j}));var a=n(3),i=n(260),c=n(661),s=n(1352),l=n(259),r=n(0);function o(e){var t=e.title;return Object(r.jsx)(i.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function j(e){var t=e.title,n=e.sx,i=e.children;return Object(r.jsxs)(c.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(r.jsx)(s.a,{title:t}),Object(r.jsx)(l.a,{sx:Object(a.a)({p:3,minHeight:180},n),children:i})]})}},2536:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return G}));var a=n(18),i=n(3),c=n(37),s=n(1),l=n(1492),r=n.n(l),o=n(2394),j=n.n(o),b=n(2393),x=n.n(b),d=n(2396),u=n.n(d),O=n(2392),m=n.n(O),h=n(2395),f=n.n(h),p=n(1298),g=n(9),v=n(1567),y=n(259),k=n(1330),C=n(223),V=n(26),w=n(436),z=n(1347),D=n(1351),S=n(0),H=["value"],L={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"},B={1:{icon:Object(S.jsx)(m.a,{}),label:"Very Dissatisfied"},2:{icon:Object(S.jsx)(x.a,{}),label:"Dissatisfied"},3:{icon:Object(S.jsx)(j.a,{}),label:"Neutral"},4:{icon:Object(S.jsx)(f.a,{}),label:"Satisfied"},5:{icon:Object(S.jsx)(u.a,{}),label:"Very Satisfied"}},I={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},R=Object(g.a)(w.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),W=Object(p.a)({iconFilled:{color:"#FF4842"},iconHover:{color:"#B72136"}})(v.a);function F(e){var t=e.value,n=Object(c.a)(e,H);return Object(S.jsx)("span",Object(i.a)(Object(i.a)({},n),{},{children:B[t].icon}))}function G(){var e=Object(s.useState)(2),t=Object(a.a)(e,2),n=t[0],i=t[1],c=Object(s.useState)(-1),l=Object(a.a)(c,2),o=l[0],j=l[1];return Object(S.jsxs)(R,{title:"Components: Rating | Digibot",children:[Object(S.jsx)(y.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(S.jsx)(k.a,{maxWidth:"lg",children:Object(S.jsx)(z.a,{heading:"Rating",links:[{name:"Components",href:V.c.components},{name:"Rating"}],moreLink:"https://next.material-ui.com/components/rating"})})}),Object(S.jsx)(k.a,{maxWidth:"lg",children:Object(S.jsxs)(C.a,{spacing:3,children:[Object(S.jsxs)(C.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(S.jsx)(D.a,{title:"Controlled",sx:I,children:Object(S.jsx)(v.a,{name:"simple-controlled",value:n,onChange:function(e,t){i(t)}})}),Object(S.jsx)(D.a,{title:"Read only",sx:I,children:Object(S.jsx)(v.a,{name:"read-only",value:n,readOnly:!0})}),Object(S.jsx)(D.a,{title:"Disabled",sx:I,children:Object(S.jsx)(v.a,{name:"disabled",value:n,disabled:!0})})]}),Object(S.jsxs)(C.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(S.jsx)(D.a,{title:"Pristine",sx:I,children:Object(S.jsx)(v.a,{name:"pristine",value:null})}),Object(S.jsx)(D.a,{title:"Custom empty icon",sx:I,children:Object(S.jsx)(v.a,{name:"customized-empty",defaultValue:2,precision:.5})}),Object(S.jsx)(D.a,{title:"Custom icon and color",sx:I,children:Object(S.jsx)(W,{name:"customized-color",defaultValue:2,getLabelText:function(e){return"".concat(e," Heart").concat(1!==e?"s":"")},precision:.5,icon:Object(S.jsx)(r.a,{}),emptyIcon:Object(S.jsx)(r.a,{})})})]}),Object(S.jsxs)(C.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(S.jsx)(D.a,{title:"10 stars",sx:I,children:Object(S.jsx)(v.a,{name:"customized-10",defaultValue:2,max:10})}),Object(S.jsx)(D.a,{title:"Custom icon set",sx:I,children:Object(S.jsx)(v.a,{name:"customized-icons",defaultValue:2,getLabelText:function(e){return B[e].label},IconContainerComponent:F})}),Object(S.jsxs)(D.a,{title:"Hover feedback",sx:I,children:[Object(S.jsx)(v.a,{name:"hover-feedback",value:n,precision:.5,onChange:function(e,t){i(t)},onChangeActive:function(e,t){j(t)}}),null!==n&&Object(S.jsx)(y.a,{sx:{ml:2},children:L[-1!==o?o:n]})]})]}),Object(S.jsxs)(C.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(S.jsxs)(D.a,{title:"Half ratings",sx:I,children:[Object(S.jsx)(v.a,{name:"half-rating",defaultValue:2.5,precision:.5}),Object(S.jsx)("br",{}),Object(S.jsx)(v.a,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]}),Object(S.jsxs)(D.a,{title:"Sizes",sx:I,children:[Object(S.jsx)(v.a,{name:"size-small",defaultValue:2,size:"small"}),Object(S.jsx)("br",{}),Object(S.jsx)(v.a,{name:"size-medium",defaultValue:2}),Object(S.jsx)("br",{}),Object(S.jsx)(v.a,{name:"size-large",defaultValue:2,size:"large"})]})]})]})})]})}}}]);
//# sourceMappingURL=110.bcdf1467.chunk.js.map