<template>
<ion-page>
    <ion-header >
     <ion-toolbar>
       <ion-title>Nuestra Selección</ion-title>
     </ion-toolbar>
   </ion-header>

   <ion-content>
    <ion-card>
        <img alt="Menu infantil" src="/public/Campero/MenuInfanil.png" />
        <ion-card-header>
        <ion-card-title>Men&uacute; Personal</ion-card-title>
        </ion-card-header>

        <ion-card-content>
        1 pieza de pollo , papas y una bebida de 12 oz.
        </ion-card-content>
    </ion-card>

    <ion-card>
        <img src="/public/Campero/MenuCampero.png" alt="Menu campero"/>
        <ion-card-header>
        <ion-card-title>Men&uacute; Campero</ion-card-title>
        </ion-card-header>

        <ion-card-content>
        Combo de 2 piezas Muslo y pierna, papas, bebida de 12 oz y 1 pan
        </ion-card-content>
    </ion-card>

    <ion-card>
        <img alt="Super Campero" src="/public/Campero/SuperMenu.png" />
        <ion-card-header>
        <ion-card-title>Super men&uacute; campero</ion-card-title>
        </ion-card-header>

        <ion-card-content>
        Combo de 3 piezas Pechuga, muslo y pierna , papas , ensaladas y bebida de 12 oz.
        </ion-card-content>
    </ion-card>
   </ion-content>
</ion-page>
</template>


<script>
import {IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonCard,
    IonCardContent,IonCardHeader,IonCardTitle} from '@ionic/vue'

export default{
    name:'CamperoView',
    components:{
        IonPage,IonHeader,IonToolbar,IonTitle,IonContent,
        IonCard,IonCardContent,IonCardHeader,IonCardTitle
    },
    
}
</script>

<style>

</style>