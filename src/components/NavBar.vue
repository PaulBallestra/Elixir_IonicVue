<template>

    <!-- HEADER -->
    <ion-header class="ion-no-border">
        <ion-toolbar>
            <router-link to="/" class="noDecoration"><ion-img style="height: 66px;" src="assets/images/elixir_logo_white.png"></ion-img></router-link>
        </ion-toolbar>
    </ion-header>

    <!-- NAVBAR -->
    <ion-menu side="start" menu-id="first" content-id="main">
        <ion-header>
            <ion-toolbar color="black">
                <router-link to="/" class="noDecoration"><ion-img style="height: 66px;" src="assets/images/elixir_logo_white.png"></ion-img></router-link>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <router-link to="/actualites" class="noDecoration"><ion-item class="montserrat">ACTUALITÉS</ion-item></router-link>
                <router-link to="/service" class="noDecoration"><ion-item class="montserrat">SERVICE</ion-item></router-link>
                <router-link to="/contact" class="noDecoration"><ion-item class="montserrat">CONTACT</ion-item></router-link>
                <router-link to="/login" class="noDecoration"><ion-item class="montserrat">LOGIN</ion-item></router-link>
                <router-link to="/register" class="noDecoration"><ion-item class="montserrat">REGISTER</ion-item></router-link>
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