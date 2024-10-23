import React from 'react'
import "./styles/Hero.style.css"
import { IoTicketSharp } from "react-icons/io5";
// import Spline from '@splinetool/react-spline';
import landing from "./assets/videos/landing.mp4"

const Hero = () => {
  return (
    <div id='hero'>
    <div className='hero-wrapper'>
        <div className='hero-container'>
        {/* <Spline className='spline-model'
        scene="https://prod.spline.design/Uc0c2c77YFiY9nLw/scene.splinecode" 
      /> */}
        <div className='hero-txt'> 
            <h4>Presented by Entrepreneurship Cell</h4>
        </div>
        <div className='hero-btn'>
            <a href='https://linktr.ee/ecell.medicaps' id='ticket'>Ticket <IoTicketSharp /></a>
        </div>
    </div>
    </div>
    <div className='overlay'>
    <video src={landing} autoPlay loop muted />
    </div>
    </div>

  )
}

export default Hero