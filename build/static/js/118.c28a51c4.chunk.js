(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[118],{1437:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),i=n(37),o=n(660),a=n(260),c=n(0),l=["searchQuery"];function s(e){var t=e.searchQuery,n=void 0===t?"":t,s=Object(i.a)(e,l);return Object(c.jsxs)(o.a,Object(r.a)(Object(r.a)({},s),{},{children:[Object(c.jsx)(a.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(c.jsxs)(a.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(c.jsxs)("strong",{children:['"',n,'"']}),". Try checking for typos or using complete words."]})]}))}},1653:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n(37),i=n(3),o=n(1),a=n(1654),c=n(434),l=n(1224),s=n(68),d=n(260),j=n(0),b=["images","photoIndex","setPhotoIndex","isOpen","onClose"],u=Object(c.a)((function(e){var t="rtl"===e.direction,n=function(t){return{backgroundSize:"24px 24px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:Object(s.a)(e.palette.grey[900],.8),backgroundImage:'url("/static/icons/controls/'.concat(t,'.svg")')}};return Object(l.a)({root:{backdropFilter:"blur(8px)",backgroundColor:Object(s.a)(e.palette.grey[900],.88),"& .ril__toolbar":{height:"auto !important",padding:e.spacing(2,3),backgroundColor:"transparent"},"& .ril__toolbarLeftSide":{display:"none"},"& .ril__toolbarRightSide":{height:"auto !important",padding:0,flexGrow:1,display:"flex",alignItems:"center","& li":{display:"flex",alignItems:"center"},"& li:first-of-type":{flexGrow:1},"& li:not(:first-of-type)":{width:e.spacing(5),height:e.spacing(5),justifyContent:"center",marginLeft:e.spacing(1),borderRadius:e.shape.borderRadius}},"& button:focus":{outline:"none"},"& .ril__toolbarRightSide button":{width:"100%",height:"100%","&.ril__zoomInButton":n("maximize-outline"),"&.ril__zoomOutButton":n("minimize-outline"),"&.ril__closeButton":n("close")},"& .ril__navButtons":{padding:e.spacing(3),borderRadius:e.shape.borderRadiusSm,"&.ril__navButtonPrev":Object(i.a)({left:e.spacing(2),right:"auto"},n(t?"arrow-ios-forward":"arrow-ios-back")),"&.ril__navButtonNext":Object(i.a)({right:e.spacing(2),left:"auto"},n(t?"arrow-ios-back":"arrow-ios-forward"))}}})}));function x(e){var t=e.images,n=e.photoIndex,c=e.setPhotoIndex,l=e.isOpen,s=e.onClose,x=Object(r.a)(e,b),h=u();Object(o.useEffect)((function(){document.body.style.overflow=l?"hidden":"unset"}),[l]);var p=[Object(j.jsx)(d.a,{variant:"subtitle2",children:"".concat(n+1," / ").concat(t.length)})];return Object(j.jsx)(j.Fragment,{children:l&&Object(j.jsx)(a.a,Object(i.a)({mainSrc:t[n],nextSrc:t[(n+1)%t.length],prevSrc:t[(n+t.length-1)%t.length],onCloseRequest:s,onMovePrevRequest:function(){return c((n+t.length-1)%t.length)},onMoveNextRequest:function(){return c((n+1)%t.length)},toolbarButtons:p,reactModalStyle:{overlay:{zIndex:9999}},wrapperClassName:h.root},x))})}},2561:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ye}));var r=n(18),i=n(6),o=n(22),a=n(1299),c=n(1),l=n(1465),s=n.n(l),d=n(2330),j=n.n(d),b=n(1701),u=n.n(b),x=n(9),h=n(1330),p=n(661),m=n(2575),O=n(2603),f=n(259),v=n(122),g=n(344),y=n(90),w=n(436),k=n(435),C=n(223),_=n(2331),I=n.n(_),S=n(1626),R=n.n(S),B=n(2332),z=n.n(B),P=n(1352),U=n(260),W=n(1318),F=n(46),L=n(0),T=Object(x.a)(o.a)((function(e){return{width:20,height:20,marginTop:1,flexShrink:0,marginRight:e.theme.spacing(2)}}));function N(e){e.profile.row;var t=Object(F.a)().user;console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>",t);var n=null===t||void 0===t?void 0:t.member_name,r=t.wallet_address,i=t.email,o=t.address,a=t.contact,c=t.member_user_id,l=t.state,s=t.member_dob,d=t.pincode,j=t.gender,b=null===r||void 0===r?void 0:r.slice(0,26),u=null===j?"Undefined ":" ".concat(j),x=null===n?"Undefined ":" ".concat(n),h=null===b?"Undefined ":" ".concat(b),m=null===i?"Undefined ":" ".concat(i),O=null===o?"Undefined ":" ".concat(o),f=null===a?"Undefined ":" ".concat(a),v=null===c?"Undefined ":" ".concat(c),g=null===l?"Undefined ":" ".concat(l),y=null===s?"Undefined ":" ".concat(s),w=null===d?"Undefined ":" ".concat(d);return Object(L.jsxs)(p.a,{children:[Object(L.jsx)(P.a,{title:"About"}),Object(L.jsxs)(C.a,{spacing:2,sx:{p:3},children:[Object(L.jsx)(U.a,{variant:"body2"}),Object(L.jsxs)(C.a,{direction:"row",children:[Object(L.jsx)(T,{icon:z.a}),Object(L.jsxs)(U.a,{variant:"body2",children:["Name :",Object(L.jsx)(W.a,{component:"span",variant:"subtitle2",color:"text.primary",children:" ".concat(x)})]})]}),Object(L.jsx)(C.a,{direction:"row",children:Object(L.jsxs)(U.a,{variant:"body2",children:["User Id :",Object(L.jsx)(W.a,{component:"span",variant:"subtitle2",color:"text.primary",children:" ".concat(v)})]})}),Object(L.jsx)(C.a,{direction:"row",children:Object(L.jsxs)(U.a,{variant:"body2",children:["wallet address :",Object(L.jsxs)(W.a,{component:"span",variant:"subtitle2",color:"text.primary",children:[" ".concat(h),"...."]})]})}),Object(L.jsx)(C.a,{direction:"row",children:Object(L.jsxs)(U.a,{variant:"body2",children:["Gender : ",u]})}),Object(L.jsx)(C.a,{direction:"row",children:Object(L.jsxs)(U.a,{variant:"body2",children:["Dob : "," ".concat(y)]})}),Object(L.jsxs)(C.a,{direction:"row",children:[Object(L.jsx)(T,{icon:I.a}),Object(L.jsxs)(U.a,{variant:"body2",children:["Live at \xa0",Object(L.jsx)(W.a,{component:"span",variant:"subtitle2",color:"text.primary",children:O})]})]}),Object(L.jsxs)(C.a,{direction:"row",children:[Object(L.jsx)(T,{icon:R.a}),Object(L.jsx)(U.a,{variant:"body2",children:m})]}),Object(L.jsx)(C.a,{direction:"row",children:Object(L.jsxs)(U.a,{variant:"body2",children:["Contact :",Object(L.jsx)(W.a,{component:"span",variant:"subtitle2",color:"text.primary",children:" ".concat(f)})]})}),Object(L.jsxs)(C.a,{direction:"row",children:[Object(L.jsx)(T,{icon:R.a}),Object(L.jsxs)(U.a,{variant:"body2",children:["State : "," ".concat(g)]})]}),Object(L.jsxs)(C.a,{direction:"row",children:[Object(L.jsx)(T,{icon:R.a}),Object(L.jsxs)(U.a,{variant:"body2",children:["Pincode : "," ".concat(w)]})]})]})]})}var D=n(2333),M=n.n(D),A=n(1899),G=n.n(A),q=n(121),E=n(1320),J=n(1331);function Q(){var e=Object(c.useRef)(null),t=function(){e.current.click()};return Object(L.jsxs)(p.a,{sx:{p:3},children:[Object(L.jsx)(q.a,{multiline:!0,fullWidth:!0,rows:4,placeholder:"Share what you are thinking here...",sx:{"& fieldset":{borderWidth:"1px !important",borderColor:function(e){return"".concat(e.palette.grey[50032]," !important")}}}}),Object(L.jsxs)(f.a,{sx:{mt:3,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(L.jsxs)(f.a,{sx:{display:"flex"},children:[Object(L.jsx)(E.a,{size:"small",onClick:t,sx:{mr:1},children:Object(L.jsx)(o.a,{icon:G.a,width:24,height:24})}),Object(L.jsx)(E.a,{size:"small",onClick:t,children:Object(L.jsx)(o.a,{icon:M.a,width:24,height:24})})]}),Object(L.jsx)(J.a,{variant:"contained",children:"Post"})]}),Object(L.jsx)("input",{ref:e,type:"file",style:{display:"none"}})]})}var H=n(1295),K=n(89);function V(e){var t=e.profile;return Object(L.jsx)(p.a,{sx:{py:3},children:Object(L.jsxs)(C.a,{direction:"row",divider:Object(L.jsx)(H.a,{orientation:"vertical",flexItem:!0}),children:[Object(L.jsxs)(C.a,{width:1,textAlign:"center",children:[Object(L.jsx)(U.a,{variant:"h4",children:Object(K.c)(null===t||void 0===t?void 0:t.direct_member)}),Object(L.jsx)(U.a,{variant:"body2",sx:{color:"text.secondary"},children:"Referrals"})]}),Object(L.jsxs)(C.a,{width:1,textAlign:"center",children:[Object(L.jsx)(U.a,{variant:"h4",children:Object(K.c)(null===t||void 0===t?void 0:t.team_member)}),Object(L.jsx)(U.a,{variant:"body2",sx:{color:"text.secondary"},children:"Teams"})]})]})})}var X=n(186),Y=n.n(X),Z=n(187),$=n.n(Z),ee=n(269),te=n.n(ee),ne=n(446),re=n.n(ne),ie=Object(x.a)(o.a)((function(e){return{width:20,height:20,marginTop:1,flexShrink:0,marginRight:e.theme.spacing(2)}}));function oe(e){var t=e.profile,n=t.facebookLink,r=t.instagramLink,i=t.linkedinLink,o=t.twitterLink,a=[{name:"Linkedin",icon:Object(L.jsx)(ie,{icon:te.a,color:"#006097"}),href:i},{name:"Twitter",icon:Object(L.jsx)(ie,{icon:Y.a,color:"#1C9CEA"}),href:o},{name:"Instagram",icon:Object(L.jsx)(ie,{icon:re.a,color:"#D7336D"}),href:r},{name:"Facebook",icon:Object(L.jsx)(ie,{icon:$.a,color:"#1877F2"}),href:n}];return Object(L.jsxs)(p.a,{children:[Object(L.jsx)(P.a,{title:"Social"}),Object(L.jsx)(C.a,{spacing:2,sx:{p:3},children:a.map((function(e){return Object(L.jsxs)(C.a,{direction:"row",alignItems:"center",children:[e.icon,Object(L.jsx)(W.a,{component:"span",variant:"body2",color:"text.primary",noWrap:!0,children:e.href})]},e.name)}))})]})}function ae(e){var t=e.myProfile;return console.log(t,"profile"),Object(L.jsxs)(k.a,{container:!0,spacing:3,children:[Object(L.jsx)(k.a,{item:!0,xs:12,md:6,children:Object(L.jsxs)(C.a,{spacing:3,children:[Object(L.jsx)(V,{profile:null===t||void 0===t?void 0:t.row}),Object(L.jsx)(N,{profile:t})]})}),Object(L.jsx)(k.a,{item:!0,xs:12,md:6,children:Object(L.jsxs)(C.a,{spacing:3,children:[Object(L.jsx)(oe,{profile:t}),Object(L.jsx)(Q,{})]})})]})}var ce=n(68),le=n(164),se=Object(x.a)("div")((function(e){var t=e.theme;return{"&:before":{top:0,zIndex:9,width:"100%",content:"''",height:"100%",position:"absolute",backdropFilter:"blur(3px)",WebkitBackdropFilter:"blur(3px)",backgroundColor:Object(ce.a)(t.palette.primary.darker,.72)}}})),de=Object(x.a)("div")((function(e){var t=e.theme;return Object(i.a)({left:0,right:0,zIndex:99,position:"absolute",marginTop:t.spacing(5)},t.breakpoints.up("md"),{right:"auto",display:"flex",alignItems:"center",left:t.spacing(3),bottom:t.spacing(3)})})),je=Object(x.a)("img")({zIndex:8,width:"100%",height:"100%",objectFit:"cover",position:"absolute"});function be(e){var t=e.myProfile,n=Object(F.a)().user,r=t.role,i=t.cover;return Object(L.jsxs)(se,{children:[Object(L.jsxs)(de,{children:[Object(L.jsx)(le.a,{sx:{mx:"auto",borderWidth:2,borderStyle:"solid",borderColor:"common.white",width:{xs:80,md:128},height:{xs:80,md:128}}}),Object(L.jsxs)(f.a,{sx:{ml:{md:3},mt:{xs:1,md:0},color:"common.white",textAlign:{xs:"center",md:"left"}},children:[Object(L.jsx)(U.a,{variant:"h4",children:n.displayName}),Object(L.jsx)(U.a,{sx:{opacity:.72},children:r})]})]}),Object(L.jsx)(je,{alt:"profile cover",src:i})]})}var ue=n(3),xe=n(25),he=(n(32),n(349),n(442),n(1316));n(1315),n(1336),n(1333),n(1437),o.a,$.a,o.a,re.a,o.a,te.a,o.a,Y.a,Object(x.a)(he.a)((function(e){var t=e.theme;return{width:240,marginBottom:t.spacing(5),transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:t.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));var pe=n(1653),me=Object(x.a)("img")({top:0,width:"100%",height:"100%",objectFit:"cover",position:"absolute"});function Oe(e){var t=e.image,n=e.onOpenLightbox,r=t.nftToken;return Object(L.jsx)(p.a,{sx:{pt:"100%",cursor:"pointer"},children:Object(L.jsx)(me,{alt:"gallery image",src:"/static/mock-images/products/".concat(r),onClick:function(){return n(r)}})})}function fe(e){var t=e.gallery;console.log(t);var n=Object(c.useState)(!1),i=Object(r.a)(n,2),o=i[0],a=i[1],l=Object(c.useState)(null),s=Object(r.a)(l,2),d=s[0],j=s[1],b=t.map((function(e){return"/static/mock-images/products/".concat(e.nftToken)})),u=function(e){var t=Object(xe.findIndex)(b,(function(t){return t==="/static/mock-images/products/".concat(e)}));a(!0),j(t)};return Object(L.jsxs)(f.a,{sx:{mt:5},children:[Object(L.jsx)(U.a,{variant:"h4",sx:{mb:3},children:"Portfolio"}),Object(L.jsxs)(p.a,{sx:{p:3},children:[Object(L.jsx)(k.a,{container:!0,spacing:3,children:t.map((function(e){return Object(L.jsx)(k.a,{item:!0,xs:12,sm:6,md:4,children:Object(L.jsx)(Oe,{image:e,onOpenLightbox:u})},e.record_no)}))}),Object(L.jsx)(pe.a,{images:b,photoIndex:d,setPhotoIndex:j,isOpen:o,onClose:function(){return a(!1)}})]})]})}n(2334),n(1400),n(2335),n(1340),n(1309),n(1924),n(660),n(184),n(37),n(2336),n(2422),n(2337),n(56),n(295),Object(x.a)("div")({position:"relative"}),Object(x.a)("div")((function(e){var t=e.theme;return{bottom:40,overflow:"hidden",position:"absolute",left:t.spacing(-2),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadiusMd,"& .emoji-mart":{border:"none",backgroundColor:t.palette.background.paper},"& .emoji-mart-anchor":{color:t.palette.text.disabled,"&:hover, &:focus, &.emoji-mart-anchor-selected":{color:t.palette.text.primary}},"& .emoji-mart-bar":{borderColor:t.palette.divider},"& .emoji-mart-search input":{backgroundColor:"transparent",color:t.palette.text.primary,borderColor:t.palette.grey[50032],"&::placeholder":Object(ue.a)(Object(ue.a)({},t.typography.body2),{},{color:t.palette.text.disabled})},"& .emoji-mart-search-icon svg":{opacity:1,fill:t.palette.text.disabled},"& .emoji-mart-category-label span":Object(ue.a)(Object(ue.a)({},t.typography.subtitle2),{},{backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",color:t.palette.text.primary,backgroundColor:Object(ce.a)(t.palette.background.paper,.8)}),"& .emoji-mart-title-label":{color:t.palette.text.primary},"& .emoji-mart-category .emoji-mart-emoji:hover:before":{backgroundColor:t.palette.action.selected},"& .emoji-mart-emoji":{outline:"none"},"& .emoji-mart-preview-name":{color:t.palette.text.primary},"& .emoji-mart-preview-shortname, .emoji-mart-preview-emoticon":{color:t.palette.text.secondary}}}));function ve(e){var t=e.followers;return Object(L.jsxs)(f.a,{sx:{mt:5},children:[Object(L.jsx)(U.a,{variant:"h4",sx:{mb:3},children:"Team"}),Object(L.jsx)(k.a,{container:!0,spacing:2,children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(L.jsx)(k.a,{item:!0,xs:12,md:4,children:Object(L.jsx)(p.a,{sx:{display:"flex",alignItems:"center",p:3},children:Object(L.jsxs)(f.a,{sx:{display:"flex",flexGrow:1,minWidth:0,justifyContent:"space-around"},children:[Object(L.jsxs)(f.a,{children:[Object(L.jsxs)(f.a,{children:[Object(L.jsx)(U.a,{variant:"subtitle2",noWrap:!0,children:null===(null===e||void 0===e?void 0:e.memberName)?"undefined":null===e||void 0===e?void 0:e.memberName}),Object(L.jsxs)(U.a,{ml:0,variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:["Level : ",null===(null===e||void 0===e?void 0:e.level)?"undefined":null===e||void 0===e?void 0:e.level]})]}),Object(L.jsx)(f.a,{children:Object(L.jsxs)(U.a,{ml:0,variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:["Id : ",null===(null===e||void 0===e?void 0:e.memberUserId)?"undefined":null===e||void 0===e?void 0:e.memberUserId]})})]}),Object(L.jsxs)(f.a,{children:[Object(L.jsx)(f.a,{children:Object(L.jsx)(U.a,{variant:"subtitle1",ml:0,sx:{color:"text.secondary",fontSize:12},children:null===(null===e||void 0===e?void 0:e.curentRank)?"Member":null===e||void 0===e?void 0:e.curentRank})}),Object(L.jsxs)(f.a,{children:[Object(L.jsx)(f.a,{sx:{width:16,height:16,flexShrink:0}}),Object(L.jsxs)(U.a,{ml:0,variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:["Business : ",null===(null===e||void 0===e?void 0:e.teamBusiness)?"undefined":null===e||void 0===e?void 0:e.teamBusiness]})]})]})]})})},t)}))})]})}var ge=Object(x.a)("div")((function(e){var t,n=e.theme;return t={zIndex:9,bottom:0,width:"100%",display:"flex",position:"absolute",backgroundColor:n.palette.background.paper},Object(i.a)(t,n.breakpoints.up("sm"),{justifyContent:"center"}),Object(i.a)(t,n.breakpoints.up("md"),{justifyContent:"flex-end",paddingRight:n.spacing(3)}),t}));function ye(){var e=Object(y.a)().themeStretch,t=Object(v.c)(),n=Object(v.d)((function(e){return e.user})),i=n.myProfile,l=n.output,d=n.gallery,b=Object(c.useState)("profile"),x=Object(r.a)(b,2),k=x[0],C=x[1];Object(c.useEffect)((function(){t(Object(g.s)()),t(Object(g.x)()),t(Object(g.k)())}),[t]);if(!i)return null;var _=[{value:"profile",icon:Object(L.jsx)(o.a,{icon:u.a,width:20,height:20}),component:Object(L.jsx)(ae,{myProfile:i})},{value:"Team",icon:Object(L.jsx)(o.a,{icon:s.a,width:20,height:20}),component:Object(L.jsx)(ve,{followers:null===l||void 0===l?void 0:l.output,onToggleFollow:function(e){t(Object(g.C)(e))}})},{value:"portfolio",icon:Object(L.jsx)(o.a,{icon:j.a,width:20,height:20}),component:Object(L.jsx)(fe,{gallery:d})}];return Object(L.jsx)(w.a,{title:"User: Profile | Digibot",children:Object(L.jsxs)(h.a,{maxWidth:!e&&"lg",children:[Object(L.jsxs)(p.a,{sx:{mb:3,height:280,position:"relative"},children:[Object(L.jsx)(be,{myProfile:i}),Object(L.jsx)(ge,{children:Object(L.jsx)(m.a,{value:k,scrollButtons:"auto",variant:"scrollable",allowScrollButtonsMobile:!0,onChange:function(e,t){C(t)},children:_.map((function(e){return Object(L.jsx)(O.a,{disableRipple:!0,value:e.value,icon:e.icon,label:Object(a.a)(e.value)},e.value)}))})})]}),_.map((function(e){return e.value===k&&Object(L.jsx)(f.a,{children:e.component},e.value)}))]})})}}}]);
//# sourceMappingURL=118.c28a51c4.chunk.js.map