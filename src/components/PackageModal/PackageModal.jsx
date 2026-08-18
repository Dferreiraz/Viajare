import { useEffect } from 'react'
import './style.css'

function PackageModal({ package: pkg, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleWhatsAppClick = () => {
    const WHATSAPP_NUMBER = "5511999999999"
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o pacote ${pkg.title}`)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(url, '_blank')
    onClose()
  }

  return (
    <div className="package-modal" onClick={handleBackdropClick}>
      <div className="package-modal-content">
        <button className="package-modal-close-btn" onClick={onClose}>×</button>
        <img src={pkg.image} alt={pkg.title} className="package-modal-image" />
        <div className="package-modal-body">
          <h3 className="package-modal-title">{pkg.title}</h3>
          <div className="package-modal-info">
            <span className="package-info-item">📅 {pkg.duration}</span>
            <span className="package-info-item">👥 2 pessoas</span>
          </div>
          <p className="package-modal-description">{pkg.fullDescription}</p>
          <p className="package-modal-price">{pkg.price}</p>
          <button className="package-modal-button" onClick={handleWhatsAppClick}>
            Reservar via WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}

export default PackageModal