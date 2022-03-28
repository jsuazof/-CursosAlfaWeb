<template>
  <div>
      <v-btn color="danger" @click="viewProfile">Datos</v-btn>
  </div>
</template>

<script>
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
export default {
    methods:{
        viewProfile(){
      const auth = getAuth();
      const user = auth.currentUser;
      const db = getDatabase();
      const userId = auth.currentUser.uid;
r
    if (user !== null) {
  
    const displayName = this.name;
    const email = user.email;
    const photoURL = user.photoURL;
    const uid = user.uid;

    console.log(database)
    console.log(displayName)
    console.log(email)
    console.log(photoURL)
    console.log(uid)
    
    }
    }
   
    }

}
</script>

<style>

</style>