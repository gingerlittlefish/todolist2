<script setup>
 import { RouterView } from 'vue-router';

</script>

<template>
<div class="min-h-screen bg-gray-100 align-middle">
   <div class="ms-auto py-8 align-middle">
    <nav class="mb-8">
        <ul class="flex">
          <li class="mr-4">
            <router-link to="/" class="px-4 py-2 rounded-md bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300">
              Todo List
            </router-link>
          </li>
          <li>
            <router-link to="/articles" class="px-4 py-2 rounded-md bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300">
              文章列表
            </router-link>
          </li>
        </ul>
      </nav>
    <RouterView />
   </div>
</div>
  
</template>

<style>

</style>