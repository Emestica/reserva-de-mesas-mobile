<template>
    <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons slot="end">
            <ion-button v-on:click="logOutUser()">
                <ion-icon :icon="logOutOutline"></ion-icon>
            </ion-button>
        </ion-buttons>
    </ion-toolbar>
</template>

<script>

import { 
    IonToolbar, 
    IonTitle, 
    IonButtons, 
    IonButton, 
    IonIcon 
} from '@ionic/vue';

import { logOutOutline } from 'ionicons/icons';

export default {
    name: 'ToolbarComponent',
    components: {
        IonToolbar,
        IonTitle,
        IonButtons,
        IonButton,
        IonIcon
    },
    props:{
        title: String
    },
    data(){
        return {
            logOutOutline,
        }
    },
    methods: {
        async logOutUser(){
            console.log('logOutUser() => init');
            await this.$storage.remove('user');
            await this.$storage.clear();
            this.$router.push('/');
            console.log('logOutUser() => end');
        }
    }
}

</script>