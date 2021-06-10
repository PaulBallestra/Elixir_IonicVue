<template>

    <!-- HEADER -->
    <ion-header class="ion-no-border">
        <ion-toolbar>
            <ion-img style="height: 66px;" src="assets/images/elixir_logo_white.png"></ion-img>
        </ion-toolbar>
    </ion-header>

    <!-- NAVBAR -->
    <ion-menu side="start" menu-id="first" content-id="main">
        <ion-header>
            <ion-toolbar color="black">
                <ion-img style="height: 66px;" src="assets/images/elixir_logo_white.png"></ion-img>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <router-link to="/actualites" style="text-decoration: none;"><ion-item>Actualités</ion-item></router-link>
                <router-link to="/service" style="text-decoration: none;"><ion-item>Service</ion-item></router-link>
                <router-link to="/contact" style="text-decoration: none;"><ion-item>Contact</ion-item></router-link>
                <router-link to="/login" style="text-decoration: none;"><ion-item>Login</ion-item></router-link>
                <router-link to="/register" style="text-decoration: none;"><ion-item>Register</ion-item></router-link>
            </ion-list>
        </ion-content>
    </ion-menu>
    <ion-router-outlet id="main"></ion-router-outlet>
</template>

<script>
    import {
        IonToolbar,
        IonHeader,
        IonImg,
        IonContent,
        IonItem,
        IonList,
        IonMenu,
        IonRouterOutlet,
        menuController
    } from '@ionic/vue';

    import { defineComponent } from 'vue';

    export default defineComponent({
        components: {
            IonContent,
            IonToolbar,
            IonItem,
            IonHeader,
            IonList,
            IonImg,
            IonMenu,
            IonRouterOutlet,
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
        }
    });
</script>