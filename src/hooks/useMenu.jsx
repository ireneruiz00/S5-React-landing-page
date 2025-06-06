import { useState } from "react"
import closeIcon from "../assets/Imagenes/icon-close.svg"
import hamburger from "../assets/Imagenes/icon-hamburger.svg"

const useMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const displayHamburger = () => menuOpen ? closeIcon : hamburger
    const displayMenu = () => menuOpen ? "active" : ""

    return {menuOpen, setMenuOpen, displayHamburger, displayMenu}
}

export default useMenu
