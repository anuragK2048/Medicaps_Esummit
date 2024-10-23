import React from 'react'
import "../styles/SpeakerSlide.Style.css"

const Slide = (props) => {
  return (
<div className='slider' >
          <div className='slide-image'>
          </div>
          <div className='slide-txt'>
            <h5>{props.name}</h5>
            <h6>{props.role}</h6>
          </div>
        </div>
  )
}

export default Slide