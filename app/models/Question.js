export default class Question {
  constructor(data) {
    this.id = data.id
    this.question = data.question
    this.answer = data.answer
    this.value = data.value
    this.category = data.category.title

  }

  get Template() {
    return `
    <li>Question: ${this.question}</li>
    <li>Category: ${this.category}</li>
    <li>Answer: ${this.answer}</li>
    `
  }
}