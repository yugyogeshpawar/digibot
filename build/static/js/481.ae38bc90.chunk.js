"use strict";(self.webpackChunkDigibot=self.webpackChunkDigibot||[]).push([[481],{9481:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});var i=t(7313),r=t(8501),o=t(5833),d=t(6220),l=t(6417);function m(){const[e,a]=(0,i.useState)([]);(0,i.useEffect)((()=>{(async()=>{const e=await(0,d.DZ)();if(Array.isArray(null===e||void 0===e?void 0:e.data)){const t=e.data.map(((e,a)=>({id:a+1,member_user_id:e.member_user_id,member_name:e.member_name,contact:e.contact,email:e.email,wallet_amount:e.wallet_amount})));a(t)}})()}),[]);return(0,l.jsx)("div",{style:{height:"80vh",width:"100%"},children:(0,l.jsx)(r._,{rows:e,columns:[{field:"id",headerName:"No.",width:90},{field:"member_user_id",headerName:"Member User Id",width:150,editable:!0},{field:"member_name",headerName:"Member Name",sortable:!1,width:160},{field:"contact",headerName:"Contact",sortable:!1,width:160},{field:"email",headerName:"Email",sortable:!1,width:160},{field:"wallet_amount",headerName:"Wallet Amount",sortable:!1,width:160}],components:{Toolbar:o.n},autoPageSize:!0,showToolbar:!0,slotProps:{toolbar:{showQuickFilter:!0,quickFilterProps:{debounceMs:500}}},sx:{background:"#fff",padding:2,borderRadius:4}})})}}}]);