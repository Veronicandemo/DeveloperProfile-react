import React from 'react'
import './About.css'
import Buttons from './Buttons'

const About = () => {
  return (
    <div>
      <p
        style={{
          color: '#ffb733',
          textTransform: 'uppercase',
          fontWeight: '900',
        }}
      >
        Sneaker Company
      </p>
      <h2 style={{ fontSize: '44px' }}>
        Fall Limited Edition <br /> Sneakers
      </h2>
      <p style={{ color: '#666666', letterSpacing: '0.5px' }}>
        These low-profile sneakers are your perfect casual wear <br />
        companion.Featuring a durable outer sole, they'll <br /> withstand
        anything weather can offer.
      </p>
      <h2>
        $124.00 <span>50%</span>
      </h2>
      <p style={{ color: '#666666', textDecoration: 'line-through' }}>
        $250.00
      </p>
      <Buttons />
    </div>
  )
}

export default About
