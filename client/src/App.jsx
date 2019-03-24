import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
    }
  }

  render() {
    const { user } = this.state

    return (
      <Router>
          <Routes user={user} />
      </Router>
    )
  }
}

export default App
