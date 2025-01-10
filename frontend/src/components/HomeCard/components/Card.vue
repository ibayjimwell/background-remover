<script>
    import Text from './Text.vue';
    import Button from './Button.vue';

    export default {
        props: {
            title: String,
            desc: String,
            buttonText: String,
            href: String,
        },
        components: {
            Text,
            Button
        }
    }
</script>

<template>
    <article class="max-w-lg md:max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow  hover:bg-primary-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <Text 
        :href="href" 
        :title="title"
        :desc="desc"
        />

        <Button 
        :href="href" 
        :text="buttonText"
        />

    </article>
</template>