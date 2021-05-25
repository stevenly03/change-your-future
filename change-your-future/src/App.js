import React, { Component } from 'react'
import Houses from './Containers/Houses'
import Cars from './Containers/Cars'
import Clothes from './Containers/Clothes'
import OurFuture from './Components/OurFuture'

export default class App extends Component {
  
  state = {
    houses: [],
    cars: [],
    clothes: [],
    ourFuture: []
  }
  
  render() {
    return  (
      <div className = "app">
        <Houses />
        <Cars />
        <Clothes /> 
        <OurFuture />
      </div>
    )
  }
}
