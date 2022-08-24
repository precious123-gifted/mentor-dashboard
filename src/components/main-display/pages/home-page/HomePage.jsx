import React, { Component } from 'react'
import { Homepage } from './HomePage.styled'


export class HomePage extends Component {
  render() {

var mentorName = 'james'




    return (
      <Homepage>
      <div className="welcome-header">
<h1> welcome mentor {mentorName}</h1>


      </div>
      </Homepage>
    )
  }
}

export default HomePage