<template>
  <!--Page Title-->
<!--  <section class="page-title" style="background: #f2f2f2">-->
<!--    <div class="auto-container">-->
<!--      <div class="sec-title light centered">-->
<!--        <h2 class="text-dark">Autres Services</h2>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
  <!--End Page Title-->

  <!-- Services Section Ten -->
  <section class="services-section-ten style-two">
    <div class="auto-container">

      <div class="sec-title centered">
        <h2>Autres Services</h2>
      </div>

      <div class="row clearfix">

        <!-- Services Block Fourteen -->
        <div class="services-block-fourteen style-two col-lg-3 col-md-6 col-sm-12" v-for="item in services">
          <div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div class="icon-box">
              <span class="icon flaticon-earnings"></span>
            </div>
            <h6><a href="#">{{item?.titre}}</a></h6>
            <div class="text" v-html="item?.short"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <!-- End Services Section Ten -->
</template>

<script setup>
useHead({
  title: 'Services',
})

const runtimeConfig = useRuntimeConfig()
const url = runtimeConfig.public.url
const api = runtimeConfig.public.api
const apiRoot = runtimeConfig.public.apiRoot

const {data: servicesList} = await useFetch(() => api+'/blogservices')
const services = servicesList.value['data']

</script>