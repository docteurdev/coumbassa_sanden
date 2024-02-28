<template>
 <div class="news-block-two brown">
   <div class="inner-box fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style="margin-bottom: 50px">
     <div class="image">
       <img v-if="news?.image" :src="apiRoot+news?.image?.url" alt="" style="height: 250px;object-fit: cover;" />
       <div v-else style="height: 250px;" class="d-flex justify-content-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21 3H3C2 3 1 4 1 5v14a2 2 0 0 0 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2M5 17l3.5-4.5l2.5 3l3.5-4.5l4.5 6z"/></svg>
       </div>
       <div class="overlay-box">
         <a :href="apiRoot+news?.image?.url" data-fancybox="news" data-caption=""></a>
       </div>
     </div>
     <div style="height: 341px;" class="lower-content">
       <ul class="post-meta" style="padding-left: 0px">
         <li><span class="fa fa-calendar"></span>{{new Date(news?.date_publish).toLocaleDateString('en-GB')}}</li>
         <li> {{ news?.country }} </li>
       </ul>
       <h5><a :href="news?.link">{{news?.title?.slice(0, 80)}}</a></h5>
       <p v-html="news?.description?.slice(0, 200)"></p>
       <!-- <nuxt-link :to="`/actualites/${news?.id}-${slugify(news?.title)}`" class="theme-btn btn-style-ten">Voir plus</nuxt-link> -->
       <a
       class="theme-btn btn-style-ten"
       :href="news?.link" data-fancybox="news" data-caption="">Voir plus</a>

     </div>
   </div>
 </div>
</template>
<style scoped>
  @media screen and (max-width: 390px) {
    .lower-content{
      height: auto !important;
    }
   
  }
</style>
<script setup>
import {slugify} from "~/services/utils";

const props = defineProps(['item', 'news']);

const runtimeConfig = useRuntimeConfig()
const url = runtimeConfig.public.url
const api = runtimeConfig.public.api
const apiRoot = runtimeConfig.public.apiRoot

</script>
