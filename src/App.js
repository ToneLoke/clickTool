import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Form from './Form'
import Success from './Success'
class App extends Component {
  render () {
    return (
      <Router>
      <div className='App'>
        <header className='App-header'>
        <img src="https://clicktool.com/images/logo.png" className="App-logo" alt="logo" />
          <h1>ClickTools Challenge</h1>
        </header>
        <div className='App-intro'>
          <Route exact path='/' component={Home} />
          <Route path='/member' component={Form} />
          <Route path='/success' component={Success} />
        </div>
      </div>
      </Router>
    )
  }
}

export default App
