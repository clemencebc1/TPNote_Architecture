<script>

  export default{ 
    props: {
        quiz: Object
    },
    methods:{
        show : function() {
          this.$emit('showQuestion', {id:this.quiz.id});

      }
      },
      emits : ['showQuestion']
  }
</script>

<template>
  <button @click="show"><img src="../../assets/save.png" alt="btn show questions"></button>
</template>
