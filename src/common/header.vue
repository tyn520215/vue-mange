<template>
  <header id="header_top">
    <div class="logo"><img src="../image/logo.png"></div>
    <div><rou</div>
  </header>
</template>

<script>
    export default {
        name: 'App',
        data () {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../style/mixin.scss";
  #header_top .logo{
    @include bis('../image/logo.png');
  }
</style>
