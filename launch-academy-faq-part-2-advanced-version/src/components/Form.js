import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question:'',
      answer:'',
      id:''
    }
    //put binds in constructore
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      question: '',
      answer: ''
    })
  }
  handleQuestionChange(event){
    // debugger
    let newQuestion = event.target.value
      console.log(event.target.value)
    this.setState(
      {question: newQuestion}
    )

  }

  handleAnswerChange(event){
    let newAnswer = event.target.value
    console.log(event.target.value)
      this.setState(
        {answer: newAnswer}
      )
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('click')
    //assemble formPaylod here
    let formPayload = {
      id: `${this.state.question.replace(" ","-")}`,
      question: this.state.question,
      answer: this.state.answer
    }
    console.log("my payload: ", formPayload)
    this.props.addQuestionAnswer(formPayload)
    this.setState({
      question: '',
      answer: ''
    })

    // call clear function from here on onSubmit
     this.handleClearForm(event)
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Add Question:
            <input
              key={this.state.id}
              name="question"
              type="text"
              value={this.state.question}
              onChange={this.handleQuestionChange}
          />
          </label>

        <label> Add Answer
          <input
            key={this.state.id}
            name="answer"
            type="text"
            value={this.state.answer}
            onChange={this.handleAnswerChange}
        />
        </label>
        <div className="button-group">
          <input className="button" type="submit" value="Send POST" />

          <button className="button" onClick={this.handleClearForm}>Clear</button>

        </div>
          </form>

      </div>
    )
  }
}

export default Form;
