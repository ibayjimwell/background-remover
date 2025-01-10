<script>
  import { RouterView } from 'vue-router';
  import Footer from './components/Footer/Footer.vue';

  export default {
    components: {
      RouterView,
      Footer
    }
  }
</script>

<template>
    <RouterView />
    <Footer />
</template>