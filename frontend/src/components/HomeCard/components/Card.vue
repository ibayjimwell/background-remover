<script>
    import Text from './Text.vue';
    import Button from './Button.vue';
    import LoginModal from '../../LoginModal/LoginModal.vue';
    import { RouterLink } from 'vue-router';

    export default {
        props: {
            title: String,
            desc: String,
            buttonText: String,
            isForLogin: {
                type: Boolean,
                default: false
            },
            href: String,
        },
        components: {
            Text,
            Button,
            LoginModal,
            RouterLink
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

        <RouterLink  v-if="!isForLogin" to="/main">
            <Button 
            :href="href" 
            :text="buttonText"
            />
        </RouterLink>

        <Button 
        v-else
        data-modal-target="authentication-modal" 
        data-modal-toggle="authentication-modal"
        :href="href" 
        :text="buttonText"
        />

        <LoginModal />

    </article>
</template>