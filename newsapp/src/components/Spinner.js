import React, { Component } from 'react'
import loder from './1493.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loder} alt="Loading"  />
      </div>
    )
  }
}
