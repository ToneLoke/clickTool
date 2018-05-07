import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

class Success extends Component {
  render () {
    return (
        <div>
          <h4>SUCCESS CREATING A NEW MEMBER!</h4>
          <img id="yellow-gear" src="https://clicktool.com/images/yellow-gear.png" />
          <p>
          {JSON.stringify(this.props.history.location.state)}
          </p>
        </div>
    )
  }
}

export default Success