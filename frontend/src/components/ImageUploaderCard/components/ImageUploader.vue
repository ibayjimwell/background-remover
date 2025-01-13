<script>
    import RemoveButton from './RemoveButton.vue';
    import CancelButton from './CancelButton.vue';
    import ImageOutputCard from '../../ImageOutputCard/ImageOutputCard.vue';
    import axios from 'axios';

    export default {
        components: {
            RemoveButton,
            CancelButton,
            ImageOutputCard
        },
        data() {
            return {
                imageSrc: null,
                fileName: null,
                removing: false,
                isDragging: false,
                outputImgSrc: null
            }
        },
        methods: {

            // Handle drag-over event
            handleDragOver(event) {
                event.preventDefault();
                this.isDragging = true;
            },

            // Handle drag-leave event
            handleDragLeave() {
                this.isDragging = false;
            },

            // Handle file drop event
            handleFileDrop(event) {
                event.preventDefault();
                this.isDragging = false;

                const file = event.dataTransfer.files[0]; // Get the first file
                if (file) {
                    this.processFile(file);
                    this.$refs.fileInput.files = event.dataTransfer.files;
                }
            },

            // Common logic to process the file
            processFile(file) {
                this.imageSrc = URL.createObjectURL(file); // Create preview URL
                this.fileName = file.name; // Save file name
            },

            handleFileUploadChange(e) {
                const file = e.target.files[0];
                this.imageSrc = URL.createObjectURL(file);
                this.fileName = file.name
            },

            handleCancelClick() {
                this.imageSrc = null;
                this.fileName = null
            },

            handleFormSubmit() {
                this.removing = true;
                const formData = new FormData();
                formData.append('image', this.$refs.fileInput.files[0]);

                axios.post('/api/removebg', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    responseType: 'blob'
                    })
                    .then(response => {
                        const blob = new Blob([response.data], { type: 'image/png' });
                        const url = URL.createObjectURL(blob);
                        this.outputImgSrc = url;
                        this.imageSrc = null;
                        this.fileName = null;
                        this.removing = false;
                    })
                    .catch((error) => {
                        console.error("Error uploading the image:", error);
                        alert("Failed to upload the image. Please try again.");
                        this.removing = false;
                    });
            }
        }
    }
</script>

<template>
    <form class="w-full max-w-lg md:max-w-xl p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div 
        class="flex items-center justify-center w-full"
        @dragover.prevent="handleDragOver"
        @dragleave="handleDragLeave"
        @drop="handleFileDrop"
        :class="{ 'bg-gray-100 dark:bg-gray-600': isDragging }"
        >
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-72 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <div v-if="!imageSrc" class="flex flex-col items-center justify-center">
                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or WEBP</p>
                    </div>
                    <div v-else>
                        <div v-if="removing" class="relative top-36 z-20 flex flex-col items-center justify-center">
                            <div class="w-40 px-3 py-1 text-xs font-medium leading-none text-center text-primary-800 bg-primary-200 rounded-full animate-pulse dark:bg-primary-900 dark:text-primary-200">Removing...</div>
                        </div>
                        <img v-if="removing" class="w-screen h-72 animate-pulse" :src="imageSrc" alt="image">
                        <img v-else class="w-screen h-72" :src="imageSrc" alt="image">
                    </div>
                </div>
                <input 
                @change="handleFileUploadChange"
                id="dropzone-file" 
                type="file" 
                class="hidden"
                ref="fileInput"
                accept="image/png, image/jpeg, image/webp" />
            </label>
        </div>
        <figcaption v-if="fileName" class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{{ fileName }}</figcaption> 
        <div class="flex flex-col md:flex-row pt-4">
            <RemoveButton @click="handleFormSubmit" :isDisable="!(imageSrc && !removing)" :isLoading="removing"/>
            <CancelButton @click="handleCancelClick" :isDisable="!(imageSrc && !removing)"/>
        </div>
    </form>
    <ImageOutputCard v-if="outputImgSrc" :imageSrc="outputImgSrc" />
</template>