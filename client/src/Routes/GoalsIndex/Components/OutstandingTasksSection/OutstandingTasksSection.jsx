import React, { Component } from 'react'

import OutstandingTaskHeaderText from './OutstandingTasksSectionText/OutstandingTasksSectionText.jsx'
import './outstandingtaskssection.css'

export default class OutstandingTaskHeader extends Component {
  render() {
    return (
      <div>
        <p>OutstandingTaskHeader</p>
        <OutstandingTaskHeaderText />
        <OutstandingTaskHeaderText />
      </div>
    )
  }
}
