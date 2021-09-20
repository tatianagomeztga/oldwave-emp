<template>
  <v-app id="app">
    <v-main>
      <t-header></t-header>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import header from "@/components/header.vue";

export default {
  components: {
    "t-header": header,
  }
};
</script>
