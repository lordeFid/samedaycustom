<template>
  <div id="app">
    <Home />
      <router-view/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
// import Operations  from './components/views/Operations'

export default {
  name: 'app',
  components: {
    Home,
  },
  data() {
    return {
      // Operations
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
}
.primary-text {
  margin-left: 15px;
  font-weight: bold;
  font-size: 13px;
}
.secondary-text {
  margin-left: 15px;
  font-weight: bold;
  font-size: 18px;
}
</style>
