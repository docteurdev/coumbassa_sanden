import{aq as h,ar as y,as as m,am as g,at as _,au as x,i as b}from"./entry.CSVvCESN.js";import{a as F,w as p,a4 as E,A as q,y as w,g as R}from"./swiper-vue.1nsUfrxU.js";function P(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),h.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}let i=0;const C={fullscreen:Boolean,noRouteFullscreenExit:Boolean},k=["update:fullscreen","fullscreen"];function B(){const e=R(),{props:t,emit:o,proxy:n}=e;let r,c,u;const l=F(!1);y(e)===!0&&p(()=>n.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&s()}),p(()=>t.fullscreen,a=>{l.value!==a&&d()}),p(l,a=>{o("update:fullscreen",a),o("fullscreen",a)});function d(){l.value===!0?s():f()}function f(){l.value!==!0&&(l.value=!0,u=n.$el.parentNode,u.replaceChild(c,n.$el),document.body.appendChild(n.$el),i++,i===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:s},m.add(r))}function s(){l.value===!0&&(r!==void 0&&(m.remove(r),r=void 0),u.replaceChild(n.$el,c),l.value=!1,i=Math.max(0,i-1),i===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),n.$el.scrollIntoView!==void 0&&setTimeout(()=>{n.$el.scrollIntoView()})))}return E(()=>{c=document.createElement("span")}),q(()=>{t.fullscreen===!0&&f()}),w(s),Object.assign(n,{toggleFullscreen:d,setFullscreen:f,exitFullscreen:s}),{inFullscreen:l,toggleFullscreen:d}}function v(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const I=g({name:"close-popup",beforeMount(e,{value:t}){const o={depth:v(t),handler(n){o.depth!==0&&setTimeout(()=>{const r=_(e);r!==void 0&&x(r,n,o.depth)})},handlerKey(n){b(n,13)===!0&&o.handler(n)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=v(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{I as _,k as a,B as b,P as c,C as u};
