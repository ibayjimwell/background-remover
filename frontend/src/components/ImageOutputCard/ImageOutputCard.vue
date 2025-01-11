<script>
    import DownloadButton from './components/DownloadButton.vue';

    export default {
        components: {
            DownloadButton
        },
        props: {
            imageSrc: String
        }, 
        methods: {
            handleDownloadClick() {
                const link = document.createElement('a');
                link.download = `${this.imageSrc.split('/').pop().split('?')[0]}.png`;
                link.href = this.imageSrc;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
</script>

<template>
    <div>       
        <figure class="max-w-lg">
            <img class="h-auto max-w-full rounded-lg" :src="imageSrc" alt="image">
        </figure>
        <DownloadButton @click="handleDownloadClick" />
    </div>
</template>