import React, { Component } from 'react'

import Navbar from '../../Components/Navbar/Navbar.jsx'
import OutstandingTasksSection from '../../Components/OutstandingTasksSection/OutstandingTasksSection.jsx'
import GoalsSection from './Components/GoalsSection/GoalsSection.jsx'
import TasksSection from './Components/TasksSection/TasksSection.jsx'

import './goalsindex.css'

export default class GoalsIndex extends Component {
  render() {
    return (
      <div>
        <Navbar user={this.props.user} />
        <p>GoalsIndex</p>
        <OutstandingTasksSection />

        <GoalsSection />
        <TasksSection />
      </div>
    )
  }
}
