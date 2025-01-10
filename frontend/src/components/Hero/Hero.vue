<script>
    import Text from './components/Text.vue';
    import Button from './components/Button.vue';
    import Image from './components/Image.vue';

    export default {
        components: {
            Text,
            Button,
            Image
        }
    }
</script>

<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">

                <Text 
                title="Background Be Gone!
                Remove Backgrounds in a Snap!" 
                subtitle="Say goodbye to unwanted backgrounds and hello to professional-looking images. Our background remover app makes it easy to edit your photos and images in just a few clicks."
                />

                <Button 
                isPrimary 
                text="Continue"
                />
                <Button 
                :isPrimary="false"
                text="Login"
                />

            </div>
            <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"/>            
        </div>
    </section>
</template>