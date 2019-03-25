import React, { Component } from 'react'

import Navbar from '../../Components/Navbar/Navbar.jsx'
import OutstandingTasksSection from './Components/OutstandingTasksSection/OutstandingTasksSection.jsx'
import GoalsSection from './Components/GoalsSection/GoalsSection.jsx'
import TasksSection from './Components/TasksSection/TasksSection.jsx'

import './goalsindex.css'

export default class GoalsIndex extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div id="goal-index-container">
        <Navbar user={this.props.user} clearUser={this.props.clearUser} />

        <div id="goal-index-outstanding-tasks-section">
          <OutstandingTasksSection parent="goals-index" />
        </div>

        <GoalsSection />
        <TasksSection />
      </div>
    )
  }
}
