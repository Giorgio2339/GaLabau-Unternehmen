'use client'

import { useEffect, useRef, useState } from 'react'

interface UseRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

/**
 * Returns a ref and a boolean `visible` flag.
 * When the ref element enters the viewport the flag flips to true (and stays
 * true if `once` is set, which is the default behaviour).
 */
export function useReveal<T extends Element = HTMLDivElement>(
  options: UseRevealOptions = {},
): [React.RefObject<T | null>, boolean] {
  const { threshold = 0.12, rootMargin = '0px', once = true } = options
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, visible]
}
