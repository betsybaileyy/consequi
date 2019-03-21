import React, { Component } from 'react'

import './goalcontainer.css'

export default class GoalContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>{this.props.goal}</p>
      </div>
    )
  }
}
