import React, { Component } from 'react'
import { Homepage } from './HomePage.styled'
import { useRef,useEffect } from 'react'
import { gsap } from "gsap";



export default function HomePage() {



  var mentorName = 'james'

  const homepage = useRef(null)
  
  
  useEffect(() => {
    let homePage = homepage.current
  
    gsap.to(homePage,{duration:1.2,opacity:1})
    gsap.to(homePage,{duration:1,marginTop:0})
    return () => {
      
    };
  }, []);

  return (
    <Homepage ref={homepage}>
    <div className="welcome-header">
<h1> Welcome mentor {mentorName}</h1>

    </div><div className=" mentee-list">
<table>
<tr>
<th>ID</th>
<th>Name</th>
<th>Category</th>
<th>Join Date</th>
<th>Review</th>
</tr>
<tr className="list">
  <td className="id"><span>1</span></td><td className="name">name</td><td className="category">entrepreneur</td><td className="join-date">01/03/2001</td><td className="review">nice</td>
</tr>
<tr className="list">
<td className="id"><span>1</span></td> <td>name</td><td>entrepreneur</td><td>01/03/2001</td><td>nice</td>
</tr>
<tr className="list">
<td className="id"><span>1</span></td> <td>name</td><td>entrepreneur</td><td>01/03/2001</td><td>nice</td>
</tr>
<tr className="list">
  <td className="id"><span>1</span></td><td className="name">name</td><td className="category">entrepreneur</td><td className="join-date">01/03/2001</td><td className="review">nice</td>
</tr>
<tr className="list">
<td className="id"><span>1</span></td> <td>name</td><td>entrepreneur</td><td>01/03/2001</td><td>nice</td>
</tr>
<tr className="list">
<td className="id"><span>1</span></td> <td>name</td><td>entrepreneur</td><td>01/03/2001</td><td>nice</td>
</tr>
<tr className="list">
  <td className="id"><span>1</span></td><td className="name">name</td><td className="category">entrepreneur</td><td className="join-date">01/03/2001</td><td className="review">nice</td>
</tr>
<tr className="list">
<td className="id"><span>1</span></td> <td>name</td><td>entrepreneur</td><td>01/03/2001</td><td>nice</td>
</tr>
<tr className="list">
<td className="id"><span>1</span></td> <td>name</td><td>entrepreneur</td><td>01/03/2001</td><td>nice</td>
</tr>
<tr className="list">
  <td className="id"><span>1</span></td><td className="name">name</td><td className="category">entrepreneur</td><td className="join-date">01/03/2001</td><td className="review">nice</td>
</tr>
<tr className="list">
<td className="id"><span>1</span></td> <td>name</td><td>entrepreneur</td><td>01/03/2001</td><td>nice</td>
</tr>
<tr className="list">
<td className="id"><span>1</span></td> <td>name</td><td>entrepreneur</td><td>01/03/2001</td><td>nice</td>
</tr>
<tr className="list">
  <td className="id"><span>1</span></td><td className="name">name</td><td className="category">entrepreneur</td><td className="join-date">01/03/2001</td><td className="review">nice</td>
</tr>
<tr className="list">
<td className="id"><span>1</span></td> <td>name</td><td>entrepreneur</td><td>01/03/2001</td><td>nice</td>
</tr>
<tr className="list">
<td className="id"><span>1</span></td> <td>name</td><td>entrepreneur</td><td>01/03/2001</td><td>nice</td>
</tr>
<tr className="list">
  <td className="id"><span>1</span></td><td className="name">name</td><td className="category">entrepreneur</td><td className="join-date">01/03/2001</td><td className="review">nice</td>
</tr>
<tr className="list">
<td className="id"><span>1</span></td> <td>name</td><td>entrepreneur</td><td>01/03/2001</td><td>nice</td>
</tr>
<tr className="list">
<td className="id"><span>1</span></td> <td>name</td><td>entrepreneur</td><td>01/03/2001</td><td>nice</td>
</tr>
</table>


</div>
    </Homepage>
  )
}
