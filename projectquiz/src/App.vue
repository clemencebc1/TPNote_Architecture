<!-- <script>
import QuizView from './components/containers/QuizView.vue';
import QuestionsView from './components/containers/QuestionsView.vue';
import QuizEditView from './components/containers/QuizEditView.vue';

// export default {
//   methods: {
        
//   },
//   components: { QuizView, QuestionsView, QuizEditView }
// }
</script> -->

<template>
<p>
    <strong>Current route path:</strong> {{ this.$route.fullPath }}
  </p>
    <main>
        <RouterView />
    </main>
</template>
