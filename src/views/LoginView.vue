<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card class="Login">
        <ion-card-header>
          <ion-title class="centered-title">Bienvenido</ion-title>
        </ion-card-header>

        <ion-card-content>
          <img class="logo" src="/LogoP.png">
          <ion-item>
            <ion-input type="text" placeholder="  Usuario"><ion-icon :icon="person"></ion-icon></ion-input>
          </ion-item>
          <br><br>
          <ion-item>
            <ion-input type="password" placeholder="  Contraseña">  <ion-icon :icon="lockClosed"></ion-icon></ion-input>
          </ion-item>
          <br>
          <ion-button full color="primary" @click="goToPage()" class="card-button" to="/inicio">Iniciar sesión</ion-button>
        </ion-card-content>
        
        
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,  IonItem, IonInput, IonButton, IonImg } from "@ionic/vue";
import {person, lockClosed} from "ionicons/icons"
export default {
  name: "LoginView",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent, 
    IonItem,
    IonInput,
    IonButton,
    IonImg,
  },
  data(){
    return{
      person, lockClosed

    }
  },
  methods: {
    goToPage() {
      // Carga la página 'page2'
      this.$router.push('/inicio');
    }
  }

};
</script>

<style scoped>
.Login {
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  max-width: 600px;
  max-height: 1000;
  margin: 0 auto;
  margin-top: 50px;
  
}



.card-button {
  background-color: #007bff;
  color: #ffffff;
  display: flex;
  height: 50px;
 
 
}

.logo {
  width: 300%;
  height: 300px;
  object-fit: contain;
}

ion-input {
  display: flex;
  align-items: center;

}

ion-title {
  text-align: center;
}

.centered-title {
  text-align: center;

}


</style>
