'use client'

import { useEffect, useState } from 'react'

/** Height of the bar in px – used to compute the bottom padding puffer */
export const CALL_BAR_HEIGHT = 64

export function MobileCallBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const heroEl = document.getElementById('home')
    if (!heroEl) return

    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(heroEl)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{
        transform: show ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 300ms ease',
      }}
      aria-hidden={!show}
    >
      <a
        href="tel:+4915207156837"
        className="flex items-center justify-center gap-3 w-full bg-[#16263A] text-[#F2EFE6] font-semibold text-[1rem] tracking-[0.01em]"
        style={{ minHeight: `${CALL_BAR_HEIGHT}px`, paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        tabIndex={show ? 0 : -1}
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M3.5 2.5H6L7.5 6.5L5.5 7.5C6.2 9.3 7.7 10.8 9.5 11.5L10.5 9.5L14.5 11V13.5C14.5 14.052 14.052 14.5 13.5 14.5C7.424 14.5 2.5 9.576 2.5 3.5C2.5 2.948 2.948 2.5 3.5 2.5Z"
            fill="#B08D57"
          />
        </svg>
        Jetzt anrufen
      </a>
    </div>
  )
}
