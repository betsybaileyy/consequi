import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Landing from './Landing/Landing.jsx'
import GoalsIndex from './GoalsIndex/GoalsIndex.jsx'
import GoalsNew from './GoalsNew/GoalsNew.jsx'
import GoalsShow from './GoalsShow/GoalsShow.jsx'

export default class Routes extends Component {  
  render() {
    const { user } = this.props

    return (
      <div>
        {/* "/" => GoalsIndex */}
        <Route
          exact
          path="/"
          render={() => (
            user ? (
              <GoalsIndex {...this.props} />
            ) : (
              <Landing />
            )
          )} 
        />

        {/* "/new-goal" => GoalsNew */}
        <Route
          path="/new-goal"
          render={() => (
            user ? (
              <GoalsNew {...this.props} />
            ) : (
              <Landing />
            )
          )}
        />

        {/* "/goal-show" => GoalsShow */}
        <Route
          path="/goal-show"
          render={() => (
            user ? (
              <GoalsShow {...this.props} />
            ) : (
              <Landing />
            )
          )}
        />
      </div>
    )
  }
}