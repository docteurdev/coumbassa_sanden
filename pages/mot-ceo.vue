<template>
  <section class="about-section brown">
    <div class="auto-container">

      <div class="sec-title centered">
        <h2>Mot du CEO</h2>
      </div>

      <div class="row clearfix">

        <div class="video-column col-lg-5 col-md-12 col-sm-12">
          <div class="inner-column">
            <!--Video Box-->
            <div class="video-box">
              <figure class="image">
                <img v-if="pages?.image1" :src="apiRoot+pages?.image1?.url" alt="" style="height: 500px;object-fit: cover;">
              </figure>
            </div>

          </div>
        </div>


        <div class="content-column col-lg-7 col-md-12 col-sm-12">
          <div class="inner-column p-5 text-justify">

            <!-- Sec Title Two -->
            <div v-html="pages?.part1"></div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>
<script setup>
useHead({
  title: 'Mot du CEO',
})

const runtimeConfig = useRuntimeConfig()
const url = runtimeConfig.public.url
const api = runtimeConfig.public.api
const apiRoot = runtimeConfig.public.apiRoot

const {data: pagesList} = await useFetch(() => api+'/blogpages/2?populate=image1,image2')
const pages = pagesList.value['data']
</script>
