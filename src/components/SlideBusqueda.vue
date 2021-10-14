
<template>
  <v-sheet
    class="ml-8 mr-8"
    elevation="0"
  >
    <v-slide-group
      class="pa-4 pt-0"
      show-arrows
    >
      <v-slide-item
        v-for="(image, n) in images"
        :key="n"
        v-slot="{ active, toggle }"
      >
      <v-container>
        <v-card
          class="mt-4"
          elevation="0"
          id="card"
          height= "144px"
          align="center"
          justify="center"
          @click="toggle">
            <v-btn
              depressed
              width= "107px"
              height= "100px"
              class="mb-0"
              id="btncategory">
              <v-img
              :src="image.src"
              width="73px"
              height="41px"
              contain>
              </v-img>
            </v-btn>
            <v-card-title class="mt-0" id="txtcategory">{{ image.texto }}</v-card-title>
            <v-row
            class="fill-height"
            align="center"
            justify="center">
                <v-scale-transition>
                <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                ></v-icon>
                </v-scale-transition>
            </v-row>
        </v-card>
      </v-container>
      
      </v-slide-item>
    </v-slide-group>
    
  </v-sheet>
</template>
<script>
  export default {
    data: () => ({
      images:[{
          src: require("../assets/icons/icon-carro.svg"),
          texto: 'Carros',
      },
      {
          src: require("../assets/icons/icon-moto.svg"),
          texto: 'Motos'
      },
      {
          src: require("../assets/icons/icon-ropa.svg"),
          texto: 'Ropa'
      },
      {
          src: require("../assets/icons/icon-deporte.svg"),
          texto: 'Deportes'
      },
      {
          src: require("../assets/icons/icon-mueble.svg"),
          texto: 'muebles'
      },
      {
          src: require("../assets/icons/icon-computadores.svg"),
          texto: 'Computadores'
      },
      {
          src: require("../assets/icons/icon-celular.svg"),
          texto: 'Celulares'
      },
      {
          src: require("../assets/icons/icon-tv.svg"),
          texto: 'TV, audio y foto'
      },
      {
          src: require("../assets/icons/icon-electrodomesticos.svg"),
          texto: 'Electrodomésticos'
      },

      ]

    }),
    model: null,
  }
</script>


<style>
@font-face {
  font-family: "Poppins, Regular";
  src: url("../assets/fonts/Poppins-Regular.ttf");
}
*{
  font-family: "Poppins, Regular";
  text-transform: none;
}

#txtcategory{
  font-size: 13px;
  color: #5C5E64;
  justify-content: center;
  padding-top: 0px;
}
#txtcategory:hover{
  color: #772CE8;
}
#card:hover{
  color: #772CE8;
}
#btncategory{
  background-color: white;
}
#btncategory:hover{
  background-color: #FFF;
  box-shadow: 1px 1px 6px #772CE8;
  border: 1px solid #FFFFFF;
  border-radius: 8px;
}

</style>