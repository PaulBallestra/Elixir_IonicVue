<template>
    <ion-app style="background-image: url('assets/images/guitarlotof.jpg'); background-repeat: cover;">

      <ion-router-outlet/>

    </ion-app>
</template>

<script>

    import {IonApp, IonRouterOutlet} from '@ionic/vue';
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'App',
        components: {
            IonApp,
            IonRouterOutlet,
        }
    });
</script>