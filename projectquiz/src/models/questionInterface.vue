<script>
export default class QuestionInterface {
  constructor() {
    this.question = ''
    this.answer = ''
    this.type = ''
  }

  provideQuestion() {
    return {
      question: this.question,
      answer: this.answer,
      type: this.type
    }
  }
}
</script>


