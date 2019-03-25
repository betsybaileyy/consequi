import React, { Component } from 'react'

import './taskcontainer.css'

export default class TaskContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userBool: '',
    }

    this.setUserBool = this.setUserBool.bind(this)
  }

  componentDidMount() {
    const { task: taskData } = this.props
    this.setState({ userBool: taskData[3] })
  }

  setUserBool() {
    let value = this.state.userBool
    this.setState({ userBool: !value })

    // pass !value into API call to database
  }

  completeControl() {
    const { userBool } = this.state

    if (userBool) {
      return (
        <div className="goals-index-task-completed-container">
          <p onClick={this.setUserBool} className="goals-index-task-completed-true-selected" name="true">Yes</p>
          <p onClick={this.setUserBool} className="goals-index-task-completed-unselected" name="false">No</p>
        </div>
      )
    } else if (!userBool) {
      return (
        <div className="goals-index-task-completed-container">
          <p onClick={this.setUserBool} className="goals-index-task-completed-unselected" name="true">Yes</p>
          <p onClick={this.setUserBool} className="goals-index-task-completed-false-selected" name="false">No</p>
        </div>
      )
    }
  }
  
  render() {
    const { task: taskData } = this.props
    const name = taskData[0]
    const task = taskData[1]
    const goal = taskData[4]

    return (
      <div className="goals-index-task-container">
        <p className="goals-index-task-bud-name">{name}</p>
        <div className="goals-index-task-container-task-section">
          <p className="goals-index-task-task-title">{task}</p>
          <p className="goals-index-goal-title">{goal}</p>
        </div>
        {this.completeControl()}
      </div>
    )
  }
}
