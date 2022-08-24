import React, { Component } from 'react'
import { Sidebar } from './sidebar.styled'
import MenuList from './menulist/MenuList'

import FYMKLogo from '../../assets/FYMK-logo.png'

export default class SideBar extends Component {
  render() {
    return (
      <Sidebar>
<img src={FYMKLogo} alt="" />
<MenuList/>
</Sidebar>
    )
  }
}
