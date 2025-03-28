<script>
import QuizAPI from '../../services/QuizAPI.js';
import QuestionItem from '../utils/QuestionItem.vue';
import QuizItem from '../utils/QuizItem.vue';

let data = {
    quiz: null,       
    questions: [],    
    loading: false,   
    error: null 
}
export default {
  components: { QuestionItem, QuizItem },
  data() {
    return data
  },  
  created() {
    this.$watch(() => this.$route.params.id, this.fetchData, { immediate: true }) // s'execute lorsqu'il change de valeur
  },
  methods: {
    showQuestion(id){
      this.$router.push({ name: 'questions', params: { id: id['id'] } });
    },
    addQuestion(){
      this.$router.push({ name: 'new-question', params: { id: this.$route.params.id } });
    },
    async deleteQuiz(){
      console.log("delete question");
      console.log(this.quiz);
      let result = await QuizAPI.deleteQuiz(this.$route.params.id); 
      this.$router.push('/');
    },
    async fetchData(id) {
      if (!id) return

      this.error = null
      this.loading = true

      try {
        console.log("Fetching quiz with ID:", id)
        const response = await QuizAPI.getQuestion(id)

        if (response) {
          this.quiz = response
          this.questions = response.questions || []
          console.log("Fetched questions:", this.questions)
        }
      } catch (err) {
        this.error = "Erreur lors de la récupération du quiz."
        console.error(err)
      } finally {
        this.loading = false
      }
    },

    async fetchQuestion(id) {
    this.error = null
    this.loading = true

      try {
        console.log("Fetching question with ID:", id)
        const response = await QuizAPI.getQuestion(id)

        if (response) {
          this.quiz = response
          this.questions = response.questions || []
          console.log("Fetched questions:", this.questions)
        }
      } catch (err) {
        this.error = "Erreur lors de la récupération du quiz."
        console.error(err)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
<template>
    <article>
        <h2>Editeur de questionnaire</h2>
        <section class="tools">
          <button @click="addQuestion"><img class="add" src="../../assets/new.png" alt="Nouveau questionnaire"/></button>
          <button @click="deleteQuiz"><img id="del" src="../../assets/delete.png" alt="Supprimer Questionnaire"/></button>
        </section>
        <section id="currentquestionnaire">
          <h3 v-if="quiz">Questionnaire: {{ quiz.title }}</h3>
        </section>
        <h3>Liste Questions</h3>
        <section class="tools" id="questionnairetools"> </section>
        <section id="listquestions"> 
            <div v-if="loading">Chargement...</div>
            <div v-else-if="error">{{ error }}</div>
            <ul v-else id="questions">
                <li v-for="question in questions" :key="question.id" class="question">
                    {{ question.title }} 
                    <QuestionItem :quiz="question" @showQuestion="showQuestion"></QuestionItem>
                </li>
            </ul> 
        </section>
      </article>
</template>

<style>
body {
   font: 24px Menlo, Helvetica;
   background: #999999;
  }

  #main {
   min-height: 800px;
   margin: 0px;
   padding: 0px;
   display: -webkit-flex;
   display:         flex;
   -webkit-flex-flow: row;
           flex-flow: row;
   }
 
  h1,h2,h3,h4,h5,h6{
    text-align: center;
  }

  #main > article {
   margin: 4px;
   padding: 5px;
   border: 1px solid #cccc33;
   border-radius: 7pt;
   background: #dddd88;
   -webkit-flex: 3 1 60%;
           flex: 3 1 60%;
   -webkit-order: 2;
           order: 2;
   }
  
  #main > #nav1 {
   margin: 4px;
   padding: 5px;
   border: 1px solid #8888bb;
   border-radius: 7pt;
   background: #ccccff;
   -webkit-flex: 1 6 20%;
           flex: 1 6 20%;
   -webkit-order: 1;
           order: 1;
   }
  
  #main > #nav2 {
   margin: 4px;
   padding: 5px;
   border: 1px solid #8888bb;
   border-radius: 7pt;
   background: #ccccff;
   -webkit-flex: 1 6 20%;
           flex: 1 6 20%;
   -webkit-order: 3;
           order: 3;
   }
 
  header, footer {
   display: block;
   text-align: center;
   margin: 4px;
   padding: 5px;
   min-height: 150px;
   border: 1px solid #eebb55;
   border-radius: 7pt;
   background: #ffeebb;
   }
 
  header:first-letter, footer:first-letter{
    font-size: 160%;
  }
  /* Too narrow to support three columns */
  @media all and (max-width: 640px) {
  
  header, footer {
  background: #ffeebb;
  min-height: 60px;
  }

   #main, #page {
    -webkit-flex-flow: column;
            flex-flow: column;
            flex-direction: column;
   }

   #main > article, #main > #nav1, #main > #nav2 {
    /* Return them to document order */
    -webkit-order: 0;
            order: 0;
   }
  
   #main > #nav1, #main > #nav2, header, footer {
    min-height: 150px;
   }

   .questions {
    list-style: none;
   }
  }
  </style>