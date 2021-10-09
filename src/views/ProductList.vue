<template>
  <div>
  <v-card
    v-for="(inf,i) in info"
      :key="i"
    class="mx-auto my-15"
    max-width="50%"
    max-height="90%"
  >
  <v-row>
    <v-container class="col-6">
      <v-img
        class="white--text align-end"
        height="350px"
        width="100%"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
      </v-img>
    </v-container>
    <v-row class="col-6">
      <v-container class="col-6">
          <h3>Nombre: </h3>
          <v-sheet>{{inf.brand }}</v-sheet>
      </v-container>
      <v-container class="col-6">
          <h3>Marca: </h3>
          <v-sheet>{{  }}</v-sheet>
      </v-container>
      <v-container class="col-6">
          <h3>Ciudad: </h3>
          <v-sheet>{{  }}</v-sheet>
      </v-container>
      <v-container class="col-6">
          <h3>Precio: </h3>
          <v-sheet>{{  }}</v-sheet>
      </v-container>
      <v-container class="col-12">
          <h3>Descripción: </h3>
          <v-sheet>{{  }}</v-sheet>
      </v-container>
    </v-row>

  </v-row>
  </v-card>
</div>
</template>

<script>
export default {
    data () {
      return {
        
        info:''
      }
    },
    created(){
      
      this.$root.$on('productByName', (name) => {
        
        this.setResults(name);
        
      })
    },
    methods:{
      setResults(results){
        this.info = results;
        console.log(this.info);
      },
    }
}
</script>

<style>

</style>