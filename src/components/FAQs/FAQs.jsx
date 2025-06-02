import React from 'react'
import "./FAQs.css"
import iconArrow from "../../assets/Imagenes/icon-arrow.svg"
import Buttons from '../Buttons/Buttons'

function FAQs() {
  return (
    <section className="FAQs">
        <div className="text-center text-margin">
            <h2>Frequently asked questions</h2>
            <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            <ul className="flex">
                <li>What is Bookmark? <img src={iconArrow} alt="icon-arrow"/></li> 
                <li>How can I request a new browser? <img src={iconArrow} alt="icon-arrow"/></li>
                <li>Is there a mobile app? <img src={iconArrow} alt="icon-arrow"/></li>
                <li>What about other Chromium browsers? <img src={iconArrow} alt="icon-arrow"/></li>
            </ul>
            <Buttons button_class = {'btn-azul-centered'} button_content = {'More info'}/>
        </div>
    </section>
  )
}

export default FAQs