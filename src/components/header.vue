<template>
  <div>
    <v-app-bar
      app
      flat
      color="white"
      height="66px"
      >
      <div class="d-flex align-center">
        <v-img
          alt="oldwave logo"
          class="shrink mr-2"
          contain
          src="../assets/logo/oldwave-logo-horizontal.png"
          transition="scale-transition"
          height="40px"/>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center mr-10">
        <v-btn
          rounded
          depressed
          color="#F4F6FA"
          class="gray--text"
          id="login"
        >
          Regístrate o inicia sesión
        </v-btn>
        <v-btn
          icon
          depressed
          color="white"
          class="ml-2">
          <v-img
          src="../assets/icons/login-icon.png"
          class="shrink"
          contain
          height="29px"></v-img>
        </v-btn>
        <v-btn
          icon
          depressed
          color="white">
          <v-img
            src="../assets/icons/carrito-icon.png"
            class="shrink mb-2"
            contain
            height="36px"></v-img>
        </v-btn>
      </div>
    </v-app-bar>

    <v-app-bar
      color="#772CE8"
      height="66px"
      flat
      >
      <div class="ml-10">
        <v-text-field
          v-model="nameProduct"
          flat
          placeholder="Estoy buscando..."
          prepend-inner-icon="mdi-magnify"
          height="38px"
          color="violet"
          background-color="white2"
          style="padding-left: 0px;"
          class="rounded-l-xl rounded-r-0 ml-4"
          id="isearch"
          hide-details
          solo
          dense
        >
        </v-text-field>
      </div>
       <v-btn        
        @click="dialog = true"
        depressed
        color="white2"
        height="38px"
        class="reference violet--text rounded-r-xl rounded-l-0"
        id="btncategories">
         <span class="reference"> Todas las categor&iacute;as </span>
        <v-img
          src="../assets/icons/Icon-arrow-up-1.png"
          class="shrink ml-2"
          contain>
        </v-img>
      </v-btn>
  <div class="text-center">
    <v-dialog
      v-model="dialog"      
      width="1200"       
    >     
    <div>              
      <v-card>      
        <v-card-text>
          <v-row>
            <v-col class="px-10 mt-5" cols="3">                      
              <v-row>                        
               <strong><span class="reference"> CATEGORIAS SUGERIDAS </span></strong>
              </v-row>            
              <v-row>  
              <v-col> 
              <br>                           
                <strong>Celulares</strong>&nbsp;&nbsp;&nbsp;
                <span class="opacity">Iphone</span> <br>                          
                <strong>Celulares</strong>&nbsp;&nbsp;&nbsp;                
                <span class="opacity">Fundas</span> 
                <br>
                <strong>Celulares</strong>&nbsp;&nbsp;&nbsp;               
                <span class="opacity">Cargadores</span>
                <br>
                <strong>Celulares</strong>&nbsp;&nbsp;&nbsp;                
                <span class="opacity">Baterias</span> 
                <br>              
                <strong>Celulares</strong>&nbsp;&nbsp;&nbsp;                
                <span class="opacity">Auriculares</span>  
                </v-col>               
              </v-row>                                
            </v-col>
              <v-divider
              vertical
            ></v-divider>
            <v-col class="px-10 mt-5" cols="4">
              <v-row>
                <span class="reference">PRODUCTOS SUGERIDOS</span>
              </v-row>
              <v-row>              
                <v-col cols="3">
                <br>
                  <img  src="../assets/img/iphone1164gb.png"> 
                </v-col>
                <v-col>
                  <v-row>
                  <br>
                  Usado
                  </v-row>
                  <v-row>
                    <strong>Apple iPhone 11 64GB</strong>
                  </v-row>
                  <v-row>
                    <span class="reference">$2'300.000</span>
                  </v-row>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="3">
                <img  src="../assets/img/iphonex.png"> 
                </v-col>
                <v-col>
                  <v-row>
                    Buen estado
                  </v-row>
                  <v-row>
                    <strong>Apple iPhone X 64GB Silver</strong>
                  </v-row>
                  <v-row>
                  <span class="reference">$1'700.000</span>
                  </v-row>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="3">
                <img  src="../assets/img/iphone11pro.png"> 
                </v-col>
                <v-col>
                  <v-row>
                    Perfecto estado
                  </v-row>
                  <v-row>
                    <strong>Apple iPhone 11 Pro 256GB</strong>
                  </v-row>
                  <v-row>
                  <span class="reference">$3'800.000</span>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
            <v-divider
              vertical
            ></v-divider>
            <v-col class="px-10 mt-5">
              <v-row>
                <span class="reference ">RESULTADOS</span>                
              </v-row>              
              <v-row>
                <v-col cols="4" >
                <br>
                  <v-row>
                  <strong>iPhone X</strong>
                  </v-row>
                  <v-row>
                  <strong>iPhone 11</strong>
                  </v-row>
                  <v-row>
                  <strong>Cargador iPhone</strong>
                  </v-row>
                </v-col>
                <v-col>
                  <img  src="../assets/img/Imagen 82.png"> 
                </v-col>
                <v-col>
                  <v-row>
                  <strong>iPhone 11 Morado 64Gb</strong>
                  </v-row>
                  <v-row>
                    <span class="reference">$2'800.000</span>
                  </v-row>
                  <v-row>
                    <v-btn class="test white--text rounded-pill format" color="#772CE8" >             
                      Comprar ahora
                    </v-btn> 
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      </div>
    </v-dialog>
  </div>
      <v-spacer></v-spacer>
      <v-btn
        outlined
        rounded
        depressed
        color="white"
        class="white--text mr-3"
        id="btnsearch"
        @click="searchByName(nameProduct)"
      >
      Buscar
    </v-btn>
     <v-btn
        outlined
        rounded
        color="white"
        id="btnfilter"
        class="white--text mr-12"
      >
      <v-img
        src="../assets/icons/icon-filter.png"
        class="shrink mr-1"
        contain></v-img>
      Filtros
    </v-btn>
    </v-app-bar>
    <!-- <img :src="info[0].thumbnail">    -->
  </div>  
</template>
<script>
import axios from 'axios';
export default {
   data: () => ({
     nameProduct:'',
     urlBase:'https://d1eylshvb8atwe.cloudfront.net/api/v1/items?q=',
     info:'',
     dialog: false
    }),
    methods:{
      
      async searchByName(nameProduct){
        let name = await this.searchApi(nameProduct);
        if (this.$route.path !== '/ProductList'){
          this.$router.push('ProductList');
        }        
        this.$root.$emit("productByName", name);        
      },
      
      async searchApi(name){  
        axios
          .get(this.urlBase+name)
          .then(response => (this.info = response.data.items));
          return this.info;
          }        
        }            
    }

// import axios from 'axios';
// export default {
//    data: () => ({
//      nameProduct:'',
//      urlBase:'http://3.143.212.203/api/v1/search?q=',
//      info:''
//     }),
//     methods:{
//     searchByName(name){  
//     axios
//       .get(this.urlBase+name)
//       .then(response => (this.info = response.data.items))
//       console.log(this.info)
//       }
//     }
// }
</script>


<style>
@import '../assets/styles/test.css';
</style>

<style>
  @font-face {
    font-family: "Poppins, Regular";
    src: url("../assets/fonts/Poppins-Regular.ttf");
  }
  *{
    font-family: "Poppins, Regular";
    text-transform: none;
  }
  #isearch{
    width: 650px;
    border-right: 2px solid rgba(134, 126, 126, 0.664);
  }
  #btnsearch{
    padding: 0px 44px;
  }
  #btnfilter{
    padding: 0px 22px;
  }
</style>
