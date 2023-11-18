<template>
    <ion-page>
        <ion-header >
         <ion-toolbar>
           <ion-title>Nuestra Selección</ion-title>
         </ion-toolbar>
       </ion-header>
    
       <ion-content>
        <ion-card>
            <img alt="Domikids" src="/public/Dominos/Domikids.png" />
            <ion-card-header>
            <ion-card-title>Domikids</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
            El mejor combo para los reyes del hogar.
            </ion-card-content>
        </ion-card>
    
        <ion-card>
            <img src="/public/Dominos/Dominisima.png" alt="Dominisima"/>
            <ion-card-header>
            <ion-card-title>Dominisima</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
            Domin&iacute;sima no necesita presentaci&oacute;n , disfrutala en los siguientes ingredientes.
            </ion-card-content>
        </ion-card>
    
        <ion-card>
            <img alt="Gigante" src="/public/Dominos/Gigante.png" />
            <ion-card-header>
            <ion-card-title>Pizza Gigante</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
            Banquete para toda la familia
            </ion-card-content>
        </ion-card>
       </ion-content>
    </ion-page>
    </template>
    
    
    <script>
    import {IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonCard,
        IonCardContent,IonCardHeader,IonCardTitle} from '@ionic/vue'
    
    export default{
        name:'DominosView',
        components:{
            IonPage,IonHeader,IonToolbar,IonTitle,IonContent,
            IonCard,IonCardContent,IonCardHeader,IonCardTitle
        },
        
    }
    </script>
    
    <style>
    
    </style>