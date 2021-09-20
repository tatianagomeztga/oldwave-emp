<template>
  <v-card height="128px" color="violet">
    <v-card-text class="pb-0">
      <v-row >
        <v-row no-gutters >
          <v-col class="mt-8 px-15" cols="5" >
            <p 
              id="subscribetxt"
              class="white--text">Suscr&iacute;bete a nuestro bolet&iacute;n</p>
          </v-col>
          <v-col class="mt-7" cols="3">
            <v-text-field
              class="entrada"
              placeholder="Ingresa tu correo electrónico"
              rounded
              flat
              hide-details
              solo
              dense
            ></v-text-field>  
          </v-col>  
          <v-col class="mt-5"  cols="4" >
            <v-card-actions>          
              <v-btn
                outlined
                rounded
                depressed
                color="white"
                class="white--text mr-3"
                id="btnsubscribe"
              >
                Suscribirme
              </v-btn>
            </v-card-actions>        
          </v-col>
          <v-col  cols="4" >
            <p class="px-15 white--text" id="notesubs">Recibe información de nuestras ofertas</p>
          </v-col>>
          <v-col cols="7" align="left" class="ml-11">
            <p class="px-16 white--text" id="clapsula">*Al suscribirme acepto recibir emails e información de oldwaves, bajo sus Políticas de datos personales</p>
          </v-col>
        </v-row>    
      </v-row>
    </v-card-text>      
  </v-card>
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
  *{
    font-family: "Poppins, Regular";
    text-transform: none;
  }
  #subscribetxt{
    font-family: "Poppins, Bold";
    text-transform: none;
    font-size: 26px;
  }
  #btnsubscribe{
    padding: 0px 110px;
  }
  #notesubs{
    font-size: 16px;
  }
  #clapsula{
    font-size: 13px;
  }
</style>