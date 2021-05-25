import React, { Component } from 'react'
import Houses from './Containers/Houses'
import Cars from './Containers/Cars'
import Clothes from './Containers/Clothes'
import OurFuture from './Components/OurFuture'
import './App.css'

export default class App extends Component {

  state = {
    houses: [],
    cars: [],
    clothes: [],
    ourFuture: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/outfits')
      .then(response => response.json())
      .then(clothes => {this.setState({
        clothes
      })})
      
    fetch('http://localhost:3000/cars')
      .then(response => response.json())
      .then(cars => {this.setState({
        cars
      })})
      
    fetch('http://localhost:3000/houses')
      .then(response => response.json())
      .then(houses => {this.setState({
        houses
      })})
    }


  moveToCart = (clickedCard) => {
    const foundCard = this.state.ourFuture.find(
      (card) => clickedCard === card)
    if (!foundCard) {
      this.setState({
        ourFuture: [...this.state.ourFuture, clickedCard]
      })
    }
  }



  

  render() {
    return (
      <div className="app">
        <div className="main-title">CHANGE YOUR FUTURE</div>
        <Houses moveToCart={this.moveToCart} houses={this.state.houses} />
        <Cars moveToCart={this.moveToCart} cars={this.state.cars} />
        <Clothes moveToCart={this.moveToCart} clothes={this.state.clothes} />
        <OurFuture ourFuture={this.state.ourFuture}/>
      </div>
    )
  }
}

