import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
// import { QuestionEditor } from './components/QuestionEditor.vue'
import App from './App.vue'
import HomeComponent from './components/containers/HomeComponent.vue'
import QuestionsView from './components/containers/QuestionsView.vue'
import QuizEditView from './components/containers/QuizEditView.vue'
import QuizView from './components/containers/QuizView.vue'
import NotFound404 from './components/containers/NotFound404.vue'
import NewQuestion from './components/containers/NewQuestion.vue'
import TestComponent from './components/containers/testComponent.vue'

// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'

const routes = [
    {   
        path: '/', 
        name: 'home',
        components: {
            default: HomeComponent,
            left: QuestionsView
        },
        children: [
            {
                path: 'test',
                component: TestComponent
            }
        ],
        alias: '/home'
    },
    { 
        path: '/quizedit/:id', 
        name: 'quiz',
        component: QuizEditView,
    },
    {
        path: '/quiz/question/:id',
        name: 'questions',
        component: QuestionsView
    },
    
    {
        path: '/quiz/:id/new',
        name: 'new-question',
        component: NewQuestion
    },
    {
        path: '/:patchMatch(.*)*',
        name: 'not-found',
        component: NotFound404
    },
]

const router = createRouter({routes, history: createWebHistory()})

export default router;