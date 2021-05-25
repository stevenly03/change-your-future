import React from 'react'

export default function Cards(props) {

  

  return (
    <div className='card'>
      <div onClick={() => props.moveToCart(props.card)}>
        <h1 className= 'card-title'>{props.title}</h1>
        <img src={props.image} alt={props.title} />
        <p>{props.description}</p>
      </div>
    </div>
  )
}
