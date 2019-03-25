import React, { Component } from 'react'

// import API from '../../../../utils/API.js'

import './outstandingtaskssection.css'
import { read } from 'fs';

export default class OutstandingTaskHeader extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      outstandingTasks: '',
      readyTasks: '',
   }
  
   this.getOutstandingTasks = this.getOutstandingTasks.bind(this)

   // DELETE:
   this.noAPIfill = this.noAPIfill.bind(this)
  }
  
  componentDidMount() {
    this.getOutstandingTasks()
  }

  // Executes to fill Outstanding Tasks Section
  // if this.state.parent === goals-show
  getOutstandingTasks() {
    const { outstandingTasks, readyTasks } = this.state
    // Gets outstandingTasks for current Goal
    // API.getGoalTasksOutstanding()
    //   .then((res) => {
    //     // sets that number to this.state.outstandingTasks
    //     this.setState({ outstandingTasks: res.data.num })
    //   })

    // // Gets readyTasks for current Goal
    // API.getTasksComplete()
    //   .then((res) => {
    //     this.setState({ readyTasks: res.data.num })
    //   })
    
    // when both states are filled, populate component text
    if (outstandingTasks && readyTasks) {
      return
    } else {
      // DELETE WHOLE ELSE
      this.noAPIfill()
    }
  }

    // DELETE WHOLE FUNCTION
    noAPIfill() {
      this.setState({ outstandingTasks: 1 })
      this.setState({ readyTasks: 2 })
    }

  render() {
    const { outstandingTasks, readyTasks } = this.state

    return (
        <div id="outstanding-tasks-section-container">
          <p className="outstanding-tasks-section-oustanding-tasks-section-text">
          You have
            <span id="outstanding-tasks-section-outstanding-tasks-num"> {outstandingTasks} </span>
          outstanding tasks
        </p>
        <p className="outstanding-tasks-section-oustanding-tasks-section-text">
          Bud approved
            <span id="outstanding-tasks-section-ready-tasks-num"> {readyTasks} </span>
          completed tasks
        </p>
        </div>
    )
  }
}
