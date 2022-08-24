import React, { Component } from 'react'
import { Maindisplay } from './MainDisplay.styled'
import {BrowserRouter,Routes, Route,} from "react-router-dom";
import HomePage from './pages/home-page/HomePage';
import ProgramPage from './pages/program-page/ProgramPage';
import SettingsPage from './pages/settings/SettingsPage';
import HelpCenter from './pages/help-center/HelpCenter';
import ChatRoom from './pages/chatroom/ChatRoom';
import CalenderPage from './pages/calender/CalenderPage';



export class MainDisplay extends Component {
  render() {
    return (
      <Maindisplay>
        <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/programs" element={<ProgramPage />} />
      <Route path="/chatroom" element={<ChatRoom/>} />
      <Route path="/calender" element={<CalenderPage/>} />
      <Route path="/help-center" element={<HelpCenter/>} />
      <Route path="/settings" element={<SettingsPage/>} />
        </Routes>
      </Maindisplay>
    )
  }
}

export default MainDisplay