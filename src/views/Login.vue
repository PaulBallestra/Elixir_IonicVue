<template>

    <ion-page>

        <!-- NAVBAR -->
        <NavBar></NavBar>

    </ion-page>
</template>

<script>

    import NavBar from "../components/NavBar.vue";
    import { IonPage } from "@ionic/vue";

    export default {
        components: {
            IonPage,
            NavBar,
        }

    }

</script>