<template>
  <!-- About Section Four -->
  <section class="about-section-four">
    <div class="auto-container">

      <!-- Sec Title -->
      <div class="sec-title centered">
        <h2>Notre Mission</h2>
      </div>

      <div class="row clearfix text-justify">
        <div class="image-column col-lg-6 col-md-12 col-sm-12">
          <img v-if="pages?.image1" :src="apiRoot+pages?.image1?.url" alt="" width="1000" style="padding-top: 10%">
        </div>
        <div class="skills-column col-lg-6 col-md-12 col-sm-12">
          <div class="inner-column">
            <div class="text">
              <div v-html="pages?.part1"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="row clearfix mt-2 text-justify">

        <div class="skills-column col-lg-6 col-md-12 col-sm-12">
          <div class="inner-column" style="padding-left: 0px">
            <div class="text">
              <div v-html="pages?.part2"></div>
            </div>
          </div>
        </div>

        <div class="image-column col-lg-6 col-md-12 col-sm-12 pl-5">
          <img v-if="pages?.image2" :src="apiRoot+pages?.image2?.url" alt="" width="1000" style="padding-top: 10%">
        </div>
      </div>

    </div>
  </section>
  <!-- End About Section Four -->
</template>

<script setup>
useHead({
  title: 'Mot du CEO',
})
const runtimeConfig = useRuntimeConfig()
const url = runtimeConfig.public.url
const api = runtimeConfig.public.api
const apiRoot = runtimeConfig.public.apiRoot

const {data: pagesList} = await useFetch(() => api+'/blogpages/3?populate=image1,image2,image3')
const pages = pagesList.value['data']
</script>