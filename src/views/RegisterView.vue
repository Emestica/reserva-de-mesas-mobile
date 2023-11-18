<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">

            <ion-card>
                <ion-card-header>
                    <ion-card-title class="ion-text-center">
                        Registro de Usuarios
                    </ion-card-title>
                </ion-card-header>

                <ion-card-content>

                    <ion-grid>

                        <ion-row>
                            <ion-col>
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
                                    v-model="register.email"
                                ></ion-input>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col>
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
                                    v-model="register.password"
                                ></ion-input>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col>
                                <ion-input 
                                    label="Nombres" 
                                    label-placement="floating" 
                                    fill="outline" 
                                    placeholder="Messi Ronaldo"
                                    color="primary"
                                    type="text"
                                    clear-input="true"
                                    maxlength="100"
                                    counter="true"
                                    v-model="register.name"
                                ></ion-input>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col>
                                <ion-input 
                                    label="Apellidos" 
                                    label-placement="floating" 
                                    fill="outline" 
                                    placeholder="Avieroz Dos Santos"
                                    color="primary"
                                    type="text"
                                    clear-input="true"
                                    maxlength="100"
                                    counter="true"
                                    v-model="register.last_name"
                                ></ion-input>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col>
                                <ion-input 
                                    label="Movil" 
                                    label-placement="floating" 
                                    fill="outline" 
                                    placeholder="7775-8990"
                                    color="primary"
                                    type="text"
                                    clear-input="true"
                                    maxlength="9"
                                    counter="true"
                                    v-model="register.movil"
                                ></ion-input>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col class="ion-text-center">
                                <ion-button button-type="button"  size="default" v-on:click="registerUser()">
                                    Registrar
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

import { 
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent, 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonButton,
    IonButtons,
    IonBackButton
} from "@ionic/vue";

import axios from "axios";

export default {
    name: 'RegisterView',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent, 
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonGrid,
        IonRow,
        IonCol,
        IonInput,
        IonButton,
        IonButtons,
        IonBackButton
    },
    data(){
        return {
            register: {
                name: null,
                last_name: null,
                movil: null,
                email: null,
                password: null
            }
        }
    },
    methods: {
        registerUser(){
            console.log('registerUser() => init');
            console.log(this.register);

            let myObject = {
                user: {
                    email: this.register.email,
                    password: this.register.password,
                    usuario_creacion: 'root'
                },
                person: {
                    nombres: this.register.name,
                    apellidos: this.register.last_name,
                    celular: this.register.movil
                }
            }

            axios.post('http://127.0.0.1:8000/api/mobile/register-user', myObject)
            .then(response => {
                console.log('registerUser() => response');
                console.log(response);

                if(response.data.success === true){

                    this.$router.push('/');
                } else {
                    console.log('registerUser() => error-controlado');
                    console.log(response);
                }
            }).catch(error => {
                console.log('registerUser() => error-no-controlado');
                console.log(error);
            });
            console.log('registerUser() => end');
        }
    }
}

</script>