import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'

import './navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbar-container">
        <p id="navbar-container-logo-text">consequi</p>

        <p id="navbar-container-account-text">
          Hi, {this.props.user}!  &nbsp; 
          <Link to="/signout">
            <span id="navbar-container-sign-out-text">
            Sign out?
            </span>
          </Link>
        </p>
      </div>
    )
  }
}