<script setup lang="ts">

import TopBar from './components/TopBar.vue';
import TopBar2 from './components/TopBar2.vue';


</script>

<template>
  <v-app id="inspire" >
    <v-row >
     <v-app-bar>
      <TopBar/>
     </v-app-bar>
      <v-app-bar height="36"  color="red"   >
        <TopBar2/>
      </v-app-bar>
    </v-row>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>


