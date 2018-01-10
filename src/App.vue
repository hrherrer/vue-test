<template>
  <div id="app">
    <div class="links">
      <router-link :to="{ name: 'HelloWorld' }">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/coins/ethereum">Ethereum</router-link>
      <router-link to="/coins/bitcoin">Bitcoin</router-link>
    </div>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.links {
  a {
    text-decoration: none;
    color: #444;
    font-size: 15pt;
    &:after {
      content: '\00a0-';
      display: inline-block;
      position: relative;
    }
    &:last-child:after {
      display: none;
    }
    &:hover {
      text-decoration: underline; 
    }
  }
}

</style>
