<template>
  <div fixed>
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
      color="violet"
      height="66px"
      flat
      >
      <div class="ml-10">
        <v-text-field
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
        depressed
        color="white2"
        height="38px"
        class="violet--text rounded-r-xl rounded-l-0"
        id="btncategories">
          Todas las categor&iacute;as
        <v-img
          src="../assets/icons/Icon-arrow-up-1.png"
          class="shrink ml-2"
          contain>
        </v-img>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        outlined
        rounded
        depressed
        color="white"
        class="white--text mr-3"
        id="btnsearch"
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
  </div>
  
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
