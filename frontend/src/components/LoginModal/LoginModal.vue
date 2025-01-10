<script>
    import Forms from './components/Forms.vue';
    import Adds from './components/Adds.vue';
    import Button from './components/Button.vue';
    import CloseButton from './components/CloseButton.vue';

    export default {
        components: {
            Forms,
            Adds,
            Button,
            CloseButton
        },
        data() {
            return {
                isSignup: false
            }
        }
    }
</script>

<template> 
    <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        {{ isSignup ? 'Signup' : 'Login' }} to your account
                    </h3>
                    <CloseButton @click="isSignup = !isSignup" />
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5">
                    <form class="space-y-4">
                        <Forms :isSignup="isSignup"/>
                        <Adds v-if="!isSignup"/>
                        <Button :text="isSignup ? 'Sign up' : 'Login'" />
                        <div v-if="!isSignup" class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <a @click="isSignup = !isSignup" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> 
</template>