<script setup>
import HelloWorld from './components/HelloWorld.vue'
import QuizTwo from './components/QuizTwo.vue'
</script>

<template>
  <router-link to="/">Home</router-link> | 
  <router-link to="/activity1">Listening 1</router-link> | 
  <router-link to="/activity2">Listening 2</router-link>
  <router-view></router-view>
  <div>
    <img alt="" src="./assets/american-flag.png" />
  </div>
  
</template>

<style scoped>
h1 {
  font-size: 2em;
}
</style>
