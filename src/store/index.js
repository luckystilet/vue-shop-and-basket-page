import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            {id: 1, title: 'pineapple', img: 'img/products/pineapple.png', imgSmall: 'img/products/small/small_fizzy-slim--apple.png', discount: 50, price: 9, oldPrice: 18},
            {id: 2, title: 'berries', img: 'img/products/berries.png', imgSmall: 'img/products/small/small_fizzy-slim--berries.png', discount: 40, price: 12, oldPrice: 20},
            {id: 3, title: 'grapefruit', img: 'img/products/grapefruit.png', imgSmall: 'img/products/small/small_fizzy-slim--grapefruit.png', discount: 30, price: 15.4, oldPrice: 22},
            {id: 4, title: 'apple', img: 'img/products/apple.png', imgSmall: 'img/products/small/small_fizzy-slim--apple.png', discount: 20, price: 19.2, oldPrice: 24}
        ],
        basket: []
    },
    actions: {},
    mutations: {
        updateBasket(state, param){
            const temp = state.basket
            state.basket = []
            if(param.amount>=1){
                const idOfProduct = temp.findIndex((el, idx)=>{
                    if(el.id==param.id){
                        temp[idx].amount = param.amount
                        return true
                    }
                    return false
                })
                if(idOfProduct === -1){
                    const newProduct = state.products.find((el)=>{
                        return el.id === param.id
                    })
                    newProduct.amount = param.amount
                    temp.push(newProduct)
                }
            }else{
                const idOfProduct = temp.findIndex((el, idx)=>{
                    if(el.id==param.id){
                        return true
                    }
                    return false
                })
                if(idOfProduct > -1) temp.splice(idOfProduct, 1)
            }
            state.basket = temp
            console.log("state",   state.basket    );
        },
        nullProducts(state){
            state.basket = []
        }
    },
    getters: {
        products: s=>s.products,
        getBasket(state){
            return state.basket
        }
    },
    modules: {}
})
