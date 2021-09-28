
<template>
<div>
     <v-navigation-drawer app v-cloak v-model="drawer" color="white">
      <v-card
      flat
      tile
      color="white"
      >
      <v-toolbar
        flat
        color="white"
        dark
        aling-center
      >
        <v-toolbar-title class="font-face black--text" >Filtros</v-toolbar-title>
      </v-toolbar>
    <v-spacer></v-spacer>
      <v-expansion-panels
      accordion
      dark
      flat
      class="font blue--text mx-0"
      v-for="(filter,index) in filters"
      :key="index"
      >
        <v-expansion-panel class=" white black--text ">
        <v-expansion-panel-header class="black--text">
          {{filter.nombre}}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <div v-for="(option,index) in filter.opciones" :key="index" class="font mt-2">
                <input type="checkbox" >&nbsp;&nbsp;
                {{option}}
            </div>
    
        </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      
      </v-card>
    </v-navigation-drawer>
    <v-card
    class="mx-auto my-15"
    max-width="50%"
    max-height="90%"
  >
  <v-row>
    <v-container class="col-6">
      <v-img
        class="white--text align-end"
        height="350px"
        width="100%"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
      </v-img>
    </v-container>
    <v-row class="col-6">
      <v-container class="col-6">
          <h3>Nombre: </h3>
          <v-sheet>{{ info[0].blend }}</v-sheet>
      </v-container>
    </v-row>

  </v-row>
  </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
        
        filters: {
      Tipo: {
        nombre: 'Tipo de producto',
        color: 'white',
        opciones: ['iPhone 11', 'iPhone 11', 'iPhone 8 Plus' , 'iPhone SE'],
        selected:[]
      },
      Marca: {
        nombre: 'Marcas',
        color: 'white',
        opciones: ['Iphone', 'Apple'],
        selected:[]
      },
      Estado: {
        nombre: 'Estado',
        color: 'white',
        opciones: ['Perfecto estado', 'Buen estado','Usado'],
        selected:[]
      }
    },

    })
  }
 
</script>
<style>
  .font-face {
    font-family: "Poppins, Regular";
    src: url("../assets/fonts/Poppins-Regular.ttf");
  }
  .font{
    font-family: "Poppins, Regular";
    text-transform: none;
  }
</style>