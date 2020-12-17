<template>
  <div id="app">
    <div style="height: 100vh;z-index: -100;filter:blur(2px);overflow: hidden;">
      <img src="./assets/image/cloudy.jpg" style="height: 100%" alt="">
    </div>
    <show-page></show-page>
  </div>
</template>

<script>
import showPage from "./components/showPage";

export default {
  name: 'App',
  components: {
    "show-page" : showPage
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  padding: 0;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
