import React, { Component } from 'react'
import { Menulist } from './MenuList.styled'
import { NavLink } from 'react-router-dom'
import homecon from '../../../assets/homecon.png'
import programcon from '../../../assets/programscon.png'
import chatroomcon from '../../../assets/chatroomcon.png'
import calendacon from '../../../assets/calendacon.png'
import helpcon from '../../../assets/helpcon.png'
import settingscon from '../../../assets/settingscon.png'


export class MenuList extends Component {
  render() {
    return (
      <Menulist>
<NavLink to='/' className="list-item">
  <div className="content">
<div className='icon'><img src={homecon} alt="" /></div> <div className="text">Home</div></div>
</NavLink>

<NavLink to='/programs' className="list-item">
<div className="content">
<div className='icon'><img src={programcon} alt="" /></div> <div className="text">Programs</div></div>
</NavLink>



<NavLink to='/chatroom' className="list-item">
<div className="content">
<div className='icon'><img src={chatroomcon} alt="" /></div> <div className='chat'><span className="text">Chat Room</span><div className="chat-count">14</div></div></div>
</NavLink>

<NavLink to='/calender' className="list-item">
<div className="content">
<div className='icon'><img src={calendacon} alt="" /></div> <div className="text">Calender</div></div>
</NavLink>

<NavLink to='/help-center' className="list-item">
<div className="content">
<div className='icon'><img src={helpcon} alt="" /></div> <div className="text">Help Center</div></div>
</NavLink>

<NavLink to='/settings' className="list-item">
<div className="content">
<div className='icon'><img src={settingscon} alt="" /></div> <div className="text">Settings</div></div>
</NavLink> 
      </Menulist>
    )
  }
}

export default MenuList