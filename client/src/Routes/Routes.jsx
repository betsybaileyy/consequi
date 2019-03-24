import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import SignIn from './SignIn/SignIn.jsx'
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
              <SignIn />
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
              <SignIn />
            )
          )}
        />

        {/* "/goal-show" => GoalsShow */}
        <Route
          path="/goals-show"
          render={() => (
            user ? (
              <GoalsShow {...this.props} />
            ) : (
              <SignIn />
            )
          )}
        />

        <Route
          path="/signin"
          render={() => (
            user ? (
              <GoalsIndex {...this.props} />
            ) : (
              <SignIn />
            )
          )}
        />
      </div>
    )
  }
}