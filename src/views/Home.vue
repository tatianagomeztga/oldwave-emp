<template>
  <div>
    <h-slider></h-slider>
    <box-features></box-features>
    <subscribe></subscribe>
  </div>
</template>

<script>
import slider from '@/components/slider.vue'
import boxFeatures from "@/components/box-features.vue"
import subscribe from "@/components/subscribe.vue"

  export default {
    name: 'Home',

    components: {
      "h-slider": slider,
      "box-features": boxFeatures,
      "subscribe": subscribe,
    },
  }
</script>
<style>
*{
  padding: 0px;
  margin: 0px;
}
</style>