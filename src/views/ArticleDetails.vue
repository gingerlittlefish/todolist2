<script setup lang="ts">
  import { useRoute } from 'vue-router'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'

const route = useRoute()
const articleId = route.params.id

const article = ref(null)

const formatTime = (time: string) => {
  return dayjs(time).format('YYYY-MM-DD hh:mm:ss')
}

const fetchArticleDetail = async () => {
  try {
    const response = await axios.get(`https://api-prod.wisburg.com/v1/article/${articleId}`)
    article.value = response.data.data
  } catch (error) {
    console.error(error)
  }
}

onMounted(fetchArticleDetail)
</script>

<template>
    <div>
     <div v-if="article">
        <h1>{{ article.title }}</h1>
        <span>作者:{{ article.author.nickname }}</span>
        <span>{{ formatTime(article.display_time) }}</span>
     <div v-html="article.body"></div>
     </div>
     <div v-else>
        loading
     </div>
    </div>
    

</template>

  <style>

  </style>
  