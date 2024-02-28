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
              <a href="/">
                <img src="/img/LogoNew.png" alt="" title="" width="180"></a>
            </div>
          </div>
          <!-- Nav Outer -->
          <div class="nav-outer clearfix">
            <!-- Main Menu -->
            <nav class="main-menu navbar-expand-md">
              <div class="navbar-header">
                <b-dropdown icon="" right text="☰" class="navbar-toggler" type="button"
                            data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation" color="white" variant="outline-dark" size="lg"
                            style="border: 0px solid #e6e6e6;  margin-right: 50px; background-color: #FFF;border-radius: 0 !important;">
                  <b-dropdown-item v-bind:class="setActive('/index')" to="/">Accueil</b-dropdown-item>
                  <!-- <b-dropdown-item v-bind:class="setActive('/mot-ceo')" to="/mot-ceo">Mot du CEO</b-dropdown-item> -->
                  <b-dropdown-item v-bind:class="setActive('/mission')" to="/mission">Missions</b-dropdown-item>
                  <b-dropdown-item v-bind:class="setActive('/services-taxtech')" to="/services-taxtech">TaxTech</b-dropdown-item>
                  <!-- <b-dropdown-item v-bind:class="setActive('/services')" to="/services"> - Autres Services</b-dropdown-item> -->
                  <!-- <b-dropdown-item  v-bind:class="setActive('/newsletter')" to="/newsletter">Newsletter Alt</b-dropdown-item> -->
                  <b-dropdown-item  v-bind:class="setActive('/event')" to="/event">Evènements</b-dropdown-item>

                  <b-dropdown-item v-bind:class="setActive('/news')" to="/actualites"></b-dropdown-item>
                  <b-dropdown-item v-bind:class="setActive('/contact')" to="/contact">Contact</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item v-bind:class="setActive('/compte')" to="/compte">Compte</b-dropdown-item>
                </b-dropdown>
              </div>



              <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <ul class="navigation clearfix">
                  <li v-bind:class="setActive('/')" class="dropdown"><nuxt-link to="/">Accueil</nuxt-link></li>
                  <!-- <li v-bind:class="setActive('/mot-ceo')"><nuxt-link to="/mot-ceo">Mot du CEO</nuxt-link></li> -->
                  <li v-bind:class="setActive('/mission')"><nuxt-link to="/mission">Missions</nuxt-link></li>
                  <li v-bind:class="setActive('/services-taxtech')"><nuxt-link to="/services-taxtech">TaxTech</nuxt-link></li>
                  <!-- <li v-bind:class="setActive('/services')"><nuxt-link to="/services">Services</nuxt-link></li> -->
                  <!-- <li v-bind:class="setActive('/newsletter')"><nuxt-link to="/newsletter">Newsletter Alt</nuxt-link></li> -->
                  <li v-bind:class="setActive('/event')"><nuxt-link to="/event">Evènements</nuxt-link></li>
                  <li v-bind:class="setActive('/news')"><nuxt-link to="/actualites">Actualités</nuxt-link></li>
                  <li v-bind:class="setActive('/contact')"><nuxt-link href="/contact">Contact</nuxt-link></li>
                  <li v-bind:class="setActive('/compte')" class="dropdown"> <a to="#">Accès Client</a>
                    <ul>
                      <li><nuxt-link to="/compte/login">Login</nuxt-link></li>
                      <li><nuxt-link to="/compte/inscription">Inscription</nuxt-link></li>
                      <li><nuxt-link to="/compte/profil">Profil</nuxt-link></li>
                    </ul>
                  </li>
                </ul>
              </div>

            </nav>


            <!--Outer Box-->
            <!--            <div class="outer-box">-->

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

  </header>

</template>

<script setup>
useHead({
  title: 'Coumbassa & Sanden',
})
console.log(useRoute().path)
function setActive(name) {
  // if(this.$route.path === name) {
  if(useRoute().path === name) {
    return 'current'
  }
}

</script>

<style>
button {
  outline: none !important;
  border-radius: 0 !important;
}
.dropdown-item.active {
  background-color: #9a7f59;
}


@media only screen and (max-width: 767px){
  .navbar-header{
    top: 1.5rem;
  }
}
</style>
