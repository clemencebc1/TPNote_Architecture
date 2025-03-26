<script>

  export default{ 
    methods:{
        show : function() {
          this.$emit('show');
      }
      },
      emits : ['show']
  }
</script>

<template>
  <input id="buttonquiz" type="button" value="Recuperer les quiz" @click="show"/>
</template>
