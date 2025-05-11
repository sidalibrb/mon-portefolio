"use client"

import { useEffect, useState } from "react"
import "./Footer.css"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer className={`footer ${isVisible ? "visible" : ""}`}>
      <div className="footer-content">
        <div className="footer-section about">
          <h2>À propos</h2>
          <p>Je suis un développeur passionné spécialisé dans la création d'applications web modernes et réactives.</p>
          <div className="social-icons">
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="icon-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="icon-linkedin"></i>
            </a>
            <a
              href="https://instagram.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="icon-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Liens rapides</h2>
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#projects">Projets</a>
            </li>
            <li>
              <a href="#skills">Compétences</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact</h2>
          <p>
            <i className="icon-envelope"></i> sidalibourbala@gmail.com
          </p>
          <p>
            <i className="icon-phone"></i> +213 542323703
          </p>
          <p>
            <i className="icon-map-marker"></i> Alger, Algerie
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sidali Bourbala. Tous droits réservés.</p>
      </div>

      <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <i className="icon-arrow-up">↑</i>
      </div>
    </footer>
  )
}

export default Footer
