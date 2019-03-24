import React, { Component } from 'react'
import API from '../../../../utils/API'

export default class SignUpFormContainer extends Component {
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

    API.signUpUser(userData)
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
      <div id="sign-up-form-container">
        <p>Sign Up</p>
        <form>
          <label id="sign-up-form-email-container">Email
            <input name="username" type="email" placeholder="email" onChange={this.saveText} />
          </label>

          <label id="sign-up-form-password-container">Password
            <input name="password" type="password" placeholder="password" onChange={this.saveText} />
          </label>

          <button id="sign-up-form-container-submit" onClick={this.signUpUser}>Sign Up</button>
        </form>
      </div>
    )
  }
}
