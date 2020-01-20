<template>
    <section class="goods">
        <div class="container">
            <h2 class="goods__header">CASSA</h2>
            <div class="goods__container">
                <Product
                        v-for="(product, idx) of allProducts"
                        :key="idx"
                        :product="product"
                />
            </div>
        </div>
    </section>
</template>

<script>
    import Product from './Product'
    export default {
        name: "Goods",
        components: {Product},
        computed: {
            allProducts(){
                return this.$store.getters.products
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    .goods{
        padding-top: 158px;
        padding-bottom: 107px;
        background-image: url('../img/bg-goods.jpg');
        background-size: cover;
    }
    .goods__header{
        font-size: 4.8rem;
        text-transform: uppercase;
        color: #ffffff;
        text-align: center;
        font-family: 'Evogria', sans-serif;
        margin-bottom: 72px;
    }
    .goods__container{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 10px;
    }
    .product{
        margin: 0 10px;
        &:nth-child(1){
            .product__img-link-wrapper:after{
                background-image: url('../img/wood-1.png');
                left: -10px;
            }
        }
        &:nth-child(2){
            .product__img-link-wrapper:after{
                background-image: url('../img/wood-2.png');
            }
        }
        &:nth-child(3){
            .product__img-link-wrapper:after{
                background-image: url('../img/wood-3.png');
            }
        }
        &:nth-child(4){
            .product__img-link-wrapper:after{
                background-image: url('../img/wood-4.png');
                right: -10px;
            }
        }
    }
</style>
