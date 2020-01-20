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
                    <h2 v-if="!basket.length">Basket is empty :( Please add some</h2>
                    <ul class="basket__list" v-else>
                        <li
                                class="basket__item"
                                v-for="(el, idx) in basket"
                                :key="el.id"
                        >
                            <div class="basket-item__img-wrapper">
                                <img :src="el.imgSmall" alt="" class="basket-item__img">
                            </div>
                            <div class="basket-item__descr">
                                <div>offerta</div>
                                <div>fizzyslim con sapore di</div>
                                <div class="basket-item__type">{{el.title}}</div>
                                <div class="basket-item__amount">QTÀ:
                                    <dropdown
                                            :options="arrayOfObjects"
                                            :selected="{name: el.amount}"
                                            @updateOption="pushSelectValues($event, el.id)">
                                    </dropdown>
<!--                                    <div-->
<!--                                        class="custom-select amount-popup-select"-->
<!--                                        @click="pushSelectValues(el.id, idx)"-->
<!--                                        style="width:50px;"-->
<!--                                    >-->
<!--                                        <select ref="select">-->
<!--                                            <option-->
<!--                                                v-for="(number, index) of 51"-->
<!--                                                :key="index"-->
<!--                                                :value="number+1"-->
<!--                                                :selected="index===el.amount"-->
<!--                                            >-->
<!--                                                {{index}}-->
<!--                                            </option>-->
<!--                                        </select>-->
<!--                                    </div>-->
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
    import { mapState } from 'vuex'
    import dropdown from 'vue-dropdowns'
    export default {
        name: "Basket",
        data: ()=>({
        }),
        computed: {
            ...mapState(['basket', 'products']),
            total(){
                 let totalPrice = this.basket.reduce((collector, el)=>{
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
            closePopup(){
                document.getElementById('basket-overlay').classList.remove('popup__overlay--open')
            },
            outsidePopupHandler(e){
                e.stopPropagation()
                const target = e.target
                const basket = document.getElementById('basket-main')
                const itsBasket = target == basket || basket.contains(target)
                if(!itsBasket){
                    console.log("handler",       );
                    this.closePopup()
                }
            },
            // pushSelectValues(id, idx){
            //     const val = this.$refs.select[idx].value - 2
            //     this.$store.commit('updateBasket', {
            //         id: id,
            //         amount: val
            //     })
            // },
            pushSelectValues(obj, id){
                    this.$store.commit('updateBasket', {
                        id: id,
                        amount: obj.name
                    })
            }
        },
        components: {dropdown},
        watch: {
            basket(val,old){

            }
        },
    }
</script>
