import{_ as v,a as k}from"./entry.CSVvCESN.js";import{J as n,W as o,X as e,u as x,Z as I,Y as a,_ as B,$ as S}from"./swiper-vue.1nsUfrxU.js";const y=t=>(B("data-v-1ec3b9c6"),t=t(),S(),t),C={class:"news-block-two brown"},M={class:"inner-box fadeInUp","data-wow-delay":"0ms","data-wow-duration":"1500ms",style:{"margin-bottom":"50px"}},V={class:"image"},A=["src"],D={key:1,style:{height:"250px"},class:"d-flex justify-content-center items-center"},H=y(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M21 3H3C2 3 1 4 1 5v14a2 2 0 0 0 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2M5 17l3.5-4.5l2.5 3l3.5-4.5l4.5 6z"})],-1)),L=[H],R={class:"overlay-box"},T=["href"],j={style:{height:"341px"},class:"lower-content"},N={class:"post-meta",style:{"padding-left":"0px"}},z=y(()=>e("span",{class:"fa fa-calendar"},null,-1)),E=["href"],G=["innerHTML"],J=["href"],U={__name:"ActuItem",props:["item","news"],setup(t){const s=k();s.public.url,s.public.api;const c=s.public.apiRoot;return(W,X)=>{var i,l,d,r,h,u,w,_,m,f,p,g,b;return n(),o("div",C,[e("div",M,[e("div",V,[(i=t.news)!=null&&i.image?(n(),o("img",{key:0,src:x(c)+((d=(l=t.news)==null?void 0:l.image)==null?void 0:d.url),alt:"",style:{height:"250px","object-fit":"cover"}},null,8,A)):(n(),o("div",D,L)),e("div",R,[e("a",{href:x(c)+((h=(r=t.news)==null?void 0:r.image)==null?void 0:h.url),"data-fancybox":"news","data-caption":""},null,8,T)])]),e("div",j,[e("ul",N,[e("li",null,[z,I(a(new Date((u=t.news)==null?void 0:u.date_publish).toLocaleDateString("en-GB")),1)]),e("li",null,a((w=t.news)==null?void 0:w.country),1)]),e("h5",null,[e("a",{href:(_=t.news)==null?void 0:_.link},a((f=(m=t.news)==null?void 0:m.title)==null?void 0:f.slice(0,80)),9,E)]),e("p",{innerHTML:(g=(p=t.news)==null?void 0:p.description)==null?void 0:g.slice(0,200)},null,8,G),e("a",{class:"theme-btn btn-style-ten",href:(b=t.news)==null?void 0:b.link,"data-fancybox":"news","data-caption":""},"Voir plus",8,J)])])])}}},$=v(U,[["__scopeId","data-v-1ec3b9c6"]]);export{$ as A};
