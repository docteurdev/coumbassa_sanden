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
                <img v-if="pages?.image1" :src="apiRoot + pages?.image1?.url" alt=""
                  style="height: 500px;object-fit: cover;">
              </figure>
            </div>

          </div>
        </div>


        <div class="content-column col-lg-7 col-md-12 col-sm-12">
          <div class="inner-column p-5 text-justify">

            <!-- Sec Title Two -->
            <div v-html="pages?.part1"></div>
            <p style="z-index: 100; margin-top: 0.7rem;">
              <a style="text-decoration: none;"
                href="https://www.linkedin.com/in/marie-th%C3%A9r%C3%A8se-coumbassa-cousot-642b62229/">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.092v4.714zM7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549m1.336 9.764H5.667V9.75H8.34zM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3z" />
                </svg>

                <span style="font-size: 13px; color: #9a7f59;">Marie-Thérèse COUMBASSA-COUSOT</span>
              </a>

            </p>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 400px) {
  .video-box {
    margin-left: 4%;
  }

}
</style>

<script setup>
useHead({
  title: 'Mot du CEO',
})

const runtimeConfig = useRuntimeConfig()
const url = runtimeConfig.public.url
const api = runtimeConfig.public.api
const apiRoot = runtimeConfig.public.apiRoot

const { data: pagesList } = await useFetch(() => api + '/blogpages/2?populate=image1,image2')
const pages = pagesList.value['data']
</script>
