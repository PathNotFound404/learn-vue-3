import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import About from '@/views/About.vue'
import BlogPost from '@/views/BlogPost.vue'
import BlogPostGreeting from '@/views/BlogPostGreeting.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
    // Provide the history implementation to use. We are using HTML5 history mode here.
    history: createWebHistory(),
    // Define some routes, each route should map to a component.
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/blogPosts', name: 'blogPosts', component: BlogPosts, redirect: {name: 'blogPostGreeting'},
            children: [
                {path: '', name: 'blogPostGreeting', component: BlogPostGreeting}, // Default child route to show all blog posts
                {path: '/blogPosts/:id(\\d+)', name: 'blogPost', component: BlogPost}
            ]
        },
        {path: '/about', name: 'about', component: About}
        ,
        {path: '/:pathMatch(.*)*', 
            name: 'not-found',
            component: NotFound
        }, //Match any route that doesn't exist and show a NotFound component
        
    ]
})

// Export the router instance to be used in the main application.
export default router