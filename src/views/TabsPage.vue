<template>
    <ion-page>
      <ion-tabs>

        <ion-router-outlet></ion-router-outlet>

        <ion-tab-bar slot="bottom">

          <ion-tab-button tab="inicio" href="/md-house/inicio">
            <ion-icon aria-hidden="true" :icon="home" />
            <ion-label>Inicio</ion-label>
          </ion-tab-button>

          <!-- <ion-tab-button tab="login" href="/md-house/login">
            <ion-icon aria-hidden="true" :icon="people" />
            <ion-label>Inicio Sesion</ion-label>
          </ion-tab-button> -->
  
          <ion-tab-button tab="burger" href="/md-house/burger">
            <ion-icon aria-hidden="true" :icon="restaurant" />
            <ion-label>Hamburguesas</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="pollo" href="/md-house/pollo">
            <ion-icon aria-hidden="true" :icon="bonfire" />
            <ion-label>Pollo</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="pizza" href="/md-house/pizza">
            <ion-icon aria-hidden="true" :icon="pizza" />
            <ion-label>Pizza</ion-label>
          </ion-tab-button>

        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script setup>
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
  import { restaurant, pizza, people , bonfire, home} from 'ionicons/icons';
  </script>
  