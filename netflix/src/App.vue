<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MovieList msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MovieList from './components/MovieList.vue';

export default defineComponent({
  name: 'App',
  components: {
    MovieList
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
  margin-top: 60px;
}
</style>
