import React, { Component } from 'react'

import TaskContainer from '../TaskContainer/TaskContainer.jsx'

import './tasklistcontainer.css'

export default class TaskList extends Component {
  createTaskList() {
    // DELETE tasks array
    const tasks = [
      [
        'TORI',
        'Talk to Mitchell during instructor office hours.',
        true,
        false,
      ],
      [
        'TORI',
        'Finish Consequi components.',
        true,
        true,
      ]
    ]

    // Map tasks into TaskContainers
    return tasks.map((task) => (
      <TaskContainer task={task} /> 
    ))
  }

  render() {
    return (
      <div id="goals-show-tasks-section-container">
        <div id="goals-show-tasks-section-heading">
          <p id="goals-show-tasks-section-task-text">Task</p>
          <p id="goals-show-tasks-section-completed-text">Completed?</p>
        </div>

        <NewTask goal={goal} />
        {this.createTaskList()}
      </div>
    )
  }
}
