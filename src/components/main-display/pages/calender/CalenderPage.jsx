import React, { Component } from 'react'
import { Calenderpage } from './CalenderPage.styled'
import clockCalender from '../../../../assets/clock-and-calendar.png'
import graduateCon from '../../../../assets/graduatecon.png'
import Cal from '../../../../assets/cal.png'
import { gsap } from "gsap";
import { useRef,useEffect } from 'react'






        
        export default function CalenderPage() {


          const calenderpage = useRef(null)


          useEffect(() => {     
            let calenderPage = calenderpage.current
            
            gsap.to(calenderPage,{duration:1.2,opacity:1})
            gsap.to(calenderPage,{duration:1,marginTop:0})
            
            
              
               
            
            
                },[] );
        


          return (
            <Calenderpage ref={calenderpage}>
           <div className='content'>
           <div className='section1'>
<div className='upcoming-div'>
<div className='header'>
<span>Up Coming events </span><span className='img'><img src={clockCalender} alt="" /></span></div>


<div className='upcoming-list'>
<div className='event'><span className='content'>python 101</span></div>
<div className='event'><span className='content'>quiz</span></div>
<div className='event'><span className='content'>section 1 exams</span></div>
<div className='event'><span className='content'>group meeting</span></div>
</div>

</div>
<div className='image-div'>
<img src={graduateCon} alt="" />
</div>

           </div>
           <div className='section2'>
           <div className='calender-div'>
<img src={Cal} alt="" />
           </div>
           </div>
           
           
           
           </div>  
        </Calenderpage>
     
          )
        }
        