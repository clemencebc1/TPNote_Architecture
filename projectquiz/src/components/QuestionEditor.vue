<script>
let data = [
    {   
        id:0,
        question: 'test',
        answer: 'test',
        type: 'multiple',
        options: [
            { text: 'test', correct: false },
            { text: 'e1', correct: false },
            { text: 'e2', correct: false },
            { text: 'e3', correct: false }
        ]
    },
    {   
        id:1,
        question: 'test',
        answer: 'test',
        type: 'simple',
        options: [
            { text: 'test', correct: false },
            { text: 'e1', correct: false },
            { text: 'e2', correct: false },
            { text: 'e3', correct: false }
        ]
    },
    {   
        id:2,
        question: 'test',
        answer: 'test',
        type: 'multiple',
        options: [
            { text: 'test', correct: false },
            { text: 'e1', correct: false },
            { text: 'e2', correct: false },
            { text: 'e3', correct: false }
        ]
    },
    {   
        id:3,
        question: 'test',
        answer: 'test',
        type: 'simple',
        options: [
            { text: 'test', correct: false },
            { text: 'e1', correct: false },
            { text: 'e2', correct: false },
            { text: 'e3', correct: false }
        ]
    },
    {   
        id:4,
        question: 'test',
        answer: 'test',
        type: 'multiple',
        options: [
            { text: 'test', correct: false },
            { text: 'e1', correct: false },
            { text: 'e2', correct: false },
            { text: 'e3', correct: false }
        ]
    },
    {   
        id:5,
        question: 'test',
        answer: 'test',
        type: 'multiple',
        options: [
            { text: 'test', correct: false },
            { text: 'e1', correct: false },
            { text: 'e2', correct: false },
            { text: 'e3', correct: false }
        ]
    },
    {   
        id:6,
        question: 'test',
        answer: 'test',
        type: 'multiple',
        options: [
            { text: 'test', correct: false },
            { text: 'e1', correct: false },
            { text: 'e2', correct: false },
            { text: 'e3', correct: false }
        ]
    },
    {   
        id:7,
        question: 'test',
        answer: 'test',
        type: 'simple',
    },
    {   
        id:8,
        question: 'test',
        answer: 'test',
        type: 'multiple',
        options: [
            { text: 'test', correct: false },
            { text: 'e1', correct: false },
            { text: 'e2', correct: false },
            { text: 'e3', correct: false }
        ]
    },
    {   
        id:9,
        question: 'test',
        answer: 'test',
        type: 'simple',
    }
]
    

export default {
    data() {
        return data
    }, 
    methods: {
        deleteQuestion(id) {
            console.log('remove:', id)
        },
        printQuestion() {
            console.log('print')
            console.log(this.data[0])
            
        }
    },
    watch: {
        search(newSearch) {
            this.$router.replace({ query: { search: newSearch } });
        }
    },
    emits : ['remove']
}

</script>

<template>
    <article>
        <h2>Editeur de questionnaire</h2>
        <section class="tools">
          
        </section>
        <section id="currentquestionnaire"> </section>
        <h3>Liste Questions</h3>
        <section class="tools" id="questionnairetools"> </section>
        <section id="listquestions"> </section>
      </article>

      <article>
        <h2> Editeur de question</h2>
        <section class="tools">
        
        </section>
        <section id="currentquestion"> </section>
      </article>
</template>

<style>

</style>