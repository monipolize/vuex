<template>
  <div id="app">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="ASYcrement">异步新增</button>
      <p>当前数字：{{count}}</p>
      <p>当前数字是：{{type}}</p>
  </div>
</template>

<script>
import {mapGetters} fro 'vuex'
import {mapActions} fro 'vuex'
import {mapState} fro 'vuex'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  // 方式1：通过this.$store.state.count
  /*computed:{
    count(){
      return this.$store.state.count
    }
  }*/
  // 方式2：通过mapGetters
  computed:mapGetters([
    'gcount',//指定要获取的方法,得到的是store对象中，getter对象下的gcount
    'gtype'
  ]),
  //方式3：通过mapState
  /*computed:mapState([
    'count'//对应state.state
  ])*/,
  methods:mapActions([
    'increment',
    'decrement',
    'ASYcrement'
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
