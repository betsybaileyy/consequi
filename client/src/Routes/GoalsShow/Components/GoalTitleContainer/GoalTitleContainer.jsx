import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'

import './goaltitlecontainer.css'

export default class GoalTitleContainer extends Component {
  render() {
    const { title } = this.props
    return (
      <div id="goals-show-title-container">
        <p id="goals-show-title-text">{title}</p>
        <Link to="/">
          <img id="goals-show-exit-btn" src="/img/exit.png" />
        </Link>
      </div>
    )
  }
}
