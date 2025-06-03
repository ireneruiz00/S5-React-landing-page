import React from 'react'
import "./FAQs.css"
import iconArrow from "../../assets/Imagenes/icon-arrow.svg"
import Buttons from '../00-Buttons/Buttons'
import "../00-Buttons/Buttons.css"
import { useState } from 'react'
import { FaqData } from './FaqData'

function FAQs() {
  const [itemExpanded, setItemExpanded] = useState(null)
  const toggleItem = (index) => {
    setItemExpanded(prev => (prev === index ? null : index));
  }
  return (
    <section className="FAQs">
        <div className="text-margin">
          <div className="text-center">
            <h2>Frequently asked questions</h2>
            <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
          </div>
            <ul className="flex">
              {FaqData.map((item, index) =>
                <li key={index} className={`faq-item ${itemExpanded === index ? 'active' : ''}`}>
                  <div className="faq-question" onClick={() => toggleItem(index)}>
                    {item.question}
                    <button className='btn-arrow'><img src={iconArrow} alt="icon-arrow" className={itemExpanded === index ? 'rotated' : ''}/></button>
                  </div>
                  {itemExpanded === index && (
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                )}
                </li>  
              )}
            </ul>
            <div className="text-center">
              <Buttons button_class = {'btn-azul-centered'} button_content = {'More info'}/>
            </div>
        </div>
    </section>
  )
}

export default FAQs