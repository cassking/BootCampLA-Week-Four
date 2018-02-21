import React from 'react';

const TextField = props => {
  return (
   <div className='TextField'>
     <label htmlFor={props.name}>{props.label}
      <input
        type={props.type}
        value={props.content}
        label={props.label}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
      />
    </label>
    </div>
  );
};

export default TextField;
