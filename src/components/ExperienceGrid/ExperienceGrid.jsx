import experiences from '../../data/experiences'
import './style.css'

function ExperienceGrid() {
  return (
    <section className="experience-section" id="experiencias">
      <div className="experience-container">
        <div className="experience-header">
          <p className="section-label">Estilos de Viagem</p>
          <h2 className="section-title">Experiências Únicas</h2>
        </div>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <article key={experience.id} className="experience-card">
              <div className="experience-image-wrapper">
                <img src={experience.image} alt={experience.title} className="experience-image" />
              </div>
              <div className="experience-content">
                <h3 className="experience-title">{experience.title}</h3>
                <p className="experience-description">{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceGrid