import React from 'react'
import OneAddress from './OneAddress'

const GroceryList = (props) => {
  let addresses = props.addresses.map((oneaddress) => {

    let firstName = oneaddress.firstName
    let handleButtonClick = () =>{
      props.handleButtonClick(id)
    }
    return (
      <OneAddress
        key={oneaddress.id}
        firstName={oneaddress.firstName}
        handleButtonClick={handleButtonClick}
      />
    )
  })

  return (
    <ul>
      {addresses}
    </ul>
  )
}

export default OneAddress
