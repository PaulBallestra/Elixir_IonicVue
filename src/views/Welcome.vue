<template>

    <ion-page>

        <NavBar></NavBar>

        <ion-content>

            <!-- SLIDER -->

            <ion-slides pager="true" :options="slideOpts">

                <ion-slide>
                    <ion-img style="height: 90vh; object-fit: cover;" src="assets/images/type_elixir.png"></ion-img>
                </ion-slide>
                <ion-slide>
                    <div class="divParentSlider">
                        <div class="child1">
                            <ion-card style="border-radius: 0px; background-color: rgba(0, 0, 0, 0.85);">
                                <ion-card-header>
                                    <ion-card-title class="titleStyleCard">
                                        ABONNEZ VOUS POUR RECEVOIR
                                        VOS CORDES ELIXIR
                                    </ion-card-title>
                                </ion-card-header>

                                <ion-card-content class="contentStyleCard">
                                    Nous vous enverrons des cordes en fonction
                                    de vos besoins et selon vos critères
                                    de musicien sous forme d'abonnement.
                                </ion-card-content>
                                <ion-button fill="outline" class="btnCustom" style="margin-bottom: 15px; border-radius: 2px;">EN SAVOIR PLUS</ion-button>
                            </ion-card>
                        </div>
                        <div class="child2">
                            <ion-img style="height: 90vh; object-fit: cover;" src="assets/images/string_elixir.png"></ion-img>
                        </div>
                    </div>
                </ion-slide>
                <ion-slide>
                    <ion-img style="height: 90vh; object-fit: cover;" src="assets/images/guitarlotof.jpg"></ion-img>
                </ion-slide>
            </ion-slides>

            <!-- INFOS -->
            <div style="background-color: white;">

                <ion-grid>

                    <ion-row>
                        <ion-col style="margin-top: 10px;">
                            <p class="titlePage ion-text-center" style="font-size: 1.5em; color: black;"> UN SON INCROYABLE QUI DURE </p>
                            <p class="sousTitlePage" style="font-size: 0.8em; color: black;">Les cordes Elixir ont une longévité sonore toujours inégalée par rapport a n'importe quelle autre corde du marché. Le son reste pur, concert après concert, record après record.</p>
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col style="margin: 15px 0;">
                            <p class="titlePage ion-text-center" style="font-size: 1.5em; color: black;"> UNE PERFORMANCE FIABLE </p>
                            <p class="sousTitlePage" style="font-size: 0.8em; color: black;">Les cordes Elixir peuvent resister à d'énormes écarts de température, voire aux pires conditions d'humidité. Nos cordes offrent une performance constante quel que soit l'environnement.</p>
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col style="margin: 15px 0;">
                            <p class="titlePage ion-text-center" style="font-size: 1.5em; color: black;"> UNE PLUS GRANDE STABILITÉ D'ACCORDAGE </p>
                            <p class="sousTitlePage" style="font-size: 0.8em; color: black;">Les musiciens affirment que les cordes Elixir restent accordées plus longtemps, évitant ainsi de devoir vous réaccorder sans arrêt.</p>
                        </ion-col>
                    </ion-row>

                </ion-grid>

            </div>


            <!-- ACTALITES -->
            <div>
                <div class="child1" style="position: relative; top: 0;">
                    <ion-card class="cardActualite">
                        <div style="background-color: rgba(0,0,0,0.85);">

                            <ion-card-header>
                                <ion-card-subtitle class="dateStyleCard">16/05/2021</ion-card-subtitle>
                                <h3 class="titleStyleCard">NOUVELLES CORDES 10-46</h3>
                            </ion-card-header>

                            <ion-card-content class="contentStyleCard">
                                Les nouvelles cordes Elixir 10 - 46 pour guitare électrique sont arrivées ! Le revêtement Elixir est toujours présent et vos cordes n'auront jamais tenu aussi longtemps.
                            </ion-card-content>

                            <p class="readContentStyleCard"> Lire la suite >> </p>

                        </div>
                    </ion-card>
                </div>
                <div class="child2">
                    <ion-img style="height: 90vh; object-fit: cover;" src="assets/images/guitarlotof.jpg"></ion-img>
                </div>
            </div>

            <!-- FOOTER -->
            <Footer></Footer>


        </ion-content>


    </ion-page>
</template>

<script>

    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'
    import { IonPage, IonSlides, IonSlide, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonContent, IonGrid, IonRow, IonCol, IonCardSubtitle } from "@ionic/vue";

    export default {
        components: {
            IonPage,
            NavBar,
            IonSlides,
            IonSlide,
            IonImg,
            IonCard,
            IonCardHeader,
            IonCardTitle,
            IonCardContent,
            IonButton,
            IonContent,
            IonGrid,
            IonRow,
            IonCol,
            IonCardSubtitle,
            Footer
        },
        setup() {
            // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
            const slideOpts = {
                initialSlide: 1,
                speed: 400
            };
            return { slideOpts }
        }

    }

</script>