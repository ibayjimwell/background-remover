<script>
  import { RouterView } from 'vue-router';
  import Footer from './components/Footer/Footer.vue';
  import ThemeToggle from './components/ThemeToggle/ThemeToggle.vue';

  export default {
    components: {
      RouterView,
      Footer,
      ThemeToggle
    }
  }
</script>

<template>
    <RouterView />
    <ThemeToggle />
    <Footer />
</template>