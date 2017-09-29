import React from 'react';
import Grocery from './Grocery';

const GroceryList = props => {

  let groceries = props.groceries.map(grocery => {
    return(
      <Grocery
        key={grocery.id}
        name={grocery.name}
        handleButtonClick={props.handleButtonClick}
      />
    )
  })

  return(
    <div>
      <ul>
        {groceries}
      </ul>
    </div>
  )
}

export default GroceryList;
