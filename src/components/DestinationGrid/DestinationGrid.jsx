import destinations from '../../data/destinations'
import DestinationCard from '../DestinationCard/DestinationCard'
import './style.css'

function DestinationGrid() {
  return (
    <section className="destination-section" id="destinos">
      <div className="destination-header">
        <div>
          <p className="section-label">Seleção Editorial</p>
          <h2 className="section-title">Destinos em Destaque</h2>
        </div>
        <a href="#" className="view-all-link">
          Ver todos os destinos
          <span>→</span>
        </a>
      </div>

      <div className="destination-grid">
        {destinations.map((destination) => (
          <DestinationCard 
            key={destination.id} 
            destination={destination} 
          />
        ))}
      </div>
    </section>
  )
}

export default DestinationGrid