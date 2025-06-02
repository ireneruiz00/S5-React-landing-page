import React from 'react'
import { useState } from "react" 
import { TabsData } from './TabsData'
import Buttons from '../Buttons/Buttons'

function Tab() {
  const [activeTab, setActive] = useState(0)
    return (
    <>
        <div className = "radio-selector">
            {TabsData.map((tab, index) => (
                <label key={index}
                className={`tab-link ${activeTab === index ? 'active': ''}`}
                onClick={() => setActive(index)}
                >
                {tab.label}
                </label>
            ))
            }
        </div>
        <div className='tab-content active'>
            <div className={activeTab === 0 ? 'izq-ft': ''}>
                <img src={TabsData[activeTab].img} alt={TabsData[activeTab].title}/>
            </div>
            <div className = 'der-ft'>
                <h2>{TabsData[activeTab].title}</h2>
                <p>{TabsData[activeTab].text}</p>
                <Buttons button_class = {'btn-azul'} button_content = {'More info'}/>
            </div>
        </div>
    </>
  )
}



export default Tab