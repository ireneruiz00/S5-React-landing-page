import { useState } from "react" 
import Buttons from '../00-Buttons/Buttons'
import tabsData from "../../data/tabsData.json"

function Tab() {
  const [activeTab, setActive] = useState(0)
    return (
    <>
        <div className = "radio-selector">
            {tabsData.map((tab, index) => (
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
                <img src={tabsData[activeTab].img} alt={tabsData[activeTab].title}/>
            </div>
            <div className = 'der-ft'>
                <h2>{tabsData[activeTab].title}</h2>
                <p>{tabsData[activeTab].text}</p>
                <Buttons button_class = {'btn-azul'} button_content = {'More info'}/>
            </div>
        </div>
    </>
  )
}



export default Tab