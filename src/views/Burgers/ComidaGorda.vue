<template>
    <ion-page>
        <ion-header >
         <ion-toolbar>
           <ion-title>Nuestra Selección</ion-title>
         </ion-toolbar>
       </ion-header>
    
       <ion-content>
        <ion-card>
            <img alt="La Golosa" src="/public/ComidaGorda/Golosa.png" />
            <ion-card-header>
            <ion-card-title>La Golosa</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
            1/4 de lb de res, champiñones , queso derretido , pan artesanal.
            </ion-card-content>
        </ion-card>
    
        <ion-card>
            <img src="/public/ComidaGorda/Tagada.png" alt="Tagada"/>
            <ion-card-header>
            <ion-card-title>Tagada</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
            Hamburguesa con 1/4 de lb de res, queso rallado, tocino con papas de infarto.
            </ion-card-content>
        </ion-card>
    
        <ion-card>
            <img alt="Super Campero" src="/public/ComidaGorda/Picada.png" />
            <ion-card-header>
            <ion-card-title>Picada</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
            Banquete no necesita presentaci&oacute;n prueb&aacute;lo.
            </ion-card-content>
        </ion-card>
       </ion-content>
    </ion-page>
    </template>
    
    
    <script>
    import {IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonCard,
        IonCardContent,IonCardHeader,IonCardTitle} from '@ionic/vue'
    
    export default{
        name:'ComidaGordaView',
        components:{
            IonPage,IonHeader,IonToolbar,IonTitle,IonContent,
            IonCard,IonCardContent,IonCardHeader,IonCardTitle
        },
        
    }
    </script>
    
    <style>
    
    </style>