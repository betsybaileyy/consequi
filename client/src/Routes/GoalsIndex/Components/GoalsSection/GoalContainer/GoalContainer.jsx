import React, { Component } from 'react'

import './goalcontainer.css'

export default class GoalContainer extends Component {
  render() {
    const { goal: goalData } = this.props
    const goal = goalData[0]
    const task = goalData[1]
    
    return (
      <div className="goals-section-goal-container">
        <p className="goals-section-goal-container-goal-text">{goal}</p>
        <p className="goals-section-goal-container-task-text">{task} outstanding tasks</p>
      </div>
    )
  }
}
