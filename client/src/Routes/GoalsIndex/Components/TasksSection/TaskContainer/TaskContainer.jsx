import React, { Component } from 'react'

import './taskcontainer.css'

export default class TaskContainer extends Component {
  render() {
    return (
      <div>
        <p>{this.props.task}</p>
      </div>
    )
  }
}
