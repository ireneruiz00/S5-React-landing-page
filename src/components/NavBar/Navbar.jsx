import React from 'react'
import "./Navbar.css"
import bookmarkLogo from "../../assets/Imagenes/logo-bookmark.svg"
import hamburger from "../../assets/Imagenes/icon-hamburger.svg"

function Navbar() {
  return (
    <>
      <header className="flex">
        <div className="bookmark">
            <img src= {bookmarkLogo} alt="logo bookmark"/>
        </div>
        <div className="menu-hamburguer">
            <img src= {hamburger} alt="icon-hamburger"/>
        </div>
        <nav className="menu">
            <ul className="flex">
                <li><a href="#" className="nav-enlace">FEATURES</a></li>
                <li><a href="#" className="nav-enlace">PRICING</a></li>
                <li><a href="#" className="nav-enlace">CONTACT</a></li>
                <li><button className="btn-naranja">LOGIN</button></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar