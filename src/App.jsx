import { useEffect, useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import About from './components/About'
import CTABanner from './components/CTABanner'
import FounderCard from './components/FounderCard'
import Footer from './components/Footer'
import MobileBookBar from './components/MobileBookBar'
import GcsAnalyticsProvider from './analytics/GcsAnalyticsProvider'

export default function App() {
  const [bannerDismissed, setBannerDismissed] = useState(
    () => sessionStorage.getItem('rr-banner-dismissed') === 'true'
  )

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1)
      if (!id) return

      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView()
      })
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  const handleDismiss = () => {
    setBannerDismissed(true)
    sessionStorage.setItem('rr-banner-dismissed', 'true')
  }

  return (
    <div className="min-h-screen bg-bg-warm">
      <GcsAnalyticsProvider />
      {!bannerDismissed && <AnnouncementBar onDismiss={handleDismiss} />}
      <Nav bannerOffset={!bannerDismissed} />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Portfolio />
        <Services />
        <Pricing />
        <Testimonials />
        <About />
        <CTABanner />
        <FounderCard />
      </main>
      <Footer />
      <MobileBookBar />
    </div>
  )
}
