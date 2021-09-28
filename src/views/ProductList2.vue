<template>
<div>
    <h-slider></h-slider>
    <l-filter></l-filter>
    <box-features></box-features>    
    <subscribe></subscribe>
  </div>
</template>

<script>
import slider from '@/components/slider.vue'
import boxFeatures from "@/components/box-features.vue"
import subscribe from "@/components/subscribe.vue"
import filter from "@/components/filter.vue"
  export default {
    name: 'ProductList',

    components: {
      "h-slider": slider,
      "box-features": boxFeatures,
      "subscribe": subscribe,
      "l-filter": filter,
    },
  }
</script>
<style>
*{
  padding: 0px;
  margin: 0px;
}
</style> 