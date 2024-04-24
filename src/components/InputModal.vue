<template>
        <div>
            <button @click="showModal = true" class="bg-blue-500 text-white rounded-md py-2 px-4 my-4 ml-4 hover:bg-blue-600">
              Add Article
            </button>
        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-8 shadow-lg">
          <span class="close cursor-pointer" @click="showModal = false">&times;</span>
          <h2 class="text-xl text-black font-bold mb-4">Add Article</h2>
          <input v-model="newTask.title" type="text" placeholder="Task Title" class="border border-gray-300 rounded-md p-2 mb-2 w-full" />
          <textarea v-model="newTask.description" type="text" placeholder="Task Description" class="border border-gray-300 rounded-md p-2 mb-2 w-full" />
          <input v-model="newTask.articleId" type="text" placeholder="Task ArticleId" class="border border-gray-300 rounded-md p-2 mb-2 w-full" />
          <div class="mb-4">
            <label class="block font-bold mb-1">Status:</label>
            <select v-model="newTask.status" class="border border-gray-300 rounded-md p-2 w-full">
              <option v-for="status in taskStatuses" :key="status" :value="status">{{ status }}</option>
            </select>
          </div>
          <button @click="addTask" class="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600">Add Article</button>
        </div>
        </div>
  
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-200">
            <th class="py-2 px-4 text-left text-black">Title</th>
            <th class="py-2 px-4 text-left text-black">Description</th>
            <th class="py-2 px-4 text-left text-black">Status</th>
            <th class="py-2 px-4 text-left text-black">Created Date</th>
            <th class="py-2 px-4 text-left text-black">Last Modified</th>
            <th class="py-2 px-4 text-left text-black">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index" class="border-b hover:bg-gray-100">
            <td class="py-2 px-4">{{ task.title }}</td>
            <td class="py-2 px-4">{{ task.description }}</td>
            <td class="py-2 px-4">{{ task.status }}</td>
            <td class="py-2 px-4">{{ formatDate(task.createdDate) }}</td>
            <td class="py-2 px-4">{{ formatDate(task.lastModified) }}</td>
            <td class="py-2 px-4">
              <button @click="editTask(index)" class="bg-yellow-500 text-white rounded-md py-1 px-2 mr-2 hover:bg-yellow-600">Edit</button>
              <button @click="deleteTask(index)" class="bg-red-500 text-white rounded-md py-1 px-2 hover:bg-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showModal = ref(false)
  const newTask = ref({ title: '', description: '', status: 'To Do' })
  const tasks = ref([])
  const taskStatuses = ['To Do', 'In Progress', 'Done']
  
  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleString()
  }
  
  const addTask = () => {
    const task = {
      ...newTask.value,
      createdDate: new Date().toISOString(),
      lastModified: new Date().toISOString()
    }
    tasks.value.push(task)
    newTask.value = { title: '', description: '', status: 'To Do' }
    showModal.value = false
  }
  
  const editTask = (index) => {
    const oldTask = {
      lastModified: new Date().toISOString()
    }
  }
  
  const deleteTask = (index) => {
    tasks.value.splice(index, 1)
  }
  </script>