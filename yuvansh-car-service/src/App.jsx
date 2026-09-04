import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Fleet from './components/Fleet.jsx'
import WhyUs from './components/WhyUs.jsx'
import Offers from './components/Offers.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFab from './components/WhatsAppFab.jsx'
import BookingModal from './components/BookingModal.jsx'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCar, setSelectedCar] = useState('Any car')

  function openBooking(carName) {
    setSelectedCar(carName)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-paper">
      <Header onBook={openBooking} />
      <Hero onBook={openBooking} />
      <Fleet onBook={openBooking} />
      <WhyUs />
      <Offers />
      <Testimonials />
      <FAQ />
      <Contact onBook={openBooking} />
      <Footer />
      <WhatsAppFab />
      <BookingModal
        isOpen={modalOpen}
        initialCar={selectedCar}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}
