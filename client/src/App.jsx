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
  }

  setUser(id) {
    API.getUser(id)
      .then((res) => {
        console.dir(res)
      })
  }

  render() {
    const { user } = this.state

    return (
      <Router>
          <Routes user={user} setUser={this.setUser} />
      </Router>
    )
  }
}

export default App
