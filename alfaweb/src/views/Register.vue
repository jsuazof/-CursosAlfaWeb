<template>
  <div>
    <v-col cols="12" md="4" class="ma-auto">
      <v-form ref="form" >
          <!-- NOMBRE -->
        <v-text-field
          v-model="usuario.name"
          :counter="15"
          :rules="nameRules"
          label="Nombre"
          required
        ></v-text-field>
        <!-- FOTO -->
         <v-text-field
          v-model="usuario.imageUrl"
          label="Imagen"
        ></v-text-field>
        <!-- EMAIL -->
        <v-text-field
          v-model="usuario.email"
            :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <!-- PASSWORD -->
        <v-text-field
          v-model="usuario.password"
          label="Password"
          :rules="passwordRules"
          hint="Minimo 6 caracteres"
          required
        ></v-text-field>


        <v-btn
          color="success"
          class="mr-4"
          @click="registerAndAddUser"
          :loading="loading"
        >
          Registrarse
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Limpiar Formulario </v-btn>

        <v-btn color="warning" @click="resetValidation">
          Resetear Validación
        </v-btn>
      </v-form>
    </v-col>
    <v-snackbar color="green" top centered v-model="snackbarSuccess">
        Usuario registrado con éxito
    </v-snackbar>
    <v-snackbar color="red" top centered v-model="snackbarFailed">
         Ocurrió un problema <v-icon> mdi-emoticon-sad </v-icon>
    </v-snackbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import  rules  from '@/helpers/rules.js'
const { emailRules, passwordRules, nameRules } = rules
export default {
  data() {
    return {
        loading: false,
        snackbarSuccess : false,
        snackbarFailed: false,
      usuario: {
        name: "",
        imageUrl: "",
        email: "",
        password: "",
        userId: "",
        
      },
      emailRules,
      passwordRules,
      nameRules
    };
  },
  methods: {
    ...mapActions(["register_User", "add_User"]),
    async registerAndAddUser() {
      try {
          const usuario = {...this.usuario}
          this.loading = true;
          await this.register_User(usuario)
          delete usuario.password
          await this.add_User(usuario)
          this.snackbarSuccess = true
      } catch (error) {
          this.snackbarFailed = true
          console.log(error)
      } finally {
          this.loading = false;
      }
    },
    reset(){
        const { form } = this.$refs
        form.reset()
    },
    resetValidation(){
      const {form} = this.$refs
      form.resetValidation()
    }
  },
};
</script>

<style>
</style>