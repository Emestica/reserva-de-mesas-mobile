<template>
  <ion-page>
    <ion-header>
      <ToolbarComponent title="Inicio"></ToolbarComponent>
    </ion-header>
    <ion-content class="container">
      <ion-grid>
        <ion-row>
          <!-- <ion-searchbar
            class="ion-no-padding ion-padding-top"
            color="ligth"
            placehaolder="Escriba que desea buscar"
            fill="solid"
            type="text"
            v-model="texto"
          ></ion-searchbar> -->


        </ion-row><br>
        <ion-row>

          <ion-card class="item1" @click="goToPage1()">
            <ion-card-header><br><br>
              <ion-card-title class="title">Hamburguesas</ion-card-title><br><br>
            </ion-card-header>
            <ion-card-content>
              <img src="/public/Hamburguesa.png" alt="Hamburguesa" />
            </ion-card-content>
          </ion-card>
          <br><br>

          <ion-card class="item2" @click="goToPage2()">
            <ion-card-header><br><br>
              <ion-card-title class="title">Pizzas</ion-card-title><br><br>
            </ion-card-header>
            <ion-card-content>
              <img src="/public/Pizza.png" alt="Hamburguesa" />
            </ion-card-content>
          </ion-card>
          <br><br>

          <ion-card class="item3" @click="goToPage3()">
            <ion-card-header><br><br>
              <ion-card-title class="title">Pollo</ion-card-title><br><br>
            </ion-card-header>
            <ion-card-content>
              <img src="/public/Pollo.png" alt="Hamburguesa" />
            </ion-card-content>
          </ion-card>
          <br><br>
          <!-- <ion-col>
        <ion-card class="item2" @click="goToPage2()" to="/Reservacion">
          <ion-card-header>
            <ion-card-title class="title">Reservacion</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <img src="/public/Reservar.png" alt="Reservacion" />
          </ion-card-content>
        </ion-card>
        <ion-card class="item4" @click="goToPage3()" to="/Locales">
          <ion-card-header>
            <ion-card-title class="title">Locales</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <img src="/public/Locales.png" alt="Locales"/>
          </ion-card-content>
        </ion-card>
    </ion-col>
        <ion-col size="7">
        <ion-card class="item3" @click="goToPage4()" to="/Menu">
          <ion-card-header>
            <br><br>
            <ion-card-title class="title">Menu</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <img src="/public/Menus.png" alt="Menu"/>
          </ion-card-content>
        </ion-card>
    </ion-col> -->

        </ion-row>
      </ion-grid>
    </ion-content>

  </ion-page>
</template>
  

<script>

import ToolbarComponent from "../../components/ToolbarComponent.vue";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonCol,
  IonSearchbar
} from "@ionic/vue";

export default {
  name: "InicioView",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonCol,
    IonSearchbar,
    ToolbarComponent
  },
  data() {
    return {
      texto: '',
    }
  },
  methods: {
    goToPage1() {
      this.$router.push('/md-house/Burger');

    },
    goToPage2() {
      this.$router.push('/md-house/pizza');

    },
    goToPage3() {
      this.$router.push('/md-house/pollo');
    },
    async loadDataUserStorage(){
      console.log('loadDataUserStorage() => init');

      let strUser = await this.$storage.get('user').then(info => {
        console.log('loadDataUserStorage() => then promise');
        console.log(JSON.parse(info));
      });

      console.log('loadDataUserStorage() => end');
    }
  },
  ionViewWillEnter(){
    this.loadDataUserStorage();
  }
}


</script>

<style>
ion-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}


.item1 img {
  width: 100%;
}

.item2 img {
  width: 100%;
  height: 200px;
}

.item3 img {
  width: 100%;
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
  background-color: orange;
  border: 1px solid orange;
  padding: 1px;
}

.item3 {
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


.item1:hover,
.item2:hover,
.item3:hover,
.item4:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.title {
  font-weight: bold;
  color: black;
  text-align: center;
  font-size: 24px;
}
</style>

