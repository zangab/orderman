<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'kirchtiman'
}
</script>

<style lang="scss">
  @import "./main.scss";

  .nav{
    width: 100%;

    .L{
      display: flex;
      justify-content: space-between;
      font-size: 16px;
    }
  }
</style>
