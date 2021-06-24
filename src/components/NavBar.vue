<template>

    <!-- HEADER -->
    <ion-header class="ion-no-border">
        <ion-toolbar style="--background: rgba(0, 0, 0, 0.95);">
            <router-link to="/" class="noDecoration"><ion-img style="height: 66px;" src="assets/images/elixir_logo_white.png"></ion-img></router-link>
        </ion-toolbar>
    </ion-header>

    <!-- NAVBAR -->
    <ion-menu side="start" menu-id="first" content-id="main">
        <ion-header>
            <ion-toolbar color="black" >
                <router-link to="/" class="noDecoration"><ion-img style="height: 66px;" src="assets/images/elixir_logo.png"></ion-img></router-link>
            </ion-toolbar>
        </ion-header>
        <ion-content >
            <ion-list>
                <router-link to="/actualites" class="noDecoration"><ion-item class="montserrat">ACTUALITÉS</ion-item></router-link>
                <router-link to="/service" class="noDecoration"><ion-item class="montserrat">SERVICE</ion-item></router-link>
                <router-link to="/contact" class="noDecoration"><ion-item class="montserrat">CONTACT</ion-item></router-link>
                <router-link v-if="user" to="/api/subscriptions" class="noDecoration"><ion-item class="montserrat">ABONNEMENT</ion-item></router-link>
                <router-link v-if="user" to="/api/auth/me" class="noDecoration"><ion-item class="montserrat">PROFIL</ion-item></router-link>
                <router-link v-if="user" @click.prevent="logout" to="/api/auth/logout" class="noDecoration"><ion-item class="montserrat">LOGOUT</ion-item></router-link>
                <router-link v-if="!user" to="/api/auth/login" class="noDecoration"><ion-item class="montserrat">LOGIN</ion-item></router-link>
                <router-link v-if="!user" to="/api/auth/register" class="noDecoration"><ion-item class="montserrat">REGISTER</ion-item></router-link>
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
    import { mapGetters, mapActions } from 'vuex';

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
        data() {
            return {};
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
            },
            ...mapActions({'logout': 'auth/logout'})
        },
        computed: {
            ...mapGetters({'user': 'auth/user'})
        }
    });
</script>