<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>MIS RESERVACIONES</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="container">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-card>
                            <ion-card-header>
                                <ion-card-title>
                                    Mis Reservaciones
                                </ion-card-title>
                            </ion-card-header>
                            <ion-card-content>
                                <ion-list>
                                    <template v-for="item in ListaReservacion" :key="item.id_reservacion">
                                        <ion-item-sliding>
                                            <ion-item :button="true">
                                                <ion-icon slot="start" color="success" :icon="calendar"></ion-icon>
                                                <ion-label>Reservacion: {{ item.id_reservacion }}</ion-label>

                                                <ion-buttons slot="end">
                                                    <ion-button color="tertiary"
                                                        @click="showReservacion(item.id_reservacion, 1)">
                                                        <ion-icon slot="icon-only" :icon="eye"></ion-icon>
                                                    </ion-button>
                                                </ion-buttons>
                                            </ion-item>
                                        </ion-item-sliding>
                                    </template>

                                    <!--Mostrar un mensaje en caso de no tener reservaciones-->

                                    <ion-item v-if="ListaReservacion.length == 0">
                                        <ion-icon slot="start" :icon="closeCircle" color="danger"></ion-icon>
                                        <ion-label>No hay reservaciones</ion-label>
                                    </ion-item>


                                </ion-list>

                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
        <ion-modal :is-open="modalState" @didDismiss="modalState = false">
            <ion-header>
                <ion-toolbar>
                    <ion-title>
                        Informaci&oacute;n de la reservacion
                    </ion-title>
                    <ion-buttons slot="end">
                        <ion-button @click="modalState = false">
                            <ion-icon slot="icon-only" :icon="closeCircle"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <ion-list>
                    <ion-item>
                        <ion-icon slot="start" :icon="easel"></ion-icon>
                        <ion-label>{{ objetoReservacion.mesa }}</ion-label>
                    </ion-item>

                    <ion-item>
                        <ion-icon slot="start" :icon="calendarNumber"></ion-icon>
                        <ion-label>{{ objetoReservacion.fecha_reservacion }}</ion-label>
                    </ion-item>

                    <ion-item>
                        <ion-icon slot="start" :icon="time"></ion-icon>
                        <ion-label>{{ objetoReservacion.hora_inicio }}</ion-label>
                    </ion-item>

                    <ion-item>
                        <ion-icon slot="start" :icon="time"></ion-icon>
                        <ion-label>{{ objetoReservacion.hora_fin }}</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon slot="start" :icon="chatbox"></ion-icon>
                        <ion-label>{{ objetoReservacion.notas }}</ion-label>
                    </ion-item>

                </ion-list>
            </ion-content>
        </ion-modal>
    </ion-page>
</template>
<script>

import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCol,
    IonList,
    IonItemSliding,
    IonItem,
    IonIcon,
    IonLabel,
    IonItemOption,
    IonItemOptions,
    IonModal,
    IonButtons,
    IonButton
} from "@ionic/vue"
import axios from "axios"
import { calendar, eye, easel, closeCircle, time, checkmark, checkmarkOutline, informationCircleOutline, chatbox, calendarNumber } from "ionicons/icons"

export default {
    name: 'HistoricoView',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonGrid,
        IonRow,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonCol,
        IonList,
        IonItemSliding,
        IonItem,
        IonIcon,
        IonLabel,
        IonItemOption,
        IonItemOptions,
        IonModal,
        IonButtons,
        IonButton

    },
    data() {
        return {
            calendar,
            eye,
            easel,
            closeCircle,
            calendarNumber,
            time,
            checkmark,
            checkmarkOutline,
            informationCircleOutline,
            chatbox,


            //Variable para manejar un modal
            modalState: false,

            //variable/objeto
            reservacion: {},


            //Lista de reservacion
            ListaReservacion: [],

            ListaMesas: [],
            objetoReservacion: {},
            headerLoadData: {
                params: {
                    opcion: 1,
                    id_usuario_persona: 1
                }
            },
        }
    },
    methods: {
        loadData() {
            this.ListaReservacion = []
            axios.get('http://127.0.0.1:8000/api/get-reservaciones', this.headerLoadData)
            .then(response => {
                console.log(response);
                this.ListaReservacion = response.data.data;
            })
            .catch(error => {
                console.log('Ha ocurrido un error' + error);
            });
        },
        obtenerMesas() {
            axios.get('http://127.0.0.1:8000/api/get-mesas')
            .then(response => {
                this.listadoMesas = response.data.data;
            })
            .catch(error => console.log('Ha ocurrido un error' + error))
        },
        showReservacion(idReservacion, accion) {
            this.objetoReservacion = {};

            let encabezado = {
                params: {
                    opcion: 3,
                    id_reservacion: idReservacion,
                    id_usuario_persona: 1,
                }
            };

            axios.get(`http://127.0.0.1:8000/api/get-reservaciones`, encabezado)
            .then(response => {

                console.log("showReservacion() => response: ");
                console.log(response);

                if(response.data.success === true){
                    this.objetoReservacion = response.data.data;
                }else{
                    console.log("showReservacion() => error-controlado:");
                    console.log(response.data.data);
                }
            }).catch(error => {
                console.log("showReservacion() => error-no-controlado:");
                console.error(error);
            });

            if (accion == 1) {
                this.modalState = true;
            }
        },
    },
    //Se ejecuta a punto de moestrarse 
    ionViewDidEnter() {
        this.loadData();
        this.obtenerMesas();
    }
}
</script>