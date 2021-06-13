<template>
    <ion-page>

        <NavBar></NavBar>

        <ion-content>

            <div class="contentPage" style="background: rgba(255, 255, 255, 0.85);">

                <!-- HEADER PAGE -->
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-grid>
                                <ion-row>
                                    <h3 class="titlePage">NOUVELLES CORDES 10-46</h3>
                                </ion-row>
                                <ion-row>
                                    <p class="sousTitlePage" style="font-style: italic; font-family: 'Montserrat Light'">16/05/2021</p>
                                </ion-row>
                                <ion-row style="margin-top: 25px;">
                                    <p class="sousTitlePage"> Les nouvelles cordes Elixir 10 - 46 pour guitare électrique sont arrivées ! Le revêtement Elixir est toujours présent et vos cordes n'auront jamais tenu aussi longtemps. </p>
                                </ion-row>
                            </ion-grid>
                        </ion-col>
                    </ion-row>
                </ion-grid>

                <!-- CONTENU DE L'ACTU -->
                <div style="padding: 10px;">

                    <p class="currentActualiteContent"> - Les cordes Elixir, numéro 1 des ventes de cordes pour guitares acoustiques aux Etats-Unis </p>
                    <p class="currentActualiteContent"> - La seule marque de cordes gainées qui protège l’intégralité de la corde avec un revêtement ultra-fin,
                        empêchant la saleté de s’incruster dans les creux du filet </p>
                    <p class="currentActualiteContent"> -  Une durée de vie sonore accrue – les utilisateurs nous rapportent que leur son dure plus longtemps,
                        qu’avec n’importe quel autre type de corde, avec ou sans revêtement </p>
                    <p class="currentActualiteContent"> - Un jeu et un son consistant – prêtes à être jouées à tout moment et dans toutes les conditions </p>
                    <p class="currentActualiteContent"> - Un toucher doux et agréable qui facilite la jouabilité. </p>
                    <p class="currentActualiteContent"> - Diminue les bruits de doigts – un atout pour la scène et le studio. </p>
                    <p class="currentActualiteContent"> - Les cordes pleines en acier plaqué Anti-Rust résistent à la corrosion afin de
                        préserver votre son, assurant une durée de vie plus longue pour l’intégralité de votre jeu. </p>
                    <p class="currentActualiteContent"> - Passez plus de temps à jouer et moins de temps à changer vos cordes, tout en faisant des économies </p>

                </div>

            </div>

            <Footer></Footer>

        </ion-content>


    </ion-page>
</template>

<script>

    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'
    import {IonPage, IonContent, IonGrid, IonRow, IonCol } from "@ionic/vue";

    export default {
        components: {
            IonPage,
            NavBar,
            IonContent,
            IonGrid,
            IonRow,
            IonCol,
            Footer
        }

    }

</script>