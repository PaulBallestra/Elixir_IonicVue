<template>

    <ion-page style="background-color: rgba(255, 255, 255, 1);">

        <NavBar></NavBar>

        <ion-content>

            <!-- HEADER PAGE -->
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-grid>
                            <ion-row>
                                <h3 class="titlePage">SERVICE</h3>
                            </ion-row>
                            <ion-row>
                                <p class="sousTitlePage">Notre service vous permet de précommander des cordes Elixir, selon vos besoins (mois ou année).</p>
                            </ion-row>
                        </ion-grid>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <!-- CONTENT DE LA PAGE -->
            <ion-grid>

                <ion-row>
                    <img src="assets/images/blue_elixir (2).png" style="padding: 0 35px; margin-top: 15px;"/>
                </ion-row>

                <ion-row class="serviceParagraphContent">

                    Choisissez votre tirant en fonction
                    de vos habitudes. Plusieurs tirants
                    sont disponibles que ce soit
                    sur guitare électrique,
                    basse électrique, banjo ou mandolin.

                </ion-row>

                <!-- MONTHLY ABONNEMENT -->
                <ion-row style="margin-top: 75px;">
                    <ion-card style="margin: 0 auto;">
                        <ion-card-header style="padding: 15px 0;">
                            <ion-card-title class="ion-text-center">Mois</ion-card-title>
                        </ion-card-header>

                        <hr style="background-color: white; margin: 0;">

                        <ion-card-content style="padding: 0;">
                            <ion-grid>
                                <p class="serviceParagraphContent" style="padding: 10px 35px;">2x Elixir - Guitare Électrique</p>
                                <hr style="background-color: white; margin: 0;">
                                <p class="serviceParagraphContent" style="padding: 10px 35px;">2x Elixir - Basse Électrique</p>
                                <hr style="background-color: white; margin: 0;">
                                <p class="serviceParagraphContent" style="padding: 10px 35px; font-size: 1.25em;"> 24.99€ </p>
                                <ion-button class="btnCustom" expand="full" color="primary">S'abonner</ion-button>
                            </ion-grid>
                        </ion-card-content>
                    </ion-card>

                </ion-row>

                <!-- YEARLY ABONNEMENT -->
                <ion-row>

                    <ion-card style="margin: 15px auto 0px auto;">
                        <ion-card-header style="padding: 15px 0;">
                            <ion-card-title class="ion-text-center">Ans</ion-card-title>
                        </ion-card-header>

                        <hr style="background-color: white; margin: 0;">

                        <ion-card-content style="padding: 0;">
                            <ion-grid>
                                <p class="serviceParagraphContent" style="padding: 10px 35px;">5x Elixir - Guitare Électrique</p>
                                <hr style="background-color: white; margin: 0;">
                                <p class="serviceParagraphContent" style="padding: 10px 35px;">3x Elixir - Basse Électrique</p>
                                <hr style="background-color: white; margin: 0;">
                                <p class="serviceParagraphContent" style="padding: 10px 35px;">2x Elixir - Banjo</p>
                                <hr style="background-color: white; margin: 0;">
                                <p class="serviceParagraphContent" style="padding: 10px 35px;">2x Elixir - Mandolin</p>
                                <hr style="background-color: white; margin: 0;">
                                <p class="serviceParagraphContent" style="padding: 10px 35px; font-size: 1.25em;"> 129.99€ </p>
                                <ion-button class="btnCustom" expand="full" color="primary">S'abonner</ion-button>
                            </ion-grid>
                        </ion-card-content>
                    </ion-card>

                </ion-row>

                <ion-row class="serviceParagraphContent" style="margin-top: 25px;">
                    Selon vos besoin, deux abonnements sont disponibles. Tous les mois ou tous les ans. Chaque abonnement à ses spécificités.
                </ion-row>


            </ion-grid>

        </ion-content>

    </ion-page>
</template>

<script>

    import NavBar from '../components/NavBar.vue'
    import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from "@ionic/vue";

    export default {
        components: {
            IonPage,
            NavBar,
            IonContent,
            IonGrid,
            IonRow,
            IonCol,
            IonCard,
            IonCardHeader,
            IonCardContent,
            IonCardTitle,
            IonButton
        }

    }

</script>