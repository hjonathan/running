import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import TimingPage from '../pages/TimingPage.vue'

const routes = [
  { path: '/', component: TimingPage },
  { path: '/timing', component: TimingPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router