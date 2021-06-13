<template>
    <ion-page>

        <NavBar></NavBar>

        <ion-content>

            <div class="contentPage">

                <!-- HEADER PAGE -->
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-grid>
                                <ion-row>
                                    <h3 class="titlePage">ACTUALITÉS</h3>
                                </ion-row>
                                <ion-row>
                                    <p class="sousTitlePage">Retrouvez toutes nos actualités par date de sortie.</p>
                                </ion-row>
                            </ion-grid>
                        </ion-col>
                    </ion-row>
                </ion-grid>

                <ion-grid>

                    <ion-row>
                        <Actualite></Actualite>
                    </ion-row>
                    <ion-row>
                        <Actualite></Actualite>
                    </ion-row>
                    <ion-row>
                        <Actualite></Actualite>
                    </ion-row>
                    <ion-row>
                        <Actualite></Actualite>
                    </ion-row>
                    <ion-row>
                        <Actualite></Actualite>
                    </ion-row>

                </ion-grid>
            </div>

            <Footer></Footer>

        </ion-content>


    </ion-page>
</template>

<script>

    import NavBar from '../components/NavBar.vue'
    import Actualite from '../components/Actualite.vue'
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
            Actualite,
            Footer
        }

    }

</script>