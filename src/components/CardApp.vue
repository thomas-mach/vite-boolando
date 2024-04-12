<script>
export default {
    props: ['product'],
}
</script>

<template>

    <div class="card">

        <div class="card__main">
            <img :src="'/public/' + product.frontImage" alt="1.webp">
            <a href="#"><span class="badge__favorite">&hearts;</span></a>
            <ul class="badge_position">
                <li v-for="el in product.badges" :class="`badge--${el.type}`">{{ el.value }}</li>
            </ul>
            <div class="overlay">
                <img :src="'/public/' + product.backImage" alt="1.webp">
            </div>
        </div>

        <div class="card__footer">
            <div class="brand_name">{{ product.brand }}</div>
            <div class="item_name">{{ product.name }}</div>
            <div class="price">
                <span class="price_discount">29.99 &euro; </span>
                <span class="price_real">{{ product.price }} &euro;</span>
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

.badge_position {
    display: flex;
    position: absolute;
    gap: 5px;
    top: 85%;
    left: 0%;
    z-index: 999;
}

.badge--tag {
    background-color: green;
    color: white;
    font-size: 15px;
    line-height: 25px;

}

.badge--discount {
    order: -1;
    background-color: red;
    color: white;
    font-size: 15px;
    line-height: 25px;
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