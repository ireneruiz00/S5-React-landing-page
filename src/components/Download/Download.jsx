import React from 'react'
import "./Download.css"
import logoChrome from "../../assets/Imagenes/logo-chrome.svg"
import logoFirefox from "../../assets/Imagenes/logo-firefox.svg"
import logoOpera from "../../assets/Imagenes/logo-opera.svg"
import bgDots from "../../assets/Imagenes/bg-dots.svg"
import Cards from '../Cards/Cards'

function Download() {
  return (
    <section className="download text-center">
        <div className="text-margin">
            <h2>Download the extension</h2>
            <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
        </div>
        <div className="flex container">
            <Cards logo = {'chrome'} img_logo = {logoChrome} alt_logo={'logo Chrome'} h4_content={'Add to Chrome'} p_content = {'Minimum version 62'}/>
            <Cards logo = {'firefox'} img_logo = {logoFirefox} alt_logo={'logo Firefox'} h4_content={'Add to Firefox'} p_content = {'Minimum version 55'}/>
            <Cards logo = {'opera'} img_logo = {logoOpera} alt_logo={'logo Opera'} h4_content={'Add to Opera'} p_content = {'Minimum version 66'}/>
        </div>
    </section>
  )
}

export default Download