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
                        <form @submit.prevent="login(form)" class="loginDiv">
                            <ion-item>
                                <ion-label position="stacked" style="--ion-font-family: 'Montserrat';">Email</ion-label>
                                <ion-input class="inputCustom" type="email" id="email" v-model="form.email"></ion-input>
                            </ion-item>

                            <ion-item>
                                <ion-label position="stacked" style="--ion-font-family: 'Montserrat';">Mot de passe</ion-label>
                                <ion-input type="password" class="inputCustom" id="password" v-model="form.password"></ion-input>
                            </ion-item>

                            <ion-button class="btnCustom" style="margin: 5px auto;" expand="full" type="submit" color="primary">Login</ion-button>

                        </form>


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

    import { mapActions } from 'vuex';

    export default {
        name: 'Login',
        data() {
            return {
                form: {}
            };
        },
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
        },
        methods: {
            ...mapActions({'login': 'auth/login'})
        }

    }

</script>