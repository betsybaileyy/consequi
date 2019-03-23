import React, { Component } from 'react'
import './outstandingtaskssectiontext.css'

export default class OutstandingTaskHeaderText extends Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.num}</p>
      </div>
    )
  }
}
