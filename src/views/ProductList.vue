<template>
<div>
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

              <v-sheet v-if="inf.city != null">{{ inf.city.name }}</v-sheet>
              <v-sheet v-else> No registrada </v-sheet>
          </v-container>
          <v-container class="col-6">
              <h3>Precio: </h3>
              <v-sheet>${{ inf.price }}</v-sheet>
          </v-container>
          <v-container style="align:'left' justify:'left'">
              <h3>Rating: </h3>
              <v-sheet>{{ inf.rating }}</v-sheet>
          </v-container>          
          <v-container class = "col-12">
            <v-btn
              outlined
              rounded
              depressed
              id="btnsearch"
              @click="searchByName(inf)"
            >
              Ver detalle
            </v-btn>                       
          </v-container>          
        </v-row>        
      </v-row>
      </v-card>
    </div>
  </v-row>

<v-dialog v-model="test" max-width="500">
        <v-card>
          <v-card-title>
          Detalle
          </v-card-title>
          <v-card-text >
          <v-row  class="pl-7">      
            <v-img                            
              max-width="400"
              class="white--text align-end"              
              :src="detail.thumbnail"              
            >
            </v-img>
          </v-row>                    
          <v-row  class="pl-12">
            <h3 >Nombre: </h3>&nbsp;&nbsp;
            <v-sheet>{{ detail.name }}</v-sheet>          
          </v-row>
          
          <v-row class="pl-12">
            <h3>Marca: </h3>&nbsp;&nbsp;
            <v-sheet>{{ detail.brand }}</v-sheet>
          </v-row>
          
          <v-row class="pl-12">
           <h3>Ciudad: </h3>&nbsp;&nbsp;
            <v-sheet>{{ciudad}}</v-sheet>
          </v-row>                    
           <v-row class="pl-12">
            <h3>Precio: </h3>&nbsp;&nbsp;
            <v-sheet>${{ detail.price }}</v-sheet>
          </v-row>                             
          <v-row class="pl-12">
              <h3>Descripción: </h3>&nbsp;&nbsp;
              <v-sheet>{{ detail.description}}</v-sheet>
          </v-row>       
              <br>    
              <v-row align="left" justify="center"> 
                <v-card-actions>
                  <v-spacer></v-spacer>                  
                  <v-btn
                  color="#772CE8"
                  outlined
                  rounded
                  depressed
                  id="btnsearch"
                  @click="addToCar(inf)"
                >
                  Añadir al Carrito
                </v-btn> 
                  <v-btn 
                  color="#772CE8" @click="test=false" 
                  outlined
                  rounded
                  depressed>Cerrar</v-btn>
                </v-card-actions>
                </v-row>
        </v-card-text>
        </v-card>
      </v-dialog>  
</div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
      return {
        info:'',
        urlBase:'https://d1eylshvb8atwe.cloudfront.net/api/v1/items/',                
        detail:'',
        test:false,
        ciudad:''
      }
    },
    created(){
      this.$root.$on('productByName', (name) => {
        this.setResults(name);
      })
    },
    methods:{      

      async searchByName(product){  
        this.test = true        
        this.detail= product
        this.ciudad=this.detail.city.name
        console.log(this.detail.city.name)        
                                                     
      },
      async searchApi(name){  
        let response = await axios.get(this.urlBase+name);                       
        this.info=response.data;         
        return this.info;
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