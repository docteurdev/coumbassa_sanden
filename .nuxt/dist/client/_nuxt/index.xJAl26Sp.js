import{u as p}from"./vue.f36acd1f.CmpWyuzK.js";import{a as _}from"./entry.CSVvCESN.js";import{u as i}from"./fetch.CTEQHEol.js";import{A as f}from"./ActuItem.Dq-O2iLf.js";import{a0 as r,J as a,W as o,X as e,a1 as g,a2 as h,u as w,N as x}from"./swiper-vue.1nsUfrxU.js";const v={class:"about-section-four"},N={class:"auto-container"},A=e("div",{class:"sec-title centered"},[e("h2",null,"Actualités")],-1),C={class:"row clearfix"},V={__name:"index",async setup(k){let t,s;p({title:"Actualités"});const n=_().public.api,{data:u}=([t,s]=r(()=>i(()=>n+"/blogs?sort=id:desc&pagination[pageSize]=1000&populate=photo","$kwxCRRo8zd")),t=await t,s(),t);u.value.data;const{data:l}=([t,s]=r(()=>i(()=>n+"/last-actus?populate=image","$NtxHKNNs5X")),t=await t,s(),t),c=l.value.data;return console.log(c),(y,B)=>(a(),o("section",v,[e("div",N,[A,e("div",C,[(a(!0),o(g,null,h(w(c),(d,m)=>(a(),o("div",{class:"col-md-6",key:m},[x(f,{news:d},null,8,["news"])]))),128))])])]))}};export{V as default};
