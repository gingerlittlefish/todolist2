<script setup>
 import { RouterView } from 'vue-router'
 import { ref,watch } from 'vue'
 import { useRoute, useRouter } from 'vue-router'
 import Tabs from './components/Tabs.vue';
 import TabManager from './components/TabManager.vue';
 import InputModal from './components/InputModal.vue';
 import articleList from './components/articleList.vue';

 const tabs = [
  { id: 1, label: 'Todo List' },
  { id: 2, label: '文章列表' }
]

const route = useRoute()
const router = useRouter()
const currentPath = ref(route.path)
watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    currentPath.value = newPath
  }
)
</script>

<template>
<div class="min-h-screen bg-gray-100 justify-center">
   <div class="ms-auto py-8 justify-center">
    <!-- <nav class="mb-8">
        <ul class="flex">
          <li class="mr-4">
            <router-link to="/" :class="['px-4 py-2 rounded-md  text-black shadow-md hover:bg-blue-300',currentPath === '/' ? 'bg-blue-400 text-white' : 'bg-white']">
              Todo List
            </router-link>
          </li>
          <li>
            <router-link to="/articles" :class="['px-4 py-2 rounded-md  text-black shadow-md hover:bg-blue-300',currentPath === '/articles' ? 'bg-blue-400 text-white' : 'bg-white']">
              文章列表
            </router-link>
          </li>
        </ul>
      </nav> -->
     <TabManager :tabs="tabs">
      <template v-slot:default="{ tabs }">
          <Tabs :tabs="tabs" />
      </template>
      <template v-slot:1>
          <InputModal />
      </template>
      <template v-slot:2>
          <articleList />
      </template>
     </TabManager>
   </div>
</div>
  
</template>

<style>

</style>