import './style.css'

function FinalCta() {
  const handleWhatsAppClick = () => {
    const WHATSAPP_NUMBER = "5511999999999"
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os pacotes de viagem.')
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(url, '_blank')
  }

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Seu próximo destino pode começar hoje.</h2>
        <p className="cta-text">Conte para nós o que você está imaginando. Nós cuidamos do resto.</p>
        <button className="cta-button" onClick={handleWhatsAppClick}>
          Planejar minha viagem
        </button>
      </div>
    </section>
  )
}

export default FinalCta