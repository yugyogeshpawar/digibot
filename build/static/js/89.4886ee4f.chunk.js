"use strict";(self.webpackChunkDigibot=self.webpackChunkDigibot||[]).push([[89],{8089:function(e,t,d){d.r(t),d.d(t,{default:function(){return c}});d(7313);var a=d(7829),i=d(8501),l=d(5833),o=d(1310),r=d(9099),n=d(7890),s=d(6417);const m=["id","name","rating","email","country","city","dateCreated","isAdmin","phone","position"];function c(){const e=(0,n.s0)(),{data:t}=(0,o.PT)({dataSet:"Employee",visibleFields:m,rowLength:100}),d=[{field:"id",headerName:"Id"},{field:"date",headerName:"Date"},{field:"memberUserId",headerName:"User Id",hide:!0},{field:"memberName",headerName:"Name",width:120},{field:"walletAddres",headerName:"Wallet Address",width:200},{field:"walletAmount",headerName:"Wallet Amount",width:120},{field:"action",headerName:"Action",sortable:!1,width:150,renderCell:t=>(0,s.jsx)(r.Z,{onClick:d=>{d.stopPropagation(),e(`/${t.id}`)},children:"Show Transaction"})}];return console.log(d),console.log(t),(0,s.jsx)(a.Z,{sx:{height:"82vh",width:1},children:(0,s.jsx)(i._,{initialState:{columns:{columnVisibilityModel:{ActionButton:!1,date:!1,member_user_id:!1,member_name:!1,wallet_addres:!1,Wallet_amount:!1}}},columns:[],rows:[{id:1,date:"20-5-2023",memberUserId:"6873419",memberName:"User23",walletAddres:"0x54554fhef0dfg",walletAmount:2e3}],columns:d,slots:{toolbar:l.n},slotProps:{toolbar:{showQuickFilter:!0,quickFilterProps:{debounceMs:500}}},sx:{background:"#fff",padding:2,borderRadius:4}})})}}}]);