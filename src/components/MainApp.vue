<script>
import CardApp from './CardApp.vue';
import dataProducts from '../assets/db.json';
import {store} from '../store';

export default {
    components: {
        CardApp,
    },
    data() {
        return {
            // products: dataProducts.products,
            store,
        }
    },
}

</script>

<template>
    <main>
        <div class="container container-sm container-xsm">
            <div class="row">
                <div class="col-4 col-6 col-12" v-for="(el, i) in store.products" key="i">
                    <CardApp :product="el" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.card__main {
    position: relative;
}

.card {
    padding: 15px;

    &:hover .overlay {
        display: block;
    }
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
}

.badge__discount {
    background-color: red;
    color: white;
    font-size: 15px;
    line-height: 25px;
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
</style>