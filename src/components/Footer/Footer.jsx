import { useState } from 'react'
import './style.css'

function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      alert('Obrigado por se inscrever! Você receberá nossas novidades em breve.')
      setEmail('')
    }
  }

  const handleWhatsAppClick = () => {
    const WHATSAPP_NUMBER = "5511999999999"
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os pacotes de viagem.')
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(url, '_blank')
  }

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#" className="brand-logo">Viajare</a>
          <p className="footer-description">
            Curadoria de experiências premium para viajantes exigentes. Transformamos sonhos em viagens inesquecíveis desde 2014.
          </p>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Instagram">📷</a>
            <a href="#" className="social-link" aria-label="Facebook">📘</a>
            <a href="#" className="social-link" aria-label="YouTube">🎬</a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Menu</h4>
          <ul className="footer-links">
            <li><a href="#destinos" className="footer-link">Destinos</a></li>
            <li><a href="#pacotes" className="footer-link">Pacotes</a></li>
            <li><a href="#experiencias" className="footer-link">Experiências</a></li>
            <li><a href="#sobre" className="footer-link">Sobre nós</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Sobre</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Sobre nós</a></li>
            <li><a href="#" className="footer-link">Contato</a></li>
            <li><a href="#" className="footer-link">Privacidade</a></li>
            <li><a href="#" className="footer-link">Termos de uso</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Newsletter</h4>
          <p className="newsletter-text">Inspirações mensais na sua caixa de entrada.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Seu e-mail" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="newsletter-button">→</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Viajare. Todos os direitos reservados.</p>
        <div className="footer-bottom-links">
          <a href="#" className="footer-bottom-link">Política de privacidade</a>
          <a href="#" className="footer-bottom-link">Termos de uso</a>
        </div>
      </div>

      <a href="#" className="whatsapp-button" onClick={handleWhatsAppClick} aria-label="Falar no WhatsApp">
        💬
      </a>
    </footer>
  )
}

export default Footer