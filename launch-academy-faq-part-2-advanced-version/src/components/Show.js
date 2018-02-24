import React from 'react';
import Question from './Question';

const Show = (props) => {
  return(
    <div className="question-show">
    
      <h2 className="question-page-title">{props.question}</h2>
      <p className="question-page-body">{props.id} {props.answer}</p>
      <p><a href="/">back</a></p>

    </div>
  )
}

export default Show;
