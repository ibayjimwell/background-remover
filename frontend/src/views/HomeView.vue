<script>
    import { initFlowbite } from 'flowbite';
    import Hero from '../components/Hero/Hero.vue';
    import HomeCard from '../components/HomeCard/HomeCard.vue';

    export default {
        components: {
            Hero,
            HomeCard
        },
        mounted() {
            initFlowbite();
        }
    }
</script>

<template>
    <Hero />
    <HomeCard />
</template>