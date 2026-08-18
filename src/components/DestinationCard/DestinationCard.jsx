import './style.css'

function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      <img src={destination.image} alt={destination.name} className="destination-image" />
      <div className="destination-overlay">
        <p className="destination-country">{destination.country}</p>
        <h3 className="destination-name">{destination.name}</h3>
        <p className="destination-description">{destination.description}</p>
        <a href="#" className="destination-action-btn">
          Conhecer destino
          <span>→</span>
        </a>
      </div>
    </article>
  )
}

export default DestinationCard