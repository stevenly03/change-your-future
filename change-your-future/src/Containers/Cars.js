import React from 'react'
import Cards from '../Components/Cards'
export default function Cars(props) {
  return (
    <div className="cars-container">
      <h1>Cars</h1>
      <img src={props.cars} alt="car numero uno"></img>
    </div>
  )
}
