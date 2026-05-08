import { useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Pricing from './components/Pricing'
import About from './components/About'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import FounderCard from './components/FounderCard'
import Footer from './components/Footer'
import MobileBookBar from './components/MobileBookBar'

export default function App() {
  const [bannerDismissed, setBannerDismissed] = useState(
    () => sessionStorage.getItem('rr-banner-dismissed') === 'true'
  )

  const handleDismiss = () => {
    setBannerDismissed(true)
    sessionStorage.setItem('rr-banner-dismissed', 'true')
  }

  return (
    <div className="min-h-screen bg-bg-warm">
      {!bannerDismissed && <AnnouncementBar onDismiss={handleDismiss} />}
      <Nav bannerOffset={!bannerDismissed} />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Portfolio />
        <Services />
        <Pricing />
        <About />
        <Testimonials />
        <CTABanner />
        <FounderCard />
      </main>
      <Footer />
      <MobileBookBar />
    </div>
  )
}
