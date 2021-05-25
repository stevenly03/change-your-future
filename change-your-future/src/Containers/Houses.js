import React from 'react'
import Cards from '../Components/Cards'



export default function Houses(props) {


  return (
    <div className = "houses-container" onClick={() => props.moveToCart(props.houses)}>
      <h1>Houses</h1>
      <img src={props.houses} alt="mansion #1"></img>
    </div>
  )
}
