import React from 'react'
import "./LastSection.css"

function LastSection() {
  return (
    <section className="last-section">
        <div className="text-center last-section-content">
            <p>35.000 ALREADY JOINED</p>
            <h2 className="titol-footer"> Stay up-to-date with what we're doing</h2>
            <input type="text" name="email" placeholder="Enter your email address" id="email"/>
            <button className="btn-naranja">Contact us</button>
        </div>
    </section>
  )
}

export default LastSection