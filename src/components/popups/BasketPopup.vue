<template>
    <div
        id="basket-overlay"
        class="popup__overlay"
        @click="outsidePopupHandler($event)"
    >
        <div class="popup__inner">
            <div class="popup__main" id="basket-main">
                <div
                        class="popup__header"
                        @click="closePopup"
                >
                    <div class="popup__close"></div>
                    <h3>Carello</h3>
                </div>
                <div class="popup__body">
                    <p  v-if="!getBasket.length" class="sorry-msg">Basket is empty :( Please add some</p>
                    <ul class="basket__list" v-else>
                        <li
                                class="basket__item"
                                v-for="(el, idx) in getBasket"
                                :key="el.id"
                        >
                            <div
                                class="basket-item__close"
                                @click.stop="deleteProduct(el.id)"
                            ></div>
                            <div class="basket-item__img-wrapper">
                                <img :src="el.imgSmall" alt="" class="basket-item__img">
                            </div>
                            <div class="basket-item__descr">
                                <div>offerta</div>
                                <div>fizzyslim con sapore di</div>
                                <div class="basket-item__type">{{el.title}}</div>
                                <div class="basket-item__amount">QTÀ:
                                    <div class="small">
                                        <dropdown
                                            :options="arrayOfObjects"
                                            :selected="{name: el.amount}"
                                            @updateOption="pushSelectValues($event, el.id)">
                                        </dropdown>
                                    </div>
                                </div>
                                <div class="basket-item__money"><span>€</span>{{(el.price*el.amount).toFixed(2)}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="popup__footer">
                    <div class="basket-total">
                        <h4 class="basket-total__title">Subtotale</h4>
                        <div class="basket-total__amount"><span>€</span>{{total}}</div>
                    </div>
                    <div class="basket__make-order">
                        <button class="basket__order-btn">VISUALIZZA CARRELLO</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import dropdown from '../Dropdown'
    export default {
        name: "Basket",
        data: ()=>({
        }),
        computed: {
            ...mapGetters(['getBasket', 'products']),
            total(){
                 let totalPrice = this.getBasket.reduce((collector, el)=>{
                    return collector + el.amount * el.price
                 },0)
                return totalPrice.toFixed(2)
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
            ...mapMutations(['deleteProduct']),
            closePopup(){
                document.getElementById('basket-overlay').classList.remove('popup__overlay--open')
            },
            outsidePopupHandler(e){
                const target = e.target
                const basket = document.getElementById('basket-main')
                const itsBasket = target == basket || basket.contains(target)
                if(!itsBasket)this.closePopup()
            },
            pushSelectValues(obj, id){
                    this.$store.commit('updateBasket', {
                        id: id,
                        amount: obj.name
                    })
            }
        },
        components: {dropdown},
    }
</script>
