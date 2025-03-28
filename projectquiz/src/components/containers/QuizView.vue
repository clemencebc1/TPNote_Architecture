<script>
import QuizAPI from '../../services/QuizAPI.js';
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
                console.log(this.quiz); 
        },
        async showQuestion($quiz){
            this.$router.push({ name: 'quiz', params: { id: $quiz.id } });
        }, 
        addQuiz(){
            
        }
    },
    components: { QuizItem, QuestionItem }
  }
</script>

<template>
<aside id="nav1">
    <h2>Questionnaire</h2>
    <button @click="addQuiz"><img class="add" src="../../assets/new.png" alt="Nouveau questionnaire"/></button>
    <QuizItem @show="showQuiz"></QuizItem>
    <li v-for="questionnaire in quiz">
        {{ questionnaire.name }} <QuestionItem :quiz="questionnaire" @showQuestion="showQuestion"></QuestionItem>
    </li>
    <div id="questionnaires"> </div>
</aside>
</template>

<style>
button {
    display: block;
}
</style>