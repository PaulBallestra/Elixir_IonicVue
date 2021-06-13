<template>

    <ion-page>

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
            <ion-grid style="margin-bottom: 25px;">

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

                <ion-row class="serviceParagraphContent" style="margin-top: 75px;">
                    Selon vos besoin, deux abonnements sont disponibles. Tous les mois ou tous les ans. Chaque abonnement à ses spécificités.
                </ion-row>

                <!-- MONTHLY ABONNEMENT -->
                <ion-row style="margin-top: 15px;">
                    <ion-card style="margin: 0 auto;">
                        <ion-card-header style="padding: 15px 0;">
                            <ion-card-title class="ion-text-center">Mois</ion-card-title>
                        </ion-card-header>

                        <hr style="background-color: black; margin: 0;">

                        <ion-card-content style="padding: 0;">
                            <ion-grid>
                                <p class="serviceParagraphContent" style="padding: 10px 35px; color: black;">2x Elixir - Guitare Électrique</p>
                                <hr style="background-color: black; margin: 0;">
                                <p class="serviceParagraphContent" style="padding: 10px 35px; color: black;">2x Elixir - Basse Électrique</p>
                                <hr style="background-color: black; margin: 0;">
                                <p class="serviceParagraphContent" style="padding: 10px 35px; font-size: 1.25em; color: black;"> 24.99€ </p>
                                <ion-button class="btnCustom" expand="full" color="primary" fill="outline">S'abonner</ion-button>
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

                        <hr style="background-color: black; margin: 0;">

                        <ion-card-content style="padding: 0;">
                            <ion-grid>
                                <p class="serviceParagraphContent" style="padding: 10px 35px; color: black;">5x Elixir - Guitare Électrique</p>
                                <hr style="background-color: black; margin: 0;">
                                <p class="serviceParagraphContent" style="padding: 10px 35px; color: black;">3x Elixir - Basse Électrique</p>
                                <hr style="background-color: black; margin: 0;">
                                <p class="serviceParagraphContent" style="padding: 10px 35px; color: black;">2x Elixir - Banjo</p>
                                <hr style="background-color: black; margin: 0;">
                                <p class="serviceParagraphContent" style="padding: 10px 35px; color: black;">2x Elixir - Mandolin</p>
                                <hr style="background-color: black; margin: 0;">
                                <p class="serviceParagraphContent" style="padding: 10px 35px; font-size: 1.25em; color: black;"> 129.99€ </p>
                                <ion-button class="btnCustom" expand="full" color="primary" fill="outline">S'abonner</ion-button>
                            </ion-grid>
                        </ion-card-content>
                    </ion-card>

                </ion-row>


            </ion-grid>

            <Footer></Footer>

        </ion-content>



    </ion-page>
</template>

<script>

    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'
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
            IonButton,
            Footer
        }

    }

</script>