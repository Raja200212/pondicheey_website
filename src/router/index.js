import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ThemesView from '../views/ThemesView.vue'
import ContentView from '../views/ContentView.vue'
import PrizesView from '../views/PrizesView.vue'
import JudgingView from '../views/JudgingView.vue'
import RulesView from '../views/RulesView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/themes',
    alias: ['/content-themes'],
    name: 'Themes',
    component: ThemesView
  },
  {
    path: '/content',
    alias: ['/content-guide', '/creator-guide', '/guide'],
    name: 'Content',
    component: ContentView
  },
  {
    path: '/prizes',
    alias: ['/prize-pool'],
    name: 'Prizes',
    component: PrizesView
  },
  {
    path: '/judging',
    alias: ['/judging-criteria'],
    name: 'Judging',
    component: JudgingView
  },
  {
    path: '/rules',
    alias: ['/rules-timeline'],
    name: 'Rules',
    component: RulesView
  },
  {
    path: '/register',
    alias: ['/submit'],
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
