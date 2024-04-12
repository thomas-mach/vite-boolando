<script>
export default {
    props: ['product'],


    // mounted() {
    //     console.log('Products:', this.);
    //     // O qualsiasi altra operazione che desideri eseguire con this.dataProducts.products
    // }

}
</script>

<template>
    <div class="col-4 col-6 col-12">
        <div class="card">

            <div class="card__main">
                <img src="{{ product.frontImage }}" alt="1.webp">
                <a href="#"><span class="badge__favorite">&hearts;</span></a>
                <span class="badge__discount">-50%</span>
                <span class="badge__sustainability">Sostenibilita</span>
                <div class="overlay">
                    <img src="../assets/1b.webp" alt="1b.webp">
                </div>
            </div>

            <div class="card__footer">
                <div class="brand_name">{{ product.brand }}</div>
                <div class="item_name">{{ product.name }}</div>
                <div class="price">
                    <span class="price_discount">{{ product.price }} &euro;</span>
                    <span class="price_real">29,99 &euro;</span>
                </div>
            </div>

        </div>
    </div>
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