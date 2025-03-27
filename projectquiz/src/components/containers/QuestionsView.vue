<script>
import QuizAPI from '../../services/QuizAPI.js';
let data = {
    question: []
  }
export default {
  data() {
    return data
  }, 
  methods: {
    async delQuestion() {
      console.log("update question");
      let result = await QuizAPI.deleteQuestion(this.question.id); 
      this.$router.push('/');
    },
    printRouteId() {
      console.log(this.$route.params.id)
    },
    async getQuestion(id){
      console.log("recuperation question");
      let result = await QuizAPI.getQuestionById(id);
      this.question = result;  
      console.log(this.question);
    },
    async updateQuestion(){
      console.log("update question");
      let result = await QuizAPI.updateQuestion(this.question.id, this.question); 
      console.log(this.question);
      if(result){
        this.$router.push('/');
      }
    }
   
  },
  mounted() {
      this.getQuestion(this.$route.params.id);

  }
}

</script>
<template>
    <article>
        <h2> Editeur de question</h2>
        <section class="tools">
          
          <button @click="delQuestion"><img id="delQuestion" src="../../assets/delete.png" alt="Supprimer question"/></button>
        </section>
        <section id="currentquestion">
        <label>Titre question</label><input type="text" id="question" v-bind:placeholder="question.title" v-model="question.title"/>
        <label>reponse</label><input type="text" id="question" v-bind:placeholder="question.reponse" v-model="question.reponse"/>
      </section>

          <fieldset>
        <legend>Type de question</legend>
        <label>
          <input type="radio" v-model="question.questionType" value="open" />
          Question ouverte
        </label>
        <label>
          <input type="radio" v-model="question.questionType" value="closed" />
          Question fermée
        </label>
      </fieldset>
      <button @click="updateQuestion">Mettre à jour</button>
      </article>
</template>

<style>
article {
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
#currentquestion > label {
  margin-top:5px;
  display: block;
}
input {
  margin-bottom:20px;
}
  
  </style>