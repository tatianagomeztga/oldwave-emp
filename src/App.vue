<template>  <v-app>
    <v-main>
      <router-view/>
      <v-container>      
        <v-row>
          <v-col md8>
            <img src="./assets/img/banner-auxilar-ordenadores.png">          
          </v-col>
          <v-col  md2>
            <img src="./assets/img/producto1.png">          
          </v-col>
          <v-col  md2>
            <img src="./assets/img/producto2.png">          
          </v-col>
        </v-row>
        <v-row mt-5>
          <v-col  md3>
            <img src="./assets/img/producto3.png">          
          </v-col>
          <v-col  md3>
            <img src="./assets/img/producto5.png">          
          </v-col>
          <v-col  md6>
            <img src="./assets/img/banner-auxiliar-bicicletas.png">                                          
          </v-col>
        </v-row> 

        <v-row  class="mt-5 justify-center align-center" >
          <v-col  md12>
            <h3 class="recently">Productos más recientes</h3>        
          </v-col>          
        </v-row>

           <!--      
        <v-layout>
          <v-flex>             
            <div class="parent">
              <img class="image1" src="./assets/televisor.png"/>
              <img class="image2" src="./assets/30descuento.png"/>
            </div>                          
          </v-flex>          
        </v-layout>
        -->    
      <div class="box">
        <v-row mt-5>
          <v-col  md3>            
            <img src="./assets/iphone11.png">  
          </v-col>  
          <v-col  md3>
            <img src="./assets/televisorpanasonic.png">  
          </v-col>
           <v-col  md3>
            <img src="./assets/samsungs5.png"> 
          </v-col>   
          <v-col  md3>
            <img src="./assets/nike.png"> 
          </v-col>
          <v-col  md3>
            <img src="./assets/patines.png">
          </v-col>
        </v-row> 
      </div>
        <div class="size">
          <v-row>
            <v-col md3>
              <span >iPhone 11 64GB Negro</span> 
            </v-col>
            <v-col  md3>
              <span>Televisor Panasonic led Smart TV full HD 47’’</span>
            </v-col>
            <v-col  md3>
              <span>Samsung Galaxy S5 SM-G900A 2GB 16GB</span>                           
            </v-col>
            <v-col  md3>
              <span>Nike Air Max 270 react original</span> 
            </v-col>
            <v-col  md3>
              <span>Patines de 4 ruedas Azules Talla 36</span>
            </v-col>
          </v-row> 
        </div>
        <div class="align">
          <v-row>
            <v-col  md3>
              <span class="reference">Apple</span>
            </v-col>
            <v-col  md3>
              <span class="reference">Panasonic</span>
            </v-col>
            <v-col  md3>
              <span class="reference">Samsung</span>                      
            </v-col>
            <v-col  md3>
              <span class="reference">Nike</span>
            </v-col>
            <v-col  md3>
              <span class="reference align">Free Star</span>  
            </v-col>
          </v-row> 
        </div>
        <div class="size14">
          <v-row mt-2>
            <v-col  md3>
              <strike>
                  $3'.250.000  
                </strike>   
                <span class="setcolor">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2'.300.000 
                </span>
            </v-col>
            <v-col  md3>
              <strike>              
                  $1'.500.000              
              </strike> 
                <span class="setcolor"> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $930.000 
                </span>
            </v-col>
            <v-col  md3>
              <strike>              
                  $214.000               
              </strike> 
              <span class="setcolor">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $150.000 
              </span>                   
            </v-col>
            <v-col  md3>
              <strike>
                  $450.000  
              </strike> 
              <span class="setcolor">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $150.000   
              </span> 
            </v-col>
            <v-col  md3>
              <strike>
                $450.000  
              </strike>   
              <span class="setcolor">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $150.000
              </span>
            </v-col>
          </v-row>  
        </div>            
          <v-row mt-2>
            <v-col  md3>
              <v-btn class="test white--text rounded-pill format" color="#772CE8" >             
              Agregar al carrito           
              </v-btn> 
            </v-col>
            <v-col  md3>            
              <v-btn class="white--text rounded-pill format" color="#772CE8" >
              Agregar al carrito
              </v-btn>  
            </v-col>
            <v-col  md3>
              <v-btn class="white--text rounded-pill format" color="#772CE8" >
              Agregar al carrito
              </v-btn>                      
            </v-col>
            <v-col  md3>
              <v-btn class="white--text rounded-pill format" color="#772CE8" >
              Agregar al carrito
              </v-btn>  
            </v-col>
            <v-col  md3>
              <v-btn class="white--text rounded-pill format" color="#772CE8" >
              Agregar al carrito
              </v-btn>   
            </v-col>
        </v-row>                   
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style> 
@import './assets/styles/test.css';
</style>