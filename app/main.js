import QuestionController from "./components/QuestionController.js"

class App {
  constructor() {
    this.controllers = {
      qController: new QuestionController()
    }
  }
}

window['app'] = new App();