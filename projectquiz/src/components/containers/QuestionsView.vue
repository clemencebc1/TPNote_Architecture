<script>
export default {
  methods: {
    delQuestion() {
      this.$store.commit('delQuestion', this.$route.params.id)
      this.$router.push('/')
    },
    printRouteId() {
      console.log(this.$route.params.id)
    }
  }
}

</script>

<template>
    <article>
        <h2> Editeur de question</h2>
        <section class="tools">
          <img id="delQuestion" src="../assets/delete.png" alt="Supprimer Questionnaire"/>
        </section>
        <section id="currentquestion"> </section>
      </article>
</template>