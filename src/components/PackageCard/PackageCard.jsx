import './style.css'

function PackageCard({ package: pkg, onOpen }) {
  const handleClick = () => {
    onOpen(pkg)
  }

  return (
    <article className="package-card">
      <div className="package-image-wrapper">
        <img src={pkg.image} alt={pkg.title} className="package-image" />
        {pkg.badge && <span className="package-badge">{pkg.badge}</span>}
      </div>
      <div className="package-content">
        <p className="package-destination">{pkg.destination}</p>
        <h3 className="package-title">{pkg.title}</h3>
        <div className="package-info">
          <span className="package-info-item"> {pkg.duration}</span>
          <span className="package-info-item">👥 2 pessoas</span>
        </div>
        <p className="package-description">{pkg.shortDescription}</p>
        <div className="package-footer">
          <div className="package-price">
            <span className="package-price-label">A partir de</span>
            <span className="package-price-value">{pkg.price}</span>
          </div>
          <button className="package-action-btn" onClick={handleClick}>
            Ver detalhes
          </button>
        </div>
      </div>
    </article>
  )
}

export default PackageCard