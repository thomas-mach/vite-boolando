<script>
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';
import axios from 'axios';
import { store } from './store.js';


export default {
  components: {
    HeaderApp,
    MainApp,
    FooterApp,
  },
  methods: {
    fetchProducts() {
      axios.get('http://localhost:3000/products').then((res) => {
        store.products = res.data
        console.log(res.data)

      })

    }

  },
  created() {
    this.fetchProducts()
  }
}
</script>

<template>
  <HeaderApp />
  <MainApp />
  <FooterApp />
</template>

<style lang="scss">
@use './style/generals';
</style>
