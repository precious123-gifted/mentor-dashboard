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
 
  
const [isOpen,setIsOpen] = useState(false)

let chatListMargin = isOpen == true? '0' : isOpen == false? '-23%' : null
let chatBoxWidth = isOpen == true? '73%' : isOpen == false? '95%%' : null
 
    useEffect(() => {

      let  Handle = handle.current
      let chatBox = chatbox.current
      let chatList = chatlist.current
   
      
  
  const open = ()=>{
     setIsOpen = true

    gsap.to(chatList,{duration:0.4,marginLeft:chatListMargin})
         
    gsap.to(chatBox,{duration:0.4,width:chatBoxWidth})

    console.log(isOpen)
  }
  
      Handle.addEventListener('click',open)


      return()=>{
        Handle.removeEventListener('click',open)
      }


   drawOut()


    },[] );
  return (
    <Chatroom>
          <div className='mentee-chat-list' ref={chatlist}>
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

        <div className='drawer-handle' ref={handle}>
          <img src={Dots} alt="" />
        </div>
          </div>
      <div className='chat-box' ref={chatbox}>
       
      </div>
      
      </Chatroom>
  )
}
