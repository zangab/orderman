<template>
  <div class="Home">
    <top-nav home-path="kellner-home"></top-nav>
    <price-bar v-show="!hidePriceBar"></price-bar>

    <div v-if="showStats" class="content no-pricebar stats">
      <h2>Hi Melanie</h2>
      <p class="waiter-id">Kellner-ID: 2</p>
      <p>
        <strong>€ 204,00</strong>
        <br>Sollstand
      </p>
      <p>
        <strong>13</strong>
        <br>Bestellungen
      </p>
      <p>
        <strong>#0136</strong>
        <br>Letzte Bestellung
      </p>
      <p>
        <router-link :to="{ name: 'kellner-produkte' }" class="button">
          Bestellung starten
        </router-link>
      </p>
    </div>

    <router-view :class="['content', {'is-small': contentSmall, 'no-pricebar': hidePriceBar}]"></router-view>
    <tab-nav></tab-nav>
  </div>
</template>

<script>
export default {
  name: 'KellnerHome',
  data () {
    return {
      contentSmall: this.$route.meta.contentSmall || false,
      hidePriceBar: this.$route.meta.hidePriceBar || false,
      showStats: this.$route.meta.showStats || false
    }
  },
  watch: {
    '$route': function (newVal, oldVal) {
      this.contentSmall = this.$route.meta.hasOwnProperty('contentSmall') ? this.$route.meta.contentSmall : false
      this.hidePriceBar = this.$route.meta.hasOwnProperty('hidePriceBar') ? this.$route.meta.hidePriceBar : false
      this.showStats = this.$route.meta.hasOwnProperty('showStats') ? this.$route.meta.showStats : false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../../styles/vars";
  .Home{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;

    .content{
      position: relative;
      flex: 0 1 auto;
      max-height: calc(100vh - 290px);
      overflow-y: scroll;

      &.is-small{
        min-height: calc(100vh - 220px);
        max-height: calc(100vh - 219px);
        align-items: flex-start;
      }
      &.no-pricebar{
        min-height: calc(100vh - 150px);
        max-height: calc(100vh - 149px);
      }
    }

    .stats{
      padding: 24px;
      color: $text-color;
      text-align: center;
      h2{
        font-size: 30px;
        color: $title-color;
      }

      .waiter-id{
        text-transform: uppercase;
        color: $grey-500;
        font-size: 14px;
        margin-bottom: 40px;
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
        text-decoration: none;
        &:active{
          transform: translateY(2px);
        }
      }
    }
  }
</style>
