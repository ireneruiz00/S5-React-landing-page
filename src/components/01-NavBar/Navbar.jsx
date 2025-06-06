import React from 'react'
import "./Navbar.css"
import bookmarkLogo from "../../assets/Imagenes/logo-bookmark.svg"
import Buttons from '../00-Buttons/Buttons'
import useMenu from '../../hooks/useMenu'



function Navbar() {
  const {menuOpen, setMenuOpen, displayHamburger, displayMenu} = useMenu()

  return (
    <>
      <header className='flex'>
        <div className="bookmark">
            <img src= {bookmarkLogo} alt="logo bookmark"/>
        </div>

        <div className="menu-hamburguer">
            <button className="btn-hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
              <img src= {displayHamburger()} alt="icon-hamburger"/>
            </button>

        </div>
        <nav className={`menu ${displayMenu()}`}>
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