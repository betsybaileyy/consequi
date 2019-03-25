import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'

import './goalcontainer.css'

export default class GoalContainer extends Component {
  render() {
    const { goal: goalData } = this.props
    const goal = goalData[0]
    const task = goalData[1]
    
    return (
      <div className="goals-section-goal-container">
        <Link to={{
          pathname: '/goals-show',
          state: {
            data: this.props.task, //task id?
          }
        }}>
          <p className="goals-section-goal-container-goal-text">{goal}</p>
        </Link>
        <p className="goals-section-goal-container-task-text">{task} outstanding tasks</p>
      </div>
    )
  }
}
