<template>
  <v-footer >
    <v-container >
      <v-layout mt-2>
        <v-flex  >
          <v-img
            max-width="120px"
            height="89px"
            src="../assets/logo/oldwave-logo-vertical.png"
            ></v-img>
        </v-flex>  
        <v-flex>
          <h3 id="ftitle" class="violet--text">old<b>wave</b></h3>
          <v-layout class="interes"  mt-4>
            <v-flex >
              <h2  class="p2">¿Quienes somos?</h2>
              <h2 class="p2">Nuestras tiendas </h2>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex>
          <h3 id="ftitle" class="violet--text">Links de interés</h3>
          <v-layout class="interes"  mt-4>
            <v-flex>
              <h2  class="p2">Preguntas frecuentes</h2>
              <h2 class="p2">Términos y condiciones </h2>
              <h2  class="p2">Políticas de devoluciones</h2>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex>
          <h3 id="ftitle" class="violet--text">Contácto</h3>
          <v-layout class="contacto"  mt-3>
            <p class="p1" >servicioalcliente@oldwave.co <br> Telefono: 316 1924</p>
          </v-layout>
          <h3 id="ftitle" class="violet--text" >Redes Sociales</h3>
          <v-layout class="contacto mt-2" >
            <v-btn 
              fab
              x-small
              dark
            >
            <img src="../assets/icons/icon-facebook.png" /> 
            </v-btn>
            &nbsp;&nbsp;&nbsp;
            <v-btn
              fab
              x-small
              dark
            >
              <img src="../assets/icons/icon-instagram.png" /> 
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-card
        flat
        tile
        class=" text-center mt-2"
      >
        <v-card-text class="black--text p2">
          oldwave© 2020 | Powered by:
          <img src="../assets/experimentality-vtex.png" />
        </v-card-text>
      </v-card>
    </v-container>  
  </v-footer>
</template>

<style>
  @font-face {
    font-family: "Poppins, Regular";
    src: url("../assets/fonts/Poppins-Regular.ttf");
  }
  @font-face{
    font-family: "Poppins, Bold";
    src: url("../assets/fonts/Poppins-Bold.ttf");
  }
  @font-face{
    font-family: "Poppins, SemiBold";
    src: url("../assets/fonts/Poppins-SemiBold.ttf");
  }
  *{
    font-family: "Poppins, Regular";
    text-transform: none;
  }
  #ftitle{
    font-family: "Poppins, Bold";
    font-size: 20px;
    font-weight: bold;
  }
  .p1{
    color:#3B3B3B;
    font-size:13px;
    font-weight:regular;
  }
  .p2{
    color:#3B3B3B;
    font-size:14px;
    font-weight: normal;
  }
 
</style>