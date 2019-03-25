import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'

import './navbar.css'
import API from '../../utils/API';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  
    this.signOut = this.signOut.bind(this)
  }
  
  signOut() {
    API.signOutUser()
      .then((res) => {
        console.log(res, 'calling clearUser')
        this.clearUser()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  clearUser() {
    console.log('called')
    this.props.clearUser()
  }

  render() {
    return (
      <div id="navbar-container">
        <Link to="/">
          <p id="navbar-container-logo-text">
            consequi
          </p>
        </Link>
        <p id="navbar-container-account-text">
            <span id="navbar-container-sign-out-text" onClick={this.signOut}>
            Sign out?
            </span>
        </p>
      </div>
    )
  }
}