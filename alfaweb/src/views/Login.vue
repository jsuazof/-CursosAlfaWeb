<template>
  <div>
    <v-col cols="12" md="6" class="ma-auto">
      <v-form ref="form">
        <v-text-field
          :rules="emailRules"
          v-model="usuario.email"
          label="Ingrese su email"
          required
        >
        </v-text-field>
        <v-text-field
          v-model="usuario.password"
          label="Ingrese su clave"
          required
        >
        </v-text-field>
        <v-container class="d-flex justify-space-between">
          <v-btn color="primary" @click="iniciarSesion" :loading="loading"
            >Iniciar Sesión</v-btn
          >
          <v-btn color="danger" @click="reset">Limpiar Formulario</v-btn>
          
          <v-btn color="warning" @click="resetValidation"
            >Limpiar Validación</v-btn
          >
        </v-container>
      </v-form>
    </v-col>
    <v-snackbar color="green" top centered v-model="snackbarSuccess">
      Inicio de sesión correcto
    </v-snackbar>
    <v-snackbar color="red" top centered v-model="snackbarFailed">
      Usuario o contraseña no validos <v-icon> mdi-emoticon-sad </v-icon>
    </v-snackbar>
  </div>
</template>

<script>

import { mapActions } from "vuex";
import rules from "@/helpers/rules.js";
const { emailRules } = rules;

export default {
  data() {
    return {
      loading: false,
      snackbarSuccess: false,
      snackbarFailed: false,
      usuario: {
        email: "",
        password: "",
      },
      emailRules,
    };
  },
  methods: {
    ...mapActions(["iniciar_Sesion",]),
    async iniciarSesion() {
      try {
        const usuario = { ...this.usuario };
        await this.iniciar_Sesion(usuario);
        this.snackbarSuccess = true;
        this.reset();
        this.$router.push("/dashboard");
      } catch (error) {
        this.snackbarFailed = true;
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    reset() {
      const { form } = this.$refs;
      form.reset();
    },
    resetValidation() {
      const { form } = this.$refs;
      form.resetValidation();
    },
    
  },
};
</script>

<style>
</style>