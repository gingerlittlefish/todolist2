<script setup>
 import { RouterView } from 'vue-router';
 import articleList from './components/articleList.vue';
</script>

<template>
<div class="min-h-screen bg-gray-100 align-middle">
   <div class="container ms-auto py-8 align-middle">
    <RouterView />
    <articleList />
   </div>
</div>
  
</template>

<style>

</style>