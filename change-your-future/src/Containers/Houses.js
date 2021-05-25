import React from 'react'
import Cards from '../Components/Cards'



export default function Houses(props) {

  const buildCard = () => {
    return props.houses.map(card => {
      return <Cards key={card.id} title={card.title} image={card.image} description={card.description} moveToCart={props.moveToCart}/>
    })
  }
  
  return (
    <div className = "houses-container">
      {buildCard()}
    </div>
  )
}
