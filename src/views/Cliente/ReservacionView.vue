<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>RESERVACION</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle class="Title1">CREAR RESERVACION</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-item>

                  <ion-select label="Mesa" color="success" label-placement="stacked" clear-input="true" placeholder="Mesa"
                    v-model="reservacion.id_mesa">

                    <ion-select-option 
                      v-for="item in listadoMesas" 
                      :value="item.id_mesa">
                      
                      {{ item.mesa }}
                    </ion-select-option>

                  </ion-select>

                </ion-item>
                <br>
                <!--<ion-input label="Nombre" color="success" label-placement="stacked" maxlength="40" counter fill="outline"
                  shape="round" clear-input="true" placeholder="Nombre completo" required
                  v-model="reservacion.id_usuario_persona"></ion-input>
                <br>
                <ion-input label="Codigo Reservacion" color="success" label-placement="stacked" maxlength="8" counter
                  fill="outline" shape="round" clear-input="true" placeholder="Codigo" required
                  v-model="reservacion.codigo_reservacion"></ion-input>
                <br>-->
                <ion-input label="Fecha" color="success" label-placement="stacked" fill="outline" shape="round"
                  type="date" v-model="reservacion.fecha_reservacion"></ion-input>
                <br>

                <ion-label>Hora Inicio:</ion-label>
                <ion-datetime 
                  presentation="time" 
                  locale="es-ES"
                  v-model="reservacion.hora_inicio" 
                  hour-cycle="h24"
                  min="08:00:00" max="21:00:00"
                ></ion-datetime>

                <ion-label>Hora Fin:</ion-label>
                <ion-datetime 
                  presentation="time" 
                  locale="es-ES"
                  v-model="reservacion.hora_fin" 
                  hour-cycle="h24"
                  min="08:00:00" max="21:00:00"
                ></ion-datetime>

                <ion-input label="Nota" type="textarea" color="success" label-placement="stacked" rows="5" maxlength="255"
                  counter fill="outline" shape="round" clear-input="true" placeholder="Escriba su comentario aquí"
                  v-model="reservacion.notas"></ion-input>
                <!--<br>
                <ion-item>
                  <ion-select label="Estado" color="success" label-placement="stacked" clear-input="true"
                    placeholder="estado" v-model="reservacion.estado">
                    <ion-select-option value="A">A</ion-select-option>
                    <ion-select-option value="D">D</ion-select-option>
                  </ion-select>
                </ion-item>
                <br>
                <ion-input label="Correo" type="email" color="success" label-placement="stacked" maxlength="30" counter
                  fill="outline" shape="round" clear-input="true" v-model="reservacion.usuario_creacion"></ion-input>-->

                <br>
                <ion-button shape="round" color="success" expand="block" @click="Reservar"> <ion-icon slot="start"
                    :icon="checkmarkOutline"></ion-icon>
                  Agregar reserva
                </ion-button>
              </ion-col>

            </ion-row>

          </ion-grid>

        </ion-card-content>
      </ion-card>
      
      <ion-toast :duration="5000" :message="toastMessage" :is-open="toastState" @didDismiss="toastState = false"
        :icon="informationCircleOutline">
      </ion-toast>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from "axios";
import moment from "moment";

import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
  IonGrid, IonRow, IonCol, IonInput, IonItem, IonSelect, 
  IonButton, IonSelectOption, IonList, IonListHeader, 
  IonLabel, IonIcon, IonToast, IonDatetime
} from "@ionic/vue"

import { checkmarkOutline, informationCircleOutline } from "ionicons/icons"

export default {
  name: 'ReservacionView',
  components: {
    IonPage, IonHeader, IonToolbar, IonContent, IonCard,
    IonCardContent, IonCardHeader, IonCardSubtitle, IonTitle,
    IonGrid, IonRow, IonCol, IonInput, IonItem, IonSelect, 
    IonButton, IonSelectOption, IonList, IonListHeader, 
    IonLabel, IonIcon, IonToast, IonDatetime
  },
  data() {
    return {
      checkmarkOutline, 
      informationCircleOutline,

      // VARIABLE PARA LISTADO DE MESAS
      listadoMesas: [],

      // VARIABLE PARA PARAMETROS DEL AXIOS GET
      header:{
        params:{
          opcion: 1,
          estado: 'A',
          idrestaurante:  1
        }
      },

      //GUARDAR CONTENIDO DEL FORMULARIO
      reservacion: {},

      //Variable para controlar visilidad del toast
      toastState: false,

      //Variable para guardar el mensaje
      toastMessage: null
    }
  },
  methods: {
    Reservar() {
      this.reservacion.id_usuario_persona = 1;
      this.reservacion.usuario_creacion = 'root';
      
      let horaInicio = moment(this.reservacion.hora_inicio).format("HH:mm:ss");
      console.log(horaInicio);

      let horaFin = moment(this.reservacion.hora_fin).format("HH:mm:ss");
      console.log(horaFin);

      this.reservacion.hora_inicio = horaInicio;
      this.reservacion.hora_fin = horaFin;

      console.log(this.reservacion);

      //Peticion para insertar datos
      axios.post('http://127.0.0.1:8000/api/save-reservacion', this.reservacion)
      .then(response=>{
        console.log('Reservar() => response');
        console.log(response);
        if(response.data.success === true){
          this.toastState = true;
          this.toastMessage = response.data.data;
        }else{
          console.error('Reservar() => error-controlado');
          console.error(response.data.data);
        }
        this.reservacion ={}
      })
      .catch(error => {
        console.error('Reservar() => error-no-controlado');
        console.error(error);
      });
    },
    obtenerMesasPorIdRestaurante(){
      axios.get('http://127.0.0.1:8000/api/get-mesas', this.header)
      .then(response => {
        console.log(response);
        if(response.data.success === true){
          this.listadoMesas = response.data.data;
        }else{
          console.log('obtenerMesasPorIdRestaurante() => error-controlado: ');
          console.log(response.data.data);
        }
      })
      .catch(error => {
        console.log('obtenerMesasPorIdRestaurante() => error-no-controlado: ');
        console.error(error);
      });
    }
  },
  ionViewWillEnter(){
    this.obtenerMesasPorIdRestaurante();
  }
}
</script>

<style>

ion-title {
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

.Title1 {
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif

}

</style>