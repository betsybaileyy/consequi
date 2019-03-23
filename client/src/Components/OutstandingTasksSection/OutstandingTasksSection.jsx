import React, { Component } from 'react'

import API from '../../utils/API.js'

import OutstandingTaskHeaderText from './OutstandingTasksSectionText/OutstandingTasksSectionText.jsx'
import './outstandingtaskssection.css'

export default class OutstandingTaskHeader extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      parent: '',
      outstandingTasks: '',
      readyTasks: '',
      completeTasks: '',
   }
  
   this.getOutstandingTasks = this.getOutstandingTasks.bind(this)
  }
  
  componentDidMount() {
    const { parent } = this.props
    this.setState({ parent: parent })

    switch (parent) {
      case 'goals-index':
        API.getUserTasksOutstanding()
          .then((res) => {
            this.setState({
              outstandingTasks: res.data.num,
            })
          })
      case 'goals-show':
          API.something()
    }
    // Populate Oustanding Tasks
    this.getOutstandingTasks()
  }

  getOutstandingTasks() {
    // Gets outsandingTasks for current User
    API.getUserTasksOutstanding()
      // sets that number to this.state.outstandingTasks
      .then((res) => {
        console.log(res.data)
        this.setState({ outstandingTasks: res.data.num })
      })
  }

  render() {
    return (
      <div id="outstanding-tasks-section-container">
        <OutstandingTaskHeaderText />
        <OutstandingTaskHeaderText />
      </div>
    )
  }
}
