<template>

    <ion-page>

        <NavBar></NavBar>

        <ion-content>

            <div class="" style="background: rgba(255, 255, 255, 0.85);">

                <!-- HEADER PAGE -->
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-grid>
                                <ion-row>
                                    <h3 class="titlePage">UNE QUESTION ?</h3>
                                </ion-row>
                                <ion-row>
                                    <p class="sousTitlePage">Contactez-nous !</p>
                                </ion-row>
                            </ion-grid>
                        </ion-col>
                    </ion-row>
                </ion-grid>

                <ion-grid>
                    <ion-row>
                        <ion-col style="color: black; text-align: center;">
                            Adresse : 19 Rue Yves Toudic, 75010, Paris
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col style="color: black; text-align: center;">
                            Téléphone : 01 39 75 06 66
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col style="color: black; text-align: center;">
                            Email : elixir-paris@webstart.com
                        </ion-col>
                    </ion-row>
                </ion-grid>

                <!-- GOOGLE MAPS -->
                <Gmaps
                        :disableUI="true"
                        :zoom="12"
                        mapType="roadmap"
                        :center="{ lat: 48.87055, lng: 2.3631643 }">
                </Gmaps>

                <!-- Séparateur -->
                <hr style="background-color: black;">

                <!-- QUESTIONNAIRE -->
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-grid>
                                <ion-row>
                                    <h3 class="titlePage">OU POSEZ LA DIRECTEMENT !</h3>
                                </ion-row>
                            </ion-grid>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <ion-grid>
                    <ion-row style="border-radius: 5px;">
                        <ion-col>
                            <div class="loginDiv">
                                <ion-item>
                                    <ion-label position="stacked" style="--ion-font-family: 'Montserrat';">Nom</ion-label>
                                    <ion-input class="inputCustom"></ion-input>
                                </ion-item>

                                <ion-item>
                                    <ion-label position="stacked" style="--ion-font-family: 'Montserrat';">Prénom
                                    </ion-label>
                                    <ion-input class="inputCustom"></ion-input>
                                </ion-item>

                                <ion-item>
                                    <ion-label position="stacked" style="--ion-font-family: 'Montserrat';">Email</ion-label>
                                    <ion-input class="inputCustom"></ion-input>
                                </ion-item>

                                <ion-item>
                                    <ion-label position="stacked" style="--ion-font-family: 'Montserrat';">Objet
                                    </ion-label>
                                    <ion-input class="inputCustom"></ion-input>
                                </ion-item>

                                <ion-item>
                                    <ion-label position="stacked" style="--ion-font-family: 'Montserrat';">
                                        Contenu
                                    </ion-label>
                                    <ion-input class="inputCustom"></ion-input>
                                </ion-item>

                            </div>

                            <ion-button class="btnCustom" style="margin: 5px auto;" expand="full" color="primary">Envoyer
                            </ion-button>

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </div>

            <Footer></Footer>


        </ion-content>


    </ion-page>
</template>

<script>

    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'
    import Gmaps from '../components/Gmaps.vue'
    import {IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton, IonLabel, IonInput, IonItem} from "@ionic/vue";

    export default {
        components: {
            IonPage,
            NavBar,
            IonContent,
            IonGrid,
            IonRow,
            IonCol,
            IonButton,
            Footer,
            IonLabel,
            IonInput,
            IonItem,
            Gmaps
        },
    }

</script>