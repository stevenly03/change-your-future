import React from 'react'
import Cards from '../Components/Cards'
export default function Cars(props) {

  const buildCard = () => {
    return props.cars.map(card => {
      return <Cards key={card.id} title={card.title} image={card.image} description={card.description} moveToCart={props.moveToCart}/>
    })
  }

  return (
    <div className="cars-container">
      {buildCard()}
    </div>
  )
}
