import React, { Component } from 'react'

import './creategoalcontainer.css'

export default class CreateGoalContainer extends Component {
  setGoal = () => {
    // API.setGoal()
    //   .then(res => console.log(res))
    console.log('goal set!')
  }

  render() {
    return (
      <div>
        <p>Set a New Goal</p>
        <form>
          <label>Goal Title
            <input type="text" name="title" />
          </label>
          <label>Friend Email
            <input type="email" name="email" />
          </label>

          <button onClick={this.setGoal}>SET</button>
        </form>
      </div>
    )
  }
}
