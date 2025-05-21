import React, { Component } from 'react'

export default class Fooditems extends Component {
    
  render() {
    return (
      <div>
    {this.props.data?.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    )
  }
}
