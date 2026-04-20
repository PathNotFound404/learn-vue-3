<template>
    <div class="blog-posts-layout">
        <aside class="blog-posts-list">
            <BlogPostList></BlogPostList>
        </aside>
        <main class="blog-posts-content">
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup> 
import BlogPostList from '@/components/BlogPostList.vue';

</script>

<style lang="scss" scoped>
.blog-posts-layout {
    display: flex;
    gap: 1rem;

    .blog-posts-list {
       flex: 0 0 25%; 
    }

    .blog-posts-content {
        flex: 0 0 75%;
    }
}
</style>