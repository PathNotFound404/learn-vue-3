<template>
  <div class="blog-post">
    <p>
      {{ message }}
    </p>
    <!-- Display the id, title, and content of a blog post. -->
    <h2>{{ id }} - {{ blogPostTitle }}</h2>
    <div>
        Modify Title: <input type="tetx" v-model="blogPostTitle">
    </div>
    <h4>{{ blogPostContent }}</h4>
    <div>
        Modify The Content:
        <input type="text" v-model="blogPostContent">
    </div>
    <button @click="$emit('delete-blog-post', id)">Delete Post</button>
    <button @click="emitDeletPostEvent(id)">Delete Post</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let message = ref('This is the BlogPost component.')
const props = defineProps(['id'])
const emit = defineEmits(['delete-blog-post'])

function emitDeletPostEvent(id){
    emit('delete-blog-post', id)
}

let blogPostContent = defineModel('blogPostContent') // blogPostContent is a ref
let blogPostTitle = defineModel('blogPostTitle')


// console.log(props.blogPostTitle)
// defineProps({
//   id: Number,
//   blogPostTitle: String,
//   blogPostContent: String
// })
</script>

<style scoped>
.blog-post {
  background-color: aqua;
  padding: 10px;
  margin-bottom: 10px;
}

input {
    width: 100%;
}
</style>