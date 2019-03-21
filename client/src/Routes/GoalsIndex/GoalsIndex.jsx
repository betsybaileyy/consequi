import React, { Component } from 'react'

import OutstandingTaskHeader from './Components/OutstandingTaskHeader/OutstandingTaskHeader.jsx'
import GoalsSection from './Components/GoalsSection/GoalsSection.jsx'
import TasksSection from './Components/TasksSection/TasksSection.jsx'

export default class GoalsIndex extends Component {
  render() {
    return (
      <div>
        <p>GoalsIndex</p>
        <OutstandingTaskHeader />

        <GoalsSection />
        <TasksSection />
      </div>
    )
  }
}
