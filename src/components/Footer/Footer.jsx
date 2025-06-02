import React from 'react'
import "./Footer.css"
import bookmarkLogo from "../../assets/Imagenes/logo-bookmark.svg"
import iconFacebook from "../../assets/Imagenes/icon-facebook.svg"
import iconTwitter from "../../assets/Imagenes/icon-twitter.svg"

function Footer() {
  return (
    <footer className="flex">
        <div className="left-footer flex">
            <img src={bookmarkLogo} alt="logo bookmark" className="bm-logo-footer"/>
            <nav className="footer-nav flex">
                <a href="#" className="foot-enlace">FEATURES</a>
                <a href="#" className="foot-enlace">PRICING</a>
                <a href="#" className="foot-enlace">CONTACT</a>
            </nav>
        </div>
        <div className="logos-footer">
            <a href="#"><img src={iconFacebook} alt="facebook logo" className="fb-logo"/></a>
            <a href="#"><img src={iconTwitter} alt="twitter logo" className="tt-logo"/></a>
        </div>
    </footer>
  )
}

export default Footer