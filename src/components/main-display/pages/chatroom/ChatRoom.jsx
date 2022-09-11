import React, { Component, useRef } from 'react'
import { Chatroom } from './ChatRoom.styled'
import Dots from '../../../../assets/dots.png'
import { gsap } from "gsap";
import { useEffect } from 'react';
import { useState } from 'react';









export default function ChatRoom() {
  
  
  
  const handle = useRef(null)
  const chatbox = useRef(null)
  const chatlist = useRef(null)
  const chatroom = useRef(null)
 
  

const [isOpen,setIsOpen] = useState(false)

const toggleOpen =()=>{
    setIsOpen(!isOpen)
   }
   
const width = isOpen? '73%':'95%'
const margin = isOpen? '0' : '-23%'

   
    useEffect(() => {     
let chatRoom = chatroom.current

gsap.to(chatRoom,{duration:1,opacity:1})
  
   


    },[] );
  return (
    <Chatroom ref={chatroom}>
          <div className='mentee-chat-list' ref={chatlist} style={{marginLeft:margin}}>
        <div className='mentees'>

        <div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'><span>Godwin OG</span></div><div className='last-message'>
    <span>i am tired of this whole place</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00PM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>

        <div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'><span>Godwin OG</span></div><div className='last-message'>
    <span>i am tired</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00PM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>

        <div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'><span>Godwin OG</span></div><div className='last-message'>
    <span>i am tired</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>7:00PM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>

<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'><span>Godwin OG</span></div><div className='last-message'>
    <span>i am tired</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>5:00PM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>

<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>


<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>


<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>


<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>



<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>

<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>


<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>

<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>


<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>


<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>


<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>


<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>
<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>

<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>

<div className='mentee'>
<div className='profile-picture'></div>
<div className='nameNmessage-div'>

  <div className='name'>
    <span>taiwo david</span></div><div className='last-message'>
    <span>when will you be around</span>
  </div></div>
  <div className='timeNmessagecount-div'> 
  
<div className='time'><span>9:00AM</span></div> <div className='message-count'></div>
<span></span>
  </div>
</div>

        </div>

        <div className='drawer-handle' ref={handle} onClick={toggleOpen}>
          <img src={Dots} alt="" />
        </div>
          </div>
      <div className='chat-box' ref={chatbox} style={{width:width}}>
       
      </div>
      
      </Chatroom>
  )
}
