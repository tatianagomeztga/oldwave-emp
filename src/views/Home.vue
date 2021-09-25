<template>
  <div>
    <h-slider></h-slider>
    <promo></promo>
    <box-features></box-features>    
    <subscribe></subscribe>
    <v-btn @click=obtener()> Ver </v-btn>
  </div>
</template>

<script>
import slider from '@/components/slider.vue'
import boxFeatures from "@/components/box-features.vue"
import promo from "@/components/promo.vue"
import subscribe from "@/components/subscribe.vue"
import axios from 'axios'

  export default {
    name: 'Home',
    data(){
      return {
        datos:[]
      }
      
    },
    methods: {
      obtener(){
        axios.get('http://3.143.212.203/api/v1/search?q=Iphone').then(          
          response=>{this.datos=response.data})
          console.log(this.datos)
      }
    },
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
