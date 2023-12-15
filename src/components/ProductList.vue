<script lang="ts">

import type { Product } from '@/model/types';
import ProductCard from './ProductCard.vue';


export default {
    components: {
        ProductCard,
  
    },
    data() {
        return {
            products: [
        { name: "Monitor", price: 1500, id: 1, image: '/monitor.jpg', categoryId: 2   },
        { name: "Microfono", price: 750, id: 2, image: '/microfono.jpg', categoryId: 1     },
        { name: "Mouse", price: 15, id: 3, image: '/mouse.jpg', categoryId: 2    },
        { name: "Parlantes", price: 1500, id: 4, image: '/parlantes.jpg', categoryId: 1     },
        { name: "Headphones", price: 750, id: 5, image: '/headphones.jpg', categoryId: 2     },
        { name: "Silla", price: 15, id: 6, image: '/silla.webp', categoryId: 1     }
    ] as Product[],
        
        }
    },
}
</script>
<template>
    <v-row>
        <v-col v-for="product in products" :key="product.id" cols="4">
            <ProductCard :product="product"/>
        </v-col>
    
    </v-row>

</template>