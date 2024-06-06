<script setup>
 import { RouterView } from 'vue-router'
 import { ref,watch,inject } from 'vue'
 import { useRoute, useRouter } from 'vue-router'
 import Tabs from './components/Tabs.vue';
 import TabManager from './components/TabManager.vue';
 import ArticleList from './components/ArticleList.vue';
 import InputModal from './components/InputModal.vue';
 import ArticleDetails from './views/ArticleDetails.vue'

 const route = useRoute()
 const router = useRouter()
 const currentPath = ref(route.path)
  watch(
   () => router.currentRoute.value.path,
   (newPath) => {
    currentPath.value = newPath
   }
  )

 const tabs = [
   { id: 1, label: 'Todo List' },
   { id: 2, label: '文章列表' }
  ]

 const selectedTab = ref(1)


</script>

<template>
<div class="min-h-screen bg-gray-100 justify-center">
   <div class="ms-auto py-8 justify-center">                                                                                                                                                                                                                                                                        
     <TabManager :tabs="tabs">
      <template #default="{ tabs }">
          <Tabs :tabs="tabs" />
      </template>
      <template v-slot:tab-content-1>
          <InputModal />
        </template>
        <template v-slot:tab-content-2>
          <ArticleList />
        </template>
        <template v-slot:tab-content-3>
          <router-view v-slot="{ Component }">
            <component :is="Component" v-if="$route.name !== 'ArticleDetails'" />
            <article-details v-else :key="$route.params.id" />
          </router-view>
        </template>
     </TabManager>
   </div>
</div>
  
</template>

<style>

</style>