import React, { Component } from 'react'
import Routes from './Routes/Routes.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
            <Routes />
        </Router>
      </div>
    )
  }
}

export default App
