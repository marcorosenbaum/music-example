import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'
// import AboutView from '@/views/AboutView.vue'
// import ManageView from '@/views/ManageView.vue'
// import SongView from '@/views/SongView.vue'
import useUserStore from '@/stores/users'

const HomeView = () => import('@/views/HomeView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const ManageView = () => import('@/views/ManageView.vue')
const SongView = () => import('@/views/SongView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
    // component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/manage-music',
    // alias: '/manage',
    name: 'manage',

    // component: () => import('@/views/ManageView.vue'),
    component: ManageView,
    beforeEnter(to, from, next) {
      console.log('manage route guard')
      next()
    },
    meta: { requiresAuth: true }
  },
  {
    path: '/manage',
    redirect: { name: 'manage' }
  },
  // { name: 'song', path: '/song/:id', component: () => import('@/views/SongView.vue') },
  { name: 'song', path: '/song/:id', component: SongView },

  { path: '/:catchAll(.*)*', redirect: { name: 'home' } }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})
router.beforeEach((to, from, next) => {
  // console.log(to.meta)
  if (!to.meta.requiresAuth) {
    next()
    return
  }
  const store = useUserStore()

  if (store.userLoggedIn) {
    next()
  } else {
    next({ name: 'home' })
  }
})

export default router
