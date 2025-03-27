import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
// import { QuestionEditor } from './components/QuestionEditor.vue'
import App from './App.vue'
import QuestionEditor from './components/QuestionEditor.vue'
import HomeComponent from './components/containers/HomeComponent.vue'
import QuestionsView from './components/containers/QuestionsView.vue'
import QuizEditView from './components/containers/QuizEditView.vue'
import QuizView from './components/containers/QuizView.vue'
import NotFound404 from './components/containers/NotFound404.vue'

// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'

const routes = [
    {   
        path: '/', 
        name: 'home',
        components: {
            default: HomeComponent,
            left: QuestionsView
        } 
    },
    { 
        path: '/quizedit/:id', 
        name: 'quiz',
        component: QuizEditView,
    },
    {
        path: '/:patchMatch(.*)*',
        name: 'not-found',
        component: NotFound404
    }
    // { path: '/question/:id', component: QuestionEditor },
]

const router = createRouter({routes, history: createWebHistory()})

export default router;