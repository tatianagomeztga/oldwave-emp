
<template>
  <v-sheet
    class="mx-auto"
    elevation="8"
  >
    <v-slide-group
      class="pa-4"
      show-arrows
      v-model="model"
    >
      <v-slide-item
        v-for="(image, n) in images"
        :key="n"
        v-slot="{ active, toggle }"
      >
      <v-container>
        <v-card
        class="ma-4 card"
        align="center"
        justify="center"
        height="120"
        width="150"
        @click="toggle">
            <v-img
            :src="image.src"
            width="70"
            height="60"
            contain>
            </v-img>
            <v-card-title>{{ image.texto }}</v-card-title>
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
.theme--light.v-card {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #FFFFFF;
    border-radius: 8px;
    opacity: 1;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none !important;
}
.v-card__title {
    
    color: var(--unnamed-color-5c5e64);
    text-align: left;
    font: normal normal normal 13px/20px Poppins;
    color: #5C5E64;
    opacity: 1;
    justify-content: center;
    font-size: 0.9rem !important;
    
}
.v-card__title:hover{
  color: #772CE8;
  font-weight: bold;
}

.card{
  color: #772CE8;
}
</style>