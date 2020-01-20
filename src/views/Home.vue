<template>
    <div class="home-page">
        <Goods/>
        <Popup/>
    </div>
</template>

<script>
    import Goods from '../components/Goods'
    import Popup from '../components/popups/BasketPopup'
    export default {
        name: "Home",
        data: ()=>({
        }),
        components: {Goods, Popup},
        methods: {
        }
    }
</script>

<style scoped>

</style>
