import React from 'react'
import Cards from '../Components/Cards'

export default function Clothes(props) {

  const buildCard = () => {
    return props.clothes.map(card => {
      return <Cards key={card.id} card={card} title={card.title} image={card.image} description={card.description} moveToCart={props.moveToCart}/>
    })
  }

  return (
    <div>
      <h1>Clothes</h1>
    <div className = "clothes-container">
      {buildCard()}
    </div>
    </div>
  )
}
