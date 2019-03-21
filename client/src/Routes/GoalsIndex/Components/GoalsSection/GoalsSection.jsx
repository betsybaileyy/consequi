import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'

import GoalContainer from './GoalContainer/GoalContainer.jsx'
import './goalssection.css'

export default class GoalsContainer extends Component {
  createGoalList() {
    // DELETE goals array, satisfies eslint
    const goals = ['goal1', 'goal2', 'goal3']
    // Map goals into Goal
    return goals.map((goal) => (
      <GoalContainer goal={goal} /> 
    ))
  }

  render() {
    return (
      <div>
        <p>My Goals</p>
        <Link to="/new-goal">Create New Goal</Link>
        
        {this.createGoalList()}
      </div>
    )
  }
}