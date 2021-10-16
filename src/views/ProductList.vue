<template>
  <div>
    <v-row v-if="isResult" name="productsList">
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
                style="color:#772CE8"                           
                outlined
                rounded
                depressed
                name="btnDetails"
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
    <v-row v-else name="noResults">
      <div class="col-12" id="noResults">
        <h3>
          No se encontraron resultados.
        </h3>
      </div>
    </v-row>

  <v-dialog v-model="test" max-width="500">
    <v-card name="productDetailD">
      <v-card-title class="white--text" style="background-color: #772CE8;">
        <b>Detalle del producto</b>
      </v-card-title>
      <v-card-text class="mt-4">
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
        <v-divider></v-divider>
        <v-row align="center" justify="center" class="mt-2"> 
          <v-card-actions>
            <v-spacer></v-spacer>                  
            <v-btn
              color="#772CE8"
              depressed
              outlined
              rounded
              id="btnsearch"
              class="violet--text"
              @click="addToCar(inf)"
            >
              Agregar al Carrito
            </v-btn> 
            <v-btn
              color="#772CE8"
              depressed
              outlined
              rounded
              @click="test=false" 
              class="violet--text"
              >Cerrar</v-btn>
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
        isResult: true,               
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
        console.log(results[0].price != 0)
        if(results[0].price != 0){
          this.info = results;
          this.isResult = true;
        }else{
          this.isResult = false;
        }
        
      },
    },
}
</script>

<style>
.image{
  width: 300px;
  height: 350px;
}
#noResults{
  height: 200px;
  margin-top: 100px;
  color: #772CE8;
  text-align: center;
}
</style>