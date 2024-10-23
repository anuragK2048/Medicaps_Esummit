import React from 'react'
import { FaFireFlameCurved } from "react-icons/fa6";
import "../styles/Event.style.css"
const EventCard = (props) => {
  return (
    <div className='event-card'>
                <div className='card-svg'>
                    <img src=""/>
                </div>
                <div className='card-txt'>
                        <h4>{props.title}</h4>
                        <p>{props.data}</p>
                </div>
                <a className='card-link' href={props.cardlink}>Apply Now <FaFireFlameCurved /></a>
                </div>
  )
}

export default EventCard