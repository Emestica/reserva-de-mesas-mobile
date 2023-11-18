<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inicio de Sesi&oacute;n</ion-title>

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

            <ion-input 
              type="text" 
              placeholder="Correo"
              v-model="user.email"
            ><ion-icon :icon="person"></ion-icon>
            </ion-input>

          </ion-item>
          <br><br>
          <ion-item>

            <ion-input 
              type="password" 
              placeholder="Contraseña"
              v-model="user.password"
            ><ion-icon :icon="lockClosed"></ion-icon>
            </ion-input>

          </ion-item>
          <br>
          <ion-button full color="primary" @click="loginUser()" class="card-button">Iniciar sesión</ion-button>
          <ion-button full color="primary" @click="goToPage()" class="card-button">Registrarse</ion-button>
        </ion-card-content>


      </ion-card>

      <ion-toast 
        :is-open="toastOpen" 
        :message="toastMessage" 
        :duration="toastDuration"
        @didDismiss="toastOpen = false"
        :icon="informationCircleOutline"
      ></ion-toast>

    </ion-content>
  </ion-page>
</template>

<script>
import {
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
  IonToast
} from "@ionic/vue";

import { person, lockClosed, informationCircleOutline } from "ionicons/icons";

import axios from "axios";

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
    IonToast
  },
  data() {
    return {
      person,
      lockClosed,
      informationCircleOutline,
      toastOpen: false,
      toastMessage: null,
      toastDuration: 5000,
      user: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    goToPage() {
      // Carga la página 'page2'
      this.$router.push('/register-user');
    },
    loginUser() {
      console.log('loginUser() => init');
      axios.post('http://127.0.0.1:8000/api/mobile/login-user', this.user)
      .then(response => {
        console.log(response);
        if(response.data.success === true){
          console.log(response.data.data_user_object);
          console.log(response.data.data_user_person_object);

          let myObject = {
            id_user: response.data.data_user_object.id_usuario,
            user: response.data.data_user_object.usuario,
            email: response.data.data_user_object.correo_electronico,
            channel: response.data.data_user_object.channel,
            id_user_person: response.data.data_user_person_object.id_usuario_persona,
            id_person: response.data.data_user_person_object.id_persona,
            name: response.data.data_user_person_object.nombres,
            last_name: response.data.data_user_person_object.apellidos
          }

          this.$storage.set('user', JSON.stringify(myObject));
          this.$router.push('/md-house/inicio');
          
        } else {
          console.log("loginUser() => error-controlado");
          console.log(response.data);
          this.toastMessage = response.data.data;
          this.toastOpen = true;
        }
      }).catch(error => {
        console.log("loginUser() => error-no-controlado");
        console.log(error);
        this.toastMessage = "Ha Ocurrido Un Error Inesperado!!!";
        this.toastOpen = true;
      });
      console.log('loginUser() => end');
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

}</style>
