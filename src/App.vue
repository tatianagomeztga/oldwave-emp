<template>
  <v-app>
    <v-app-bar>
    </v-app-bar>

    <v-main>
      <h-slider></h-slider>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import slider from '@/components/slider.vue'
export default {
  name: 'App',
  components: {
    "h-slider": slider,
  },

  data: () => ({
    //
  }),
};
</script>
