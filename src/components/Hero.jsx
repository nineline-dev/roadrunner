import { ARYEO_BOOKING_URL } from '../config'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden"
    >
      {/* Left — Colin's photo */}
      <div className="relative lg:w-[58%] h-[55vh] lg:h-screen flex-shrink-0">
        <picture>
          <source srcSet="/images/hero.webp" type="image/webp" />
          <img
            src="/images/hero.jpg"
            alt="Luxury kitchen photographed by Roadrunner Media, Phoenix AZ"
            width={1920}
            height={1280}
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Soft right-edge blend into content panel */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-bg-warm hidden lg:block" />
        {/* Bottom blend on mobile */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-bg-warm lg:hidden" />
      </div>

      {/* Right — Content */}
      <div className="flex-1 bg-bg-warm flex items-center justify-start px-6 sm:px-8 md:px-12 lg:px-16 py-16 lg:py-0">
        <div className="max-w-lg w-full">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary leading-[1.05] mb-6">
            <span className="section-eyebrow block mb-5">Phoenix Real Estate Photography & Videography</span>
            Listings That
            <br />
            <span className="text-gold">Sell Themselves</span>
          </h1>

          <p className="font-body text-text-secondary text-lg leading-relaxed mb-10 max-w-sm">
            Stunning photography, cinematic video tours, and fast 24-hour turnaround for Phoenix, Scottsdale, and Valley real estate professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={ARYEO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="cta_clicked"
              data-track-cta-location="hero"
              data-track-cta-kind="booking"
              className="bg-gold text-white font-body font-medium px-8 py-4 rounded-full text-base hover:bg-amber-600 transition-all duration-200 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 text-center"
            >
              Book a Shoot
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 border border-border text-text-primary font-body font-medium px-8 py-4 rounded-full text-base hover:border-gold hover:text-gold transition-all duration-200 hover:-translate-y-0.5"
            >
              See Our Work
              <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          <p className="font-body text-text-secondary/60 text-xs mt-4">
            24-hr delivery · No payment required · 2-min booking
          </p>
        </div>
      </div>
    </section>
  )
}
