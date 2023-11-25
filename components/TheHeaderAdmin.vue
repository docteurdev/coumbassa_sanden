<template>

  <header class="main-header header-style-four" style="margin-top:0; background-color: white;">

    <!-- Header Lower  -->
    <div class="header-lower">
      <div class="auto-container">
<!--        <div class="outer-container clearfix">-->
        <div class="clearfix">
          <!-- Logo Box -->
          <div class="pull-left logo-box" style="margin-top: 15px">
            <div class="logo">
              <a href="/home">
                <img src="/img/logo2.png" alt="" title="" width="180"></a>
            </div>
          </div>
          <!-- Nav Outer -->
          <div class="nav-outer clearfix">
            <!-- Main Menu -->
            <nav class="main-menu navbar-expand-md">
              <div class="navbar-header">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>

              <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <ul class="navigation clearfix">
                  <li class="current dropdown"><nuxt-link href="/">Accueil</nuxt-link></li>
                  <li><nuxt-link href="/mot-ceo">Mot du CEO</nuxt-link></li>
                  <li><nuxt-link href="/mission">Mission</nuxt-link></li>
                  <li class="dropdown"><a href="#">Services</a>
                    <ul>
                      <li><nuxt-link href="/services-taxtech">Services TaxTech</nuxt-link></li>
                      <li><nuxt-link href="/services">Autres Services</nuxt-link></li>
                    </ul>
                  </li>
                  <li><nuxt-link href="/news">News</nuxt-link></li>
                  <li class="dropdown"> <a href="#">Accès Client</a>
                    <ul>
                      <li><nuxt-link href="/compte/login">Login</nuxt-link></li>
                      <li><nuxt-link href="/compte/inscription">Inscription</nuxt-link></li>
                      <li><nuxt-link href="/compte/profil">Profil</nuxt-link></li>
                    </ul>
                  </li>
                  <li><nuxt-link href="/contact">Contact</nuxt-link></li>
                </ul>
              </div>

            </nav>

            <!--Outer Box-->
<!--            <div class="outer-box">-->

<!--              &lt;!&ndash;Cart Box&ndash;&gt;-->
<!--              <div class="cart-box">-->
<!--                <div class="cart-box-btn dropdown-toggle"><span class="fa fa-shopping-cart"></span><span class="total-cart">0</span></div>-->
<!--              </div>-->

<!--              &lt;!&ndash;Search Box&ndash;&gt;-->
<!--              <div class="search-box-outer">-->
<!--                <div class="dropdown">-->
<!--                  <button class="search-box-btn dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fa fa-search"></span></button>-->
<!--                  <ul class="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">-->
<!--                    <li class="panel-outer">-->
<!--                      <div class="form-container">-->
<!--                        <form method="post" action="blog.html">-->
<!--                          <div class="form-group">-->
<!--                            <input type="search" name="field-name" value="" placeholder="Search Here" required>-->
<!--                            <button type="submit" class="search-btn"><span class="fa fa-search"></span></button>-->
<!--                          </div>-->
<!--                        </form>-->
<!--                      </div>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </div>-->
<!--              </div>-->

<!--              &lt;!&ndash;Language&ndash;&gt;-->
<!--              <div class="language dropdown"><a class="btn btn-default dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" href="#"><span class="flag-icon"><img src="/images/icons/flag-icon.png" alt=""/></span>En</a>-->
<!--                <ul class="dropdown-menu style-one" aria-labelledby="dropdownMenu2">-->
<!--                  <li><a href="#">English</a></li>-->
<!--                  <li><a href="#">German</a></li>-->
<!--                  <li><a href="#">Arabic</a></li>-->
<!--                  <li><a href="#">Hindi</a></li>-->
<!--                </ul>-->
<!--              </div>-->

<!--            </div>-->

          </div>

        </div>
      </div>
    </div>

    <!--Sticky Header-->
    <div class="sticky-header">
      <div class="auto-container clearfix">
        <!--Logo-->
        <div class="logo pull-left">
          <a href="index.html" class="img-responsive"><img src="/images/logo-small-3.png" alt="" title=""></a>
        </div>

        <!--Right Col-->
        <div class="right-col pull-right">
          <!-- Main Menu -->
          <nav class="main-menu navbar-expand-md">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent1">
              <ul class="navigation clearfix">
                <li class="current dropdown"><a href="#">Home</a>
                  <ul>
                    <li><a href="index.html">Home Page 01</a></li>
                    <li><a href="index-2.html">Home Page 02</a></li>
                    <li><a href="index-3.html">Home Page 03</a></li>
                    <li><a href="index-4.html">Home Page 04</a></li>
                    <li><a href="index-5.html">Home Page 05</a></li>
                  </ul>
                </li>
                <li class="dropdown"><a href="#">About Us</a>
                  <ul>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="team.html">Our Team</a></li>
                    <li><a href="case-studies.html">Case Studies</a></li>
                    <li><a href="testimonial.html">Testimonial</a></li>
                    <li><a href="not-found.html">Error Page</a></li>
                  </ul>
                </li>
                <li class="dropdown"><a href="#">Services</a>
                  <ul>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="services-2.html">Services Two</a></li>
                    <li><a href="services-single.html">Services Single</a></li>
                  </ul>
                </li>
                <li class="dropdown"><a href="#">Portfolio</a>
                  <ul>
                    <li><a href="portfolio-2-column.html">Portfolio Two Column</a></li>
                    <li><a href="portfolio-3-column.html">Portfolio Three Column</a></li>
                    <li><a href="portfolio-4-column.html">Portfolio Four Column</a></li>
                    <li><a href="portfolio-masonry.html">Portfolio Masonry</a></li>
                    <li><a href="portfolio-single.html">Portfolio Single</a></li>
                  </ul>
                </li>
                <li class="dropdown"><a href="#">Blog</a>
                  <ul>
                    <li><a href="blog.html">Our Blog</a></li>
                    <li><a href="blog-list.html">Blog List</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                  </ul>
                </li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </nav><!-- Main Menu End-->
        </div>

      </div>
    </div>
    <!--End Sticky Header-->

  </header>

</template>

<script setup>
  useHead({
    title: 'Coumbassa & Sanden',
  })
</script>
