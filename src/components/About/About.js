import React from 'react'
import "./styles/About.style.css"
        
const About = () => {
  return (
   <div id='about-section'>
     <div id="Principle">
        <div className='prin-container'>
            <div className='prin-card '>
            <div className='ideate img'></div>
            <h2>Ideate</h2>
            </div>
            <div className='prin-card'>
            <div className='inspire img'></div>
                <h2>Inspire</h2>
            </div>
            <div className='prin-card'>
            <div className='innovate img'></div>
                <h2>Innovate</h2>
            </div>
        </div>
    </div>
    <div id='About'>
        <div className='About-container'>
            <div className='about-txt'>
                <h3>About</h3>
                <p>eSummit 2024 is a flagship event that brings together innovators, entrepreneurs, and thought leaders to explore the future of business and technology. Over two days, participants will engage in transformative workshops, networking opportunities, and exciting competitions like the Valorant Game Tournament. Join us to connect, learn, and lead the next wave of innovation.</p>
            </div>
            <div className='about-image'>
            </div>
        </div>
    </div>
   </div>
  )
}

export default About