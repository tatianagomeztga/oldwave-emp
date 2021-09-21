<template>
  <v-app id="app">
    <v-main>
      <t-header fixed></t-header>
      <router-view/>
      <b-footer></b-footer>
    </v-main>
  </v-app>
</template>

<script>
import header from "@/components/header.vue";
import footer from "@/components/footer.vue"

export default {
  components: {
    "t-header": header,
    "b-footer": footer, 
  }
};
</script>
