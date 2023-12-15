<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from '../model/types'


export default {
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true
        }
    },
    computed: {
        productImageUrl(){
            return this.product.image ?? "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        }
    }
}
</script>
<template>
    <v-card class="mt-10" >
        <v-img :src="productImageUrl" height="300px" cover />
        <v-card-text>
                <p class="my-class" >{{ product.name }}</p>
                <p class="my-class" >S/. {{ product.price }}</p>
            <v-card-actions>
                <v-btn color="black" block>
                    <p class="my-class"> Agregar al carrito </p>
                </v-btn>
            </v-card-actions>

 

        </v-card-text>
    </v-card>
</template>
<style>

 
    .my-class {
      font-family: Roboto;
    }

  /* Estilo personalizado de la barra de navegación */
  .v-card {
    background-color: #fff; /* Color de fondo de la barra */
    color: black; /* Color del texto */
    box-shadow: none !important; /* Eliminar la sombra (importante para anular estilos predeterminados) */
  }
</style>