(this["webpackJsonp@Digibot/Digibot"]=this["webpackJsonp@Digibot/Digibot"]||[]).push([[153],{2586:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return A}));var a=r(8),n=r.n(a),c=r(17),i=r(22),o=r(32),s=r(347),d=r.n(s),u=r(29),l=r.n(u),b=r(9),h=r(1330),p=r(259),j=r(1331),v=r(260),O=r(1318),g=r(61),x=r(455),f=r(26),m=r(436),S=r(3),y=r(52),T=r(34),C=r(43),P=r(223),_=r(1316),k=r(1240),q=r(1344),w=(r(123),r(0));function D(e){if(e.target.value.length>e.target.maxLength)return e.target.value=e.target.value.slice(0,e.target.maxLength)}var E=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||"https://digibot.co/api/v1/api";function R(){var e=Object(T.h)(),t=Object(g.useSnackbar)().enqueueSnackbar,r=y.f().shape({code1:y.e().required("Code is required"),code2:y.e().required("Code is required"),code3:y.e().required("Code is required"),code4:y.e().required("Code is required"),code5:y.e().required("Code is required"),code6:y.e().required("Code is required")}),a=function(){var r=Object(c.a)(n.a.mark((function r(a){var c;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l.a.post("".concat(E,"/auth/verifyPassword"),{otp:a});case 3:"otp verified"===(c=r.sent).data.mesage?(t("OTP Verified",{variant:"success"}),e("/auth/changePassword")):"Invalid Token!!"===c.data?t("OTP Incorrect",{variant:"error"}):t(c.data,{variant:"error"}),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),t(r.t0,{variant:"error"}),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),i=Object(C.d)({initialValues:{code1:"",code2:"",code3:"",code4:"",code5:"",code6:""},validationSchema:r,onSubmit:function(){var e=Object(c.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),r="".concat(t.code1).concat(t.code2).concat(t.code3).concat(t.code4).concat(t.code5).concat(t.code6),sessionStorage.setItem("otp",r),a(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),o=i.values,s=i.errors,d=i.isValid,u=i.touched,b=(i.isSubmitting,i.handleSubmit),h=i.getFieldProps;return Object(w.jsx)(C.b,{value:i,children:Object(w.jsxs)(C.a,{autoComplete:"off",noValidate:!0,onSubmit:b,children:[Object(w.jsx)(P.a,{direction:"row",spacing:2,justifyContent:"center",children:Object.keys(o).map((function(e){return Object(w.jsx)(_.a,Object(S.a)(Object(S.a)({},h(e)),{},{type:"number",placeholder:"-",onInput:D,error:Boolean(u[e]&&s[e]),inputProps:{maxLength:1,sx:{p:0,textAlign:"center",width:{xs:36,sm:56},height:{xs:36,sm:56}}}}),e)}))}),Object(w.jsx)(k.a,{error:!d,style:{textAlign:"right"},children:!d&&"Code is required"}),Object(w.jsx)(q.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mt:3},children:"Verify"})]})})}var I=Object(b.a)(m.a)((function(e){return{display:"flex",minHeight:"100%",alignItems:"center",padding:e.theme.spacing(12,0)}})),W=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||"https://digibot.co/api/v1/api";function A(){var e=Object(g.useSnackbar)().enqueueSnackbar,t=function(){var t=Object(c.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=sessionStorage.getItem("email"),console.log("resend code"),t.prev=2,t.next=5,l.a.post("".concat(W,"/auth/forgetPassword"),{userId:r});case 5:200===t.sent.status?e("Code sent successfully",{variant:"success"}):e("Please Try Again!",{variant:"error"}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),e("Unexpected error occurred! Please Try Again",{variant:"error"}),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}();return Object(w.jsxs)(I,{title:"Verify | Digibot",children:[Object(w.jsx)(x.a,{}),Object(w.jsx)(h.a,{children:Object(w.jsxs)(p.a,{sx:{maxWidth:480,mx:"auto"},children:[Object(w.jsx)(j.a,{size:"small",component:o.b,to:f.a.login,startIcon:Object(w.jsx)(i.a,{icon:d.a,width:20,height:20}),sx:{mb:3},children:"Back"}),Object(w.jsx)(v.a,{variant:"h3",paragraph:!0,children:"Please check your email!"}),Object(w.jsx)(v.a,{sx:{color:"text.secondary"},children:"We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email."}),Object(w.jsx)(p.a,{sx:{mt:5,mb:3},children:Object(w.jsx)(R,{})}),Object(w.jsxs)(v.a,{variant:"body2",align:"center",children:["Don\u2019t have a code? \xa0"," ",Object(w.jsx)(O.a,{style:{color:"#1976d2",cursor:"pointer"},onClick:t,children:"Resend code"})]})]})})]})}}}]);
//# sourceMappingURL=153.c7461ae1.chunk.js.map