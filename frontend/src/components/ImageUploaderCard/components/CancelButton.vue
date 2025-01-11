<script>
    export default {
        props: {
            isDisable: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<template>
    <button type="button" class="md:grow py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-primary-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" :disabled="isDisable">Cancel</button>
</template>