import React, { useState } from 'react'
import "./style/home.css"
import Count from '../components/count'
import { Link } from 'react-router-dom'
export default function Home() {


  
  return (
   <main className='main-home'>
    <section className='hero-container' >
      <div className="hero-content">
           <p>we are the india's best IT company</p>
           <h1>Welcome to IT solution</h1>
           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laudantium eveniet nobis eius corrupti recusandae blanditiis tempora magni labore delectus, ad culpa itaque cum perferendis architecto iusto dolore minima praesentium, minus explicabo optio nihil numquam. Maiores vero esse facilis hic voluptates voluptatibus sed! Sit rem voluptatibus similique quisquam itaque vitae.</div>
           <div className='btn-container'>
            
            <Link to="/contact"><button className="btn">Contect Now</button></Link>
            <Link to="/about"><button className="btn sec">Lern More</button></Link>
           </div>
      </div>
      <div className="hero-content image">
      <img
            className="img-home"
            src="/images/home.png"
            alt="image"
          />
      </div>
    </section>

    <section className='hero-sec'>
      <Count/>
    </section>

    <section className='hero-container'>
    <div className="hero-content image">
      <img
            className="img-home"
            src="/images/home.png"
            alt="image"
          />
      </div>
      <div className="hero-content">
           <p>we are here to help</p>
           <h1>Get started today...</h1>
           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laudantium eveniet nobis eius corrupti recusandae blanditiis tempora magni labore delectus, ad culpa itaque cum perferendis architecto iusto dolore minima praesentium, minus explicabo optio nihil numquam. Maiores vero esse facilis hic voluptates voluptatibus sed! Sit rem voluptatibus similique quisquam itaque vitae.</div>
           <div className='btn-container'>
            <a href="/contact"><button className="btn">Contect Now</button></a>
            <a href="/about"><button className="btn sec">Lern More</button></a>
           </div>
      </div>
      
    </section>
   </main>
  )
}
