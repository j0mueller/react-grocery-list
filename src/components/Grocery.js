import React from 'react';

const Grocery = props => {
  return (
    <div className="row grocery">
      <li>
        {props.name} 
        <button className="button" type="submit" onClick={props.handleButtonClick}>DELETE</button>
      </li>
    </div>
  )
}

export default Grocery;
