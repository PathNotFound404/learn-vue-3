import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import About from '@/views/About.vue'

const router = createRouter({
    // Provide the history implementation to use. We are using HTML5 history mode here.
    history: createWebHistory(),
    // Define some routes, each route should map to a component.
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/blogPosts', name: 'blogPosts', component: BlogPosts},
        {path: '/about', name: 'about', component: About},
        
    ]
})

// Export the router instance to be used in the main application.
export default router