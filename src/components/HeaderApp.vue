<script>
export default {

}
</script>

<template>
    <header>
        <section>
            <div class="container container-sm container-xsm">
                <div class="row_header">

                    <ul class="menu_kind">
                        <li><a class="ancora_style" href="#">Donna</a></li>
                        <li><a class="ancora_style" href="#">Uomo</a></li>
                        <li><a class="ancora_style" href="#">Bambini</a></li>
                    </ul>

                    <a href="#"><img class="logo" src="../assets/boolean-logo.png" alt="logo"></a>

                    <ul class="menu_shop">
                        <li><a class="ancora_style" href="#">&hearts;</a></li>
                        <li><a class="ancora_style" href="#">&hearts;</a></li>
                        <li><a class="ancora_style" href="#">&hearts;</a></li>
                    </ul>

                </div>
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>
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
</style>