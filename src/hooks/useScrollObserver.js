import { useLayoutEffect, useRef } from 'react'

export function useScrollObserver(className = 'visible', options = {}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    const rect = el.getBoundingClientRect()
    if (rect.top < viewportHeight * 0.95 && rect.bottom > 0) {
      el.classList.add(className)
      return
    }

    if (!('IntersectionObserver' in window)) {
      el.classList.add(className)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(className)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [className])

  return ref
}
