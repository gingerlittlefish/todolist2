<template>
    <div class="max-h-fulloverflow-y-auto fixed fixed left-0 left-0 right-0 right-0 top-0 top-0 z-50 z-50 flex h-[calc(100%-1rem)] h-[calc(100%-1rem)] max-h-full w-full w-full items-center items-center justify-center justify-center overflow-y-auto overflow-x-hidden overflow-x-hidden md:inset-0 md:inset-0">
        <div>
        <button @click="showModal = true">Add Task</button>
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="showModal = false">&times;</span>
          <h2>Add Task</h2>
          <input v-model="newTask.title" type="text" placeholder="Task Title" />
          <input v-model="newTask.description" type="text" placeholder="Task Description" />
          <div>
            <label>Status:</label>
            <select v-model="newTask.status">
              <option v-for="status in taskStatuses" :key="status" :value="status">{{ status }}</option>
            </select>
          </div>
          <button @click="addTask">Add Task</button>
        </div>
        </div>
  
      <table class="mb-4 grid gap-4 sm:grid-cols-2">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Last Modified</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <td>{{ task.title }}</td>
            <td>{{ task.description }}</td>
            <td>{{ task.status }}</td>
            <td>{{ formatDate(task.createdDate) }}</td>
            <td>{{ formatDate(task.lastModified) }}</td>
            <td>
              <button @click="editTask(index)">Edit</button>
              <button @click="deleteTask(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
    
  }
  
  const deleteTask = (index) => {
    tasks.value.splice(index, 1)
  }
  </script>