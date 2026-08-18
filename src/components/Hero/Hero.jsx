import { useState } from 'react'
import './style.css'

function Hero() {
  const [searchData, setSearchData] = useState({
    destination: '',
    date: '',
    type: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Simulação de busca
    alert(`Buscando viagens para: ${searchData.destination || 'qualquer destino'}`)
  }

  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">Viaje para lugares que você sempre sonhou conhecer.</h1>
        <p className="hero-subtitle">
          Descubra destinos incríveis, experiências únicas e roteiros planejados para transformar sua próxima viagem em uma história inesquecível.
        </p>
        
        <div className="hero-actions">
          <a href="#destinos" className="hero-primary-btn">Explorar destinos</a>
          <a href="#contato" className="hero-secondary-btn">Planejar minha viagem</a>
        </div>
      </div>

      <div className="search-bar-container">
        <form className="search-bar" onSubmit={handleSearch}>
          <div className="search-field">
            <label className="search-label">Destino</label>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Para onde você quer ir?"
              name="destination"
              value={searchData.destination}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="search-field">
            <label className="search-label">Data</label>
            <input 
              type="date" 
              className="search-input" 
              name="date"
              value={searchData.date}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="search-field">
            <label className="search-label">Tipo de viagem</label>
            <select 
              className="search-select" 
              name="type"
              value={searchData.type}
              onChange={handleInputChange}
            >
              <option value="">Selecione</option>
              <option value="praia">Praia</option>
              <option value="aventura">Aventura</option>
              <option value="cultura">Cultura</option>
              <option value="natureza">Natureza</option>
              <option value="romantica">Romântica</option>
            </select>
          </div>
          
          <button type="submit" className="search-button">
            <span>Buscar</span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Hero