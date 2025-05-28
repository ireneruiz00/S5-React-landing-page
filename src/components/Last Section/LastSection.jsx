import React from 'react'
import "./LastSection.css"
import Buttons from '../Buttons/Buttons'

function LastSection() {
  return (
    <section className="last-section">
        <div className="text-center last-section-content">
            <p>35.000 ALREADY JOINED</p>
            <h2 className="titol-footer"> Stay up-to-date with what we're doing</h2>
            <input type="text" name="email" placeholder="Enter your email address" id="email"/>
            <Buttons button_class = {'btn-naranja'} button_content = {'Contact us'}/>
        </div>
    </section>
  )
}

export default LastSection