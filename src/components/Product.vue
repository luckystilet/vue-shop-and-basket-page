<template>
    <div class="product">
        <h5 class="product__title">
            <a href="">
                {{product.title}}
            </a>
        </h5>
        <div class="product__img-link-wrapper">
            <a href="#" class="product__img-link">
                <img :src="product.img" :alt="product.title" class="product__img">
            </a>
        </div>
        <div class="product__descr">
            <div class="product__disscount">OFFERTA LIMITATA <span>-{{product.discount}}%</span></div>
            <div class="product__price">
            <span class="product__price-current">
                <span class="product__price-currency">$</span>
                <span class="product__price-value">{{product.price}}</span>
            </span>
                <span class="product__price-old">
                <span class="product__price-old-value">{{product.oldPrice}} </span>
                <span class="product__price-old-currency">$</span>
            </span>
            </div>
            <div class="product__order">
                <dropdown
                    :options="arrayOfObjects"
                    :selected="basketAmount"
                    @updateOption="handler($event)"
                ></dropdown>
                <button
                    class="product__basket"
                    @mousedown="openBasketPopup"
                ></button>
            </div>
        </div>
    </div>
</template>

<script>
    import dropdown from './Dropdown'
    import {mapGetters} from 'vuex'
    export default {
        name: "Product",
        props: ['product'],
        data: ()=>({
            amount: 1,
        }),
        computed: {
            ...mapGetters(['getBasket']),
            basketAmount(){
                const currentProductInBasket = this.getBasket.find((basketEl)=>{
                    return basketEl.id === this.product.id
                })
                if(currentProductInBasket != undefined){
                    return {name: currentProductInBasket.amount}
                }
                return {name: 0}

            },
            arrayOfObjects(){
                const arrayOfObjects = []
                for(let i = 1; i<=50; i++){
                    const obj = {
                        name: i
                    }
                    arrayOfObjects.push(obj)
                }
                return arrayOfObjects
            }
        },
        methods: {
            handler(obj){
                this.$store.commit('updateBasket', {
                    id: this.product.id,
                    amount: obj.name
                })
            },
            openBasketPopup(){
                const basketOverlay = document.getElementById('basket-overlay')
                basketOverlay.classList.add('popup__overlay--open')
            },
        },
        components: {dropdown},
        mounted(){
            this.$store.commit('updateBasket', {
                id: this.product.id,
                amount: this.basketAmount.name
            })
        },
    }
</script>

<style scoped lang="scss">
    .product{
        width: 238px;
        margin-bottom: 40px;
        &__title{
            font-size: 3.6rem;
            margin-bottom: 16px;
            text-align: center;
            a{
                color: #ffffff;
                text-transform: uppercase;
            }
        }
        &__img{
            width: 177px;
            &-link{
                display: inline-block;
                height: 100%;
                &-wrapper{
                    position: relative;
                    text-align: center;
                    padding-bottom: 10px;
                    &:after{
                        content: '';
                        position: absolute;
                        bottom: 0px;
                        left: -23px;
                        right: -23px;
                        height: 20px;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                }
            }
        }
        &__descr{
            background-color: rgba(0,0,0,.1);
            padding: 35px 21px 41px;
            box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.1);
        }
        &__disscount{
            text-align: center;
            font-size: 2.4rem;
            color: #ffffff;
            font-weight: 400;
            margin-bottom: 9px;
        }
        &__price{
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            margin-bottom: 18px;
            &-current{
                font-size: 6rem;
                margin-right: 5px;
            }
            &-old{
                text-decoration: line-through;
                font-size: 2.4rem;
                margin-top: 8px;
            }
        }
        &__basket{
            height: 51px;
            width: 67px;
            background-image: url('../img/basket.png');
            background-repeat: no-repeat;
            background-position: center center;
            border-radius: 22px;
            border: 3px solid #fff;
            transition: all linear .2s;
            &:hover{
                background-color: #ff8b24;
                border: 3px solid #ff8b24;
            }
        }
        &__order{
            display: flex;
            align-items: flex-end;
        }
    }
</style>
