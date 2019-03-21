import React, { Component } from 'react'

import OutstandingTasksSection from '../../Components/OutstandingTasksSection/OutstandingTasksSection.jsx'
import GoalsSection from './Components/GoalsSection/GoalsSection.jsx'
import TasksSection from './Components/TasksSection/TasksSection.jsx'

import './goalsindex.css'

export default class GoalsIndex extends Component {
  render() {
    return (
      <div>
        <p>GoalsIndex</p>
        <OutstandingTasksSection />

        <GoalsSection />
        <TasksSection />
      </div>
    )
  }
}
