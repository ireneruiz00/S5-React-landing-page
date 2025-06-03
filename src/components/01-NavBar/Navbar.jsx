import React from 'react'
import "./Navbar.css"
import bookmarkLogo from "../../assets/Imagenes/logo-bookmark.svg"
import hamburger from "../../assets/Imagenes/icon-hamburger.svg"
import Buttons from '../00-Buttons/Buttons'
import { useState } from 'react'
import closeIcon from "../../assets/Imagenes/icon-close.svg"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <header className='flex'>
        <div className="bookmark">
            <img src= {bookmarkLogo} alt="logo bookmark"/>
        </div>

        <div className="menu-hamburguer">
            <button className="btn-hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
              <img src= { menuOpen ? closeIcon : hamburger} alt="icon-hamburger"/>
            </button>

        </div>
        <nav className={`menu ${menuOpen ? "active" : ""}`}>
            <ul className="flex">
                <li><a href="#" className="nav-enlace">FEATURES</a></li>
                <li><a href="#" className="nav-enlace">PRICING</a></li>
                <li><a href="#" className="nav-enlace">CONTACT</a></li>
                <li><Buttons button_class = {'btn-naranja'} button_content = {'LOGIN'}/></li>
            </ul>
            
        </nav>
    </header>
    </>
  )
}

export default Navbar