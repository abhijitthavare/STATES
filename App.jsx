import React, { Component } from 'react'

export default class App extends Component 
{ 
    state={
        userName:"abhijit"
    }
  render() {
    return (
      <h1>{this.state.userName}</h1>
    )
  }
}
