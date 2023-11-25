<template>
  <div class="news-block-two brown">
    <div class="inner-box fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style="margin-bottom: 50px">
      <div class="image">
        <img :src="apiRoot+news?.photo?.url" alt="" style="height: 250px;object-fit: cover;" />
        <div class="overlay-box">
          <a :href="apiRoot+news?.photo?.url" data-fancybox="news" data-caption=""></a>
        </div>
      </div>
      <div class="lower-content">
        <ul class="post-meta" style="padding-left: 0px">
          <li><span class="fa fa-calendar"></span>{{new Date(news?.createdAt).toLocaleDateString('en-GB')}}</li>
        </ul>
        <h5><nuxt-link :to="`/actualites/${news?.id}-${slugify(news?.titre)}`">{{news?.titre?.slice(0, 80)}}</nuxt-link></h5>
        <p v-html="news?.description.slice(0, 300)"></p>
        <nuxt-link :to="`/actualites/${news?.id}-${slugify(news?.titre)}`" class="theme-btn btn-style-ten">Voir plus</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import {slugify} from "~/services/utils";

const props = defineProps(['item', 'news']);

const runtimeConfig = useRuntimeConfig()
const url = runtimeConfig.public.url
const api = runtimeConfig.public.api
const apiRoot = runtimeConfig.public.apiRoot

</script>
