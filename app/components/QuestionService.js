import Question from "../models/Question.js"
import axios from 'axios'

//Private

let _api = axios.create({
  baseURL: 'http://jservice.io/api/random'
})

let _state = {
  questions: []
}
let _subscribers = {
  questions: []
}

function _setState(propName, data) {
  _state.propName = data
  _subscribers.propName.forEach(fn => fn())
}

//Public
export default class QuestionService {
  addSubscriber(propName, fn) {
    _state[propName].push(fn)
  }
  get Questions() {
    return _state.questions.map(q => new Question(q))
  }

  getapiQuestions() {
    _api.get('/random')
      .then(response => {
        let data = response.data.map(rawData => new Question(rawData))
        _setState('questions', data)
      })
      .catch(err => {
        console.error(err)
      })

  }
}