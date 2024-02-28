

<template>
  <div class="map-wrap">
    <div class="map" ref="mapContainer"></div>
  </div>
</template>

<script setup>
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
import { Map, MapStyle, Marker, config } from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

const mapContainer = shallowRef(null);
const map = shallowRef(null);

onMounted(() => {
  config.apiKey = 'ENGF65bMzOmea275pBpc';

  const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 };
  // const initialState = { lng: 5.280955, lat: -3.971126, zoom: 14 };


  map.value = markRaw(new Map({
    container: mapContainer.value,
    style: MapStyle.STREETS,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom
  }));

  new Marker({color: "#FF0000"})
  .setLngLat([139.7525,35.6846])
  .addTo(map.value);

}),
onUnmounted(() => {
  map.value?.remove();
})
</script>

<style scoped>
.map-wrap {
  position: relative;
  width: 100%;
  height: calc(100vh - 77px); /* calculate height of the screen minus the heading */
}

.map {
  width: 100%;
  height: 100%;
}
</style>