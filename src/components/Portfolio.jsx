import { useState, useEffect } from 'react'
import { useScrollObserver } from '../hooks/useScrollObserver'

const FILTERS = ['All', 'Photos', 'Videos']

const portfolioItems = [
  { id: 1, type: 'photo', src: '/images/1.jpg', w: 1920, h: 1280, category: 'Photos', alt: 'Luxury living room with fireplace and built-ins, Phoenix AZ' },
  { id: 2, type: 'photo', src: '/images/2.jpg', w: 1920, h: 1280, category: 'Photos', alt: 'Open-plan living room and kitchen, luxury Phoenix real estate' },
  { id: 3, type: 'photo', src: '/images/3.jpg', w: 1920, h: 1281, category: 'Photos', alt: 'Modern kitchen with marble waterfall island, Phoenix AZ' },
  { id: 4, type: 'photo', src: '/images/4.jpg', w: 1920, h: 1280, category: 'Photos', alt: 'Contemporary kitchen with dark cabinetry and wine fridge, Phoenix AZ' },
  { id: 5, type: 'photo', src: '/images/5.jpg', w: 1920, h: 1280, category: 'Photos', alt: 'Living room with mountain views, Scottsdale AZ real estate' },
  { id: 6, type: 'photo', src: '/images/6.jpg', w: 1920, h: 1103, category: 'Photos', alt: 'Outdoor stone fireplace with pool at dusk, Phoenix AZ' },
  { id: 7, type: 'photo', src: '/images/7.jpg', w: 1920, h: 1280, category: 'Photos', alt: 'Luxury marble bathroom with freestanding tub, Scottsdale AZ' },
  { id: 8, type: 'photo', src: '/images/8.jpg', w: 1920, h: 1280, category: 'Photos', alt: 'Resort-style pool at twilight, Camelback area Phoenix AZ' },
  { id: 9, type: 'photo', src: '/images/9.jpg', w: 1920, h: 1080, category: 'Photos', alt: 'Aerial drone photography of Phoenix neighborhood with mountain views' },
  { id: 10, type: 'photo', src: '/images/hero.jpg', w: 1920, h: 1280, category: 'Photos', alt: 'Luxury kitchen photographed by Roadrunner Media, Phoenix AZ' },
  { id: 11, type: 'photo', src: '/images/property-living-pool.jpg', w: 1920, h: 1157, category: 'Photos', alt: 'Open living room flowing to pool and patio, Phoenix AZ' },
  { id: 12, type: 'photo', src: '/images/property-game-room.jpg', w: 1920, h: 1188, category: 'Photos', alt: 'Game room with pool table and open kitchen, Scottsdale AZ' },
  { id: 13, type: 'photo', src: '/images/property-lounge.jpg', w: 1920, h: 1280, category: 'Photos', alt: 'Modern reading lounge with floor-to-ceiling windows, Phoenix AZ' },
  { id: 14, type: 'video', src: '/videos/hero-video.mp4', poster: '/images/thumb-hero-video.jpg', w: 608, h: 1080, category: 'Videos', alt: 'Hero video for Roadrunner Media real estate marketing' },
  { id: 15, type: 'video', src: '/videos/portfolio-video-2.mp4', poster: '/images/thumb-portfolio-video-2.jpg', w: 800, h: 1422, category: 'Videos', alt: 'Agent reel - real estate video marketing Phoenix AZ' },
  { id: 16, type: 'video', src: '/videos/portfolio-video-3.mp4', poster: '/images/thumb-portfolio-video-3.jpg', w: 800, h: 1422, category: 'Videos', alt: 'Property walkthrough reel, Phoenix AZ' },
  { id: 17, type: 'video', src: '/videos/portfolio-video-4.mp4', poster: '/images/thumb-portfolio-video-4.jpg', w: 800, h: 1422, category: 'Videos', alt: 'Agent intro video, luxury listing Phoenix AZ' },
]

const gridImageSrc = (item) => {
  const imageSrc = item.type === 'video' ? item.poster : item.src
  return imageSrc.replace('/images/', '/images/grid/').replace(/\.jpg$/, '.webp')
}

function LightboxModal({ item, index, total, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white p-3 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 transition-colors z-10 min-w-[44px] min-h-[44px] flex items-center justify-center"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {item.type === 'video' ? (
        <video
          key={item.src}
          src={item.src}
          poster={item.poster}
          controls
          autoPlay
          className="max-h-[85vh] max-w-[90vw] rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <picture onClick={(e) => e.stopPropagation()}>
          <source srcSet={item.src.replace(/\.jpg$/, '.webp')} type="image/webp" />
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />
        </picture>
      )}

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 transition-colors z-10 min-w-[44px] min-h-[44px] flex items-center justify-center"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-body tracking-widest">
        {index + 1} / {total}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const sectionRef = useScrollObserver()

  const filtered = portfolioItems.filter(
    (item) => activeFilter === 'All' || item.category === activeFilter
  )

  const openLightbox = (item) => {
    const idx = filtered.findIndex((i) => i.id === item.id)
    setLightbox(idx)
  }
  const closeLightbox = () => setLightbox(null)
  const prevLightbox = () => setLightbox((i) => (i - 1 + filtered.length) % filtered.length)
  const nextLightbox = () => setLightbox((i) => (i + 1) % filtered.length)

  return (
    <section id="portfolio" className="py-24 px-6 bg-bg-warm">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="fade-up mb-12">
          <p className="section-eyebrow mb-4">Portfolio</p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-7xl text-text-primary leading-none mb-4">
            Our Work
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-md">
            Every image tells a story. Every frame sells a home.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-body font-medium text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-gold border-gold text-white shadow-md shadow-gold/20'
                  : 'border-border text-text-secondary hover:border-gold hover:text-gold bg-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer bg-stone-200"
              onClick={() => openLightbox(item)}
            >
              <img
                src={gridImageSrc(item)}
                alt={item.alt}
                width={1200}
                height={900}
                loading={index < 9 ? 'eager' : 'lazy'}
                decoding="async"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.type === 'video' ? (
                    <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none">
                      <circle cx="28" cy="28" r="28" fill="rgba(0,0,0,0.55)" />
                      <path d="M22 19l16 9-16 9V19z" fill="white" />
                    </svg>
                  ) : (
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  )}
                </div>
              </div>

              {item.type === 'video' && (
                <span className="absolute bottom-3 left-3 bg-black/65 text-white text-xs font-body font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                  <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 2l8 4-8 4V2z" />
                  </svg>
                  Video
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <LightboxModal
          item={filtered[lightbox]}
          index={lightbox}
          total={filtered.length}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
        />
      )}
    </section>
  )
}
