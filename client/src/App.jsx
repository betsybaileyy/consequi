import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import API from './utils/API.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
    }

    this.setUser = this.setUser.bind(this)
    this.clearUser = this.clearUser.bind(this)
  }

  setUser(id) {
    this.setState({
      user: id,
    })
  }

  clearUser() {
    this.setState({
      user: '',
    })
  }

  render() {
    const { user } = this.state

    return (
      <Router>
          <Routes user={user} setUser={this.setUser} clearUser={this.clearUser} />
      </Router>
    )
  }
}

export default App
