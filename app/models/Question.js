export default class Question {
  constructor(data) {
    this.id = data.id
    this.question = data.question
    this.answer = data.answer
    this.value = data.value
    this.category = data.category
    this.categoryTitle = this.category.title

  }

  get Template() {
    return `
    <li>Category: ${this.categoryTitle}</li>
    <li>Question: ${this.question}</li>
    `
  }
}