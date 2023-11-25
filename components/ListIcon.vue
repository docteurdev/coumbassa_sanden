<template>
  <div class="services-block-seven">
    <div class="inner-box">
      <div class="icon-box">
        <span :class="icon"></span>
      </div>
      <div class="text">{{text}}.</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    icon: {default: 'icon flaticon-right-arrow', type: String},
    text: {default: null, type: String},
  }
}
</script>
