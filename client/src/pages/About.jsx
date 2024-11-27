import React, { useState } from "react";
import Count from '../components/count'
import "./style/about.css"
import { Link } from "react-router-dom";
import { useAuth } from '../store/auth';


export default function About() {
let [name, setName]= useState("")

let{user}= useAuth();
let [userData, setUserData]= useState(true)

if(userData && user){
  setName(user.username) 

  setUserData(false);
}


  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <p>{user? `Hi ${name} welcome to IT solution `:"welcome to IT solution"}</p>
          <h1>What Choose Us? </h1>
          <div className="about-div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            inventore.
          </div>
          <div className="about-div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            aperiam reprehenderit. Fuga alias veniam reiciendis.
          </div>
          <div className="about-div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            illum quas deleniti cupiditate. Natus architecto numquam quibusdam,
            neque perspiciatis, est assumenda laborum velit molestiae minus
            odit.
          </div>
          <div className="about-div">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            sequi voluptas, officia nobis impedit in dignissimos? Mollitia
            molestias labore fugit.
          </div>
          <div className="about-div">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
            dignissimos? Molestiae magnam numquam expedita omnis qui
            reprehenderit id laboriosam aliquid at? Beatae voluptate optio className="about-div" aut
            magnam vero hic consectetur quo!
          </div>
          <div className="btn-container">
          <Link to="/contact"><button className="btn">Contect Now</button></Link>
          {/* <Link to="/about"><button className="btn sec">Lern More</button></Link> */}
          </div>
        </div>
        <div className="hero-content image">
          <img
            className="img-home"
            src="../../public/images/about.png"
            alt="image"
          />
        </div>
      </section>

      <section className='hero-sec about'>
      <Count/>
    </section>
    </>
  );
}
