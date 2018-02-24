import React, { Component } from 'react';
import Show from '../components/Show';
import Question from '../components/Question';



class ShowContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: {}
    }
  }

  // componentDidMount() {
  //     // debugger
  //   let questionId = this.props.params.id;
  //   fetch(`/api/v1/questions/${questionId}`)
  //     .then(response => response.json())
  //     .then(responseData => {
  //       this.setState({ question: responseData })
  //     })
  // }

  render() {
    return(
      <div>
        <h1>One question and one answer</h1>
        <Show
           id={this.state.question.id}
           question={this.state.question.question}
           answer={this.state.question.answer}
         />
      </div>
    )
  }
}

export default ShowContainer;
