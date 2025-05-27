import React from 'react'
import "./Hero.css"
import heroImg from "../../assets/Imagenes/illustration-hero.svg"

function Hero() {
  return (
    <main className="flex">
        <div className="izq flex">
            <h1>A Simple Bookmark Manager</h1>
            <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className="flex btns-getit">
                <button className="btn-azul">Get it on Chrome</button>
                <button className="btn-firefox">Get it on Firefox</button>
            </div>
        </div>
        <div className="der-main">
            <img src={heroImg} alt="illustration-hero" className="der-img"/>
        </div>
    </main>
  )
}

export default Hero