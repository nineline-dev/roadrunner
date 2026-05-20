import { useScrollObserver } from '../hooks/useScrollObserver'

export default function FounderCard() {
  const sectionRef = useScrollObserver()

  return (
    <section className="py-16 px-6 bg-white border-t border-border">
      <div className="max-w-xl mx-auto">
        <div ref={sectionRef} className="fade-up flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
          <img
            src="/images/colin-hero.png"
            alt="Colin, Founder of Roadrunner Media"
            className="w-28 h-36 rounded-xl object-cover object-left flex-shrink-0"
          />
          <div>
            <p className="font-display font-semibold text-lg text-text-primary">Colin</p>
            <p className="font-body text-sm text-gold mb-2">Founder, Roadrunner Media</p>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Phoenix-based photographer and FAA-licensed drone pilot. 500+ properties shot across the Valley, delivered within 24 hours, every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
