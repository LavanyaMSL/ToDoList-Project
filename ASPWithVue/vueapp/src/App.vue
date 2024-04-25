<template style="background-color:purple">
<RouterView class="login"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: purple;
  height: 100%;
}
html, body {
  height: 100%;
  margin: 0;
}
.login{
  padding-top: 60px;
}
</style>
