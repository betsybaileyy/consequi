import React, { Component } from 'react'

import Navbar from '../../Components/Navbar/Navbar.jsx'
import GoalTitleContainer from './Components/GoalTitleContainer/GoalTitleContainer.jsx'
import OutstandingTasksSection from '../../Components/OutstandingTasksSection/OutstandingTasksSection.jsx'
import TaskListContainer from './Components/TaskListContainer/TaskListContainer.jsx'
import './goalsshow.css'

export default class GoalsShow extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <p>Goals-Show</p>
        <GoalTitleContainer />
        <OutstandingTasksSection />
        <TaskListContainer />
      </div>
    )
  }
}
