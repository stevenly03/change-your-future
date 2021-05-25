import React from 'react'
import Cards from './Cards'

export default function OurFuture(props) {

  const buildCard = () => {
    return props.ourFuture.map(card => {
      return <Cards key={card.id} title={card.title} image={card.image} description={card.description}/>
    })
  }

  return (
    <div>
      <h1>Our Future</h1>

    <div className="our-future-container">
      {buildCard()}
    </div>
    </div>
  )
}
