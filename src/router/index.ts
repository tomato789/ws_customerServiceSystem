import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/home',
			name: 'home',
			component: Index
		}
	]
})

export default router
