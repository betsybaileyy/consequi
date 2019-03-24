import React, { Component } from 'react'

import SignInFormContainer from './Components/SignInFormContainer/SignInFormContainer.jsx'
import SignUpFormContainer from './Components/SignUpFormContainer/SignUpFormContainer.jsx'

import './signin.css'

export default class SignIn extends Component {
  render() {
    const { setUser } = this.props
    return (
      <div id="sign-in-container">
        <SignInFormContainer setUser={setUser} />
        <SignUpFormContainer setUser={setUser} />
      </div>
    )
  }
}
