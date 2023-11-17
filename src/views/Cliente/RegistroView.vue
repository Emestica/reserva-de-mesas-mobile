<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        
        <!--Boton para regresar a la vista anterior-->
        <ion-buttons slot="start">
          <ion-back-button default-href="/login"></ion-back-button>
          <ion-title>Regresar</ion-title>
        </ion-buttons>
        
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card class="Registro" >
        <ion-card-header>
          <ion-title class="centered-title">Coloca tus datos</ion-title>
        </ion-card-header>

        <ion-card-content color="warning">
          <!--<img class="logo" src="/LogoP.png">-->

          <!--Campo de registro para nombres-->
          <ion-input fill="outline" type="text" placeholder="  Escribe tu nombre" label="Nombres"
            label-placement="floating">
          </ion-input>

          <br>
          <!--Campo de registro para apellidos-->
          <ion-input fill="outline" type="text" placeholder="  Escribe apellido" label="Apellidos"
            label-placement="floating">
          </ion-input>
          <br>
          <!--Campo de registro para el telefono-->
          <ion-input fill="outline" type="tel" placeholder="  Escribe tu numero telefonico" label="Telefono"
            label-placement="floating">
          </ion-input>
          <br>
          
          <!--Campo de registro para el e-mail-->
          <ion-input ref="input" fill="outline" label="E-mail" label-placement="floating" error-text="Correo invalido"
            @ionInput="validate" @ionBlur="markTouched" placeholder="  Escribe tu correo">

          </ion-input>
          <br>
          <!--Campo de registro para la password-->
          <ion-input fill="outline" type="password" placeholder="Escribe tu contrasenia" :counter="true" maxlength="15"
            label="Contraseña" label-placement="floating" mode="">
          </ion-input>
          <!--Fecha de nacimiento-->
          <ion-title>Fecha de nacimiento</ion-title>
          <ion-datetime presentation="date" :prefer-wheel="true"></ion-datetime>

          <!-- Boton para guardar los datos-->
          <ion-button full color="primary" @click="goToPage()" class="card-button" href="#">Continuar</ion-button>
        </ion-card-content>


      </ion-card>
    </ion-content>
  </ion-page>
</template>
  
<script>
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonCardContent, IonItem, IonInput, IonButton, IonImg, IonButtons, 
  IonBackButton, IonTextarea, IonDatetimeButton, IonDatetime, IonModal
} from "@ionic/vue";
import { person, lockClosed, mail } from "ionicons/icons"
import { defineComponent } from 'vue';

export default defineComponent({
  name: "RegistroView",
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
    IonCardContent, IonItem, IonInput, IonButton, IonImg, IonButtons,
    IonBackButton, IonTextarea, IonDatetimeButton, IonDatetime, IonModal
  },
  data() {
    return {
      person, lockClosed, mail

    }
  },
  methods: {
    goToPage() {
      // Carga la página 'page2'
      this.$router.push('/registro');
    },
    validateEmail(email) {
      //Funcion para la simbologia del correo y muestre error
      return email.match(
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      );
    },
    validate(ev) {
      const value = ev.target.value;

      this.$refs.input.$el.classList.remove('ion-valid');
      this.$refs.input.$el.classList.remove('ion-invalid');

      if (value === '') return;

      this.validateEmail(value)
        ? this.$refs.input.$el.classList.add('ion-valid')
        : this.$refs.input.$el.classList.add('ion-invalid');
    },

    markTouched() {
      this.$refs.input.$el.classList.add('ion-touched');
    },
  }

});
</script>
  
<style scoped>
.Registro {
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
  