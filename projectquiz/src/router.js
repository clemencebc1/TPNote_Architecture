import { createMemoryHistory, createRouter } from 'vue-router'
// import { QuestionEditor } from './components/QuestionEditor.vue'
import App from './App.vue'
import QuestionEditor from './components/QuestionEditor.vue'
// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'

const routes = [
    { path: '/', component: App },
    { path: '/quesstionnaire/:id', component: QuestionEditor }
    // { path: '/question/:id', component: QuestionEditor },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;