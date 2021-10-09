<template >
  <v-card
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
          <v-sheet>{{  }}</v-sheet>
      </v-container>
      <v-container class="col-6">
          <h3>Marca: </h3>
          <v-sheet>{{ marca }}</v-sheet>
      </v-container>
      <v-container class="col-6">
          <h3>Ciudad: </h3>
          <v-sheet>{{ ciudad }}</v-sheet>
      </v-container>
      <v-container class="col-6">
          <h3>Precio: </h3>
          <v-sheet>{{ precio }}</v-sheet>
      </v-container>
      <v-container class="col-12">
          <h3>Descripción: </h3>
          <v-sheet>{{ descripcion }}</v-sheet>
      </v-container>
    </v-row>

  </v-row>
  </v-card>
</template> 

<script>
export default {
    name: 'ProductDetail',
    data () {
      return {
        foto: require('../assets/img/iphone11pro.png'),
        nombre: 'Carro',
        marca: 'Renault',
        ciudad: 'Medellin',
        precio: 30,
        reseller:[{nombre: 'nombre', Logo: 'logo'}],
        descripcion: 'Descripcion',
        rating: 'rating', 
        nameProduct:'',
        urlBase:'http://3.143.212.203/api/v1/search?q=',
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