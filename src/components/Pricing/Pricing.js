import React from 'react'
import "./styles/Pricing.style.css"
// import ParticleBg from "../ParticleBg.jsx"
// import Particles from "../Particles.jsx"
const Pricing = () => {
    return (
        <div id="Pricing">
{/* <div className='overlay'>
<ParticleBg className='hell' /> */}
{/* <Particles/> */}
{/* </div> */}
            <div className='price-wrapper'><div className='pricing-container'>
                <div className='pricing-txt'>
                    <h3>Pricing</h3>
                </div>
                <div className='price-card-container'>
                <div className='price-card card-1'>
                        <div className='price-card-txt '>
                            <h2>Rs.1700</h2>
                            <h4>Group Pass</h4>
                            <p>Gather your friends with this group pass for five, designed for MediCaps students to experience the eSummit together.</p>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSe9G78QPb-AliRMDvG02ci7Fe6rlv5-Qzsc5gMZr2dPMRV_pg/viewform'>Register Now!</a>
                        </div>
                        <div>
                        <span className='hole-1'></span>
                        <span className='hole-2'></span>
                        <span className='hole-3'></span>
                        <span className='hole-4'></span>
                        <span className='hole-5'></span>
                        <span className='hole-6'></span>
                        </div>
                    </div>

                    <div className='price-card card-2'>
                        <div className='price-card-txt '>
                            <h2>Rs.399</h2>
                            <h4>Individual Pass</h4>
                            <p>Access exclusive eSummit events with this pass, available only for single MediCaps University students</p>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSeUoYE2zYwAdmfCMVZRhKrbdBwhy40-0Mmq8xccNJtKJjSRfA/viewform'>Register Now!</a>
                        </div>
                        <div>
                        <span className='hole-1'></span>
                        <span className='hole-2'></span>
                        <span className='hole-3'></span>
                        <span className='hole-4'></span>
                        <span className='hole-5'></span>
                        <span className='hole-6'></span>
                        </div>
                    </div> 
                                   
                    <div className='price-card card-3'>
                        <div className='price-card-txt'>
                            <h2>Rs.450</h2>
                            <h4>Visitor Pass</h4>
                            <p>A ticket for non-MediCaps students to attend the eSummit and join the excitement.</p>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSc1igGw2CSu13uWrEytOS-eJvo0cRBcxAzA712vxeUGN0ljaw/viewform'>Register Now!</a>
                        </div>
                        <div>
                        <span className='hole-1'></span>
                        <span className='hole-2'></span>
                        <span className='hole-3'></span>
                        <span className='hole-4'></span>
                        <span className='hole-5'></span>
                        <span className='hole-6'></span>
                        </div>
                    </div>  
                </div>
            </div></div>
        </div>
    )
}

export default Pricing