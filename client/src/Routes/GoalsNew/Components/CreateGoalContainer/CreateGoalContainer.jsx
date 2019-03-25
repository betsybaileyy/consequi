import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'

import API from '../../../../utils/API.js'

import './creategoalcontainer.css'

export default class CreateGoalContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       summary: '',
       email: '',
    }

    this.setGoal = this.setGoal.bind(this)
    this.saveGoal = this.saveGoal.bind(this)
  }


  saveGoal = (e) => {
    const name = e.target.name
    const value = e.target.value
    
    this.setState({ [name]: value })
  }
  
  setGoal = (e) => {
    e.preventDefault()

    const { title, summary, email } = this.state
    
    const goalData = {
      title: title,
      summary: summary,
      email: email
    }

    API.setGoal(goalData)
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
            <input type="text" name="title" onChange={this.saveGoal} />
          </label>
          <label id="new-goal-form-summary">Summary
            <textarea type="text" name="summary" onChange={this.saveGoal} />
          </label>
          <label id="new-goal-form-email-label">Goal Bud
            <input type="email" name="email" onChange={this.saveGoal} />
          </label>

          <button onClick={this.setGoal} id="new-goal-form-submit-btn">SET</button>
        </form>
      </div>
    )
  }
}
