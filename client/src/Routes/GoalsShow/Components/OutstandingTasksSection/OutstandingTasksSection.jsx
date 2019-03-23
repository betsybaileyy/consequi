import React, { Component } from 'react'

// import API from '../../../../utils/API.js'

import OutstandingTaskHeaderText from './OutstandingTasksSectionText/OutstandingTasksSectionText.jsx'
import './outstandingtaskssection.css'
import { read } from 'fs';

export default class OutstandingTaskHeader extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      parent: '',

      outstandingTasks: '',
      readyTasks: '',
   }
  
   this.getOutstandingTasks = this.getOutstandingTasks.bind(this)

   // DELETE:
   this.noAPIfill = this.noAPIfill.bind(this)
  }
  
  componentDidMount() {
    const { parent } = this.props
    this.setState({ parent: parent })

    switch (parent) {
      case 'goals-index':
        // Populate Oustanding Tasks with Index API Routes
        this.getOutstandingTasksIndex()
      case 'goals-show':
        // Populate Outstanding Tasks with Show API Routes
        this.getOutstandingTasksShow()
    }
  }

  // Executes to fill OutstandingTasksSection
  // if this.state.parent === goals-index
  getOutstandingTasksIndex() {
    const { outstandingTasks, readyTasks } = this.state
    // Gets outsandingTasks for current User
    // API.getUserTasksOutstanding()
    //   // sets that number to this.state.outstandingTasks
    //   .then((res) => {
    //     this.setState({ outstandingTasks: res.data.num })
    //   })

    // // Gets readyTasks for current User's buddies
    // API.getBuddyTasksOutstanding()
    //   .then((res) => {
    //     // sets that number to this.state.readyTasks
    //     this.setState({ readyTasks: res.data.num })
    //   })

    // when both states are filled, populate component text
    if (outstandingTasks && readyTasks) {
      this.setTextIndex()
      this.populateOutstandingTaskHeaderText()
    } else {
      // DELETE WHOLE ELSE
      this.noAPIfill()
      this.setTextIndex()
      this.populateOutstandingTaskHeaderText()
    }
  }

  // Executes to fill Outstanding Tasks Section
  // if this.state.parent === goals-show
  getOutstandingTasksShow() {
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
      this.setTextShow()
      this.populateOutstandingTaskHeaderText()
    } else {
      // DELETE WHOLE ELSE
      this.noAPIfill()
      this.setTextShow()
      this.populateOutstandingTaskHeaderText()
    }
  }

  setTextIndex() {
    const { outstandingTasks, readyTasks } = this.state
    const outstandingTasksTextValue = `You have ${this.state.outstandingTasks} outstanding tasks`
    const readyTasksTextValue = `Friends have ${this.state.readyTasks} ready for approval`

    this.setState({
      outstandingTasksText: outstandingTasksTextValue
    })

    this.setState({
      readyTasksText: readyTasksTextValue
    })
  }

  setTextShow() {
    this.setState({
      outstandingTasksText: `You have {this.props.outstandingTasks} outstanding tasks`
    })

    this.setState({
      readyTasksText: `Bud approved {this.props.readyTasks} completed tasks`
    })
  }

  // DELETE WHOLE FUNCTION
  noAPIfill() {
    this.setState({ outstandingTasks: 1 })
    this.setState({ readyTasks: 2 })
  }

  populateOutstandingTaskHeaderText() {
    const { 
      outstandingTasks,
      readyTasks,
      outstandingTasksText,
      readyTasksText
    } = this.state

    if (outstandingTasks === '' && readyTasks === '') {
      return null
    }

    return (
      <div id="outstanding-tasks-section-container">
        <OutstandingTaskHeaderText text={outstandingTasksText} num={outstandingTasks} />
        <OutstandingTaskHeaderText text={readyTasksText} num={readyTasks} />
      </div>
    )
  }

  render() {
    return (
        <div>
          {this.populateOutstandingTaskHeaderText()}
        </div>
    )
  }
}
