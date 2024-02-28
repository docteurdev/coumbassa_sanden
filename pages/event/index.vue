<template>
  <!-- <q-btn label="Close Icon" color="primary" @click="icon = true"/> -->


  <q-dialog v-model="icon">
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <div class="q-pa-md">
        <q-carousel
          swipeable
          animated
          arrows
          v-model="slide"
          v-model:fullscreen="fullscreen"
          control-color="orange"

          infinite
        >
          <q-carousel-slide 
          style="background-size: contain !important; background-repeat: no-repeat;"
          v-for="(img, index) in clickedDay.images"
          :name="index"
          :key="index"
          :img-src="apiRoot+img.url"/>

          <!-- <div class="q-mt-md text-center">
           {{ clickedDay.description }}
          </div> -->
        <!-- </q-carousel-slide> -->
          <template v-slot:control>
            <q-carousel-control
              position="bottom-right"
              :offset="[18, 18]"
              
            >
              <q-btn
               class="full-size-btn"
                push round dense color="white" text-color="primary"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
              />
            </q-carousel-control>
          </template>
        </q-carousel>

        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
  <section class="about-section-four">
    <div class="auto-container">

      <div class="sec-title centered">
        <h2>Evènements </h2>
      </div>


      <div class="row clearfix">

        <div class="" v-for="(item, index) in events" :key="index">
          <div class="header-item" v-if="item">
            <h2 class="text-md"> {{ item.title }} </h2>
            <div style="font-size: 20px; margin-bottom: 3rem;" class="text-justify" v-html="item.libelle" >  </div>

          </div>
          <div class="gallery-img" v-if="item.days">
            <div class="" v-for="(day, index) in item.days" :key="index">
              <p class="desc"> {{ day.day }}   </p>
              
              <div class="img-box-content">

                <div @click="handleImageClick(day)" class="img-box">
                  <div class="show-day-img"> 
                    <div class="day-description"  v-html="day.libelle" ></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21 3H3C2 3 1 4 1 5v14a2 2 0 0 0 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2M5 17l3.5-4.5l2.5 3l3.5-4.5l4.5 6z"/></svg>
                  </div>
                  <img :src="apiRoot + day.images[0].url" alt="" srcset="" class="gallery-img">
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
<style scoped>

.full-size-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #b78b4b !important;
    color: white !important;
}
.q-dialog__inner--minimized > div{
  overflow: hidden !important;
}
    
.q-dialog__inner--minimized > div{
  width: 100%!important;
}
.gallery-img {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* flex-direction: column; */
  gap: 6px;
}

.img-box-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 6px;
}

.img-box {
  width: 250px;
  height: 250px;
  position: relative;
  border-radius: 10px;

  overflow: hidden;

}

.img-box:hover .show-day-img{
  /* background-color: transparent; */
}

.show-day-img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 30px;
  cursor: pointer;
  transition: background-color 0.5s ease-in;
  padding: 1rem;
}

.day-description{
  font-size: 15px;
  font-weight: 400;
  text-align: left;
}

.header-item {
  /* padding-left: 5.5rem;
  margin-bottom: 3rem; */
}

.header-item h2 {
  font-size: 20px !important;
  font-weight: 700 !important;
  /* padding-left: 8%; */
  margin-bottom: 2rem;
}

.header-item p{
  text-align: justify;
  margin-bottom: 2rem;

}

.desc {
  font-size: 16px !important;
  font-weight: 600 !important;
}

.sub-desc {
  font-size: 14px !important;
  font-weight: 400 !important;

}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 400px)  {
  .img-box{
    /* width: 100%; */
  }
}
</style>
<script setup>
import axios from "axios"
import { ref, onMounted } from 'vue'
useHead({
  title: 'Evènements',
})
const runtimeConfig = useRuntimeConfig()
const api = runtimeConfig.public.api;
const apiRoot = runtimeConfig.public.apiRoot;

let icon = ref(false);

let showDayDetails = ref(false);
let controlType = ref('flat');
let slide = ref(1);
let  fullscreen = ref(false);

// the current image clicked
const clickedDay = ref(null);


const handleImageClick = (day) => {
  clickedDay.value = day;
  icon.value = true
  console.log("Clicked day:", clickedDay.value);
  // You can now use clickedDay.value later in your component
};

// const {data: newsList} = await useFetch(() => api+'/blogs?sort=id:desc&pagination[pageSize]=1000&populate=photo');

const { data: eventsList } = await useFetch(() => api + '/events/?populate=days.images');
const events = eventsList.value['data']
console.log(events);

// scrape.js


// scrape-angular.js


// Run the scraper function
// scrapeAngularApp();


</script>
