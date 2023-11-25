<template>

<!--  <section class="page-title" style="background-image:url('/images/tax1.jpg')">-->
<!--    <div class="auto-container">-->
<!--      <div class="content">-->
<!--        <h1>Blog <span>details</span></h1>-->
<!--        <ul class="page-breadcrumb">-->
<!--          <li><a href="index.html">Home</a></li>-->
<!--          <li>Blog details</li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->


  <div class="sidebar-page-container">
    <div class="auto-container">
      <div class="row clearfix">

        <!--Content Side-->
        <div class="content-side col-lg-8 col-md-12 col-sm-12">
          <div class="blog-single">
            <div class="inner-box">
              <div class="image">
                <img :src="'http://localhost:1337'+newsId?.photo?.url" alt="" />
              </div>
              <div class="lower-content">
                <h4>{{newsId?.titre}}</h4>

                <ul class="post-meta">
                  <li><span class="fa fa-calendar"></span>{{newsId?.date}}</li>
                  <li><span class="fa fa-list"></span>{{newsId?.categories}}</li>
<!--                  <li><span class="fa fa-comment"></span>(3) Comment</li>-->
                </ul>
                <div class="text">
                  <p v-html="newsId?.description"></p>
                </div>

              </div>
            </div>

            <!--post-share-options-->
            <div class="post-share-options">
              <div class="post-share-inner clearfix">
                <div class="pull-left post-tags">
<!--                  <span>Tags: </span><a href="#">Business</a> <a href="#">Life</a> <a href="#">Applin</a> <a href="#">Techniq</a>-->
                </div>
                <ul class="pull-right social-links clearfix">
                  <li class="facebook"><a href="#" class="fa fa-facebook"></a></li>
                  <li class="twitter"><a href="#" class="fa fa-twitter"></a></li>
                  <li class="google-plus"><a href="#" class="fa fa-google-plus"></a></li>
                  <li class="dribble"><a href="#" class="fa fa-dribbble"></a></li>
                </ul>
              </div>
            </div>


          </div>
        </div>
        <!--End Main Content-->

        <!--Sidebar Side-->
        <div class="sidebar-side col-lg-4 col-md-12 col-sm-12">
          <aside class="sidebar default-sidebar">

            <!-- Search -->
            <div class="sidebar-widget search-box">
              <form method="post" action="contact.html">
                <div class="form-group">
                  <input type="search" name="search-field" value="" placeholder="Entrer vos mots clés ..." required>
                  <button type="submit"><span class="icon fa fa-search"></span></button>
                </div>
              </form>
            </div>

            <!--Blog Category Widget-->
            <div class="sidebar-widget sidebar-blog-category">
              <div class="sidebar-title-two">
                <h4>Categories</h4>
              </div>
              <ul class="blog-cat-two">
                <li><a href="#">Fiscalité <span>(3)</span></a></li>
                <li><a href="#">Comptabilité <span>(4)</span></a></li>
                <li><a href="#">Juridique <span>(8)</span></a></li>
              </ul>
            </div>

            <!-- Popular Post Widget-->
            <div class="sidebar-widget popular-posts">
              <div class="sidebar-title-two">
                <h4>Articles Récents</h4>
              </div>

              <article class="post" v-for="item in news.slice(0, 5)" :key="item.id">
                <figure class="post-thumb" style="border-radius: 0">
                  <img :src="apiRoot+item?.photo?.url" alt="">
                </figure>
                <div class="text"><a href="blog-single.html">{{ item?.titre }}</a></div>
                <div class="post-info">{{ item?.date }}</div>
              </article>

            </div>

            <!--Archive Widget-->
<!--            <div class="sidebar-widget sidebar-blog-category archive-widget">-->
<!--              <div class="sidebar-title-two">-->
<!--                <h4>Archives</h4>-->
<!--              </div>-->
<!--              <ul class="blog-cat-two">-->
<!--                <li><a href="#">January 2019 <span>(3)</span></a></li>-->
<!--                <li><a href="#">February 2019 <span>(2)</span></a></li>-->
<!--                <li><a href="#">May 2019 <span>(6)</span></a></li>-->
<!--              </ul>-->
<!--            </div>-->

            <!-- Banner Widget-->
            <div class="sidebar-widget banner-widget">
              <div class="widget-content" style="background-image:url('images/resource/service-15.jpg')">
                <div class="logo">
                  <img src="images/icons/widget-logo.png" alt="" />
                </div>
                <div class="title">Securied Business with</div>
                <h2>Financ</h2>
                <a href="contact.html" class="theme-btn btn-style-seventen">Let’s start now <span class="icon flaticon-link"></span></a>
              </div>
            </div>

          </aside>
        </div>
        <!-- End Sidebar Side -->

      </div>
    </div>
  </div>

</template>

<script setup>

const runtimeConfig = useRuntimeConfig()
const api = runtimeConfig.public.api
const apiRoot = runtimeConfig.public.apiRoot

const id = useRoute().params.id
const {data: newsOne} = await useFetch(() => api+'/blogs/'+id+'/?populate=photo')
const newsId = newsOne.value['data']

const {data: newsList} = await useFetch(() => api+'/blogs?populate=photo')
const news = newsList.value['data']
// console.log(news)

useHead({
  title: newsId?.titre,
})

</script>
