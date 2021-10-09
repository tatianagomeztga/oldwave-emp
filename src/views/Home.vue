<template>
  <div>
    <h-slider></h-slider>
    <promo></promo>
    <box-features></box-features>    
    <subscribe></subscribe>
  </div>
</template>

<script>
import slider from '@/components/slider.vue'
import boxFeatures from "@/components/box-features.vue"
import promo from "@/components/promo.vue"
import subscribe from "@/components/subscribe.vue"


  export default {
    name: 'Home',

    components: {
      "h-slider": slider,
      "box-features": boxFeatures,
      "subscribe": subscribe,
      "promo": promo,
    },
  }
  
</script>
<style>
*{
  padding: 0px;
  margin: 0px;
}
</style>
