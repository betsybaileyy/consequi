import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'

import './creategoalcontainer.css'

export default class CreateGoalContainer extends Component {
  setGoal = () => {
    // API.setGoal()
    //   .then(res => console.log(res))
    console.log('goal set!')
  }

  render() {
    return (
      <div id="new-goal-container">
        <div id="new-goal-heading">
          <p id="new-goal-heading-text">Set a New Goal</p>
          <Link to="/">
            <img id="new-goal-heading-exit-btn" src="/img/exit.png" />
          </Link>
        </div>
        <form id="new-goal-form">
          <label id="new-goal-form-title">Goal Title
            <input type="text" name="title" />
          </label>
          <label id="new-goal-form-summary">Summary
            <textarea type="text" name="summary" />
          </label>
          <label id="new-goal-form-email-label">Goal Bud
            <input type="email" name="email" />
          </label>

          <button onClick={this.setGoal} id="new-goal-form-submit-btn">SET</button>
        </form>
      </div>
    )
  }
}
