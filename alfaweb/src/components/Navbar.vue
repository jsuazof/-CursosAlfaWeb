<template>
  <div>
    <v-app-bar dense>
      <v-app-bar-title>Cursos Alfaweb </v-app-bar-title>
      <v-icon>mdi-school</v-icon>
      <v-btn class="ms-4">Cursos <v-icon>mdi-account-school</v-icon> </v-btn>
      <v-spacer></v-spacer>
      <v-btn to="/register" outlined color="orange darken-4 white--text"
        >Registrarse <v-icon class="ms-2">mdi-account-plus</v-icon></v-btn
      >
      <v-btn to="/login" class="ms-2" color="indigo darken-1 white--text"
        >Iniciar sesion <v-icon class="ms-2">mdi-login-variant</v-icon></v-btn
      >
      
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <!-- NAVIGATOR DRAWER -->
    <v-navigation-drawer :user="user" absolute temporary right v-model="drawer">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link to="/dashboard">
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Administracion
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="cerrarSesion">
          <v-list-item-icon>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Cerrar Sesion
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- END NAVIGATOR DRAWER -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    drawer: false,
    group: null,
    
  }),
  methods:{
    ...mapActions(["cerrar_Sesion"]),
    async cerrarSesion(){
      await this.cerrar_Sesion()
      alert("sesion cerrada con éxito")
      this.$router.push("/")
    }
  },
  computed:{
    ...mapState(["user"]),
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
</style>