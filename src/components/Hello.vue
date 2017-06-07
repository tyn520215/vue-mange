<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in items" :key="item._id">
        <img  class="imgStyle"  :src="item.url"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import addNum from '../store/action'
  export default {
    name: 'Gakki',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed:mapState({
        items : state =>state.results
    }),
    created () {
      this.$store.dispatch('addNum')
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .imgStyle{
    width: 10rem;
  }
  .addmore{width: 120px;height: 40px;line-height: 40px;background-color: dodgerblue;border-radius: 5px;}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
