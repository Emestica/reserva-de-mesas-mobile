<template>
    <ion-page>
        <ion-header>
            <ToolbarComponent title="Perfil" ></ToolbarComponent>
        </ion-header>
        <ion-content class="ion-padding">

            <ion-card>

                <ion-card-header class="ion-text-center">
                    <ion-card-title>Datos Personales</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    <ion-grid>
                        <ion-row>
                            <ion-col size-md="6" size-sm="12" size-xs="12">
                                <ion-input 
                                    label="Correo" 
                                    label-placement="floating" 
                                    fill="outline" 
                                    placeholder="usuario@gmail.com"
                                    color="primary"
                                    type="email"
                                    clear-input="true"
                                    maxlength="150"
                                    counter="true"
                                    v-model="usuario.email">
                                </ion-input>
                            </ion-col>

                            <ion-col size-md="6" size-sm="12" size-xs="12">
                                <ion-input 
                                    label="Contrase&ntilde;a" 
                                    label-placement="floating" 
                                    fill="outline" 
                                    placeholder="**********"
                                    color="primary"
                                    type="password"
                                    clear-input="true"
                                    minlength="8"
                                    maxlength="25"
                                    counter="true"
                                    v-model="usuario.password">
                                </ion-input>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col size-md="6" size-sm="12" size-xs="12">
                                <ion-input 
                                    label="Nombres" 
                                    label-placement="floating" 
                                    fill="outline" 
                                    placeholder="Nombres"
                                    color="primary"
                                    type="text"
                                    maxlength="100"
                                    counter="true"
                                    v-model="usuario.nombres">
                                </ion-input>
                            </ion-col>
                            <ion-col size-md="6" size-sm="12" size-xs="12">
                                <ion-input 
                                    label="Apellidos" 
                                    label-placement="floating" 
                                    fill="outline" 
                                    placeholder="Apellidos"
                                    color="primary"
                                    type="text"
                                    maxlength="100"
                                    counter="true"
                                    v-model="usuario.apellidos">
                                </ion-input>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col size-md="6" size-sm="12" size-xs="12">

                                <ion-label>Fecha de nacimiento</ion-label>

                                <ion-datetime-button datetime="datetime"></ion-datetime-button>

                                <ion-modal :keep-contents-mounted="true">
                                    <ion-datetime id="datetime" presentation="date" locale="es-ES" v-model="usuario.fecha_nacimiento">
                                        <span slot="title">Seleccione su fecha de nacimiento</span>
                                    </ion-datetime>
                                </ion-modal>

                            </ion-col>
                            <ion-col size-md="6" size-sm="12" size-xs="12">
                                <ion-input 
                                    label="Edad" 
                                    label-placement="floating" 
                                    fill="outline" 
                                    placeholder="Ingrese su edad"
                                    color="primary"
                                    type="number"
                                    max="99"
                                    min="15"
                                    counter="true"
                                    v-model="usuario.edad">
                                </ion-input>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col size-md="6" size-sm="6" size-xs="12">
                                <ion-input 
                                    label="Celular" 
                                    label-placement="floating" 
                                    fill="outline" 
                                    placeholder="7775-8990"
                                    color="primary"
                                    type="text"
                                    maxlength="9"
                                    counter="true"
                                    v-model="usuario.celular"
                                ></ion-input>
                            </ion-col>

                            <ion-col size-md="6" size-sm="6" size-xs="12">
                                <ion-input 
                                    label="Telefono" 
                                    label-placement="floating" 
                                    fill="outline" 
                                    placeholder="2223-4090"
                                    color="primary"
                                    type="text"
                                    maxlength="9"
                                    counter="true"
                                    v-model="usuario.telefono"
                                ></ion-input>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col size-md="12" size-sm="12">

                                <ion-textarea 
                                    label="Dirreccion" 
                                    label-placement="floating"
                                    placeholder="Ingrese su dirreccion" 
                                    fill="outline"
                                    :counter="true"
                                    maxlength="250"
                                    type="text"
                                    :auto-grow="true"
                                    v-model="usuario.direccion">
                                </ion-textarea>

                            </ion-col>
                        </ion-row>
                        
                        <ion-item-divider></ion-item-divider>

                        <ion-row>
                            <ion-col class="ion-text-end">
                                <ion-button button-type="button"  size="default" v-on:click="updatePersonalInformation()">
                                    Actualizar
                                </ion-button>
                            </ion-col>
                        </ion-row>

                    </ion-grid>
                </ion-card-content>
            </ion-card>

            <ion-toast 
                :duration="toastDuration" 
                :message="toastMessage" 
                :is-open="toastState" 
                @didDismiss="toastState = false"
                :icon="informationCircleOutline">
            </ion-toast>
        </ion-content>
    </ion-page>
