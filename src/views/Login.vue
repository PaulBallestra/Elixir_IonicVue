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
                                <h3 class="titlePage" style="color: black;">LOGIN</h3>
                            </ion-row>
                        </ion-grid>
                        <div class="loginDiv">
                            <ion-item>
                                <ion-label position="stacked" style="--ion-font-family: 'Montserrat';">Email</ion-label>
                                <ion-input class="inputCustom"></ion-input>
                            </ion-item>

                            <ion-item>
                                <ion-label position="stacked" style="--ion-font-family: 'Montserrat';">Mot de passe</ion-label>
                                <ion-input class="inputCustom"></ion-input>
                            </ion-item>

                        </div>

                        <ion-button class="btnCustom" style="margin: 5px auto;" expand="full" color="primary">Login</ion-button>

                        <p class="subButtonLabel" style="margin-bottom: 33vh;"> Mot de passe oublié ? </p>


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
    import { IonPage, IonGrid, IonRow, IonContent, IonCol, IonLabel, IonInput, IonItem, IonButton } from "@ionic/vue";

    export default {
        components: {
            IonPage,
            IonGrid,
            IonRow,
            IonContent,
            NavBar,
            IonLabel,
            IonInput,
            IonItem,
            IonCol,
            Footer,
            IonButton
        }

    }

</script>