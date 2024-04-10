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
  data() {

  }
}
</script>

<template>
  <HeaderApp />
  <MainApp />
  <FooterApp />

</template>

<!-- qui non ci deve essere l'attributo scoped -->
<style lang="scss">
/* RESET */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Flex', sans-serif;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
  color: currentColor;
}

menu,
ul,
ol {
  list-style: none;
}

/* LAYOUT */

.container {
  width: 1000px;
  margin: 0 auto;
  padding: 15px 0;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-4 {
  width: calc(4 * 100% / 12);
}


/* HEADER */

header {
  background-color: #FE6900;
}

.menu_kind {
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
}

.menu_shop {
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;
}

.logo {
  max-height: 20px;
}

.row_header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}

/* MAIN */

.card__main {
  position: relative;
}

.card {
  padding: 15px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}

.card:hover .overlay {
  display: block;
}


.badge__discount {
  background-color: red;
  color: white;
  font-size: 15px;
  line-height: 25px;
  /* padding: 2px; */
  position: absolute;
  top: 85%;
  left: 0%;
  z-index: 999;
}


.badge__sustainability {
  background-color: green;
  color: white;
  font-size: 15px;
  line-height: 25px;
  padding: 2px;
  position: absolute;
  top: 85%;
  left: 15%;
  z-index: 999;
}

.badge__favorite {
  background-color: white;
  color: black;
  font-size: 30px;
  line-height: 30px;
  padding: 5px;
  position: absolute;
  top: 2%;
  right: 0%;
  z-index: 999;
}

.brand_name {
  font-size: 18px;
  font-weight: 100;
}

.item_name {
  font-size: 20px;
  text-decoration: double;
}

.price_real {
  font-weight: 100;
  font-size: 18px;
  text-decoration: line-through;
}

.price_discount {
  font-size: 18px;
  color: red;
}

/* FOOTER */

footer {
  background-color: #1A1A1A;
  color: white;
}

.row_footer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15px;
  padding: 15px;
}

.row-footer span {
  display: inline;
}


/* DEBUG */

.debug .container {
  border: 1px solid black;
  padding: 5px;
}

.debug .row {
  border: 1px solid red;
  padding: 5px;
}

.debug .col-4 {
  border: 1px solid green;
  padding: 5px;
  min-height: 100px;
}
</style>
