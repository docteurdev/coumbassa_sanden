<template>
    <div class="q-pa-md q-gutter-sm">

      <q-dialog maximized="true" v-model="alert">
        <!-- <div class="forfait-content"></div> -->
         <Recu/>
      </q-dialog>  
    </div>
  </template>
  <script>
  import { ref } from 'vue'
   import Recu from "./Recu.vue"
  export default {
    components:{Recu},
    setup () {
      return {
        alert: ref(true),
        confirm: ref(false),
        prompt: ref(false),
  
        address: ref('')
      }
    }
  }
  </script>

  <style scoped>
  .forfait-content{
    width: 800px;
    min-height: 800px;
    background-color: white;
  }
</style>