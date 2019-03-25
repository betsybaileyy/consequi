import React, { Component } from 'react'

import TaskContainer from './TaskContainer/TaskContainer.jsx'
import './taskssection.css'

export default class TasksSection extends Component {

  createTaskList() {
    // DELETE tasks array, satisfies eslint
    const tasks = [
      [
        'TORI',
        'Talk to Mitchell during instructor office hours.',
        true,
        false,
        'Pass the spring intensive',
      ],
      [
        'TORI',
        'Finish Consequi components.',
        true,
        true,
        'Ship Consequi',
      ]
    ]
    // Map tasks into TaskContainers
    return tasks.map((task) => (
      <TaskContainer task={task} /> 
    ))
  }
  
  render() {
    return (
      <div id="goals-index-tasks-section-container">
        <div id="goals-index-tasks-section-text-container">
          <p id="goals-index-tasks-section-friend-text">Friend</p>
          <p id="goals-index-tasks-section-task-text">Task</p>
          <p id="goals-index-tasks-section-completed-text">Completed?</p>
        </div>
        {this.createTaskList()}
      </div>
    )
  }
}
