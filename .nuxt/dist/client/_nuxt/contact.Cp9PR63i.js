import{d as L,a6 as R,a as v,A as N,a7 as B,w as E,J as A,L as j,f as x,a0 as D,W as H,X as t,u as n,a8 as I,C,a9 as T,aa as U,N as F,k as $,a1 as O,a3 as P}from"./swiper-vue.1nsUfrxU.js";import{u as W}from"./vue.f36acd1f.CmpWyuzK.js";import{al as Z,a as z}from"./entry.CSVvCESN.js";import{u as k}from"./fetch.CTEQHEol.js";import{a as J}from"./axios.Bo0ATomq.js";const Q=""+globalThis.__publicAssetsURL("img/QR-CODE.png"),X=L({props:{value:{default:""},chars:{default:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"},count:{default:5},hideLines:{type:Boolean,default:!1},customTextColor:{default:""},textColors:{default:()=>[]},isDirty:{type:Boolean,default:!0},width:{default:function(b){return b.count*30}},height:{default:50},canvasClass:{default:""},icon:{default:"refresh"},captchaFont:{default:"bold 28px sans-serif"}},emits:["isValid","getCode","update:modelValue"],setup(b,{emit:m}){const s=b,y=R(),r=v();let d=v(""),h=s.width,f=s.height;N(()=>{M()});const M=()=>{r.value.width=h,r.value.height=f;let e=r.value.getContext("2d");for(let c=0;c<s.count;c++){let p=Math.floor(Math.random()*s.chars.length),o=Math.random()*30*Math.PI/180,a=s.chars[p];d.value+=a;let g=10+c*25,_=30+Math.random()*8;e.font=s.captchaFont,e.translate(g,_),s.customTextColor?e.fillStyle=s.customTextColor:s.textColors.length?e.fillStyle=s.textColors[Math.floor(Math.random()*s.textColors.length)]:e.fillStyle=i(),e.rotate(o),e.fillText(a,0,0),e.rotate(-o),e.translate(-g,-_)}s.hideLines||l(),w()},l=()=>{let e=r.value.getContext("2d");for(let c=0;c<s.count;c++)e.strokeStyle=i(),e.beginPath(),e.moveTo(Math.random()*h,Math.random()*f),e.lineTo(Math.random()*h,Math.random()*f),e.stroke()},w=()=>{m("getCode",d.value)};B(()=>{d.value&&d.value===s.value?m("isValid",!0):m("isValid",!1)}),E(d,e=>{m("update:modelValue",e)});const i=()=>{let e=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256),p=Math.floor(Math.random()*256);return"rgb("+e+","+c+","+p+")"},S=()=>{r.value.getContext("2d").clearRect(0,0,h,f),d.value="",M()},V=()=>x("div",{class:"vue_client_recaptcha"},[x("div",{class:"vue_client_recaptcha_icon",onClick:()=>S()},[x(y.icon?y.icon:"svg",{class:"vue_client_recaptcha_icon_svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[x("path",{d:"M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z",fill:"#333333"})])]),x("canvas",{id:"captcha_canvas",class:`captcha_canvas ${s.canvasClass}`,ref:r},d.value)]);return(e,c)=>(A(),j(V))}}),q={class:"contact-page-section"},G={class:"auto-container"},K={class:"inner-container"},Y=["innerHTML"],tt={class:"row clearfix"},et={class:"info-column col-lg-7 col-md-12 col-sm-12"},ot={class:"inner-column"},st=["innerHTML"],at={class:"form-column col-lg-5 col-md-12 col-sm-12"},lt={class:"inner-column"},nt={class:"contact-form"},ct={class:"form-group"},it={class:"form-group"},rt={class:"form-group"},dt=t("option",{value:"Sujet"},"Sujet",-1),ut=t("option",{value:"consultation"},"Consultation en ligne",-1),mt=t("option",{value:"rdv"},"Rendez-vous",-1),pt=t("option",{value:"autres"},"Autres",-1),ht=[dt,ut,mt,pt],ft={class:"form-group"},vt={class:"form-group"},gt={class:"form-group"},_t=["disabled"],xt=P('<section class="contact-info-section" style="background-image:url(&#39;/images/background/patern-3.png&#39;);"><div class="auto-container"><div class="row clearfix"><div class="column col-lg-4 col-md-6 col-sm-12"><h4>Adresse</h4><ul class="list-style-six"><li><span class="icon flaticon-map-1"></span> Rue du Chevalier de Clieu <br> Immeuble Sabalias, 2ème étage <br> Zone 4 - Marcory <br> ABIDJAN - RCI </li></ul></div><div class="column col-lg-4 col-md-6 col-sm-12"><h4>Email</h4><ul class="list-style-six"><li><span class="icon flaticon-e-mail-envelope"></span>contact@coumbassa-sanden.com</li></ul></div><div class="column col-lg-4 col-md-6 col-sm-12"><h4>Téléphone</h4><ul class="list-style-six"><li><span class="icon flaticon-phone-receiver"></span> +(225) 07 10 10 29 43 </li><li><img style="filter:drop-shadow(2px 4px 6px black);width:180px;" src="'+Q+'" alt="QR-CODE.png" srcset=""></li></ul></div></div></div></section>',1),Vt={__name:"contact",async setup(b){let m,s;const y=Z();W({title:"Contacts"});const r=z(),d=r.public.api;r.public.apiRoot;const h=r.public.url;async function f(){try{const o=l.value,a=await J.post(h+"/api/mailSender",o);console.log(a.data)}catch(o){console.log(o)}}function M(){y.notify({message:"Merci ! Nous vous contacterons bientôt.",color:"green"})}v("");const l=v({subject:"Sujet"});let w=v(!1);const i=v(null),{data:S}=([m,s]=D(()=>k(()=>d+"/blogpages/5","$upAkW7AZLX")),m=await m,s(),m),V=S.value.data;async function e(){p&&(console.log(l.value),console.log(i),c(i),console.log(p(i)),console.log(c(i)));try{const o=k(d+"/contacts",{method:"POST",body:JSON.stringify({data:l.value})},"$X3ZNBmr3WA");o.data&&(console.log(o),f(),setTimeout(()=>{l.value={},M()},2e3))}catch(o){console.log(o)}}const c=o=>(console.log(o),o),p=o=>(console.log(o),w.value=o,o);return(o,a)=>{var g,_;return A(),H(O,null,[t("section",q,[t("div",G,[t("div",K,[t("div",{innerHTML:(g=n(V))==null?void 0:g.part1},null,8,Y),t("div",tt,[t("div",et,[t("div",ot,[t("div",{style:{"font-size":"20px"},innerHTML:(_=n(V))==null?void 0:_.part2},null,8,st)])]),t("div",at,[t("div",lt,[t("div",nt,[t("form",{method:"post",id:"contact-form",onSubmit:a[5]||(a[5]=I(u=>e(),["prevent"]))},[t("div",ct,[C(t("input",{"onUpdate:modelValue":a[0]||(a[0]=u=>n(l).name=u),type:"text",placeholder:"Nom Complet"},null,512),[[T,n(l).name]])]),t("div",it,[C(t("input",{"onUpdate:modelValue":a[1]||(a[1]=u=>n(l).email=u),type:"text",name:"email",placeholder:"Email"},null,512),[[T,n(l).email]])]),t("div",rt,[C(t("select",{"onUpdate:modelValue":a[2]||(a[2]=u=>n(l).subject=u),class:"custom-select-box"},ht,512),[[U,n(l).subject]])]),t("div",ft,[C(t("textarea",{"onUpdate:modelValue":a[3]||(a[3]=u=>n(l).description=u),name:"message",placeholder:"Votre message.."},null,512),[[T,n(l).description]])]),F(n(X),{count:"8",value:n(i),onGetCode:c,onIsValid:p},null,8,["value"]),t("div",vt,[C(t("input",{placeholder:"Recopiez le code Captcha",name:"captcha",type:"text","onUpdate:modelValue":a[4]||(a[4]=u=>$(i)?i.value=u:null)},null,512),[[T,n(i)]])]),t("div",gt,[t("button",{type:"submit",class:"theme-btn",disabled:!n(w)},"Envoyer",8,_t)])],32)])])])])])])]),xt],64)}}};export{Vt as default};
