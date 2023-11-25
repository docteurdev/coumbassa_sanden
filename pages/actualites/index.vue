<template>
  <section class="about-section-four">
    <div class="auto-container">

      <div class="sec-title centered">
        <h2>Actualités</h2>
      </div>


      <div class="row clearfix">
        <div class="col-md-6" v-for="(item, index) in news" :key="index">
          <news-item  :news="item" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import axios from "axios"

useHead({
  title: 'Actualités',
})
const runtimeConfig = useRuntimeConfig()
const api = runtimeConfig.public.api


const {data: newsList} = await useFetch(() => api+'/blogs?sort=id:desc&pagination[pageSize]=1000&populate=photo')
const news = newsList.value['data']

console.log(news);


</script>
