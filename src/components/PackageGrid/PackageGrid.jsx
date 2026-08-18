import { useState } from 'react'
import packages from '../../data/packages'
import PackageCard from '../PackageCard/PackageCard'
import PackageModal from '../PackageModal/PackageModal'
import './style.css'

function PackageGrid() {
  const [selectedPackage, setSelectedPackage] = useState(null)

  const handlePackageOpen = (pkg) => {
    setSelectedPackage(pkg)
  }

  const handlePackageClose = () => {
    setSelectedPackage(null)
  }

  return (
    <>
      <section className="package-section" id="pacotes">
        <div className="destination-header">
          <div>
            <p className="section-label">Pacotes Especiais</p>
            <h2 className="section-title">Nossos Pacotes</h2>
          </div>
        </div>

        <div className="package-grid">
          {packages.map((pkg) => (
            <PackageCard 
              key={pkg.id} 
              package={pkg} 
              onOpen={handlePackageOpen}
            />
          ))}
        </div>
      </section>

      {selectedPackage && (
        <PackageModal 
          package={selectedPackage} 
          onClose={handlePackageClose} 
        />
      )}
    </>
  )
}

export default PackageGrid