import React, { useState } from 'react'
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"


export default function count() {
  let [counterOn,setCounterOn] = useState(false)


  return (
    <>
<ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >
      <ul>
        <li className='last'>
          <div className='det'>
            {counterOn && <CountUp  start={0} end={50} duration={2} delay={0}/>}
            +
          </div>
          <p className='det-title'>Company Registered</p>
          </li>
        <li className='last'>
          <div className='det'>
            {counterOn && <CountUp  start={0} end={150} duration={2} delay={0}/>}
          +
          </div>
          <p className='det-title'>Project Done</p>
          </li>
        <li className='last'>
          <div className='det'>
            {counterOn && <CountUp  start={100} end={250} duration={2} delay={0}/>}
          +
          </div>
          <p className='det-title'>Happy Clients</p>
          </li>
        <li className='last none'>
          <div className='det'>
            {counterOn && <CountUp  start={300} end={650} duration={2} delay={0}/>}
          K
          </div>
          <p className='det-title'>Youtube Subscribers</p>
          </li>
      </ul>
</ScrollTrigger>
    </>
  )
}
