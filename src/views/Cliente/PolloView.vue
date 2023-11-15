<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lo mejor en pollo frito</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-row>

        <ion-card class="item1" @click="goToPage1()">
          <ion-card-header><br><br>
            <ion-card-title class="title">Pollo Campero</ion-card-title><br><br>
          </ion-card-header>
          <ion-card-content>
            <img src="/public/Campero.png" alt="Campero" />
          </ion-card-content>
        </ion-card>
        <br><br>

        <ion-card class="item2" @click="goToPage2()" to="/Restaurante">
          <ion-card-header><br><br>
            <ion-card-title class="title">Pollo Campestre</ion-card-title><br><br>
          </ion-card-header>
          <ion-card-content>
            <img src="/public/Campestre.png" alt="Hamburguesa" />
          </ion-card-content>
        </ion-card>
        <br><br>

        <br><br>
      </ion-row>
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
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/vue'


export default {
  name: 'PolloView',
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonRow, IonCardHeader, IonCardContent, IonCardTitle
  },
  methods: {
    goToPage1() {
      this.$router.push('/campero');
    },

    goToPage2() {
      this.$router.push('/campestre');
    },
  }
}

</script>
  
<style scoped>
ion-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}


.item1 img {
  width: 100%;
  height: 100%;
}

.item2 img {
  width: 100%;
  height: 200px;
}



.item1 {
  width: 280px;
  height: 350px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  margin: 20px;
  background-color: orange;
  border: 1px solid orange;
  padding: 1px;
}

.item2 {
  width: 280px;
  height: 350px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  margin: 20px;
  background-color: red;
  border: 1px solid red;
  padding: 1px;
}



.item1:hover,
.item2:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.title {
  font-weight: bold;
  color: black;
}
</style>


 