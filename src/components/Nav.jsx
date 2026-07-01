import { useState, useEffect } from 'react'
import { ARYEO_BOOKING_URL } from '../config'

const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Nav({ bannerOffset = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  // Prevent body scroll and handle ESC key when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const handler = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    if (menuOpen) window.addEventListener('keydown', handler)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          bannerOffset ? 'top-12' : 'top-0'
        } ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-border'
            : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo + Wordmark */}
          <a
            href="#hero"
            className={`flex items-center gap-3 font-display font-bold text-xl tracking-[0.2em] transition-colors duration-300 ${
              scrolled ? 'text-text-primary' : 'text-white'
            }`}
          >
            <img
              src="/images/logo-roadrunner.png"
              alt="Roadrunner Media"
              className={`h-8 w-auto transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
            ROADRUNNER MEDIA
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors duration-200 hover:text-gold ${
                  scrolled ? 'text-text-secondary' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={ARYEO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="cta_clicked"
              data-track-cta-location="nav_desktop"
              data-track-cta-kind="booking"
              className="bg-gold text-white font-body font-medium text-sm px-5 py-2.5 rounded-full hover:bg-amber-600 transition-all duration-200 hover:shadow-lg hover:shadow-gold/25"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
              scrolled ? 'text-text-primary' : 'text-white'
            }`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className={`block w-6 h-0.5 transition-colors ${scrolled ? 'bg-text-primary' : 'bg-white'}`} />
            <span className={`block w-6 h-0.5 transition-colors ${scrolled ? 'bg-text-primary' : 'bg-white'}`} />
            <span className={`block w-4 h-0.5 transition-colors ${scrolled ? 'bg-text-primary' : 'bg-white'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[100] bg-white flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-border">
          <span className="flex items-center gap-3 font-display font-bold text-xl tracking-[0.2em] text-text-primary">
            <img src="/images/logo-roadrunner.png" alt="Roadrunner Media" className="h-8 w-auto" />
            ROADRUNNER MEDIA
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl font-semibold text-text-primary hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ARYEO_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            data-track="cta_clicked"
            data-track-cta-location="nav_mobile"
            data-track-cta-kind="booking"
            className="mt-4 bg-gold text-white font-body font-medium text-lg px-8 py-4 rounded-full hover:bg-amber-600 transition-all duration-200"
          >
            Book Now
          </a>
        </nav>
      </div>
    </>
  )
}
