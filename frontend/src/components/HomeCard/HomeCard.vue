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
        title="Continue to background remover app"
        desc="If you want to remove the background without saving the image and just download it click continue ."
        buttonText="Continue"
        href="#"
        />
        <Card 
        title="Login to your account"
        desc="If you want to have saving features when removing the background you need to Login or Signup."
        buttonText="Login"
        isForLogin
        href="#"
        />
    </div>
</template>