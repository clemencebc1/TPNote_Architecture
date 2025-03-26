export default class QuestionAPI {
  constructor() {
    this.questions = []
  }

  async getQuestions(questionnaireID) {
    const response = await fetch('http://localhost:5000/todo/api/v1.0/question/byquiz/' + questionnaireID)
    const data = await response.json()
    this.questions = data.results
  }
}