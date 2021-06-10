<template>

    <ion-page>

        <NavBar></NavBar>


        <ion-content>

            <ion-title class="oswald">Service</ion-title>

        </ion-content>

    </ion-page>
</template>

<script>

    import NavBar from '../components/NavBar.vue'
    import { IonPage, IonContent, IonTitle } from "@ionic/vue";

    export default {
        components: {
            IonPage,
            NavBar,
            IonContent,
            IonTitle
        }

    }

</script>