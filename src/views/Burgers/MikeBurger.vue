<template>
    <ion-page>
        <ion-header >
         <ion-toolbar>
           <ion-title>Nuestra Selección</ion-title>
         </ion-toolbar>
       </ion-header>
    
       <ion-content>
        <ion-card>
            <img alt="Economike" src="/public/Mike/Economike.png" />
            <ion-card-header>
            <ion-card-title>Economike</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
            Combo mike , combo completo para todos los gustos.
            </ion-card-content>
        </ion-card>
    
        <ion-card>
            <img src="/public/Mike/Carnitas.png" alt="Carnitas"/>
            <ion-card-header>
            <ion-card-title> Tus Carnitas</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
            Hamburguesas 4 carnes , solo para valientes ¿ Te atreves ?
            </ion-card-content>
        </ion-card>
    
        <ion-card>
            <img alt="Toxica" src="/public/Mike/toxica.png" />
            <ion-card-header>
            <ion-card-title>Burger Neurot&oacute;xica</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
           Disfruta esta exquisita hamburguesa por tiempo limitado.
            </ion-card-content>
        </ion-card>
       </ion-content>
    </ion-page>
    </template>
    
    
    <script>
    import {IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonCard,
        IonCardContent,IonCardHeader,IonCardTitle} from '@ionic/vue'
    
    export default{
        name:'MikeView',
        components:{
            IonPage,IonHeader,IonToolbar,IonTitle,IonContent,
            IonCard,IonCardContent,IonCardHeader,IonCardTitle
        },
        
    }
    </script>
    
    <style>
    
    </style>