<script>
// primo passaggio imporare il componente
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';
export default {
  // secondo passaggio registrare il componente
  components: {
    HeaderApp,
    MainApp,
    FooterApp,
  },
}
</script>

<template>
  <HeaderApp />
  <MainApp />
  <FooterApp />

</template>

<!-- qui non ci deve essere l'attributo scoped -->
<style lang="scss">
@use './style/generals';
</style>
