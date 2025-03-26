import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
// import { QuestionEditor } from './components/QuestionEditor.vue'
import App from './App.vue'
import QuestionEditor from './components/QuestionEditor.vue'
import HomeComponent from './components/containers/HomeComponent.vue'
import QuestionsView from './components/containers/QuestionsView.vue'
import QuizEditView from './components/containers/QuizEditView.vue'
// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'

const routes = [
    {   
        path: '/', 
        name: 'home',
        component: HomeComponent 
    },
    { 
        path: '/quizedit/:id', 
        name: 'quiz',
        component: QuizEditView,
        children: [ 
            {
                path: 'question/:id',
                name: 'question',
                component: QuestionEditor
            }
        ]
    }
    // { path: '/question/:id', component: QuestionEditor },
]

const router = createRouter({routes, history: createWebHistory()})

export default router;