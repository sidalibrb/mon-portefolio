"use client"

import { useEffect, useState, useRef } from "react"
import Header from "./Header"
import Footer from "./Footer"
import "./Home.css"

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    setIsLoaded(true)

    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll(".animate-on-scroll")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className={`home-container ${isLoaded ? "loaded" : ""}`}>
      <Header />

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="animate-hero">
              Bonjour, je suis <span> Sidali</span>
            </h1>
            <p className="animate-hero delay-1">Création d'applications web modernes et réactives</p>
            <div className="hero-buttons animate-hero delay-2">
              <a href="#projects" className="btn btn-primary">
                Voir mes projets
              </a>
              <a href="#contact" className="btn btn-secondary">
                Me contacter
              </a>
            </div>
          </div>
          <div className="hero-scroll-indicator animate-hero delay-3">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </section>

        <section ref={aboutRef} className="about-section animate-on-scroll" id="about">
          <div className="section-title">
            <h2>À propos de moi</h2>
            <div className="underline"></div>
          </div>
          <div className="about-content">
            <div className="about-image">
              <div className="image-container">
                <img src="/src/assets/me1.jpg" alt="Sidali Bourbala" className="profile-image" />
              </div>
            </div>
            <div className="about-text">
              <h3>Développeur Web Passionné</h3>
              <p>
                Bienvenue sur mon portfolio ! Je suis bourbala sidali, un développeur web spécialisé dans la création
                d'applications web modernes et réactives. Avec une solide expérience en développement front-end et
                back-end, je m'efforce de créer des expériences utilisateur exceptionnelles.
              </p>
              <p>
                Ma passion pour les nouvelles technologies et mon désir constant d'apprendre me permettent de rester à
                jour avec les dernières tendances du développement web.
              </p>
              <div className="skills-container" id="skills" ref={skillsRef}>
                <div className="skill">HTML/CSS</div>
                <div className="skill">JavaScript</div>
                <div className="skill">React</div>
                <div className="skill">Laravel</div>
                <div className="skill">PHP</div>
              </div>
              <a href="/cv.pdf" className="btn btn-primary" download="mon-cv-2025.pdf">
                Télécharger CV
              </a>
            </div>
          </div>
        </section>

        <section ref={projectsRef} className="projects-section animate-on-scroll" id="projects">
          <div className="section-title">
            <h2>Mes Projets</h2>
            <div className="underline"></div>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/src/assets/logo.png" alt="Ondefoc" />
              </div>
              <div className="project-info">
                <h3>ONDEFOC</h3>
                <p>Application web de Gestion de Stock </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Laravel</span>
                  
                </div>
                <div className="project-links">
                  <a
                    href="https://drive.google.com/file/d/17nVqZGhis78fVhhSAZZuxdlRkMgOHeVZ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="icon-video"></i> Voir la démo
                  </a>
                
                </div>
              </div>
            </div>

            <div className>
              </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/src/assets/logo2.png" alt="Projet 3" />
              </div>
              <div className="project-info"> 
                <h3>Pixel </h3>
                <p>Application mobile développée avec React Native et laravel </p>
                <div className="project-tags">
                  <span>React </span>
                  <span>Laravel</span>
                  
                </div>
                <div className="project-links">
                  <a
                    href="https://drive.google.com/file/d/16TolWP5apc5XXGymJ1bVUBj2TYOJwCei/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="icon-video"></i> Voir la démo
                  </a>
               
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={contactRef} className="contact-section animate-on-scroll" id="contact">
          <div className="section-title">
            <h2>Me Contacter</h2>
            <div className="underline"></div>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Discutons de votre projet</h3>
              <p>
                Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter. Je suis toujours ouvert à
                de nouvelles opportunités et collaborations.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="icon-envelope"></i>
                  <span>sidalibourbala@gmail.com</span>
                </div>
                <div className="contact-item">
                  <i className="icon-phone"></i>
                  <span>+213 542323703</span>
                </div>
                <div className="contact-item">
                  <i className="icon-map-marker"></i>
                  <span>Alger, Algerie</span>
                </div>
              </div>
              <div className="social-links">
                <a
                  href="https://github.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="icon-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="icon-linkedin"></i>
                </a>
                <a
                  href="https://instagram.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="icon-instagram"></i>
                </a>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Votre email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Sujet" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Votre message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
