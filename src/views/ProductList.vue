<template>
  <v-row>
    <div class="col-4">
      <slider></slider>
    </div>
    <div class="col-12">
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
            :src="inf.thumbnail"
          >
          </v-img>
        </v-container>
        <v-row class="col-6">
          <v-container class="col-6">
              <h3>Id: </h3>
              <v-sheet name="id">{{inf.id }}</v-sheet>
          </v-container>
          <v-container class="col-6">
              <h3>Nombre: </h3>
              <v-sheet>{{inf.name }}</v-sheet>
          </v-container>
          <v-container class="col-6">
              <h3>Marca: </h3>
              <v-sheet>{{ inf.brand }}</v-sheet>
          </v-container>
          <v-container class="col-6">
              <h3>Ciudad: </h3>
              <v-sheet>{{  }}</v-sheet>
          </v-container>
          <v-container class="col-6">
              <h3>Precio: </h3>
              <v-sheet>{{ inf.price }}</v-sheet>
          </v-container>
          <v-container class="col-6">
              <h3>Rating: </h3>
              <v-sheet>{{ inf.rating }}</v-sheet>
          </v-container>                  
          <v-btn
              outlined
              rounded
              depressed                            
              id="btnsearch"
              @click="searchByName(inf.id)"
            >
            Ver Detalle
          </v-btn>          
        </v-row>
      </v-row>
      </v-card>
    </div>
  </v-row>
</template>

<script>
import slider from "../components/filter.vue"
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
      searchByName(nameProduct){                     
        if (this.$route.path !== '/ProductDetail'){
          this.$router.push('ProductDetail');
        }        
        this.$root.$emit("productid", nameProduct);        
      },
      setResults(results){
        this.info = results;        
      },
    },
    components:{
      slider,
    }
}
</script>

<style>

</style>