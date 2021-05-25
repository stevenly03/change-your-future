import React, { Component } from 'react'
import Houses from './Containers/Houses'
import Cars from './Containers/Cars'
import Clothes from './Containers/Clothes'
import OurFuture from './Components/OurFuture'

export default class App extends Component {

  house1 = "https://images.adsttc.com/media/images/5cb9/ad66/284d/d198/f600/01af/newsletter/07_Houses-of-the-future-dome-house.jpg?1555672417"
  clothes1 = "https://ychef.files.bbci.co.uk/976x549/p075m09t.jpg"
  car1 = "https://i.insider.com/57694de3dd0895261f8b47aa?width=700"
  

  state = {
    houses: [this.house1],
    cars: [this.car1],
    clothes: [this.clothes1],
    ourFuture: []
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
        <Houses moveToCart={this.moveToCart} houses={this.state.houses}/>
        <Cars moveToCart={this.moveToCart} cars={this.state.cars}/>
        <Clothes moveToCart={this.moveToCart} clothes={this.state.clothes}/>
        <OurFuture />
      </div>
    )
  }
}
