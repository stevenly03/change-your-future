import React from 'react'

export default function Cards(props) {

  return (
    <div className='card' onClick={() => props.moveToCart()}>
      <h1 className= 'card-title'></h1>
      <img src='#' alt="#" />
      <p>description</p>
      
    </div>
  )
}
