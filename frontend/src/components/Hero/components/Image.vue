<script>
    export default {
        props: {
            src: String
        }
    }
</script>

<template>
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img :src="src" alt="mockup">
    </div>    
</template>