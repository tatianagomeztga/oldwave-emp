<template>
  <div>
    <slide-promos/>
    <h2 
      id="lookingfor"
       align="center"
       class="mt-8"
      >¿Qué estás buscando hoy?</h2>
    <slide-busqueda/>
  </div>
</template>

<script>
  import SlideBusqueda from './SlideBusqueda.vue'
  import SlidePromos from './SlidePromos.vue'

  export default {
    components: {
    "slide-promos": SlidePromos,
    "slide-busqueda": SlideBusqueda,
    },
  }
</script>

<style>
@font-face {
  font-family: "Poppins, SemiBold";
  src: url("../assets/fonts/Poppins-SemiBold.ttf");
}
#lookingfor{
  font-family: "Poppins, SemiBold";
  font-size: 35px;
  color: #772CE8;
}


</style>