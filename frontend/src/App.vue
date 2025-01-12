<script>
  import { RouterView } from 'vue-router';
  import Footer from './components/Footer/Footer.vue';
  import ThemeToggle from './components/ThemeToggle/ThemeToggle.vue';
  import Loader from './components/Loader/Loader.vue';

  export default {
    components: {
      RouterView,
      Footer,
      ThemeToggle,
      Loader
    },
    data() {
      return {
        loading: true
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
</script>

<template>
    <Loader v-if="loading" />
    <RouterView />
    <Footer />
    <ThemeToggle />
</template>