import React, { Component } from 'react'

import Navbar from '../../Components/Navbar/Navbar.jsx'
import GoalTitleContainer from './Components/GoalTitleContainer/GoalTitleContainer.jsx'
import OutstandingTasksSection from './Components/OutstandingTasksSection/OutstandingTasksSection.jsx'
import TaskListContainer from './Components/TaskListContainer/TaskListContainer.jsx'
import './goalsshow.css'

export default class GoalsShow extends Component {
  render() {
    const { user } = this.props
    const goal = {
      title: 'Pass the Spring Intensive.',
    }

    return (
      <div>
        <Navbar user={user} />
        <div id="goals-show-container">
          <GoalTitleContainer title={goal.title} />
          <OutstandingTasksSection />
          <TaskListContainer />
        </div>
      </div>
    )
  }
}
