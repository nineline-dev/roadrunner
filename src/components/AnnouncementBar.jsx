export default function AnnouncementBar({ onDismiss }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-10 bg-gold flex items-center justify-center px-4">
      <p className="font-body text-white text-xs sm:text-sm font-medium text-center leading-tight">
        <span className="font-semibold">Every shoot includes:</span>
        {' '}HDR Photos · 3–5 Drone Shots · Free Virtual Staging · 2D Floor Plan · Marketing Materials
        {' '}
        <span className="font-semibold">— From $250</span>
      </p>
      <button
        onClick={onDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-1"
        aria-label="Dismiss announcement"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
