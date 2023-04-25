import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
import QuizTwo from './components/QuizTwo.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/activity1', name: 'HelloWorld', component: HelloWorld},
        {path: '/activity2', name: 'QuizTwo', component: QuizTwo}
    ]
})
createApp(App).use(router).mount('#app')
