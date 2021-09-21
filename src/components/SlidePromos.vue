<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      class="carousel"
      reverse-transition="fade-transition"
      delimiter-icon="mdi-minus"
      transition="fade-transition">
      </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
   data () {
      return {
        items: [
          {
            src: require( "../assets/img/banner-blackfriday.png"),
          },
          {
            src: require("../assets/img/banner-auxilar-ordenadores@2x.png"),
          }
        ],
      }
    },  
}

</script>

<style>
.carousel{
  top: 131px;
  left: -2.16015625px;
  opacity: 1;
  height: 432px;
  background-color: black;
}

.v-btn > .v-btn__content .v-icon {
    color: black;
    opacity: 1;
}
.v-btn > .v-btn__content .v-icon:hover {
    color: black;
    opacity: 1;
}
.theme--dark.v-btn {
    background-color: #C5D3DD;
    
}
.theme--dark.v-btn:hover {
    background-color: #772CE8;
    
}
.v-btn--icon.v-size--small {
    height: 14px;
    width: 14px;
}
.v-btn--icon.v-size--small:hover {
    height: 18px;
    width: 18px;
}

.v-image__image, .v-image__placeholder {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 1368;
    height: 432;
}

.mdi-circle{
  font-size: 10px !important;
}
</style>