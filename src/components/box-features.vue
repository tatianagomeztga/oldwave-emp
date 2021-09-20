<template>
  <v-card  class="d-fex" height="123px" justify="center" color="#c8f3fd">
    <v-card-text class="px-16">
      <v-row>
        <v-col cols="3" class="mt-9">
          <v-row align="center" justify="center">
            <v-img
              max-width="44px"
              class="mb-4"
              src="../assets/icons/icon-compras-seguras.png"
              id="vimg"
            ></v-img>
            <p class="px-5 violet--text">Compras <br>Seguras</p>
          </v-row>
        </v-col>
        <v-col cols="3" class="mt-9">
          <v-row align="center" justify="center">
            <v-img
              max-width="52px"
              class="mb-4"
              src="../assets/icons/icon-multiples-medios-pago.png"
              ></v-img>
              <p class="px-5 violet--text">Múltiples medios <br>de pago</p> 
          </v-row>
        </v-col>  
        <v-col cols="3" class="mt-9">
          <v-row align="center" justify="center"> 
            <v-img
              max-width="34px"
              class="mb-4"
              src="../assets/icons/icon-calidad-garantizada.png"
            ></v-img>
            <p class="px-5 violet--text">Calidad<br> Garantizada</p>
          </v-row>
        </v-col>
        <v-col cols="3" class="mt-9">
          <v-row align="center" justify="center">
            <v-img
              max-width="34px"
              class="mb-4"
              src="../assets/icons/icon-envios-todo-elpais.png"
              ></v-img>
              <p class="px-5 violet--text">Enviós a <br>Todo el país</p>
            </v-row>
          </v-col> 
        </v-row>   
      </v-card-text>      
    </v-card>
</template>
<style>
   @font-face {
    font-family: "Poppins, Regular";
    src: url("../assets/fonts/Poppins-Regular.ttf");
  }
  *{
    font-family: "Poppins, Regular";
    text-transform: none;
  }
  p{
    font-size: 16px;
  }
</style>