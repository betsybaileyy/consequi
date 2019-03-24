import React, { Component } from 'react'

import API from '../../../../utils/API.js'

import './signinformcontainer.css'

export default class SignInFormContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       password: '',
    }
  }

  signUpUser = (e) => {
    e.preventDefault()

    const userData = {
      username: this.state.username,
      password: this.state.password,
    }

    API.signInUser(userData)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  saveText = (e) => {
    const name = e.target.name
    const value = e.target.value
    
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div id="sign-in-form-container">
        <p id="sign-in-heading">Sign In</p>
        <form>
          <label id="sign-in-form-email-container">Email
            <input name="username" type="email" placeholder="email" onChange={this.saveText} />
          </label>

          <label id="sign-in-form-password-container">Password
            <input name="password" type="text" placeholder="password" onChange={this.saveText} />
          </label>

          <button id="sign-in-form-container-submit" onClick={this.signUpUser}>Sign In</button>
        </form>
      </div>
    )
  }
}
