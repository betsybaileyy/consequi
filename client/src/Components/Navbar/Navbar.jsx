import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <p>consequi</p>
        <p>Hi, {this.props.user}! <Link to="/signout"><span id="sign-out">Sign out?</span></Link></p>
      </div>
    )
  }
}