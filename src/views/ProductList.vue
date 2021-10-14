<template>
  <v-row>
    <div class="col-12">
      <v-card
        v-for="(inf,i) in info"
          :key="i"
        class="mx-auto mt-15 col-4"
        width="50%"
        height="auto"
      >
      <v-row>
        <v-container class="col-12 image">
          <v-img
            class="white--text align-end"
            height="100%"
            width="100%"
            :src="inf.thumbnail"
          >
          </v-img>
        </v-container>
        <v-row class="col-12">
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
          <v-container class="col-6">
              <h3>Descripción: </h3>
              <v-sheet>{{ inf.description }}</v-sheet>
          </v-container>
          <v-container class = "col-12">
            <v-btn
              outlined
              rounded
              depressed
              id="btnsearch"
              @click="searchByName(nameProduct)"
            >
              Ver detalle
            </v-btn>
            
          </v-container>
        </v-row>
        
      </v-row>
      </v-card>
    </div>
  </v-row>
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
}
</script>

<style>
.image{
  width: 300px;
  height: 350px;
}
</style>