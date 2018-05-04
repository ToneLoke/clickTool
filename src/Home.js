import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

class Home extends Component {
  render () {
    return (

        <div>
          <div ><Link className='Button' to='/member'>Create Member</Link></div>
          <img id="yellow-gear" src="https://clicktool.com/images/yellow-gear.png" />
        </div>
    )
  }
}

export default Home

  