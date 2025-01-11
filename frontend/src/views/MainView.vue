<script>
    import ImageUploaderCard from '../components/ImageUploaderCard/ImageUploaderCard.vue';

    export default {
        components: {
            ImageUploaderCard
        }
    }
</script>

<template>
   <div class="flex flex-col md:flex-row md:flex-wrap gap-10 px-2 py-4 md:py-8 md:w-screen h-screen justify-center items-center">
       <ImageUploaderCard />
   </div>
</template>