import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'

import LoginFile from './components/Login/LoginFile.vue'
import RegisterPage from './components/Login/RegisterPage.vue'
import LoginPage from './components/Login/LoginPage.vue'

const routes = [
  { path: '/', component: LoginFile },
  { path: '/Login', component: LoginPage },
  { path: '/Register', component: RegisterPage },
]
const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

createApp(App).use(router).mount('#app')



