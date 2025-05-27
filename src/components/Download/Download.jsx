import React from 'react'
import "./Download.css"
import logoChrome from "../../assets/Imagenes/logo-chrome.svg"
import logoFirefox from "../../assets/Imagenes/logo-firefox.svg"
import logoOpera from "../../assets/Imagenes/logo-opera.svg"
import bgDots from "../../assets/Imagenes/bg-dots.svg"

function Download() {
  return (
    <section className="download text-center">
        <div className="text-margin">
            <h2>Download the extension</h2>
            <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
        </div>
        <div className="flex container">
            <div className="columna chrome">
                <img src={logoChrome} alt="logo chrome"/>
                <h4>Add to Chrome</h4>
                <p>Minimum version 62</p>
                <img src={bgDots} alt="bg-dots"/>
                <button className="btn-azul-centered">Add & Install Extension</button>
            </div>
            <div className="columna firefox">
                <img src={logoFirefox} alt="logo firefox"/>
                <h4>Add to Firefox</h4>
                <p>Minimum version 55</p>
                <img src={bgDots} alt="bg-dots"/>
                <button className="btn-azul-centered">Add & Install Extension</button>
            </div>
            <div className="columna opera">
                <img src={logoOpera} alt="logo opera"/>
                <h4>Add to Opera</h4>
                <p>Minimum version 46</p>
                <img src={bgDots} alt="bg-dots"/>
                <button className="btn-azul-centered">Add & Install Extension</button>
            </div>
        </div>
    </section>
  )
}

export default Download