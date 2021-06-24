<template>

    <ion-page>

        <NavBar></NavBar>

        <ion-content>

            <!-- HEADER PAGE -->
            <ion-grid style="background: rgba(255, 255, 255, 0.85);">
                <ion-row style="border-radius: 5px;">
                    <ion-col>
                        <ion-grid style="margin-top: 22.5vh;">
                            <ion-row>
                                <h3 class="titlePage" style="color: black;">LOGOUT</h3>
                            </ion-row>
                        </ion-grid>
                        <form @submit.prevent="logout" class="loginDiv">

                            <ion-button class="btnCustom" style="margin: 5px auto;" expand="full" type="submit" color="primary">Logout</ion-button>

                        </form>

                    </ion-col>
                </ion-row>
            </ion-grid>

            <Footer></Footer>

        </ion-content>

    </ion-page>
</template>

<script>

    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'
    import { IonPage, IonGrid, IonRow, IonContent, IonCol, IonButton } from "@ionic/vue";

    import { mapActions } from 'vuex';

    export default {
        name: 'Logout',
        data() {
            return {};
        },
        components: {
            IonPage,
            IonGrid,
            IonRow,
            IonContent,
            NavBar,
            IonCol,
            Footer,
            IonButton
        },
        methods: {
            ...mapActions({'logout': 'auth/logout'})
        }

    }

</script>