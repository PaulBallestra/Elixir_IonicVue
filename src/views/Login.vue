<template>

    <ion-page style="background-color: rgba(255, 255, 255, 1);">

        <NavBar></NavBar>

        <ion-content>

            <!-- HEADER PAGE -->
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-grid style="margin-top: 22.5vh;">
                            <ion-row>
                                <h3 class="titlePage">LOGIN</h3>
                            </ion-row>
                        </ion-grid>
                        <div class="loginDiv" style="margin: auto; padding-bottom: 15px;">
                            <ion-item>
                                <ion-label position="stacked" style="--ion-font-family: 'Montserrat';">Email</ion-label>
                                <ion-input class="inputCustom"></ion-input>
                            </ion-item>

                            <ion-item>
                                <ion-label position="stacked" style="--ion-font-family: 'Montserrat';">Mot de passe</ion-label>
                                <ion-input class="inputCustom"></ion-input>
                            </ion-item>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>

        </ion-content>

    </ion-page>
</template>

<script>

    import NavBar from '../components/NavBar.vue'
    import { IonPage, IonGrid, IonRow, IonContent, IonLabel, IonInput, IonItem } from "@ionic/vue";

    export default {
        components: {
            IonPage,
            IonGrid,
            IonRow,
            IonContent,
            NavBar,
            IonLabel,
            IonInput,
            IonItem
        }

    }

</script>