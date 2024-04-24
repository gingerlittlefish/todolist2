<script setup>
 import { RouterView } from 'vue-router'
 import { ref,watch } from 'vue'
 import { useRoute, useRouter } from 'vue-router'
 import Tabs from './components/Tabs.vue';
 import TabManager from './components/TabManager.vue';
 import InputModal from './components/InputModal.vue';
 import ArticleList from './components/ArticleList.vue'

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
     <TabManager :tabs="tabs">
      <template #default="{ tabs }">
          <Tabs :tabs="tabs" />
      </template>
      <template #1>
          <InputModal />
      </template>
      <template #2>
          <ArticleList />
      </template>
     </TabManager>
   </div>
</div>
  
</template>

<style>

</style>