<template>
<!--  <section class="page-title">-->
<!--    <div class="auto-container">-->
<!--      <div class="content">-->
<!--        <h1>Service <span>details</span></h1>-->
<!--        <ul class="page-breadcrumb">-->
<!--          <li><a href="index.html">Home</a></li>-->
<!--          <li>Services details</li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->

  <div class="sidebar-page-container">
    <div class="auto-container">
      <div class="row clearfix">

        <!--Sidebar Side-->
        <div class="sidebar-side col-lg-3 col-md-12 col-sm-12">
          <aside class="sidebar default-sidebar">

            <!--Blog Category Widget-->
            <div class="sidebar-widget sidebar-blog-category">
              <ul class="blog-cat" style="padding-left: 0px">
                <li class="active"><a href="services-single.html">Finance Planning</a></li>
                <li><a href="services-single.html">Business Insurance</a></li>
                <li><a href="services-single.html">Car Insurance</a></li>
                <li><a href="services-single.html">Family Insurance</a></li>
                <li><a href="services-single.html">Tax management</a></li>
              </ul>
            </div>

            <!-- Banner Widget-->
            <div class="sidebar-widget banner-widget">
              <div class="widget-content" style="background-image:url('/images/resource/service-15.jpg')">
                <div class="logo">
                  <img src="/images/icons/widget-logo.png" alt="">
                </div>
                <div class="title">Securied Business with</div>
                <h2>Financ</h2>
                <a href="contact.html" class="theme-btn btn-style-seventen">Let’s start now <span class="icon flaticon-link"></span></a>
              </div>
            </div>

          </aside>
        </div>

        <!--Content Side-->
        <div class="content-side col-lg-9 col-md-12 col-sm-12">
          <div class="services-single">
            <slot />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>

</script>
