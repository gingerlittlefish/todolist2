<template>
    <div>
      <Tabs v-model="selectedTab" :tabs="tabs" />
       <slot :name="selectedTab"></slot>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import Tabs from './Tabs.vue'

  
  const props = defineProps({
    tabs: {
        type: Array,
        required: true
    }
  })

  const selectedTab = ref(props.tabs[0].id)
  
  
  </script>