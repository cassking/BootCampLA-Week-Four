import React from 'react';

const Form = props => {
console.log(props)

  return(
    <form onSubmit={props.handleGreetings}>
      <input type="text" onChange={props.handleName}/>
      <div>
        <select onChange={props.handleType}>
        <option value="greeting">Greeting</option>
        <option value="goodbye">Goodbye</option>
      </select>
    </div>
    <input type="submit" className="button" value="Submit "/>

    </form>
  )
}

export default Form;
