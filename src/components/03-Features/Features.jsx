import React from 'react'
import "./Features.css"
import Tab from '../04-Tabs/Tab'

function Features() {
  return (
    <section className="features">
        <div className="text-margin text-center">
            <h2>Features</h2>
            <p>Our aim to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div className="tabs">
           <Tab/> 
        </div>
    </section>
  )
}

export default Features