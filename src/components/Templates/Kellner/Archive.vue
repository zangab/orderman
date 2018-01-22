<template>
  <div class="Archive">
    <archive-list></archive-list>
  </div>
</template>

<script>
export default {
  name: 'KellnerArchive',
  data () {
    return {
      contentSmall: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../../styles/vars";
  .Archive{
    background-color: $grey-50;
  }
</style>
