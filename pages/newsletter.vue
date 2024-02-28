<template>
  <div class="container">

   <div class="sec-title centered">
        <h2>Newsletter</h2>
   </div>

   <div class="row newsletter">
     <div class="col-12 col-md-6">
      <img v-if="pages?.image1" :src="apiRoot+pages?.image1?.url" alt="" width="1000">
     </div>
     <div class="col-12 col-md-6">
      <h3> Restez Connecté avec Notre Newsletter Exclusive! </h3>
      <p>
       <!-- newsletter -->
       Découvrez en avant-première nos dernières actualités, offres spéciales et contenus exclusifs en vous abonnant à notre newsletter. 
      </p>

      <q-form
      @submit="onSubmit"
      @reset="onReset"
    >  
       <input type="text" placeholder="Votre prenom" class="cust-input"/>
       <input type="text" placeholder="Votre email" class="cust-input"/>
      <!-- <q-input
        filled
        v-model="user"
        label="Nom ou prenom *"
        hint=""
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Entrez votre nom ou pre']"
      />

      <q-input
       filled
       type="email"
       label="Email *"
       v-model="email"
       lazy-rules
       :rules="[
         val => !!val || 'Veuillez saisir votre adresse e-mail',
         val => /.+@.+\..+/.test(val) || 'Veuillez saisir une adresse e-mail valide'
       ]"
     /> -->
      <q-btn
              class="cust-btn"
              label="Souscrire"
              type="submit"
              color="primary"
            />
    </q-form>
    
     </div>
   </div>
  </div>
</template>

<style scoped>
.container{
 padding-top: 5rem !important;
}
.newsletter{
 min-height: 100vh;
}

.btn-bx {
 text-align: right;
 padding-right: 1rem;
}

.q-field--filled .q-field__control{
  margin-left: 1px !important;
}

.cust-input{
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.05);;
  width: 100%;
  margin-bottom: 1rem;
}

.cust-btn {
 width: 100%;
 padding: 15px 0;
 margin-top: 3px;
 background-color: #ad8e63 !important;
 /* margin-left: -10px; */
}

.cust-btn:hover{
 
 background-color: #523f24 !important;

}
</style>
<script setup>
useHead({
  title: 'Souscrire à notre newsletter',
})
const runtimeConfig = useRuntimeConfig()
const url = runtimeConfig.public.url
const api = runtimeConfig.public.api
const apiRoot = runtimeConfig.public.apiRoot

const {data: pagesList} = await useFetch(() => api+'/blogpages/3?populate=image1,image2,image3')
const pages = pagesList.value['data']

const user = ref('');

const email = ref('');


</script>
