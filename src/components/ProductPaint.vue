<script lang="ts" >

export default {

}

</script>

<template>
  <v-carousel height="500px" >
    <v-carousel-item  >
      <v-img cover class="d-flex align-center justify-center text-white" src="/portada1.png">

        <p class="text-h3 text-center">Producto 100% Peruano </p>
        
        <v-card-actions class=" mt-4  d-flex justify-center">
          <v-btn variant="outlined">
            <p class="my-class text-center">Ver Productos</p>
          </v-btn>
        </v-card-actions>


      </v-img>

    </v-carousel-item>

    <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

    <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
  </v-carousel>
  <v-container>
    <v-row class="my-6">
      <v-col cols="2">
      </v-col>
      <v-col cols="4">
        <p class="my-class"> Trois modèles de chaussons, une mission : vous rendre heureux de rentrer chez
          vous pour virer vos godasses et
          passer en mode Flemar.
        </p>
      </v-col>
      <v-col cols="4">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover />
      </v-col>
      <v-col cols="2">
      </v-col>
    </v-row>
  </v-container>
</template>