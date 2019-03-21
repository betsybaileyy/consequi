import React, { Component } from 'react'

import './goalscontainer.css'

export default class GoalsContainer extends Component {
  createGoalList() {
    // DELETE goals array, satisfies eslint
    const goals = []
    // Map goals into Goal
    goals.map((goal) => (
      <Goal goal={goal} />
    ))
  }

  render() {
    return (
      <div>
        <p>My Goals</p>
        <Link to="/new-goal"><p>Create New Goal</p></Link>
        {this.createGoalList()}
      </div>
    )
  }
}
