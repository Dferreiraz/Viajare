import './style.css'

function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Conte-nos seu sonho',
      description: 'Nos diga para onde quer ir, o que deseja experimentar e qual seu orçamento.'
    },
    {
      number: '02',
      title: 'Criamos seu roteiro',
      description: 'Nossa equipe de especialistas monta um roteiro personalizado para você.'
    },
    {
      number: '03',
      title: 'Você aprova os detalhes',
      description: 'Ajustamos tudo conforme suas preferências até ficar perfeito.'
    },
    {
      number: '04',
      title: 'Prepare as malas',
      description: 'Tudo pronto! É só aproveitar sua viagem dos sonhos com nosso suporte.'
    }
  ]

  return (
    <section className="process-section">
      <div className="process-header">
        <p className="section-label">Como Funciona</p>
        <h2 className="section-title">Planejamos sua Viagem em 4 Passos</h2>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <div key={step.number} className="process-step">
            <div className="process-number">{step.number}</div>
            <h3 className="process-title">{step.title}</h3>
            <p className="process-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProcessSection