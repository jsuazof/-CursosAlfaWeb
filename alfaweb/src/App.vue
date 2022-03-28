<template>
  <v-app>
    <v-main>
      <Navbar></Navbar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components:{
    Navbar,
  },
  data: () => ({
    
  }),
};
</script>

