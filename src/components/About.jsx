import { useScrollObserver } from '../hooks/useScrollObserver'

export default function About() {
  const sectionRef = useScrollObserver()

  return (
    <section id="about" className="py-24 px-6 bg-bg-warm">
      <div className="max-w-3xl mx-auto">
        <div ref={sectionRef} className="fade-up">
          <p className="section-eyebrow mb-4">Why Roadrunner Media</p>
          <h2 className="section-title mb-8">
            Phoenix Real Estate Photography,
            <br />
            <span className="text-gold">Done Right.</span>
          </h2>
          <div className="space-y-5 font-body text-text-secondary text-lg leading-relaxed">
            <p>
              Roadrunner Media was built for one reason: Phoenix agents deserve listing media that actually sells homes.
            </p>
            <p>
              Too many great properties were getting lost behind dark, blurry photos. We exist to change that — bringing professional HDR photography, cinematic videography, drone work, virtual staging, and floor plans to every listing across Phoenix, Scottsdale, Tempe, Mesa, and the greater Valley.
            </p>
            <p>
              <strong className="text-text-primary font-semibold">500+ properties</strong> photographed across the Valley. FAA-licensed drone pilot on every aerial shoot. Every shoot delivered within <strong className="text-text-primary font-semibold">24 hours</strong>, guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
