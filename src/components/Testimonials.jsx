import { useRef } from 'react'
import { useScrollObserver } from '../hooks/useScrollObserver'

const testimonials = [
  {
    name: 'Mikalyn A.',
    role: 'Google review',
    headline: 'Elevates every project.',
    quote: 'Colin does an incredible job capturing the quality and craftsmanship of our builds. He is professional, reliable, and talented. His photos truly elevate our projects.',
  },
  {
    name: 'Megan B.',
    role: 'Google review',
    headline: 'Storytelling that performs.',
    quote: 'I’ve hired him for photography and videography, and he’s been incredible. His ability to tell a story through video sets him apart.',
  },
  {
    name: 'Whitney',
    role: 'Google review',
    headline: 'Under contract in 4 days.',
    quote: 'I put a home under contract in only 4 days, thanks in part to pictures like this one. Can’t recommend them highly enough!',
  },
  {
    name: 'Anna V.',
    role: 'Google review',
    headline: 'A critical piece of the business.',
    quote: 'I have worked exclusively with Colin for real estate photos, video and content. He gets me... and is a critical piece of my business.',
  },
  {
    name: 'Brooke W.',
    role: 'Google review',
    headline: 'Videography skills that stand out.',
    quote: 'The talent is unmatched, particularly the videography skills. So talented and kind. Grateful to have worked with them on so many of my listings!',
  },
  {
    name: 'Tori C.',
    role: 'Google review',
    headline: 'A go-to for future listings.',
    quote: 'They helped me with photography for an upcoming listing and will be my go-to for future listings. Easy to work with and turn around time was fantastic.',
  },
  {
    name: 'Luci L.',
    role: 'Google review',
    headline: 'Quality photos and videos.',
    quote: 'Colin provides quality photos and videos. I appreciate that he is always up for whatever media needs my team and I are in need of.',
  },
]

export default function Testimonials() {
  const scrollRef = useRef(null)
  const sectionRef = useScrollObserver()

  const scroll = (dir) => {
    const container = scrollRef.current
    if (!container) return
    container.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section id="testimonials" className="py-24 bg-bg-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="fade-up mb-12">
          <p className="section-eyebrow mb-5">What Clients Are Saying</p>
          <blockquote className="font-display font-semibold text-3xl md:text-5xl text-text-primary leading-tight max-w-3xl mb-3">
            "{testimonials[0].headline}"
          </blockquote>
          <p className="font-body text-text-secondary text-base md:text-lg max-w-2xl mb-3 leading-relaxed">
            "{testimonials[0].quote}"
          </p>
          <cite className="font-body text-text-secondary not-italic text-sm">
            — {testimonials[0].name}, {testimonials[0].role}
          </cite>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white border border-border rounded-full shadow-md items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="absolute right-0 top-0 bottom-4 w-16 md:w-24 bg-gradient-to-l from-bg-warm to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.slice(1).map((t) => (
              <div
                key={t.name}
                className="flex-none w-[80vw] sm:w-80 md:w-96 bg-white border border-border rounded-2xl p-8 snap-start hover:shadow-lg hover:border-gold/30 transition-all duration-300"
              >
                <p className="font-display font-semibold text-text-primary text-lg leading-snug mb-3">
                  "{t.headline}"
                </p>
                <blockquote className="font-body text-text-secondary text-sm leading-relaxed mb-6">
                  {t.quote}
                </blockquote>
                <div>
                  <p className="font-body font-semibold text-text-primary text-sm">{t.name}</p>
                  <p className="font-body text-text-secondary text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border border-border rounded-full shadow-md items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <p className="md:hidden text-center text-text-secondary/50 text-xs font-body mt-3 tracking-wide">
          swipe for more
        </p>
      </div>
    </section>
  )
}
