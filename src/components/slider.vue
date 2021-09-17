<template>
  <div>
    <SlidePromos />
    <slide-busqueda/>
  </div>
</template>

<script>
  import SlideBusqueda from './SlideBusqueda.vue'
  import SlidePromos from './SlidePromos.vue'

  export default {
    components: {
    SlidePromos,
    SlideBusqueda,
    },
  }
</script>

<style>

</style>