import React, { Component } from 'react'

import TaskContainer from './TaskContainer/TaskContainer.jsx'
import './taskssection.css'

export default class TasksSection extends Component {

  createTaskList() {
    // DELETE tasks array, satisfies eslint
    const tasks = ['task1', 'task2', 'task3']
    // Map tasks into TaskContainers
    return tasks.map((task) => (
      <TaskContainer task={task} /> 
    ))
  }
  
  render() {
    return (
      <div>
        <p>Friend</p>
        <p>Task</p>
        <p>Completed?</p>

        {this.createTaskList()}
      </div>
    )
  }
}