</template>

<script>

import axios from "axios";
import moment from "moment";

import { 
    IonPage, 
    IonHeader, 
    IonContent,
    IonCard, 
    IonCardHeader, 
    IonCardContent, 
    IonCardTitle, 
    IonGrid, 
    IonRow, 
    IonCol,
    IonLabel,
    IonInput,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonTextarea,
    IonItemDivider,
    IonToast,
    IonButton
} from "@ionic/vue";

import { informationCircleOutline } from "ionicons/icons";

import ToolbarComponent from "../../components/ToolbarComponent.vue";

export default {
    name: 'ProfileView',
    components: {
        IonPage, 
        IonHeader, 
        IonContent,
        IonCard, 
        IonCardHeader, 
        IonCardContent, 
        IonCardTitle, 
        IonGrid, 
        IonRow, 
        IonCol,
        IonLabel,
        IonInput,
        IonDatetime,
        IonDatetimeButton,
        IonModal,
        IonTextarea,
        IonItemDivider,
        IonButton,
        IonToast,
        ToolbarComponent
    },
    data(){
        return {
            informationCircleOutline,
            toastState: false,
            toastDuration: 5000,
            toastMessage: null,
            usuario: {
                email: null,
                password: null,
                nombres: null,
                apellidos: null,
                edad: null,
                fecha_nacimiento: null,
                telefono: null,
                celular: null,
                direccion: null
            },
        }
    },
    methods: {
        getPersonalInformation(id){
            console.log("getPersonalInformation() => init");

            axios.get(`http://127.0.0.1:8000/api/mobile/get-personal-information/${id}`)
            .then(response => {
                console.log('getPersonalInformation() => response');
                console.log(response);

                if(response.data.success === true){

                    this.usuario = {
                        email:       response.data.data.correo_electronico,
                        nombres:     response.data.data.nombres,
                        apellidos:   response.data.data.apellidos,
                        fecha_nacimiento: response.data.data.fecha_nacimiento,
                        edad:        response.data.data.edad,
                        telefono:    response.data.data.telefono,
                        celular:     response.data.data.celular,
                        direccion:   response.data.data.direccion,
                        usuario_modificacion: 'root',
                        id_persona: response.data.data.id_persona,
                        id_usuario: response.data.data.id_usuario
                    };

                    console.log(this.usuario);
                } else {
                    console.log('getPersonalInformation() => error-controlado');
                    console.log(response);

                    this.toastMessage = response.data.data;
                    this.toastState = true;
                }
            }).catch(error => {
                console.log('getPersonalInformation() => error-no-controlado');
                console.log(error);
            });
            console.log("getPersonalInformation() => end");
        },
        updatePersonalInformation(){
            console.log("updatePersonalInformation() => init");
            this.usuario.fecha_nacimiento = moment(this.usuario.fecha_nacimiento).format("YYYY-MM-DD");
            console.log(this.usuario);
            axios.put('http://127.0.0.1:8000/api/mobile/update-personal-information', this.usuario)
            .then(response => {
                console.log('updatePersonalInformation() => response');
                console.log(response);

                if(response.data.success === true){

                    this.toastMessage = response.data.data;
                    this.toastState = true;
                } else {
                    console.log('updatePersonalInformation() => error-controlado');
                    console.log(response);

                    this.toastMessage = response.data.data;
                    this.toastState = true;
                }
            }).catch(error => {
                console.log('updatePersonalInformation() => error-no-controlado');
                console.log(error);
            });
            console.log("updatePersonalInformation() => end");
        },
        async loadDataUserStorage(){
            console.log('loadDataUserStorage() => init');

            let strUser = await this.$storage.get('user').then(info => {
                console.log('loadDataUserStorage() => then promise');
                console.log(JSON.parse(info));
                let myObject = JSON.parse(info);
                this.getPersonalInformation(myObject.id_user_person);
            });

            console.log('loadDataUserStorage() => end');
        }
    },
    ionViewWillEnter(){
        this.loadDataUserStorage();
    }
}

</script>