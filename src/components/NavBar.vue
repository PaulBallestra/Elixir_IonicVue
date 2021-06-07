<template>
    <ion-menu side="start" menu-id="first" content-id="main">
        <ion-header>
            <ion-toolbar color="white">
                <ion-img :src="logo.src">LOGO</ion-img>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>Actualités</ion-item>
                <ion-item>Service</ion-item>
                <ion-item>Contact</ion-item>
                <ion-item>Login</ion-item>
                <ion-item>Register</ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
    <ion-router-outlet id="main"></ion-router-outlet>
</template>

<script>
    import {
        IonContent,
        IonHeader,
        IonItem,
        IonList,
        IonMenu,
        IonRouterOutlet,
        IonToolbar,
        menuController
    } from '@ionic/vue';

    import { defineComponent } from 'vue';

    export default defineComponent({
        components: {
            IonContent,
            IonHeader,
            IonItem,
            IonList,
            IonMenu,
            IonRouterOutlet,
            IonToolbar
        },
        methods: {
            openFirst() {
                menuController.enable(true, 'first');
                menuController.open('first');
            },
            openEnd() {
                menuController.open('end');
            },
            openCustom() {
                menuController.enable(true, 'custom');
                menuController.open('custom');
            }
        },
        setup() {
            const logo = [{
                'text': 'ElixirLogo',
                'src': '../../public/assets/images/elixir_logo_white.png'
            }];
            return { logo }
        }
    });
</script>