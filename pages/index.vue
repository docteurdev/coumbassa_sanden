<template>
  <section id="top-header" class="about-section brown">
    <div class="auto-container">
      <div class="row clearfix">

        <!-- Content Column -->
        <div class="content-column col-lg-6 col-md-12 col-sm-12">
          <div class="inner-column">
            <!-- Sec Title Two -->
            <div class="sec-title-two brown">
              <div class="title">Présentation</div>
              <h2>Bienvenue sur votre site dédié à
                <br> la fiscalité
                <span> en Côte d'Ivoire</span>
              </h2>
            </div>

            <div class="text">
              <div v-html="pages?.part1"></div>
            </div>

            <div v-html="pages?.part2"></div>

            <!--            <div class="row clearfix">-->
            <!--              <div class="column col-lg-6 col-md-6 col-sm-12">-->
            <!--                <ul class="list-style-one">-->
            <!--                  <li>Des articles complets sur tous les impôts (TVA, Imppots sur les revenus, Impots fonciers ... ).</li>-->
            <!--                </ul>-->
            <!--              </div>-->
            <!--              <div class="column col-lg-6 col-md-6 col-sm-12">-->
            <!--                <ul class="list-style-one">-->
            <!--                  <li>Des guides pratiques pour vous accompagner dans vos déclarations fiscales.</li>-->
            <!--                </ul>-->
            <!--              </div>-->
            <!--              <div class="column col-lg-6 col-md-6 col-sm-12">-->
            <!--                <ul class="list-style-one">-->
            <!--                  <li>Des outils, des applications et simulateurs pour estimer vos impôts.</li>-->
            <!--                </ul>-->
            <!--              </div>-->

            <!--              <div class="column col-lg-6 col-md-6 col-sm-12">-->
            <!--                <ul class="list-style-one">-->
            <!--                  <li>Et bien sûr, toute l'actualité fiscale décryptée et analysée pour vous.</li>-->
            <!--                </ul>-->
            <!--              </div>-->
            <!--            </div>-->


          </div>
        </div>

        <div class="video-column col-lg-6 col-md-12 col-sm-12 pl-5 col-sm-pl-0">
          <div class="sec-title-two brown  pl-5">
            <div class="title">News</div>
            <h2>Dernières Actualités</h2>
          </div>
          <div class="row clearfix pl-5">
            <Swiper :slides-per-view="1">
              <SwiperSlide v-for="(item, idx) in actus" :key="idx">
                <ActusItem :key="item?.id" :news="item" />
                <!--                <strong>{{ slide }}</strong>-->
              </SwiperSlide>
            </Swiper>
          </div>

        </div>

      </div>
    </div>
  </section>

  <section class="services-section-eight">
    <div class="auto-container">
      <div class="row clearfix">
        <!-- Content Column -->
        <div class="content-column col-lg-8 col-md-12 col-sm-12">
          <div class="inner-column">
            <div class="row clearfix">
              <!-- Services Block Eleven -->
              <div class="services-block-eleven col-lg-6 col-md-6 col-sm-12" v-for="item in services">
                <div style="height: 143px;" class="inner-box wow fadeInUp" data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <div class="border-one"></div>
                  <div class="border-two"></div>
                  <div class="content">
                    <div class="icon-box">
                      <span class="icon fa fa-bullhorn"></span>
                    </div>
                    <!-- href="services-single.html" -->
                    <h6><a>{{ item?.titre }}</a></h6>
                    <div class="text">{{ item?.short }}</div>
                  </div>
                </div>
              </div>

              <!-- Services Block Eleven -->
              <!--              <div class="services-block-eleven col-lg-6 col-md-6 col-sm-12">-->
              <!--                <div class="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">-->
              <!--                  <div class="border-one"></div>-->
              <!--                  <div class="border-two"></div>-->
              <!--                  <div class="content">-->
              <!--                    <div class="icon-box">-->
              <!--                      <span class="icon fa fa-suitcase"></span>-->
              <!--                    </div>-->
              <!--                    <h6><a href="services-single.html">Conseil fiscal</a></h6>-->
              <!--                    <div class="text">Lorem ipsum dolor sit amet, con sectetu adipiscing elit, sed do eius mod tempor incididunt.</div>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </div>-->

              <!--              &lt;!&ndash; Services Block Eleven &ndash;&gt;-->
              <!--              <div class="services-block-eleven col-lg-6 col-md-6 col-sm-12">-->
              <!--                <div class="inner-box wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms">-->
              <!--                  <div class="border-one"></div>-->
              <!--                  <div class="border-two"></div>-->
              <!--                  <div class="content">-->
              <!--                    <div class="icon-box">-->
              <!--                      <span class="icon fa fa-coffee"></span>-->
              <!--                    </div>-->
              <!--                    <h6><a href="services-single.html">Formations fiscales</a></h6>-->
              <!--                    <div class="text">-->
              <!--                      Lorem ipsum dolor sit amet, con sectetu adipiscing elit, sed do eius mod tempor incididunt.-->
              <!--                    </div>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </div>-->

              <!--              &lt;!&ndash; Services Block Eleven &ndash;&gt;-->
              <!--              <div class="services-block-eleven col-lg-6 col-md-6 col-sm-12">-->
              <!--                <div class="inner-box wow fadeInUp" data-wow-delay="1200ms" data-wow-duration="1500ms">-->
              <!--                  <div class="border-one"></div>-->
              <!--                  <div class="border-two"></div>-->
              <!--                  <div class="content">-->
              <!--                    <div class="icon-box">-->
              <!--                      <span class="icon fa fa-building"></span>-->
              <!--                    </div>-->
              <!--                    <h6><a href="services-single.html">Contrôles & Contentieux fiscaux</a></h6>-->
              <!--                    <div class="text">Lorem ipsum dolor sit amet, con sectetu adipiscing elit, sed do eius mod tempor incididunt.</div>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </div>-->

              <!--              &lt;!&ndash; Services Block Eleven &ndash;&gt;-->
              <!--              <div class="services-block-eleven col-lg-6 col-md-6 col-sm-12">-->
              <!--                <div class="inner-box wow fadeInUp" data-wow-delay="1500ms" data-wow-duration="1500ms">-->
              <!--                  <div class="border-one"></div>-->
              <!--                  <div class="border-two"></div>-->
              <!--                  <div class="content">-->
              <!--                    <div class="icon-box">-->
              <!--                      <span class="icon fa fa-pie-chart"></span>-->
              <!--                    </div>-->
              <!--                    <h6><a href="services-single.html">Immobilier Zen</a></h6>-->
              <!--                    <div class="text">Lorem ipsum dolor sit amet, con sectetu adipiscing elit, sed do eius mod tempor incididunt.</div>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </div>-->

            </div>
          </div>
        </div>

        <!-- Image Column -->
        <div class="image-column col-lg-4 col-md-8 col-sm-12">
          <div class="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div class="image">
              <li>
                <nuxt-link to="/mot-ceo">

                  <img src="/images/profil1.png" alt="" />
                  <div class="overlay-box">
                    <div class="overlay-inner">
                      <div class="content">
                        <h2>15 <span>Années d'expérience</span></h2>
                      </div>
                      
                    </div>
                  </div>
                </nuxt-link>
              </li>
            </div>
            <p style="z-index: 100; margin-left: -3px;">
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

  <!--  &lt;!&ndash; News Section Two &ndash;&gt;-->
  <!--  <section class="news-section-two alternate">-->
  <!--    <div class="auto-container">-->
  <!--      &lt;!&ndash; Sec Title &ndash;&gt;-->
  <!--      <div class="sec-title-two centered">-->
  <!--        <h2>Dernières news</h2>-->
  <!--      </div>-->

  <!--      <div class="row clearfix">-->
  <!--        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12" v-for="newsOne in [{},{},{},{},{},{}]" :key="newsOne.id">-->
  <!--          <news-item :news="newsOne" />-->

  <!--        </div>-->

  <!--      </div>-->

  <!--    </div>-->
  <!--  </section>-->
  <!-- <Map/> -->
