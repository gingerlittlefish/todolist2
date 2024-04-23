<template>
    <div>
      <slot :tabs="tabs">
           <Tabs />
      </slot>
      <div class="mt-4">
       <slot :name="selectedTab"></slot>
      </div>  
    </div>
  </template>
  
  <script setup>
  import { ref, provide } from 'vue'
  import Tabs from './Tabs.vue'

  
  const props = defineProps({
    tabs: {
        type: Array,
        required: true
    }
  })

  const selectedTab = ref(props.tabs[0].id)

  const selectTab = (tabId) => {
    selectedTab.value = tabId
  }
  
  provide('selectedTab' , selectedTab)
  provide('selectTab' , selectTab)
  </script>