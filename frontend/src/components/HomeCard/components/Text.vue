<script>
    export default {
        props: {
            href: String,
            title: String,
            desc: String
        }
    }
</script>

<template>
    <a :href="href">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ desc }}</p>
</template>