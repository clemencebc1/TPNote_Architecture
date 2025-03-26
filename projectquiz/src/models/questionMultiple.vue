<script>
export default class QuestionMultiple{
  constructor() {
    this.question = ''
    this.answer = ''
    this.type = 'multiple'
    this.options = [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  }
}
</script>