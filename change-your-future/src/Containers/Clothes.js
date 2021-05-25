import React from 'react'
import Cards from '../Components/Cards'

export default function Clothes(props) {
  return (
    <div className = "clothes-container">
      <h1>Clothes</h1>
      <img src={props.clothes} alt="clothes of the future uno"></img>
    </div>
  )
}
