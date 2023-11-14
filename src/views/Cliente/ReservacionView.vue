<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Reservacion</ion-title>
            </ion-toolbar>
        </ion-header>
         <ion-content class="ion-padding">
            <ion-card>
                <ion-card-header>
      <ion-card-subtitle>CREAR RESERVACION</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
    <ion-grid>
        <ion-row>
            <ion-col>
        <ion-item>
            <ion-select 
    label="Mesa"
    color="success"
    label-placement="stacked"
    clear-input="true"
    placeholder="Mesa">
     <ion-select-option value="Mesa #1">Mesa #1</ion-select-option>
     <ion-select-option value="Mesa #2">Mesa #2</ion-select-option>
     <ion-select-option value="Mesa #3">Mesa #3</ion-select-option>
     <ion-select-option value="Mesa #4">Mesa #4</ion-select-option>
     <ion-select-option value="Mesa #5">Mesa #5</ion-select-option>
     
    </ion-select>
     </ion-item>
    <br>
    <ion-input
    label="Nombre"
    color="success"
    label-placement="stacked"
    maxlength="40"
    counter
    fill="outline"
    shape="round"
    clear-input="true"
    placeholder="Nombre completo"
    required
    ></ion-input>
    <br>
    <ion-input
    label="Fecha"
    color="success"
    label-placement="stacked"
    fill="outline"
    shape="round"
    type="date"
    ></ion-input>
    <br>
    <ion-input
    label="Hora Inicio"
    color="success"
    label-placement="stacked"
    counter
    fill="outline"
    shape="round"
    clear-input="true"
    type="time"
    min="08:00"
    max="20:00"
    ></ion-input>
    <br>
    <ion-input
    label="Hora Salida"
    color="success"
    label-placement="stacked"
    counter
    fill="outline"
    shape="round"
    clear-input="true"
    type="time"
    max="9:00"
    required
    ></ion-input>
    <br>

    <ion-input
    label="Nota"
    type="textarea"
    color="success"
    label-placement="stacked"
    rows="5"
    maxlength="255"
    counter
    fill="outline"
    shape="round"
    clear-input="true"
    placeholder="Escriba su comentario aquí
    "

></ion-input>
<br>
<ion-item>
    <ion-select 
    label="Estado"
    color="success"
    label-placement="stacked"
    clear-input="true"
    placeholder="estado"> 
    <ion-select-option value="A">A</ion-select-option>
    <ion-select-option value="D">D</ion-select-option>
    </ion-select>
     </ion-item>
    <br>
<ion-input
  label="Correo"
  type="email"
  color="success"
  label-placement="stacked"
  maxlength="30"
  counter
  fill="outline"
  shape="round"
  clear-input="true"

></ion-input>
    
    <br>
    <ion-button
    shape="round"
    color="success"
    expand="block">
    Agregar reserva
    </ion-button>
            </ion-col>

        </ion-row>

    </ion-grid>
    </ion-card-content>
  </ion-card>
         </ion-content>
       
 


    </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
        IonCard, IonCardContent,IonCardHeader, IonCardSubtitle,
        IonGrid, IonRow,IonCol,IonInput,IonItem,IonSelect,IonButton
} from "@ionic/vue"
export default{
    name:'ReservacionView',
    components:{
        IonPage, IonHeader, IonToolbar,IonContent, IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonTitle, IonGrid,
        IonRow,IonCol,IonInput,IonItem,IonSelect,IonButton

    }
}


</script>


<style>
ion-title{
    text-align: center;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
ion-card-subtitle{
    text-align: center;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}


</style>