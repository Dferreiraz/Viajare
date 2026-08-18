import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ExperienceGrid from './components/ExperienceGrid/ExperienceGrid'
import DestinationGrid from './components/DestinationGrid/DestinationGrid'
import PackageGrid from './components/PackageGrid/PackageGrid'
import ProcessSection from './components/ProcessSection/ProcessSection'
import BenefitsSection from './components/BenefitsSection/BenefitsSection'
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider'
import ContactForm from './components/ContactForm/ContactForm'
import FinalCta from './components/FinalCta/FinalCta'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero />
        <ExperienceGrid />
        <DestinationGrid />
        <PackageGrid />
        <ProcessSection />
        <BenefitsSection />
        <TestimonialSlider />
        <FinalCta />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App