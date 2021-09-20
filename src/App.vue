<template>
  <v-app id="app">
    <v-main>
      <t-header fixed></t-header>
      <box-features></box-features>
      <subscribe></subscribe>
      <b-footer></b-footer>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import header from "@/components/header.vue";
import boxFeatures from "@/components/box-features.vue"
import subscribe from "@/components/subscribe.vue"
import footer from "@/components/footer.vue"


export default {
  components: {
    "t-header": header,
    "box-features": boxFeatures,
    "subscribe": subscribe,
    "b-footer": footer, 
  }
};
</script>
