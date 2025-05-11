"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.classList.toggle("menu-open")
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false)
        document.body.classList.remove("menu-open")
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <h1>
          DEV/<span>SIDALI</span>
        </h1>
      </div>

      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#" className="active" onClick={() => setMenuOpen(false)}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              À propos
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projets
            </a>
          </li>
          <li>
           
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header
