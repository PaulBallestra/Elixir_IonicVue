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
            <div class="">

            </div>

            UN SON INCROYABLE QUI DURE

        </ion-content>


    </ion-page>
</template>

<script>

    import NavBar from '../components/NavBar.vue'
    import { IonPage, IonSlides, IonSlide, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonContent } from "@ionic/vue";

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
            IonContent
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