</template>

<style>
.auto-container {
  padding: 0px;
}

@media screen and (max-width: 476px) {
  .inner-box {
    height: auto !important;
  }
}

@media screen and (max-width:1201px) {

  .video-column,
  .clearfix {
    padding-left: 0 !important;
  }

  .auto-container {
    padding: 0px 15px;
  }
}
</style>

<script setup>
import Map from "../components/Map.vue"
import ActusItem from "../components/ActuItem.vue"

useHead({
  title: 'Coumbassa-Sanden - la référence africaine en fiscalité',
})
const runtimeConfig = useRuntimeConfig()
const url = runtimeConfig.public.url
const api = runtimeConfig.public.api

const { data: newsList } = await useFetch(() => api + '/blogs?populate=photo')
const news = newsList.value['data']
const { data: pagesList } = await useFetch(() => api + '/blogpages?populate=photo')
const pages = pagesList.value['data'][0]
const { data: servicesList } = await useFetch(() => api + '/blogservices')
const services = servicesList.value['data'];

// ==============
const { data: actusList } = await useFetch(() => api + '/last-actus?populate=image')
const actus = actusList.value['data']


console.log("services", actusList)
// change layout on nuxt 3
// try {
//   const {data: newsList} = await useFetch(() => 'http://localhost:1337/api/blogs?populate=photo')
//   const news = newsList.value['data']
// } catch (e) {
//   console.log(e)
//
// }





</script>

