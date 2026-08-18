import { useState, useEffect } from 'react'
import './style.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#" className="brand-logo">Viajare</a>
        
        <nav>
          <ul className={`navigation-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#destinos" className="navigation-link" onClick={handleNavClick}>Destinos</a></li>
            <li><a href="#pacotes" className="navigation-link" onClick={handleNavClick}>Pacotes</a></li>
            <li><a href="#experiencias" className="navigation-link" onClick={handleNavClick}>Experiências</a></li>
            <li><a href="#sobre" className="navigation-link" onClick={handleNavClick}>Sobre nós</a></li>
            <li>
              <a href="#contato" className="header-action-btn" onClick={handleNavClick}>
                Planeje sua viagem
              </a>
            </li>
          </ul>
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={handleMenuToggle}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header