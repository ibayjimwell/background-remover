<script>
    import Card from './components/Card.vue';

    export default {
        components: {
            Card
        }
    }
</script>

<template>
    <div class="flex flex-col md:flex-row gap-4 px-2 py-4 md:py-8 md:w-screen md:justify-center">
        <Card 
        title="Noteworthy technology acquisitions 2021"
        desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        buttonText="Continue"
        href="#"
        />
        <Card 
        title="Noteworthy technology acquisitions 2021"
        desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        buttonText="Login"
        href="#"
        />
    </div>
</template>