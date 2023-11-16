<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/login"></ion-back-button>
        </ion-buttons>
        <ion-title>Registrate</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card class="Login">
        <ion-card-header>
          <ion-title class="centered-title">Bienvenido</ion-title>
        </ion-card-header>

        <ion-card-content>
          <img class="logo" src="/LogoP.png">
          
            <ion-textarea fill="outline" type="text" placeholder="  Escribe tu nombre y apellido" 
            label="Usuario" label-placement="floating">


            </ion-textarea>
          
          <br>
            <ion-textarea ref="input" fill="outline" label="Email" label-placement="floating"
                error-text="Correo invalido"  @ionInput="validate"
              @ionBlur="markTouched" placeholder="  Usuario" >
            
            </ion-textarea>
          <br>
          
            <ion-input fill="outline" type="password" placeholder="Escribe tu contrasenia" 
            :counter="true" maxlength="15" label="Contraseña" label-placement="floating"> 
            </ion-input>
          
          <ion-button full color="primary" @click="goToPage()" class="card-button"
            href="/registro">Continuar</ion-button>
        </ion-card-content>


      </ion-card>
    </ion-content>
  </ion-page>
</template>
  
<script>
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent, IonItem, IonInput, IonButton, IonImg, IonButtons, IonBackButton, IonTextarea
} from "@ionic/vue";
import { person, lockClosed, mail } from "ionicons/icons"
import { defineComponent } from 'vue';

export default defineComponent({
  name: "RegistroView",
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
    IonButtons,
    IonBackButton,
    IonTextarea
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
  