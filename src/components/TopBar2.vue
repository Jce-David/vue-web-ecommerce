<script lang="ts" >
export default {

}


</script>


<template>
        <v-spacer></v-spacer>
        <RouterLink to="/" custom v-slot="{ navigate }">
            <v-btn size="small" :active="$route.name === 'home'" variant="text" @click="navigate">
                    HOME
            </v-btn>
        </RouterLink>
        <RouterLink to="/product" custom v-slot="{ navigate }">
            <v-btn size="small" :active="$route.name === 'product'" variant="text" @click="navigate">
                    PRODUCTOS
              
            </v-btn>
        </RouterLink>
        <RouterLink to="/about" custom v-slot="{ navigate }">
            <v-btn size="small" :active="$route.name === 'about'" variant="text" @click="navigate">
               
                    NOSOTROS
            
            </v-btn>
        </RouterLink>
        <v-spacer></v-spacer>
 

</template>
