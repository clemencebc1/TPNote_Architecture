<script>
import QuizAPI from '../../services/QuizAPI.js';
let data = {
    question: {title:"", reponse:"", questionType:"open", reponse:"", choix1:"", choix2:"", choix3:"", choix4:"", questionnaire_id:-1},
}
export default {
  data() {
    return data
  }, 
  methods: {
    async ajouterQuestion(){
      console.log("ajout question");
      let result = await QuizAPI.addQuestion(this.question);
      console.log(this.questions);
      if(result){
        this.$router.push('/');
      }
    }
  },
  mounted(){
    this.question.questionnaire_id = this.$route.params.id;
  }
}
</script>

<template>
    <article>
        <h2>Création d'une question</h2>
        <section id="currentquestion">
        <label>Titre question</label><input type="text" id="question" v-bind:placeholder="question.title" v-model="question.title"/>
        <label>reponse</label><input type="text" id="question" v-bind:placeholder="question.reponse" v-model="question.reponse"/>
      </section>

          <fieldset>
        <legend>Type de question</legend>
        <label>
          <input type="radio" v-model="question.questionType" value="open" />
          Question simple
        </label>
        <label>
          <input type="radio" v-model="question.questionType" value="multiple" />
          Question multiple
        
        </label>
        <div v-if="question.questionType === 'multiple'">

          <div>
            <label>Choix 1</label>
            <input type="text" v-model="question.choix1" />
          </div>
          <div>
            <label>Choix 2</label>
            <input type="text" v-model="question.choix2" />
          </div>
          <div>
            <label>Choix 3</label>
            <input type="text" v-model="question.choix3" />
          </div>
          <div>
            <label>Choix 4</label>
            <input type="text" v-model="question.choix4" />
          </div>
        </div>
      </fieldset>
      <button @click="ajouterQuestion">Ajouter ma question</button>
    </article>
</template>