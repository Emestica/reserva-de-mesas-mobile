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
    placeholder="Mesa"
    v-model="reservacion.id_mesa">
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
    v-model="reservacion.id_usuario_persona"
    ></ion-input>
    <br>
    <ion-input
    label="Codigo Reservacion"
    color="success"
    label-placement="stacked"
    maxlength="8"
    counter
    fill="outline"
    shape="round"
    clear-input="true"
    placeholder="Codigo"
    required
    v-model="reservacion.codigo_reservacion"
    ></ion-input>
    <br>
    <ion-input
    label="Fecha"
    color="success"
    label-placement="stacked"
    fill="outline"
    shape="round"
    type="date"
    v-model="reservacion.fecha_reservacion"
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
    v-model="reservacion.hora_inicio"
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
    v-model="reservacion.hora_fin"
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
    placeholder="Escriba su comentario aquí"
    v-model="reservacion.nota"

></ion-input>
<br>
<ion-item>
    <ion-select 
    label="Estado"
    color="success"
    label-placement="stacked"
    clear-input="true"
    placeholder="estado"
    v-model="reservacion.estado"> 
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
  v-model="reservacion.usuario_creacion"

></ion-input>
    
    <br>
    <ion-button
    shape="round"
    color="success"
    expand="block"
    @click="Reservar"
    > <ion-icon slot="start" :icon="checkmarkOutline"></ion-icon>
    Agregar reserva
    </ion-button>
            </ion-col>

        </ion-row>

    </ion-grid>

    </ion-card-content>
  </ion-card>
  <br>
  <h1>Mis Reservaciones</h1>
  <ion-row>
  
    <ion-col>
        <ion-card>
    <ion-card-header>
      <ion-card-subtitle>RESERVACIONES</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
        <ion-list>
    <ion-list-header>
      <ion-label>Codigo Reservacion: RES0002</ion-label>
    </ion-list-header>
    <ion-item>
      <ion-label>Mesa: </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Nombre: </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Codigo Reservacion: </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Fecha: </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Hora Inicio: </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Hora Salida: </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Nota: </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Estado: </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Correo: </ion-label>
    </ion-item>
  </ion-list>
    </ion-card-content>
  </ion-card>
        
    </ion-col>

  </ion-row>
  <ion-toast
  :duration="2500"
  :message="toastMessage"
  :is-open="toastState"
  @didDismiss="toastState=false"
  :icon="informationCircleOutline">

  </ion-toast>
         </ion-content>
       
 


    </ion-page>
</template>

<script>
import axios from "axios"
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
        IonCard, IonCardContent,IonCardHeader, IonCardSubtitle,
        IonGrid, IonRow,IonCol,IonInput,IonItem,IonSelect,IonButton,IonSelectOption,IonList,IonListHeader,IonLabel,IonIcon,IonToast
} from "@ionic/vue"
import{checkmarkOutline, informationCircleOutline} from "ionicons/icons"
export default{
    name:'ReservacionView',
    components:{
        IonPage, IonHeader, IonToolbar,IonContent, IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonTitle, IonGrid,
        IonRow,IonCol,IonInput,IonItem,IonSelect,IonButton,IonSelectOption,IonList,IonListHeader,IonLabel,IonIcon,IonToast

    },
    data(){
        return{
            checkmarkOutline,informationCircleOutline,

            //GUARDAR CONTENIDO DEL FORMULARIO
            reservacion:{},
            //Variable para controlar visilidad del toast
            toastState:false,
            //Variable para guardar el mensaje
            toastMessage:null

        }
    },
    methods:{
        Reservar(){
            console.log(this.reservcion);
            //Peticion para insertar datos
            axios.post('http://127.0.0.1:8000/api/save-reservacion', this.reservacion)
            .then(response=>{
                let res = response.data
                this.reservacion ={}
                if(res.code==200){
                    this.toastState =true
                    this.toastMessage =res.data
                }
            })
            .cath(error=>console.log('Ha ocurrido un error'+error))
        }
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