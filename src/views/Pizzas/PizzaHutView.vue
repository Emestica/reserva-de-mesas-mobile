<template>
    <ion-page>
        <ion-header >
         <ion-toolbar>
           <ion-title>Nuestra Selección</ion-title>
         </ion-toolbar>
       </ion-header>
    
       <ion-content>
        <ion-card>
            <img alt="My box" src="/public/Hut/Mybox.png" />
            <ion-card-header>
            <ion-card-title>My box</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
            Pizza personal, palitoques y bebida de 12 oz.
            </ion-card-content>
        </ion-card>
    
        <ion-card>
            <img src="/public/Hut/Chessy.png" alt="Cheesy"/>
            <ion-card-header>
            <ion-card-title>Chessy Pops Dip & Crunch</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
            Cheesy pops gigante + complemento
            </ion-card-content>
        </ion-card>
    
        <ion-card>
            <img alt="4 estaciones" src="/public/Hut/Estaciones.png" />
            <ion-card-header>
            <ion-card-title>4 Estaciones</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
            Lo mejor de 4 mundos , disfruta tu 4 estaciones + palitoques
            </ion-card-content>
        </ion-card>
       </ion-content>
    </ion-page>
    </template>
    
    
    <script>
    import {IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonCard,
        IonCardContent,IonCardHeader,IonCardTitle} from '@ionic/vue'
    
    export default{
        name:'HutView',
        components:{
            IonPage,IonHeader,IonToolbar,IonTitle,IonContent,
            IonCard,IonCardContent,IonCardHeader,IonCardTitle
        },
        
    }
    </script>
    
    <style>
    
    </style>