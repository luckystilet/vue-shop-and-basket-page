<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
  html{
    font-size: 62.5%;
  }
  body{
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.6rem;
  }
  .container{
    max-width: 1150px;
    padding: 0 20px;
    margin: 0 auto;
  }
    .sorry-msg{
        margin: 40px 0 20px 0;
        text-align: center;
        text-transform: none;
        font-size: 2.8rem;
    }
  .fade-enter-active, .fade-leave-active {
      transition: all ease 3s;
  }
  .fade-enter, .fade-leave-to {
      opacity: 0;
  }
</style>
