import React, { Component } from 'react'

import TaskContainer from '../TaskContainer/TaskContainer.jsx'

import './tasklistcontainer.css'

export default class TaskList extends Component {
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
        {this.createTaskList()}
      </div>
    )
  }
}
