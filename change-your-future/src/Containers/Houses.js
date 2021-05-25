import React from 'react'
import Cards from '../Components/Cards'



export default function Houses(props) {

  const buildCard = () => {
    return props.houses.map(card => {
      return <Cards key={card.id} card={card}title={card.title} image={card.image} description={card.description} moveToCart={props.moveToCart}/>
    })
  }
  
  return (
    <div>
      <h1>Houses</h1>
    <div className = "houses-container">
      {buildCard()}
    </div>
    </div>
  )
}
