import React, { Component } from 'react'

import Navbar from '../../Components/Navbar/Navbar.jsx'
import CreateGoalContainer from './Components/CreateGoalContainer/CreateGoalContainer.jsx'

import './goalsnew.css'

export default class GoalsNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CreateGoalContainer />
      </div>
    )
  }
}
