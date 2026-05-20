import { ARYEO_BOOKING_URL, CONTACT_EMAIL } from '../config'
import { useScrollObserver } from '../hooks/useScrollObserver'

const packages = [
  {
    name: 'Keep It Simple',
    price: '$250',
    turnaround: '24-hr delivery',
    popular: false,
    features: [
      '23–35 HDR Photos',
      '3–5 Drone Photos (if airspace allows)',
      '2D Floor Plan',
      'Complimentary Property Website',
      'Customizable Marketing Materials',
    ],
  },
  {
    name: 'Social Engagement',
    subtitle: 'Photos + Video',
    price: '$450',
    turnaround: '24-hr delivery',
    popular: false,
    features: [
      '25–35 HDR Photos',
      '30–60 sec Social Media Reel',
      '3–5 Drone Photos',
      '2D Floor Plan',
      'Complimentary Property Website',
      'Customizable Marketing Materials',
    ],
  },
  {
    name: 'Deluxe',
    price: '$650',
    turnaround: '24-hr delivery',
    popular: true,
    features: [
      '25–35 HDR Photos',
      '30–60 sec Social Media Reel',
      '1–3 min MLS / YouTube Video',
      'Drone Photos + Video',
      '2D Floor Plan',
      'Complimentary Property Website',
      'Customizable Marketing Materials',
    ],
  },
  {
    name: 'Premier',
    subtitle: 'Twilight',
    price: '$800',
    turnaround: '24–72 hr delivery',
    popular: false,
    features: [
      '25–35 HDR Photos',
      '30–60 sec Social Media Reel',
      '2–3 min MLS / YouTube Video',
      'Drone Video + Photos',
      '2D Floor Plan',
      'Complimentary Property Website',
      'Customizable Marketing Materials',
    ],
  },
  {
    name: 'Luxury / AirBNB',
    subtitle: 'Twilight & Daytime',
    price: '$1,000',
    turnaround: '24–72 hr delivery',
    popular: false,
    features: [
      '80+ HDR Photos',
      '30–60 sec Social Media Reel',
      '2–3 min MLS / YouTube Video',
      'Drone Video + Photos',
      '2D Floor Plan',
      'Complimentary Property Website',
      'Customizable Marketing Materials',
    ],
  },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function PriceCard({ pkg }) {
  return (
    <div
      className={`relative flex flex-col bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        pkg.popular
          ? 'border-gold shadow-lg shadow-gold/10 ring-1 ring-gold'
          : 'border-border hover:border-gold/40'
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-gold text-white text-xs font-medium font-body px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        <div className="mb-6">
          <h3 className="font-display font-semibold text-xl text-text-primary mb-0.5">{pkg.name}</h3>
          {pkg.subtitle && (
            <p className="font-body text-sm text-text-secondary/70 mb-2">{pkg.subtitle}</p>
          )}
          <div className="flex items-baseline gap-1 mb-3">
            <span className="font-display font-bold text-4xl text-text-primary">{pkg.price}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-gold-light text-gold text-xs font-medium px-3 py-1 rounded-full">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {pkg.turnaround}
          </span>
        </div>

        <ul className="space-y-3 flex-1 mb-8">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckIcon />
              <span className="font-body text-sm text-text-secondary leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={ARYEO_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center font-body font-medium text-sm py-3.5 rounded-full transition-all duration-200 ${
            pkg.popular
              ? 'bg-gold text-white hover:bg-amber-600 hover:shadow-lg hover:shadow-gold/25'
              : 'border border-border text-text-primary hover:border-gold hover:text-gold'
          }`}
        >
          Book This Package →
        </a>
        <p className="text-center font-body text-text-secondary/60 text-xs mt-2">
          No payment required to schedule
        </p>
      </div>
    </div>
  )
}

export default function Pricing() {
  const sectionRef = useScrollObserver()

  return (
    <section id="pricing" className="py-24 px-6 bg-bg-warm">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="fade-up text-center mb-4">
          <p className="section-eyebrow mb-3">Pricing</p>
          <h2 className="section-title mb-4">Simple, Transparent Pricing</h2>
          <p className="font-body text-text-secondary text-lg max-w-xl mx-auto mb-2">
            No hidden fees. No surprises. Ever.
          </p>
        </div>

        <p className="text-center font-body text-text-secondary text-sm mt-6 mb-12">
          Every package includes a complimentary property website and marketing materials.
        </p>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {packages.slice(0, 3).map((pkg) => (
            <PriceCard key={pkg.name} pkg={pkg} />
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {packages.slice(3).map((pkg) => (
            <div key={pkg.name} className="w-full sm:max-w-[calc(50%-12px)] lg:max-w-[380px]">
              <PriceCard pkg={pkg} />
            </div>
          ))}
        </div>

        <p className="text-center mt-10 font-body text-text-secondary">
          Need something custom?{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-gold hover:text-amber-600 font-medium underline underline-offset-2 transition-colors"
          >
            Let's talk.
          </a>
        </p>

        {/* Semantic service-area + delivery FAQ — aids AI citation and local SEO */}
        <div className="mt-16 pt-10 border-t border-border grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto text-sm font-body">
          <div>
            <h3 className="font-semibold text-text-primary mb-2">What areas do you serve?</h3>
            <p className="text-text-secondary leading-relaxed">
              We cover Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, and the greater Maricopa County Valley. Travel outside this area — just ask.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary mb-2">How fast will I get my photos?</h3>
            <p className="text-text-secondary leading-relaxed">
              Every package includes fast delivery via your ARYEO media portal. Standard packages deliver in 24 hours; twilight and luxury packages deliver in 24–72 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
