<template>
    <ion-page>
      <ion-tabs>

        <ion-router-outlet></ion-router-outlet>

        <ion-tab-bar slot="bottom">

          <ion-tab-button tab="inicio" href="/md-house/inicio">
            <ion-icon aria-hidden="true" :icon="triangle" />
            <ion-label>Inicio</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="login" href="/md-house/login">
            <ion-icon aria-hidden="true" :icon="triangle" />
            <ion-label>Inicio Sesion</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="locales" href="/md-house/locales">
            <ion-icon aria-hidden="true" :icon="ellipse" />
            <ion-label>Locales</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="restaurante" href="/md-house/restaurante">
            <ion-icon aria-hidden="true" :icon="square" />
            <ion-label>Restaurante</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="menu" href="/md-house/menu">
            <ion-icon aria-hidden="true" :icon="square" />
            <ion-label>Menu</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="reservacion" href="/md-house/reservacion">
            <ion-icon aria-hidden="true" :icon="square" />
            <ion-label>Reservacion</ion-label>
          </ion-tab-button>

        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script setup>
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
  import { ellipse, square, triangle } from 'ionicons/icons';
  </script>
  