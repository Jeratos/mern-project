import React from 'react'

export default function service(props) {
  return (
    <>
      <div className="card-container ">
   <div className='img-div' >
    <img className='img-service' src="/images/design.png" alt="img" />
    </div>

   <div className="card-detail">
         <div className="two-col">
          <p> {props.provider} </p>
         <p>{props.price}</p>
             </div>

          <h1>{props.service}</h1>
          <p>{props.description}</p>
   </div>
    </div> 
    </>
  )
}
