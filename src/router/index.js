import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import TimingPage from '../pages/TimingPage.vue'
import Scanner from '../pages/Scanner.vue'


const routes = [
  { path: '/', component: Scanner },
  { path: '/timing', component: TimingPage },
  { path: '/scanner', component: Scanner },
  
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router