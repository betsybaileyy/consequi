import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'

import API from '../../../../utils/API.js'

import GoalContainer from './GoalContainer/GoalContainer.jsx'
import './goalssection.css'

export default class GoalsContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       goals: '',
    }

    this.getGoals = this.getGoals.bind(this)
  }
  
  componentDidMount() {
    this.getGoals()
  }

  getGoals() {
    API.getUserGoals()
      .then((res) => {
        this.setState({ goals: res.data })
      })
  }

  createGoalList() {
    // const { goals } = this.state 
    // if (!goals) {
    //   return null
    // } else {
    // DELETE goals array, testing
    const goals = [
      [
        'Pass the Spring Intensive.',
        4,
      ],
      [
        'Build my network and find a mentor.',
        2,
      ],
      [
        'Ship Consequi.',
        1,
      ]
    ]
    // Map goals into GoalContainers
    return goals.map((goal) => (
      <GoalContainer goal={goal} /> 
    ))
    // }
  }

  render() {
    return (
      <div id="goals-section-container">
        <p id="goals-section-container-my-goals-text">My Goals</p>
        <Link to="/new-goal"><p id="goals-section-container-create-new">Create New Goal</p></Link>
        
        {this.createGoalList()}
      </div>
    )
  }
}