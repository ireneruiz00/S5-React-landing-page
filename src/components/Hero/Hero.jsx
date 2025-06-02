import React from 'react'
import "./Hero.css"
import heroImg from "../../assets/Imagenes/illustration-hero.svg"
import Buttons from '../Buttons/Buttons'

function Hero() {
  return (
    <main className="flex">
        <div className="izq flex">
            <h1>A Simple Bookmark Manager</h1>
            <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className="flex btns-getit">
                <Buttons button_class = {'btn-azul'} button_content = {'Get it on Chrome'}/>
                <Buttons button_class = {'btn-firefox'} button_content = {'Get it on Firefox'}/>
            </div>
        </div>
        <div className="der-main">
            <img src={heroImg} alt="illustration-hero" className="der-img"/>
        </div>
    </main>
  )
}

export default Hero