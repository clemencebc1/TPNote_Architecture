<script>
import QuizAPI from '../../services/QuizAPI';
import QuizItem from '../utils/QuizItem.vue';
import QuestionItem from '../utils/QuestionItem.vue';

let data = {
    quiz: [],
    questions: []
}
export default{ 
    data(){
        return data;
    },
    methods:{
        async showQuiz(){
                console.log("recuperation quiz");
                let result = await QuizAPI.getQuiz();
                this.quiz = result['questionnaires'];  
        },
        async showQuestion($quiz){
            let result = await QuizAPI.getQuestion($quiz.id);
            this.questions = result['questions'];

        }
    },
    components: { QuizItem, QuestionItem }
  }
</script>

<template>
<aside id="nav1">
    <h2>Questionnaire</h2>
    <QuizItem @show="showQuiz"></QuizItem>
    <li v-for="questionnaire in quiz">
        {{ questionnaire.name }} <QuestionItem :quiz="questionnaire" @showQuestion="showQuestion"></QuestionItem>
    </li>
    <div id="questionnaires"> </div>
</aside>
</template>