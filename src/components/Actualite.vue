<template>

    <ion-card class="cardActualite" style="background-image: url('assets/images/guitarlotof.jpg');">
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

</template>

<script>
    import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent } from '@ionic/vue';

    import { defineComponent } from 'vue';

    export default defineComponent({
        components: {
            IonCard,
            IonCardHeader,
            IonCardSubtitle,
            IonCardContent
        }
    });
</script>