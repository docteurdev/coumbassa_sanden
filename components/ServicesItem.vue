<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ServicesItem",
  props: {
    item: {default: () => {}, type: Object},
  }
})
</script>

<template>
  <div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
    <div class="border-one"></div>
    <div class="border-two"></div>
    <div class="content">
      <div class="icon-box">
        <span class="icon fa fa-bullhorn"></span>
      </div>
      <h6><a href="services-single.html">Tax Tech</a></h6>
      <div class="text">Lorem ipsum dolor sit amet, con sectetu adipiscing elit, sed do eius mod tempor incididunt.</div>
    </div>
  </div>
</template>

<style scoped>

</style>