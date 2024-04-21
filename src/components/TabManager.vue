<template>
    <div>
      <Tabs v-model="selectedTab" :tabs="tabs" />
      <component :is="currentComponent" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import Tabs from './Tabs.vue'
  import TodoList from './InputModal.vue'
  import articleList from './articleList.vue';
  
  const selectedTab = ref(1)
  
  const tabs = [
    { id: 1, label: 'Todo List' },
    { id: 2, label: '文章列表' }
  ]
  
  const components = {
    1: TodoList,
    2: articleList
  }
  
  const currentComponent = computed(() => components[selectedTab.value])
  </script>