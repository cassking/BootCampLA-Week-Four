import React from 'react';
import Question from '../components/Question';
import Form from '../components/Form';
import ShowContainer from './ShowContainer';
import Show from '../components/Show';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedQuestion: null,
      questions: []
    }

    this.toggleQuestionSelect = this.toggleQuestionSelect.bind(this)
    this.addQuestionAnswer = this.addQuestionAnswer.bind(this)
  }


  toggleQuestionSelect(id) {
    if (id === this.state.selectedQuestion) {
      this.setState({ selectedQuestion: null})
    } else {
      this.setState({ selectedQuestion: id })
    }
  }

  componentDidMount(){
    fetch("/api/v1/questions")
    .then(response => {
      console.log("response", response)
     if (response.ok) {
       return response;
     } else {
       let errorMessage = `${response.status} (${response.statusText})`,
           error = new Error(errorMessage);
       throw(error);
     }
   })
   .then(response => response.text())
   .then(data => {
     let dataParsed = JSON.parse(data);
     console.log(dataParsed);
     this.setState({
       questions:dataParsed
     })
   })
   .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



  addQuestionAnswer(ourFormPayload) {
    fetch(`/api/v1/questions`, {
    method: 'post',
    body: JSON.stringify(ourFormPayload)
  }).then( (response) => response.json())
  .then(data => {
    this.setState({
     questions: this.state.questions.concat(data)
   })
  })
    .catch((err)=>console.log(err))
  }


  render() {
    let questions = this.state.questions.map(question => {
      let selected;
      if (this.state.selectedQuestion === question.id) {
        selected = true
      }

      let handleClick = () => { this.toggleQuestionSelect(question.id) }

      return(
        <div>
        {/* <ShowContainer
          id= {question.id}
          key={question.id}
          question={question.question}
          answer={question.answer}
         /> */}

        <Question
          id= {question.id}
          key={question.id}
          question={question.question}
          answer={question.answer}
          selected={selected}
          handleClick={handleClick}
        />
          </div>
      )
    })

    return(
      <div className='page'>


        <h1>Were Here To Help</h1>
        <div className='question-list'>
          {questions}
        </div>
        <div className="form-container">
          <Form
            addQuestionAnswer={this.addQuestionAnswer}
          />

        </div>
      </div>
    )
  }
}

export default App;
