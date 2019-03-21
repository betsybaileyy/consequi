import React, { Component } from 'react'

import OutstandingTaskHeaderText from './OutstandingTaskText/OutstandingTaskHeaderText.jsx'
import './outstandingtaskheader.css'

export default class OutstandingTaskHeader extends Component {
  render() {
    return (
      <div>
        <p>OutstandingTaskHeader</p>
        <OutstandingTaskHeaderText />
      </div>
    )
  }
}
