(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[146],{2565:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ce}));var n=a(6),i=a(9),r=a(1295),s=a(436),o=a(433),c=a(1330),l=a(259),d=a(260),j=a(135),b=a(0),x=Object(i.a)(o.a.div)((function(e){var t=e.theme;return Object(n.a)({backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(/static/overlay.svg), url(/static/about/hero.jpg)",padding:t.spacing(10,0)},t.breakpoints.up("md"),{height:560,padding:0})})),h=Object(i.a)("div")((function(e){var t=e.theme;return Object(n.a)({textAlign:"center"},t.breakpoints.up("md"),{textAlign:"left",position:"absolute",bottom:t.spacing(10)})}));function m(){return Object(b.jsx)(x,{initial:"initial",animate:"animate",variants:j.eb,children:Object(b.jsx)(c.a,{maxWidth:"lg",sx:{position:"relative",height:"100%"},children:Object(b.jsxs)(h,{children:[Object(b.jsx)(j.e,{text:"Who",sx:{color:"primary.main"},variants:j.w}),Object(b.jsx)("br",{}),Object(b.jsxs)(l.a,{sx:{display:"inline-flex",color:"common.white"},children:[Object(b.jsx)(j.e,{text:"we",sx:{mr:2}}),Object(b.jsx)(j.e,{text:"are?"})]}),Object(b.jsx)(o.a.div,{variants:j.w,children:Object(b.jsxs)(d.a,{variant:"h4",sx:{mt:5,color:"common.white",fontWeight:"fontWeightMedium"},children:["Let's work together and",Object(b.jsx)("br",{})," make awesome site easily"]})})]})})})}var u=a(21),p=a(22),g=a(1539),O=a.n(g),v=a(56),f=a(68),y=a(1569),w=a(435),k=a(1331),W=a(89),A=a(4),C=a(36),T=["Development","Design","Marketing"],D=Object(u.a)(Array(3)).map((function(e,t){return{label:T[t],value:A.a.number.percent(t)}})),I=Object(i.a)("div")((function(e){var t=e.theme;return Object(n.a)({textAlign:"center",paddingTop:t.spacing(20),paddingBottom:t.spacing(10)},t.breakpoints.up("md"),{textAlign:"left"})}));function S(e){var t=e.progress,a=t.label,n=t.value;return Object(b.jsxs)(l.a,{sx:{mt:3},children:[Object(b.jsxs)(l.a,{sx:{mb:1.5,display:"flex",alignItems:"center"},children:[Object(b.jsxs)(d.a,{variant:"subtitle2",children:[a,"\xa0-\xa0"]}),Object(b.jsx)(d.a,{variant:"body2",sx:{color:"text.secondary"},children:Object(W.d)(n)})]}),Object(b.jsx)(y.a,{variant:"determinate",value:n,sx:{"& .MuiLinearProgress-bar":{bgcolor:"grey.700"},"&.MuiLinearProgress-determinate":{bgcolor:"divider"}}})]})}function z(){var e=Object(v.a)(),t="light"===e.palette.mode,a="-40px 40px 80px ".concat(Object(f.a)(t?e.palette.grey[500]:e.palette.common.black,.48));return Object(b.jsx)(I,{children:Object(b.jsx)(c.a,{maxWidth:"lg",children:Object(b.jsxs)(w.a,{container:!0,spacing:3,children:[Object(b.jsx)(C.d,{width:"mdDown",children:Object(b.jsx)(w.a,{item:!0,xs:12,md:6,lg:7,sx:{pr:{md:7}},children:Object(b.jsxs)(w.a,{container:!0,spacing:3,alignItems:"flex-end",children:[Object(b.jsx)(w.a,{item:!0,xs:6,children:Object(b.jsx)(j.d,{variants:j.x,children:Object(b.jsx)(l.a,{component:"img",src:"/static/about/what-1.jpg",sx:{borderRadius:2,boxShadow:a}})})}),Object(b.jsx)(w.a,{item:!0,xs:6,children:Object(b.jsx)(j.d,{variants:j.x,children:Object(b.jsx)(l.a,{component:"img",src:"/static/about/what-2.jpg",sx:{borderRadius:2}})})})]})})}),Object(b.jsxs)(w.a,{item:!0,xs:12,md:6,lg:5,children:[Object(b.jsx)(j.d,{variants:j.w,children:Object(b.jsx)(d.a,{variant:"h2",sx:{mb:3},children:"What is digibot?"})}),Object(b.jsx)(j.d,{variants:j.w,children:Object(b.jsx)(d.a,{sx:{color:function(e){return"light"===e.palette.mode?"text.secondary":"common.white"}},children:"Our theme is the most advanced and user-friendly theme you will find on the market, we have documentation and video to help set your site really easily, pre-installed demos you can import in one click and everything from the theme options to page content can be edited from the front-end. This is the theme you are looking for."})}),Object(b.jsx)(l.a,{sx:{my:5},children:D.map((function(e){return Object(b.jsx)(j.d,{variants:j.w,children:Object(b.jsx)(S,{progress:e})},e.label)}))}),Object(b.jsx)(j.d,{variants:j.w,children:Object(b.jsx)(k.a,{variant:"outlined",color:"inherit",size:"large",endIcon:Object(b.jsx)(p.a,{icon:O.a,width:24,height:24}),children:"Check out our work"})})]})]})})})}var B=a(3),M=a(1),P=a(1354),R=a.n(P),_=a(186),J=a.n(_),q=a(269),F=a.n(q),L=a(187),N=a.n(L),E=a(446),G=a.n(E),K=a(661),U=a(1320),V=a(1386),Y=Object(u.a)(Array(5)).map((function(e,t){return{id:A.a.id(t),name:A.a.name.fullName(t),role:A.a.role(t),avatar:A.a.image.avatar(t)}}));function H(e){var t=e.member,a=t.name,n=t.role,i=t.avatar;return Object(b.jsxs)(K.a,{sx:{p:1,mx:1.5},children:[Object(b.jsx)(d.a,{variant:"subtitle1",sx:{mt:2,mb:.5},children:a}),Object(b.jsx)(d.a,{variant:"body2",sx:{mb:2,color:"text.secondary"},children:n}),Object(b.jsx)(l.a,{component:"img",src:i,sx:{width:"100%",borderRadius:1.5}}),Object(b.jsx)(l.a,{sx:{mt:2,mb:1},children:[N.a,G.a,F.a,J.a].map((function(e,t){return Object(b.jsx)(U.a,{children:Object(b.jsx)(p.a,{icon:e,width:20,height:20})},t)}))})]},a)}function Q(){var e=Object(M.useRef)(),t=Object(v.a)(),a={slidesToShow:4,centerMode:!0,centerPadding:"0 80px",rtl:Boolean("rtl"===t.direction),responsive:[{breakpoint:1279,settings:{slidesToShow:3}},{breakpoint:959,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]};return Object(b.jsxs)(c.a,{maxWidth:"lg",sx:{pb:10,textAlign:"center"},children:[Object(b.jsx)(j.d,{variants:j.u,children:Object(b.jsx)(d.a,{component:"p",variant:"overline",sx:{mb:2,color:"text.secondary"},children:"Dream team"})}),Object(b.jsx)(j.d,{variants:j.x,children:Object(b.jsx)(d.a,{variant:"h2",sx:{mb:3},children:"Great team is the key"})}),Object(b.jsx)(j.d,{variants:j.x,children:Object(b.jsx)(d.a,{sx:{mb:10,mx:"auto",maxWidth:630,color:function(e){return"light"===e.palette.mode?"text.secondary":"common.white"}},children:"Digibot will provide you support if you have any problems, our support team will reply within a day and we also have detailed documentation."})}),Object(b.jsxs)(l.a,{sx:{position:"relative"},children:[Object(b.jsx)(R.a,Object(B.a)(Object(B.a)({ref:e},a),{},{children:Y.map((function(e){return Object(b.jsx)(j.d,{variants:j.t,children:Object(b.jsx)(H,{member:e})},e.id)}))})),Object(b.jsx)(V.h,{onNext:function(){e.current.slickNext()},onPrevious:function(){e.current.slickPrev()},sx:{transform:"translateY(-64px)"}})]}),Object(b.jsx)(k.a,{variant:"outlined",color:"inherit",size:"large",endIcon:Object(b.jsx)(p.a,{icon:O.a,width:24,height:24}),sx:{mx:"auto"},children:"View all team members"})]})}function X(){return Object(b.jsxs)(c.a,{maxWidth:"lg",sx:{mt:10},children:[Object(b.jsxs)(l.a,{sx:{mb:10,position:"relative",borderRadius:2,overflow:"hidden"},children:[Object(b.jsx)("img",{src:"/static/about/vision.jpg",alt:"about-vision"}),Object(b.jsx)(l.a,{sx:{bottom:{xs:24,md:80},width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",position:"absolute",justifyContent:"center"},children:["logo_amazon","logo_hbo","logo_ibm","logo_lya","logo_spotify","logo_netflix"].map((function(e){return Object(b.jsx)(j.d,{variants:j.t,children:Object(b.jsx)(l.a,{component:"img",src:"/static/about/".concat(e,".svg"),sx:{m:{xs:1.5,md:3},height:{xs:24,md:32}}})},e)}))})]}),Object(b.jsx)(w.a,{container:!0,justifyContent:"center",children:Object(b.jsx)(w.a,{item:!0,xs:12,sm:8,children:Object(b.jsx)(j.d,{variants:j.x,children:Object(b.jsx)(d.a,{variant:"h3",sx:{textAlign:"center"},children:"Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada."})})})})]})}var Z=a(1318),$=a(660),ee=a(1567),te=a(1283),ae=[{name:"Jenny Wilson",rating:5,dateCreate:"April 19, 2021",content:"Excellent Work! Thanks a lot!"},{name:"Cody Fisher",rating:5,dateCreate:"April 19, 2021",content:"It's a very good dashboard and we are really liking the product . We've done some things, like migrate to TS and implementing a react useContext api, to fit our job methodology but the product is one of the best in terms of design and application architecture. The team did a really good job."},{name:"Marvin McKinney",rating:5,dateCreate:"April 19, 2021",content:"Customer support is realy fast and helpful the desgin of this theme is looks amazing also the code is very clean and readble realy good job !"},{name:"Darrell Steward",rating:5,dateCreate:"April 19, 2021",content:"Amazing, really good code quality and gives you a lot of examples for implementations."},{name:"Jacob Jones",rating:5,dateCreate:"April 19, 2021",content:"Got a few questions after purchasing the product. The owner responded very fast and very helpfull. Overall the code is excellent and works very good. 5/5 stars!"},{name:"Bessie Cooper",rating:5,dateCreate:"April 19, 2021",content:"CEO of Codealy.io here. We\u2019ve built a developer assessment platform that makes sense - tasks are based on git repositories and run in virtual machines. We automate the pain points - storing candidates code, running it and sharing test results with the whole team, remotely. Bought this template as we need to provide an awesome dashboard for our early customers. I am super happy with purchase. The code is just as good as the design. Thanks!"}],ne=Object(i.a)("div")((function(e){var t=e.theme;return Object(n.a)({textAlign:"center",padding:t.spacing(10,0),backgroundSize:"cover",backgroundImage:"linear-gradient(to right, ".concat(Object(f.a)(t.palette.grey[900],.8)," , ").concat(Object(f.a)(t.palette.grey[900],.8),"), url(/static/about/testimonials.jpg)")},t.breakpoints.up("md"),{textAlign:"left",padding:0,height:840,overflow:"hidden"})}));function ie(){return Object(b.jsxs)(Z.a,{href:"#",variant:"subtitle2",sx:{display:"flex",alignItems:"center"},children:["Read more testimonials",Object(b.jsx)(l.a,{component:p.a,icon:O.a,sx:{ml:1,width:20,height:20}})]})}function re(e){var t=e.testimonial,a=t.name,n=t.rating,i=t.dateCreate,r=t.content;return Object(b.jsxs)($.a,{sx:{mt:3,p:3,color:"common.white",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",bgcolor:function(e){return Object(f.a)(e.palette.common.white,.04)}},children:[Object(b.jsx)(d.a,{variant:"subtitle1",gutterBottom:!0,children:a}),Object(b.jsx)(d.a,{gutterBottom:!0,component:"p",variant:"caption",sx:{color:"grey.500"},children:i}),Object(b.jsx)(ee.a,{value:n,readOnly:!0,size:"small"}),Object(b.jsx)(d.a,{variant:"body2",sx:{mt:1.5},children:r})]})}function se(){var e=Object(v.a)(),t=Object(te.a)(e.breakpoints.up("md"));return Object(b.jsx)(ne,{children:Object(b.jsxs)(c.a,{maxWidth:"lg",sx:{position:"relative",height:"100%"},children:[Object(b.jsxs)(w.a,{container:!0,spacing:3,alignItems:"center",justifyContent:{xs:"center",md:"space-between"},sx:{height:"100%"},children:[Object(b.jsx)(w.a,{item:!0,xs:10,md:4,children:Object(b.jsxs)(l.a,{sx:{maxWidth:{md:360}},children:[Object(b.jsx)(j.d,{variants:j.x,children:Object(b.jsx)(d.a,{component:"p",variant:"overline",sx:{mb:2,color:"text.secondary"},children:"Testimonials"})}),Object(b.jsx)(j.d,{variants:j.x,children:Object(b.jsxs)(d.a,{variant:"h2",sx:{mb:3,color:"common.white"},children:["Who love ",Object(b.jsx)("br",{}),"my work"]})}),Object(b.jsx)(j.d,{variants:j.x,children:Object(b.jsx)(d.a,{sx:{color:"common.white"},children:"Our goal is to create a product and service that you\u2019re satisfied with and use it every day. This is why we\u2019re constantly working on our services to make it better every day and really listen to what our users has to say."})}),Object(b.jsx)(C.d,{width:"mdUp",children:Object(b.jsx)(l.a,{sx:{mt:3,display:"flex",justifyContent:"center"},children:Object(b.jsx)(j.d,{variants:j.x,children:Object(b.jsx)(ie,{})})})})]})}),Object(b.jsx)(w.a,{item:!0,xs:12,md:7,lg:6,sx:{right:{md:24},position:{md:"absolute"}},children:Object(b.jsxs)(w.a,{container:!0,spacing:t?3:0,alignItems:"center",children:[Object(b.jsx)(w.a,{item:!0,xs:12,md:6,children:ae.slice(0,3).map((function(e){return Object(b.jsx)(j.d,{variants:j.x,children:Object(b.jsx)(re,{testimonial:e})},e.name)}))}),Object(b.jsx)(w.a,{item:!0,xs:12,md:6,children:ae.slice(3,6).map((function(e){return Object(b.jsx)(j.d,{variants:j.x,children:Object(b.jsx)(re,{testimonial:e})},e.name)}))})]})})]}),Object(b.jsx)(C.d,{width:"mdDown",children:Object(b.jsx)(l.a,{sx:{bottom:60,position:"absolute"},children:Object(b.jsx)(j.d,{variants:j.v,children:Object(b.jsx)(ie,{})})})})]})})}var oe=Object(i.a)(s.a)((function(e){var t=e.theme;return Object(n.a)({paddingTop:t.spacing(8)},t.breakpoints.up("md"),{paddingTop:t.spacing(11)})}));function ce(){return Object(b.jsxs)(oe,{title:"About us | Digibot",children:[Object(b.jsx)(m,{}),Object(b.jsx)(z,{}),Object(b.jsx)(X,{}),Object(b.jsx)(r.a,{orientation:"vertical",sx:{my:10,mx:"auto",width:2,height:40}}),Object(b.jsx)(Q,{}),Object(b.jsx)(se,{})]})}}}]);
//# sourceMappingURL=146.61bc3f82.chunk.js.map