<template>
    <ion-page>
        <ion-header >
         <ion-toolbar>
           <ion-title>Nuestra Selección</ion-title>
         </ion-toolbar>
       </ion-header>
    
       <ion-content>
        <ion-card>
            <img alt="Menu Campestre" src="/public/Campestre/MenuPersonal.png" />
            <ion-card-header>
            <ion-card-title>Men&uacute; Campestre</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
            2 piezas de pollo , papas, 1 pan y una bebida de 12 oz.
            </ion-card-content>
        </ion-card>
    
        <ion-card>
            <img src="/public/Campestre/Pechugitas.png" alt="Pechugitas"/>
            <ion-card-header>
            <ion-card-title>Pechugitas campestre</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
            7 Pechugitas empanizadas, papas, ensalada y bebida de 12 oz.
            </ion-card-content>
        </ion-card>
    
        <ion-card>
            <img alt="Super Campero" src="/public/Campestre/Banquete.png" />
            <ion-card-header>
            <ion-card-title>Banquete Campestre</ion-card-title>
            </ion-card-header>
    
            <ion-card-content>
            Banquete para celebrar : 8 piezas (Pechugas, muslos y piernas)
            </ion-card-content>
        </ion-card>
       </ion-content>
    </ion-page>
    </template>
    
    
    <script>
    import {IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonCard,
        IonCardContent,IonCardHeader,IonCardTitle} from '@ionic/vue'
    
    export default{
        name:'CampestreView',
        components:{
            IonPage,IonHeader,IonToolbar,IonTitle,IonContent,
            IonCard,IonCardContent,IonCardHeader,IonCardTitle
        },
        
    }
    </script>
    
    <style>
    
    </style>