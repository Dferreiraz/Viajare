import { useState } from 'react'
import './style.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validação simples
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitted: false, error: true })
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    // Simulação de envio
    setFormStatus({ submitted: true, error: false })
    alert(`Obrigado, ${formData.name}! Sua mensagem foi enviada com sucesso.`)
    
    // Reset do formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      message: ''
    })

    setTimeout(() => {
      setFormStatus({ submitted: false, error: false })
    }, 3000)
  }

  return (
    <section className="contact-section" id="contato">
      <div className="contact-header">
        <p className="section-label">Entre em Contato</p>
        <h2 className="section-title">Vamos planejar sua próxima aventura</h2>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="contact-name">Nome completo</label>
          <input 
            type="text" 
            className="contact-form-input" 
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required 
            placeholder="Seu nome"
          />
        </div>

        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="contact-email">E-mail</label>
          <input 
            type="email" 
            className="contact-form-input" 
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required 
            placeholder="seu@email.com"
          />
        </div>

        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="contact-phone">Telefone</label>
          <input 
            type="tel" 
            className="contact-form-input" 
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="(00) 00000-0000"
          />
        </div>

        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="contact-destination">Destino de interesse</label>
          <input 
            type="text" 
            className="contact-form-input" 
            id="contact-destination"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            placeholder="Para onde você quer viajar?"
          />
        </div>

        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="contact-message">Mensagem</label>
          <textarea 
            className="contact-form-textarea" 
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required 
            placeholder="Conte-nos mais sobre sua viagem dos sonhos..."
          />
        </div>

        <button type="submit" className="contact-form-submit">
          Enviar mensagem
        </button>
      </form>
    </section>
  )
}

export default ContactForm