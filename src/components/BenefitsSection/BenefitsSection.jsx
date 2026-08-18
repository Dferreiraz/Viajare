import './style.css'

function BenefitsSection() {
  const benefits = [
    {
      icon: '🎯',
      title: 'Atendimento Personalizado',
      description: 'Cada viagem é única. Criamos roteiros sob medida para atender suas expectativas e desejos.'
    },
    {
      icon: '🛡️',
      title: 'Suporte 24/7',
      description: 'Estamos com você antes, durante e depois da viagem. Suporte completo em qualquer horário.'
    },
    {
      icon: '',
      title: 'Experiência Comprovada',
      description: 'Mais de 10 anos criando memórias inesquecíveis para milhares de viajantes.'
    },
    {
      icon: '💎',
      title: 'Parcerias Exclusivas',
      description: 'Acesso a hotéis, passeios e experiências exclusivas que você não encontra em outros lugares.'
    }
  ]

  return (
    <section className="differential-section">
      <div className="differential-container">
        <div className="differential-header">
          <p className="section-label">Por que nos escolher</p>
          <h2 className="section-title">Nossos Diferenciais</h2>
        </div>

        <div className="differential-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="differential-card">
              <div className="differential-icon">{benefit.icon}</div>
              <h3 className="differential-title">{benefit.title}</h3>
              <p className="differential-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection