import Question from "../models/Question.js"


//Private

let _api = new axios.create({
  baseURL: 'http://jservice.io/api/random'
})

let _state = {
  questions: []
}
let _subscribers = {
  questions: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}

//Public
export default class QuestionService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }
  get Questions() {
    return _state.questions.map(q => new Question(q))
  }

  getApiQuestions() {
    _api.get()
      .then(response => {
        console.log({ response })
        let data = response.data.map(rawData => new Question(rawData))
        _setState('questions', data)
      })
      .catch(err => {
        console.error(err)
      })

  }
}