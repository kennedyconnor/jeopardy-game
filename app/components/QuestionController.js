import QuestionService from "./QuestionService.js"

//Private

let _qService = new QuestionService();

function _drawQuestions() {
  let questions = _qService.Questions
  let template = ''
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    template += q.Template
  }
  document.getElementById("question-box").innerHTML = template;
}


//Public
export default class QuestionController {
  constructor() {

    _qService.addSubscriber('questions', _drawQuestions)
    _qService.getApiQuestions();
  }

  checkAnswer(answer) {
    _qService.checkAnswer(answer)
  }
}