import { useState, useEffect } from 'react'
import testimonials from '../../data/testiomonials'
import './style.css'

function TestimonialSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <p className="section-label">Depoimentos</p>
          <h2 className="section-title">O que nossos clientes dizem</h2>
        </div>

        <div className="testimonial-slider">
          <div 
            className="testimonial-track" 
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">★★★★★</div>
                <p className="testimonial-message">{testimonial.message}</p>
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-location">{testimonial.location}</p>
              </div>
            ))}
          </div>

          <div className="testimonial-controls">
            <button 
              className="testimonial-control-btn" 
              onClick={previousTestimonial}
              aria-label="Depoimento anterior"
            >
              ‹
            </button>
            <button 
              className="testimonial-control-btn" 
              onClick={nextTestimonial}
              aria-label="Próximo depoimento"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider