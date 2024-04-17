<script setup>
 import { RouterView } from 'vue-router'
 import { ref } from 'vue'
 import { useRoute } from 'vue-router'

const route = useRoute()
const currentPath = ref(route.path)

</script>

<template>
<div class="min-h-screen bg-gray-100 align-middle">
   <div class="ms-auto py-8 align-middle">
    <nav class="mb-8">
        <ul class="flex">
          <li class="mr-4">
            <router-link to="/" :class="[
                'px-4 py-2 rounded-md bg-white shadow-md hover:bg-blue-300',
                currentPath === '/' ? 'bg-blue-400 text-white' : ''
              ]">
              Todo List
            </router-link>
          </li>
          <li>
            <router-link to="/articles" :class="[
                'px-4 py-2 rounded-md bg-white shadow-md hover:bg-blue-300',
                currentPath === '/articles' ? 'bg-blue-400 text-white' : ''
              ]">
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