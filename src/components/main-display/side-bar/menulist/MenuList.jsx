import React, { Component } from 'react'
import { Menulist } from './MenuList.styled'
import { NavLink } from 'react-router-dom'

export class MenuList extends Component {
  render() {
    return (
      <Menulist>
<NavLink to='/' className="list-item">
<div className='icon'></div> <div className="text">Home</div>
</NavLink>

<NavLink to='/' className="list-item">
<div className='icon'></div> <div className="text">Programs</div>
</NavLink>

<NavLink to='/' className="list-item">
<div className='icon'></div> <div className="text">Mentees</div>
</NavLink>

<NavLink to='/' className="list-item">
<div className='icon'></div> <div className="text">Chat Room</div>
</NavLink>

<NavLink to='/' className="list-item">
<div className='icon'></div> <div className="text">Calender</div>
</NavLink>

<NavLink to='/' className="list-item">
<div className='icon'></div> <div className="text">Help Center</div>
</NavLink>

<NavLink to='/' className="list-item">
<div className='icon'></div> <div className="text">Settings</div>
</NavLink> 
      </Menulist>
    )
  }
}

export default MenuList