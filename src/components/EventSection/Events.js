import React from 'react'
import "./styles/Event.style.css"
import EventCard from './factor/EventCard.js'

import anime from "./assets/videos/event-bg.mp4"
const Events = () => {
  return (
    <div id='Event'>
    <div className='overlay'>
    <video className="anime" src={anime} autoPlay loop muted />
    </div>
        <div className='event-wrapper'>
        <div className='Event-container'>
            <div className='event-txt'>
                <h3>Events</h3>
            </div>
            <div className='event-card-box'>
                <EventCard title="Shark Tank" data="Aspiring entrepreneurs pitch their business ideas to a panel of seasoned investors, seeking funding and mentorship. This high-stakes competition encourages creativity and business acumen, fostering a dynamic environment for growth and collaboration" cardlink="https://docs.google.com/forms/d/e/1FAIpQLSfFQX0Xc1QJdJbO3DYlvGhu1BR7YA4hyjK_tS7Vr5sba3Wrnw/viewform"/>
                <EventCard title="Start-Up Expo" data="Participate in hands-on workshops covering topics like startup growth, product development, digital marketing, and venture funding" cardlink="https://docs.google.com/forms/d/e/1FAIpQLScKSQ3MIPZpLiTg3abw3qetDQB7WVLWJr1XDtFvFHgULJuO4Q/viewform"/>
                <EventCard title="Ideathon" data="The Ideathon invites participants to brainstorm and develop innovative solutions to real-world challenges in a collaborative environment. Teams will work together to present their ideas, with opportunities to win prizes and mentorship from industry experts."  cardlink="https://docs.google.com/forms/d/e/1FAIpQLScXLFB5rw-B4lxvxNmWakmYYQNhAyGK3z0zX2Gj1yX89S2oCg/viewform"/>
                <EventCard title="Saarthi (Speaker Session)" data="It brings inspiring speakers from various industries to share their experiences and insights, empowering the next generation of entrepreneurs. This session provides valuable lessons and motivation for attendees looking to navigate their own entrepreneurial journeys" cardlink="https://linktr.ee/ecell.medicaps"/>
                <EventCard title="Fireside Chat (Panel Discussion)"  data="It features a relaxed yet engaging discussion with industry leaders who share their knowledge and experiences in entrepreneurship. Participants will gain insights into the challenges and successes of starting and running a business, fostering an enriching dialogue." cardlink="https://linktr.ee/ecell.medicaps" />
                <EventCard title="Food Fest" data="Indulge in tasty adventures at this year's ESUMMIT'24 food fest. From mouthwatering street food to gourmet delicacies, there's something to satisfy every craving." cardlink="https://linktr.ee/ecell.medicaps"/>
            </div>
        </div>
        </div>
    </div>
  )
}


export default Events