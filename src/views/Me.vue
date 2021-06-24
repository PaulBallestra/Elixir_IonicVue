<template>

    <ion-page>

        <NavBar></NavBar>

        <ion-content>

            <!-- HEADER PAGE -->
            <ion-grid style="background: rgba(255, 255, 255, 0.85);">
                <ion-row style="border-radius: 5px;">
                    <ion-col>
                        <ion-grid style="margin-top: 10vh;">
                            <ion-row>
                                <h3 class="titlePage" style="color: black;">PROFIL</h3>
                            </ion-row>
                        </ion-grid>
                        <div class="loginDiv">
                            <ion-item>
                                <ion-label position="stacked" style="--ion-font-family: 'Montserrat';">Nom : {{ user }}</ion-label>
                            </ion-item>

                            <ion-item>
                                <ion-label position="stacked" style="--ion-font-family: 'Montserrat';">Prénom</ion-label>
                            </ion-item>

                            <ion-item>
                                <ion-label position="stacked" style="--ion-font-family: 'Montserrat';">Email</ion-label>
                            </ion-item>

                        </div>

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
    import { IonPage, IonGrid, IonRow, IonContent, IonCol, IonLabel, IonItem } from "@ionic/vue";

    import { mapGetters} from 'vuex';

    export default {
        data(){
            return {};
        },
        components: {
            IonPage,
            IonGrid,
            IonRow,
            IonContent,
            NavBar,
            IonLabel,
            IonItem,
            IonCol,
            Footer,
        },
        computed: {
            ...mapGetters({'user': 'auth/user'})
        }

    }

</script>