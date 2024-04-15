<script  setup lang="ts">
import { ref, isRef, unref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import dayjs from 'dayjs'

    const article = ref([])
    const route = useRoute()
    const router = useRouter()
    const currentPage = ref(1)

    const formatTime =(time:string)=>{
        return dayjs(time).format('YYYY-MM-DD hh:mm:ss')
    }

    watch(route,(newVal,oldValue)=>{
        feedback()
    },{
        immediate:true
    })

    async function feedback() {
       const page = route.query.page||1
        try{
            // const response = await axios.get(`https://api-prod.wisburg.com/v1/article?page=${page}&limit=10`)
            const response = await axios.get(`https://api-prod.wisburg.com/v1/article`,{
                params:{
                    page:page
                }
            })
            console.log(response)
            article.value = response.data.data.list
        } catch (error) {
            console.error(error)
        }
    }
    
    const previousPage = () => {
         currentPage.value--
         router.push({ path: '/', query: { page: currentPage.value }})
    }

    const nextPage = () => {
        currentPage.value += 1
        router.push({ path: '/', query: { page: currentPage.value }})
    }

</script>

<template>
<div class="mt-8">
    <ul class="bg-white rounded-lg shadow-lg divide-y divide-gray-200">
     <li v-for="(item,index) in article" class="px-4 py-3">
        <router-link :to="`/article/${item.id}`" class="block text-lg font-semibold text-blue-600 hover:text-blue-800">
          <h3>{{ item.title }}</h3>
        </router-link>
        <div class="mt-1 text-sm text-gray-600">
        <span>{{ item.author.nickname }}</span>
        <span class="ml-2">{{ formatTime(item.display_time) }}</span>
        </div>
     </li>
    </ul>
</div>
<div class="mt-4 flex justify-center">
    <button @click="previousPage" class="bg-blue-500 text-white rounded-md py-2 px-4 mr-2 hover:bg-blue-600" :disabled="currentPage === 1" >
        上一页
    </button>
    <button @click="nextPage" class="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600">
        下一页
    </button>
</div>
</template>

<style>

</style>