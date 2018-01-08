<template>
  <div class="Login has-bg-pattern">
    <div class="wrapper">
      <h2 class="title">Kirchtiman</h2>
      <form action="" class="form">
        <input type="email" name="mail" v-model="user" class="input" placeholder="Email">
        <input type="password" name="pw" v-model="pw" class="input" placeholder="Passwort">
        <button type="button" class="button" @click="doLogin">Anmelden</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      value: '',
      user: '',
      pw: ''
    }
  },
  methods: {
    doLogin () {
      console.log('this:', this)
      this.$router.push({name: 'kellner-home'})
      // TODO: firebase login
      console.log('login ...')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../styles/vars";

  .Login{
    position: relative;
    height: 100vh;
    width: 100%;

    .title{
      padding: 30px 30px 20px;
      margin-top: 0;
      line-height: 1;
      font-weight: 800;
      color: $title-color;
      text-transform: uppercase;
      border-bottom: 1px solid $brand-blue-50;
    }

    .wrapper{
      position: absolute;
      top: 50%; left: 50%;
      width: 300px;
      transform: translate(-50%,-50%);
      background: $color-white;
      box-shadow: 0 2px 10px $shadow-color;
      border-radius: $border-radius-base;
      border-top: 4px solid $brand-blue-500;
    }

    .form{
      padding: 24px 30px 26px;
    }

    .input{
      position: relative;
      font-size: 0;
      line-height: 1.5;
      outline: 0;
      display: block;
      width: 100%;
      padding: $input-padding-lg;
      color: $input-font-color;
      font-size: $font-size-normal;
      background-color: $input-bg-color;
      border: 1px solid $border-color-base;
      border-radius: $border-radius-base;
      transition: border .2s;
      outline: none;
      &::placeholder {
        color: $input-placeholder-color;
        font-size: $font-size-normal;
      }
      &:hover {
        border-color: $input-border-color-hover;
      }
      &:focus {
        border-color: $input-border-color-focus;
      }
    }
    .input + .input{
      margin-top: 12px;
    }
    .button{
      margin-top: 20px;
      background: $diagonal-gradient-bg-blue;
      border: 0;
      color: $color-white;
      font-weight: bold;
      display: block;
      text-align: center;
      padding: $input-padding-lg;
      font-size: $font-size-normal;
      width: 100%;
      border-radius: $border-radius-base;
      user-select: none;
      cursor: pointer;
      line-height: 2;
      outline: 0;
      box-shadow: $shadow-1px-down;
      &:active{
        transform: translateY(2px);
      }
    }
  }
</style>
