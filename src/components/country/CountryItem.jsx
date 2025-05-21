import React, { Component } from 'react'

export default class Countryitems extends Component {
  render() {
    return (
      <div className="container mx-auto grid grid-cols-4 gap-2.5">
        {this.props.data?.map((item) => (
          <div key={item.id} className="w-35 p-4 border border-gray-300 rounded-lg ">
            <p className="text-xl font-semibold text-gray-800">{item.id}</p>
            <p className="text-lg text-blue-600">{item.city_name}</p>
            <p className="text-sm text-gray-500">{item.country_name}</p>
           <button 
              onClick={() => this.props.delete(item.id)} 
              className="bg-red-300 rounded-lg px-3 py-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    )
  }
}
