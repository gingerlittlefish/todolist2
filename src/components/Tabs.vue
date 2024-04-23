<template>
    <nav class="mb-8">
      <ul class="flex">
        <li v-for="tab in tabs" :key="tab.id" class="mr-4">
          <a href="#" @click.prevent="selectTab(tab.id)"
            :class="['px-4 py-2 rounded-md shadow-md hover:bg-blue-300', modelValue === tab.id ? 'bg-blue-500 text-white' : 'bg-white text-black']">
            {{ tab.label }}
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { inject } from 'vue'
  
  const props = defineProps({
    tabs: {
      type: Array,
      required: true
    }
  })

  const selectedTab = inject('selectedTab')
  const selectTab = inject('selectTab')
  </script>